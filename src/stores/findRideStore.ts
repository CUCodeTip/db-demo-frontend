import { acceptHMRUpdate, defineStore } from 'pinia'
import { getDateAsInput } from '~/utils'

export const useFindRideStore = defineStore('findRide', () => {
  const defaultDate = getDateAsInput(new Date())

  const startLocation = ref('')
  const destinationLocation = ref('')
  const startDate = ref(defaultDate)
  const endDate = ref(defaultDate)
  const companions = ref(0)

  const selectedRide = ref<null | {
    driver: string
    startTime: Date
  }>(null)

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
  const setPassengers = (number: number) => {
    companions.value = number
  }

  const reset = () => {
    startLocation.value = ''
    destinationLocation.value = ''
    companions.value = 0
    const defaultDate = getDateAsInput(new Date())
    startDate.value = defaultDate
    endDate.value = defaultDate
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

  return {
    startLocation,
    destinationLocation,
    startDate,
    endDate,
    companions,
    selectedRide,
    defaultDate,
    setStartLocation,
    setDestinationLocation,
    setStartDate,
    setEndDate,
    setPassengers,
    reset,
    toggleRide,
    isRideSelected,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFindRideStore, import.meta.hot))
