import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Supabase URL is not defined')
}

if (!supabaseKey) {
  throw new Error('Supabase key is not defined')
}

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
