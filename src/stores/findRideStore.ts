import { acceptHMRUpdate, defineStore } from 'pinia'
import { RideCardo } from '~/types'
import { getDateAsInput } from '~/utils'

export const useFindRideStore = defineStore('findRide', () => {
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

  const selectedRide = ref<null | {
    driver: string
    startTime: Date
  }>(null)

  const matchedRides = ref<null | RideCardo[]>(null)

  const setStartLocation = (location: string) => {
    startLocation.value = location
  }
  const setDestinationLocation = (location: string) => {
    destinationLocation.value = location
  }
  const setStartDate = (date: string) => {
    startDate.value = date
  }
  const setEndDate = (date: string) => {
    endDate.value = date
  }
  const setAvailableSeats = (number: number) => {
    availableSeats.value = number
  }

  const reset = () => {
    startLocation.value = ''
    destinationLocation.value = ''
    availableSeats.value = 1
    const defaultDate = getDateAsInput(new Date())
    startDate.value = defaultDate
    endDate.value = defaultDate
    selectedRide.value = null
  }

  const isRideSelected = (driver: string, startTime: Date) => {
    return selectedRide.value?.driver === driver
    && selectedRide.value?.startTime === startTime
  }
  const toggleRide = (driver: string, startTime: Date) => {
    if (isRideSelected(driver, startTime)) {
      selectedRide.value = null
      return
    }
    selectedRide.value = { driver, startTime }
  }

  const find = () => {
    // TODO: call api to find rides
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
    setStartLocation,
    setDestinationLocation,
    setStartDate,
    setEndDate,
    setAvailableSeats,
    reset,
    toggleRide,
    isRideSelected,
    find,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFindRideStore, import.meta.hot))
