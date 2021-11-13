export type NavItemOption =
    'Find Ride' | 'Your Ride' | 'Your Booking' | 'Chat Room'

export const navItemOptToRoute: {
  [key in NavItemOption]: string
} = {
  'Chat Room': '/chat',
  'Find Ride': '/find-ride',
  'Your Ride': '/your-ride',
  'Your Booking': '/your-booking',
}
