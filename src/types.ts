import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

// 'RideStatus' doesn't work bruh, idk why 🙄
export type RideStatusBruh = 'Booked' | 'Available' | 'Full' |
'Ongoing' | 'Ended' | 'Cancelled'

export type Message = {
  senderId: string
  senderName: string
  message: string
  _id: string
  createAt: Date
}

export type ChatCoverCard = {
  _id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
  __v: number
}

export type User = {
  name: string
}

export type ChatCover = {
  profile: string
  driverName: string
  latestMessage: {
    text: string
    timestamp: Date
  }
  rideStartDate: Date
  maxAvailableSeats: number
  reservedPassengers: number
}

export type Book = {
  driverName: string
  maxAvailableSeats: number
  reservedPassengers: number
  startingTime: Date
  to: string // drop off
  from: string // pick up
  status: RideStatusBruh // 'Cancelled'
}
