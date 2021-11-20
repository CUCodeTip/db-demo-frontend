import { acceptHMRUpdate, defineStore } from 'pinia'
import { useUserStore } from './user'
import fetchy from '~/fetchy'
import { MatchedRide } from '~/types'
import { getDateAsInput } from '~/utils'

export const useFindRideStore = defineStore('findRide', () => {
  const uStore = useUserStore()

  const defaultDate = getDateAsInput(new Date())

  const startLocation = ref('')
  const destinationLocation = ref('')
  const startDate = ref(defaultDate)
  const endDate = ref(defaultDate)
  const availableSeats = ref(1)

  const areAllFieldsDefaults = computed(() =>
    startLocation.value === ''
      && destinationLocation.value === ''
      && startDate.value === defaultDate
      && endDate.value === defaultDate
      && availableSeats.value === 1,
  )

  /**
   * Selected ride from the matched rides to be booked
   */
  const selectedRide = ref<null | MatchedRide>(null)

  /**
   * Will be populated with the matched rides after
   * the user submits the find ride form
   */
  const matchedRides = ref<null | MatchedRide[]>(null)

  const reset = () => {
    startLocation.value = ''
    destinationLocation.value = ''
    availableSeats.value = 1
    const defaultDate = getDateAsInput(new Date())
    startDate.value = defaultDate
    endDate.value = defaultDate
    selectedRide.value = null
    matchedRides.value = null
  }

  const isRideSelected = (driver_id: number, starting_time: Date) => {
    return selectedRide.value?.driver_id === driver_id
      && selectedRide.value?.starting_time === starting_time
  }
  const toggleSelectMatchedRide = (ride: MatchedRide) => {
    if (isRideSelected(ride.driver_id, ride.starting_time)) {
      selectedRide.value = null
      return
    }
    selectedRide.value = ride
  }

  /**
   * Find the rides that match the user's search criteria
   * @param onNotFound runs if there are no matched rides or error
   */
  const find = (onNotFound: () => void = () => {}) => {
    fetchy('find-ride', {
      afterFetch(ctx) {
        if (!ctx.data.length) { // if the result is an empty array, no matched rides
          onNotFound()
          return ctx
        }
        matchedRides.value = ctx.data.map((ride: any) => {
          const [from, to] = ride.route.split(', ')
          ride.from = from
          ride.to = to
          delete ride.route
          ride.starting_time = new Date(ride.starting_time)
          return ride
        })
        return ctx
      },
      onFetchError(ctx) {
        onNotFound()
        return ctx
      },
    }).post({
      startingTime: startDate.value,
      endTime: endDate.value,
      requestSeats: availableSeats.value,
      userId: uStore.loggedInUser?.user_id,
    }).json<MatchedRide[]>()
  }

  /**
   * book the selected ride
   * @param onSuccess runs if the ride is successfully booked
   * @param onError runs if there is an error
   */
  const book = (
    onSuccess: () => void = () => {},
    onError: () => void = () => {},
  ) => {
    fetchy('bookRide', {
      afterFetch(ctx) {
        if (ctx.response.status !== 200) {
          onError()
          return ctx
        }
        onSuccess()
        return ctx
      },
    }).post({
      driver_id: selectedRide.value?.driver_id,
      starting_time: selectedRide.value?.starting_time,
      pickup_location: startLocation.value,
      dropoff_location: destinationLocation.value,
      seat: availableSeats.value,
      passenger_id: uStore.loggedInUser?.user_id,
    })
  }

  return {
    startLocation,
    destinationLocation,
    startDate,
    endDate,
    availableSeats,
    selectedRide,
    defaultDate,
    areAllFieldsDefaults,
    matchedRides,
    reset,
    toggleSelectMatchedRide,
    isRideSelected,
    find,
    book,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFindRideStore, import.meta.hot))
