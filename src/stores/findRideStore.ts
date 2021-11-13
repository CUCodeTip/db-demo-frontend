import { acceptHMRUpdate, defineStore } from 'pinia'
// import { NavItemOption, navItemOptToRoute } from '~/components/nav/types'

export const useFindRideStore = defineStore('findRide', () => {
  const startLocation = ref('')
  const destinationLocation = ref('')
  const startDate = ref('')
  const endDate = ref('')
  const passengers = ref(0)

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
    passengers.value = number
  }

  return {
    startLocation,
    destinationLocation,
    startDate,
    endDate,
    passengers,
    setStartLocation,
    setDestinationLocation,
    setStartDate,
    setEndDate,
    setPassengers,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useFindRideStore, import.meta.hot))
