export type Athlete = {
  id: string
  name: string
  phone: string | null
  email: string | null
  emergency_contact_name: string | null
  emergency_contact_phone: string | null
  emergency_contact_relationship: string | null
  notes: string | null
  created_at: string
}

export type AthleteSummary = {
  athlete_id: string
  name: string
  total_purchased: number
  total_used: number
  sessions_remaining: number
}

export type PaymentMethod = 'venmo' | 'paypal' | 'cash' | 'check' | 'other'

export type Payment = {
  id: string
  athlete_id: string
  sessions_purchased: number
  amount: number | null
  payment_method: PaymentMethod | null
  paid_at: string
  notes: string | null
  created_at: string
}

export type SessionLog = {
  id: string
  athlete_id: string
  trained_at: string
  hours: number
  notes: string | null
  created_at: string
}
