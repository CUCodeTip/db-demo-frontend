import { acceptHMRUpdate, defineStore } from 'pinia'
import fetchy from '~/fetchy'
import { useUserStore } from '~/stores/user'
import { Ride } from '~/types'

export const useYourRideStore = defineStore('yourRide', () => {
  const uStore = useUserStore()

  const yourRideUrl = computed(() => `rides?id=${uStore.loggedInUser?.user_id}`)
  const {
    data: rides,
    execute: getRides,
  } = fetchy(yourRideUrl, {
    immediate: false,
    afterFetch(ctx) {
      ctx.data = ctx.data.map((ride: any) => {
        const [from, to] = ride.route.split(', ')
        ride.from = from
        ride.to = to
        delete ride.route
        ride.starting_time = new Date(ride.starting_time)
        return ride
      })
      return ctx
    },
  }).json<Ride[]>()

  return {
    rides,
    getRides,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useYourRideStore, import.meta.hot))
