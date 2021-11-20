import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

// 'RideStatus' doesn't work bruh, idk why 🙄
export type RideStatusBruh = 'booked' | 'available' | 'full' |
'ongoing' | 'ended' | 'cancelled'

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
  user_id: number
  citizen_id: string
  name: string
  gender: any | null
  birth_date: any | null
  phone_number: string
  email: string | null
  money_amount: number
  license_plate: string | null // driver
  capacity: number | null // the max number of passengers, driver
}

export type RecentMessage = {
  senderId: string
  senderName: string
  message: string
  _id: string
  createAt?: Date
}

export type ChatCard = {
  chat_id: string
  driver_name: string
  driver_id: number
  starting_time: Date
  max_available_seats: number
  reserved_passengers: number
  recentMessage?: RecentMessage
}

export type Book = {
  name: string
  max_available_seats: number
  reserved_passengers: number
  starting_time: Date
  pickup_location: string
  dropoff_location: string
  booking_status: RideStatusBruh
}

export type RideKey = {
  driver_id: number
  starting_time: Date
}

export type Ride = {
  max_available_seats: number
  reserved_passengers: number
  to: string // drop off
  from: string // pick up
  ride_status: RideStatusBruh
} & RideKey

export type MatchedRide = {
  name: string // driver's name
} & Ride
