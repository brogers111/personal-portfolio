import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'

function AddAthleteForm({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!name.trim()) return
    setSaving(true)
    setError(null)

    const { error: insertError } = await supabase.from('athletes').insert({
      name: name.trim(),
      phone: phone.trim() || null,
    })

    setSaving(false)
    if (insertError) {
      setError(insertError.message)
      return
    }
    onCreated()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 sm:items-center" onClick={onClose}>
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-t-3xl bg-white p-6 sm:rounded-3xl"
      >
        <h2 className="font-bluffolk text-3xl leading-none text-gray-800">ADD ATHLETE</h2>
        <p className="mt-1 font-dongle text-lg leading-none text-gray-400">You can add contact info and emergency contacts after creating them.</p>

        <div className="mt-5 flex flex-col gap-4">
          <div>
            <label htmlFor="new-name" className="mb-1 block font-dongle text-xl leading-none text-gray-500">
              Name
            </label>
            <input
              id="new-name"
              type="text"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 font-dongle text-xl leading-none text-gray-800 focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="new-phone" className="mb-1 block font-dongle text-xl leading-none text-gray-500">
              Phone (optional)
            </label>
            <input
              id="new-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 font-dongle text-xl leading-none text-gray-800 focus:border-accent focus:outline-none"
            />
          </div>

          {error ? <p className="font-dongle text-lg leading-none text-red-600">{error}</p> : null}

          <div className="mt-2 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-full border-2 border-gray-200 px-6 py-3 font-dongle text-xl leading-none text-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 rounded-full bg-accent px-6 py-3 font-dongle text-xl leading-none text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
            >
              {saving ? 'Saving…' : 'Add Athlete'}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddAthleteForm
