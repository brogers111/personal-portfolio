import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faRightFromBracket, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { supabase } from '../lib/supabase'
import type { AthleteSummary } from './types'
import AddAthleteForm from './AddAthleteForm'
import AthleteDetail from './AthleteDetail'

function Dashboard() {
  const [athletes, setAthletes] = useState<AthleteSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [showAddForm, setShowAddForm] = useState(false)
  const [selectedAthleteId, setSelectedAthleteId] = useState<string | null>(null)

  async function loadAthletes() {
    setLoading(true)
    const { data } = await supabase.from('athlete_summary').select('*').order('name')
    if (data) setAthletes(data as AthleteSummary[])
    setLoading(false)
  }

  useEffect(() => {
    loadAthletes()
  }, [])

  if (selectedAthleteId) {
    return (
      <AthleteDetail
        athleteId={selectedAthleteId}
        onBack={() => setSelectedAthleteId(null)}
        onChanged={loadAthletes}
      />
    )
  }

  const filtered = athletes.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-dongle text-xl leading-none text-gray-300">BARN WORK</p>
          <h1 className="font-bluffolk text-4xl leading-none text-gray-800">ATHLETES</h1>
        </div>
        <button
          onClick={() => supabase.auth.signOut()}
          className="text-gray-300 hover:text-gray-500"
          title="Sign out"
        >
          <FontAwesomeIcon icon={faRightFromBracket} className="size-5" />
        </button>
      </div>

      <div className="mt-5 flex gap-3">
        <div className="relative flex-1">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 size-3.5 -translate-y-1/2 text-gray-300" />
          <input
            type="text"
            placeholder="Search athletes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border-2 border-gray-200 py-2.5 pl-10 pr-4 font-dongle text-xl leading-none text-gray-800 focus:border-accent focus:outline-none"
          />
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-dongle text-xl leading-none text-white transition-colors hover:bg-accent-dark"
        >
          <FontAwesomeIcon icon={faPlus} className="size-3.5" />
          Add
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        {loading ? (
          <p className="font-dongle text-2xl leading-none text-gray-400">Loading…</p>
        ) : filtered.length === 0 ? (
          <p className="font-dongle text-2xl leading-none text-gray-400">
            {athletes.length === 0 ? 'No athletes yet — add your first one.' : 'No athletes match your search.'}
          </p>
        ) : (
          filtered.map((athlete) => (
            <button
              key={athlete.athlete_id}
              onClick={() => setSelectedAthleteId(athlete.athlete_id)}
              className="flex items-center justify-between rounded-2xl bg-gray-100 px-5 py-4 text-left transition-colors hover:bg-gray-200"
            >
              <div>
                <p className="font-dongle text-2xl leading-none text-gray-800">{athlete.name}</p>
                <p className="mt-1 font-dongle text-lg leading-none text-gray-400">
                  {athlete.total_purchased} purchased · {athlete.total_used} used
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`font-bluffolk text-3xl leading-none ${
                    athlete.sessions_remaining <= 0 ? 'text-gray-300' : 'text-accent'
                  }`}
                >
                  {athlete.sessions_remaining}
                </p>
                <p className="font-dongle text-base leading-none text-gray-400">left</p>
              </div>
            </button>
          ))
        )}
      </div>

      {showAddForm ? (
        <AddAthleteForm
          onClose={() => setShowAddForm(false)}
          onCreated={() => {
            setShowAddForm(false)
            loadAthletes()
          }}
        />
      ) : null}
    </div>
  )
}

export default Dashboard
