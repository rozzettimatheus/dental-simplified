import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3335),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error(
    'Environment variables was not provided correctly',
    _env.error.format(),
  )
  throw new Error('Environment variables was not provided correctly')
}

export const env = _env.data
