import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

// 'RideStatus' doesn't work bruh, idk why 🙄
export type RideStatusBruh = 'Booked' | 'Available' | 'Full' |
'Ongoing' | 'Ended' | 'Cancelled'
