import { useState } from 'react'
import type { FormEvent } from 'react'
import { supabase } from '../lib/supabase'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setError(null)
    setLoading(true)

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password })

    if (signInError) {
      setError(signInError.message)
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-xl">
        <p className="font-dongle text-2xl text-gray-300">BARN WORK</p>
        <h1 className="font-bluffolk text-4xl leading-none text-gray-800">ADMIN</h1>

        <div className="mt-6 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="mb-1 block font-dongle text-xl leading-none text-gray-500">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 font-dongle text-xl leading-none text-gray-800 focus:border-accent focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block font-dongle text-xl leading-none text-gray-500">
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 font-dongle text-xl leading-none text-gray-800 focus:border-accent focus:outline-none"
            />
          </div>

          {error ? <p className="font-dongle text-lg leading-none text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 rounded-full bg-accent px-6 py-3 font-dongle text-2xl leading-none text-white transition-colors hover:bg-accent-dark disabled:opacity-60"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
