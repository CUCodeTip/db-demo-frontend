import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export type RideStatus = 'Booked' | 'Available' | 'Full' |
'Ongoing' | 'Ended' | 'Cancelled'
