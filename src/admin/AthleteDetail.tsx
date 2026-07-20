import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import { supabase } from '../lib/supabase'
import type { Athlete, Payment, SessionLog, PaymentMethod } from './types'

const PAYMENT_METHODS: PaymentMethod[] = ['venmo', 'paypal', 'cash', 'check', 'other']

function todayISO() {
  return new Date().toISOString().slice(0, 10)
}

function AthleteDetail({ athleteId, onBack, onChanged }: { athleteId: string; onBack: () => void; onChanged: () => void }) {
  const [athlete, setAthlete] = useState<Athlete | null>(null)
  const [payments, setPayments] = useState<Payment[]>([])
  const [sessionLogs, setSessionLogs] = useState<SessionLog[]>([])
  const [loading, setLoading] = useState(true)

  const [showLogForm, setShowLogForm] = useState(false)
  const [logDate, setLogDate] = useState(todayISO())
  const [logHours, setLogHours] = useState('1')

  const [showPaymentForm, setShowPaymentForm] = useState(false)
  const [paySessions, setPaySessions] = useState('4')
  const [payAmount, setPayAmount] = useState('')
  const [payMethod, setPayMethod] = useState<PaymentMethod>('venmo')
  const [payDate, setPayDate] = useState(todayISO())

  const [contactSaving, setContactSaving] = useState(false)

  async function loadAll() {
    setLoading(true)
    const [athleteRes, paymentsRes, sessionsRes] = await Promise.all([
      supabase.from('athletes').select('*').eq('id', athleteId).single(),
      supabase.from('payments').select('*').eq('athlete_id', athleteId).order('paid_at', { ascending: false }),
      supabase.from('session_logs').select('*').eq('athlete_id', athleteId).order('trained_at', { ascending: false }),
    ])
    if (athleteRes.data) setAthlete(athleteRes.data as Athlete)
    if (paymentsRes.data) setPayments(paymentsRes.data as Payment[])
    if (sessionsRes.data) setSessionLogs(sessionsRes.data as SessionLog[])
    setLoading(false)
  }

  useEffect(() => {
    loadAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [athleteId])

  const totalPurchased = payments.reduce((sum, p) => sum + p.sessions_purchased, 0)
  const totalUsed = sessionLogs.length
  const remaining = totalPurchased - totalUsed

  async function quickLogSession() {
    await supabase.from('session_logs').insert({ athlete_id: athleteId, trained_at: todayISO(), hours: 1 })
    await loadAll()
    onChanged()
  }

  async function handleLogSubmit(event: FormEvent) {
    event.preventDefault()
    await supabase.from('session_logs').insert({
      athlete_id: athleteId,
      trained_at: logDate,
      hours: Number(logHours) || 1,
    })
    setShowLogForm(false)
    setLogDate(todayISO())
    setLogHours('1')
    await loadAll()
    onChanged()
  }

  async function deleteSessionLog(id: string) {
    await supabase.from('session_logs').delete().eq('id', id)
    await loadAll()
    onChanged()
  }

  async function handlePaymentSubmit(event: FormEvent) {
    event.preventDefault()
    const sessions = Number(paySessions)
    if (!sessions || sessions <= 0) return
    await supabase.from('payments').insert({
      athlete_id: athleteId,
      sessions_purchased: sessions,
      amount: payAmount ? Number(payAmount) : null,
      payment_method: payMethod,
      paid_at: payDate,
    })
    setShowPaymentForm(false)
    setPaySessions('4')
    setPayAmount('')
    setPayDate(todayISO())
    await loadAll()
    onChanged()
  }

  async function deletePayment(id: string) {
    await supabase.from('payments').delete().eq('id', id)
    await loadAll()
    onChanged()
  }

  async function handleContactSave(event: FormEvent) {
    event.preventDefault()
    if (!athlete) return
    setContactSaving(true)
    await supabase
      .from('athletes')
      .update({
        name: athlete.name,
        phone: athlete.phone,
        email: athlete.email,
        emergency_contact_name: athlete.emergency_contact_name,
        emergency_contact_phone: athlete.emergency_contact_phone,
        emergency_contact_relationship: athlete.emergency_contact_relationship,
        notes: athlete.notes,
      })
      .eq('id', athleteId)
    setContactSaving(false)
    onChanged()
  }

  if (loading || !athlete) {
    return (
      <div className="p-6">
        <p className="font-dongle text-2xl text-gray-400">Loading…</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
      <button onClick={onBack} className="inline-flex items-center gap-2 font-dongle text-xl leading-none text-gray-500">
        <FontAwesomeIcon icon={faArrowLeft} className="size-3" />
        Back to all athletes
      </button>

      <div className="mt-4 flex items-center justify-between">
        <h1 className="font-bluffolk text-4xl leading-none text-gray-800">{athlete.name}</h1>
        <div className="text-right">
          <p className="font-bluffolk text-4xl leading-none text-accent">{remaining}</p>
          <p className="font-dongle text-lg leading-none text-gray-400">sessions left</p>
        </div>
      </div>

      {/* Quick log */}
      <div className="mt-6 rounded-3xl bg-gray-800 p-6 text-center">
        <button
          onClick={quickLogSession}
          className="w-full rounded-full bg-accent px-6 py-4 font-dongle text-2xl leading-none text-white transition-colors hover:bg-accent-dark"
        >
          Log Today's Session
        </button>
        <button
          onClick={() => setShowLogForm((v) => !v)}
          className="mt-3 font-dongle text-lg leading-none text-gray-400 underline underline-offset-4"
        >
          Log a different date/hours instead
        </button>

        {showLogForm ? (
          <form onSubmit={handleLogSubmit} className="mt-4 flex flex-col gap-3 text-left">
            <div className="flex gap-3">
              <div className="flex-1">
                <label className="mb-1 block font-dongle text-lg leading-none text-gray-400">Date</label>
                <input
                  type="date"
                  value={logDate}
                  onChange={(e) => setLogDate(e.target.value)}
                  className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-3 py-2 font-dongle text-lg leading-none text-white"
                />
              </div>
              <div className="w-24">
                <label className="mb-1 block font-dongle text-lg leading-none text-gray-400">Hours</label>
                <input
                  type="number"
                  step="0.5"
                  min="0.5"
                  value={logHours}
                  onChange={(e) => setLogHours(e.target.value)}
                  className="w-full rounded-xl border-2 border-white/10 bg-white/5 px-3 py-2 font-dongle text-lg leading-none text-white"
                />
              </div>
            </div>
            <button type="submit" className="rounded-full bg-white/10 px-6 py-2.5 font-dongle text-xl leading-none text-white">
              Log Session
            </button>
          </form>
        ) : null}
      </div>

      {/* Contact info */}
      <form onSubmit={handleContactSave} className="mt-6 rounded-3xl bg-gray-100 p-6">
        <h2 className="font-bluffolk text-2xl leading-none text-gray-800">CONTACT & EMERGENCY INFO</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <Field label="Name" value={athlete.name} onChange={(v) => setAthlete({ ...athlete, name: v })} required />
          <Field label="Phone" value={athlete.phone ?? ''} onChange={(v) => setAthlete({ ...athlete, phone: v })} />
          <Field label="Email" value={athlete.email ?? ''} onChange={(v) => setAthlete({ ...athlete, email: v })} />
          <Field label="Notes" value={athlete.notes ?? ''} onChange={(v) => setAthlete({ ...athlete, notes: v })} />
          <Field
            label="Emergency contact name"
            value={athlete.emergency_contact_name ?? ''}
            onChange={(v) => setAthlete({ ...athlete, emergency_contact_name: v })}
          />
          <Field
            label="Emergency contact phone"
            value={athlete.emergency_contact_phone ?? ''}
            onChange={(v) => setAthlete({ ...athlete, emergency_contact_phone: v })}
          />
          <Field
            label="Relationship"
            value={athlete.emergency_contact_relationship ?? ''}
            onChange={(v) => setAthlete({ ...athlete, emergency_contact_relationship: v })}
          />
        </div>
        <button
          type="submit"
          disabled={contactSaving}
          className="mt-4 rounded-full bg-gray-800 px-6 py-2.5 font-dongle text-xl leading-none text-white disabled:opacity-60"
        >
          {contactSaving ? 'Saving…' : 'Save Changes'}
        </button>
      </form>

      {/* Payments */}
      <div className="mt-6 rounded-3xl bg-gray-100 p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-bluffolk text-2xl leading-none text-gray-800">PAYMENTS</h2>
          <button
            onClick={() => setShowPaymentForm((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 font-dongle text-lg leading-none text-white"
          >
            <FontAwesomeIcon icon={faPlus} className="size-3" />
            Add Payment
          </button>
        </div>

        {showPaymentForm ? (
          <form onSubmit={handlePaymentSubmit} className="mt-4 flex flex-col gap-3 rounded-2xl bg-white p-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block font-dongle text-lg leading-none text-gray-500">Sessions purchased</label>
                <input
                  type="number"
                  min="1"
                  required
                  value={paySessions}
                  onChange={(e) => setPaySessions(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 px-3 py-2 font-dongle text-lg leading-none text-gray-800"
                />
              </div>
              <div>
                <label className="mb-1 block font-dongle text-lg leading-none text-gray-500">Amount ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={payAmount}
                  onChange={(e) => setPayAmount(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 px-3 py-2 font-dongle text-lg leading-none text-gray-800"
                />
              </div>
              <div>
                <label className="mb-1 block font-dongle text-lg leading-none text-gray-500">Method</label>
                <select
                  value={payMethod}
                  onChange={(e) => setPayMethod(e.target.value as PaymentMethod)}
                  className="w-full rounded-xl border-2 border-gray-200 px-3 py-2 font-dongle text-lg leading-none text-gray-800"
                >
                  {PAYMENT_METHODS.map((m) => (
                    <option key={m} value={m}>
                      {m.charAt(0).toUpperCase() + m.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block font-dongle text-lg leading-none text-gray-500">Date</label>
                <input
                  type="date"
                  value={payDate}
                  onChange={(e) => setPayDate(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 px-3 py-2 font-dongle text-lg leading-none text-gray-800"
                />
              </div>
            </div>
            <button type="submit" className="rounded-full bg-gray-800 px-6 py-2.5 font-dongle text-xl leading-none text-white">
              Save Payment
            </button>
          </form>
        ) : null}

        <div className="mt-4 flex flex-col gap-2">
          {payments.length === 0 ? (
            <p className="font-dongle text-lg leading-none text-gray-400">No payments logged yet.</p>
          ) : (
            payments.map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                <div>
                  <p className="font-dongle text-lg leading-none text-gray-800">
                    {p.sessions_purchased} sessions {p.amount ? `— $${p.amount}` : ''} {p.payment_method ? `(${p.payment_method})` : ''}
                  </p>
                  <p className="mt-1 font-dongle text-base leading-none text-gray-400">{p.paid_at}</p>
                </div>
                <button onClick={() => deletePayment(p.id)} className="text-gray-300 hover:text-red-500">
                  <FontAwesomeIcon icon={faTrash} className="size-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Session history */}
      <div className="mt-6 rounded-3xl bg-gray-100 p-6">
        <h2 className="font-bluffolk text-2xl leading-none text-gray-800">SESSION HISTORY</h2>
        <div className="mt-4 flex flex-col gap-2">
          {sessionLogs.length === 0 ? (
            <p className="font-dongle text-lg leading-none text-gray-400">No sessions logged yet.</p>
          ) : (
            sessionLogs.map((s) => (
              <div key={s.id} className="flex items-center justify-between rounded-xl bg-white px-4 py-3">
                <p className="font-dongle text-lg leading-none text-gray-800">
                  {s.trained_at} — {s.hours} hr{Number(s.hours) === 1 ? '' : 's'}
                </p>
                <button onClick={() => deleteSessionLog(s.id)} className="text-gray-300 hover:text-red-500">
                  <FontAwesomeIcon icon={faTrash} className="size-3.5" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  required,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="mb-1 block font-dongle text-lg leading-none text-gray-500">{label}</label>
      <input
        type="text"
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border-2 border-gray-200 bg-white px-3 py-2.5 font-dongle text-lg leading-none text-gray-800 focus:border-accent focus:outline-none"
      />
    </div>
  )
}

export default AthleteDetail
