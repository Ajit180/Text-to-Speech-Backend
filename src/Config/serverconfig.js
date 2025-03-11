import dotenv from 'dotenv'

dotenv.config();

export const PORT = process.env.PORT || 5000;

export const SUPABASE_URL =process.env.SUPABASE_URL

export const SUPABASE_API_KEY = process.env.SUPABASE_API_KEY

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY

