import { acceptHMRUpdate, defineStore } from 'pinia'
import { getDateAsInput } from '~/utils'
// import { NavItemOption, navItemOptToRoute } from '~/components/nav/types'

export const useFindRideStore = defineStore('findRide', () => {
  const defaultDate = getDateAsInput(new Date())

  const startLocation = ref('')
  const destinationLocation = ref('')
  const startDate = ref(defaultDate)
  const endDate = ref(defaultDate)
  const companions = ref(0)

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

  return {
    startLocation,
    destinationLocation,
    startDate,
    endDate,
    companions,
    setStartLocation,
    setDestinationLocation,
    setStartDate,
    setEndDate,
    setPassengers,
    reset,
    defaultDate,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFindRideStore, import.meta.hot))
