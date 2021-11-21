<script setup lang="ts">
import fetchy from '~/fetchy'
import { useUserStore } from '~/stores/user'
import { useYourRideStore } from '~/stores/yourRide'
import { getDatetimeAsInput } from '~/utils'

const uStore = useUserStore()
const yourRide = useYourRideStore()

const startLocation = ref('')
const destinationLocation = ref('')
const route = computed(() => `${startLocation.value}, ${destinationLocation.value}`)
const availableSeats = ref(uStore.loggedInUser?.vehicle_capacity ?? 1)
const startDatetime = ref(getDatetimeAsInput(new Date()))

const createRide = () => {
  const ISODateTime = new Date(startDatetime.value)
  fetchy('rides/create', {
    afterFetch(ctx) {
      if (ctx.response.status === 200) {
        yourRide.getRides()
        // eslint-disable-next-line no-alert
        alert('Your ride has been created!')
      }

      else {
      // eslint-disable-next-line no-alert
        alert('Something went wrong.')
      }
      return ctx
    },
  }).post({
    driverName: uStore.loggedInUser?.name,
    driverId: uStore.loggedInUser?.driver_id,
    startingTime: ISODateTime,
    route: route.value,
    maxSeats: availableSeats.value,
  })
}
</script>

<template>
  <form v-if="true" class="flex flex-wrap gap-y-4 gap-x-10">
    <div class="ipt-container w-100">
      <span class="text-xl">Start Location</span>
      <input
        v-model="startLocation"
        required
        type="text"
        class="ipt"
        placeholder="Start Location"
      >
    </div>
    <div class="ipt-container w-100">
      <span class="text-xl">Destination Location</span>
      <input
        v-model="destinationLocation"
        required
        type="text"
        class="ipt"
        placeholder="Destination Location"
      >
    </div>
    <div class="ipt-container w-100">
      <span class="text-xl">Available Seats</span>
      <input
        v-model="availableSeats"
        required
        type="number"
        class="ipt"
        min="1"
        :max="uStore.loggedInUser?.vehicle_capacity ?? undefined"
      >
    </div>
    <div class="ipt-container w-100">
      <span class="text-xl">Start Datetime</span>
      <input
        v-model="startDatetime"
        required
        class="ipt"
        type="datetime-local"
        step="1"
      >
    </div>
    <button
      class="button mt-auto"
      type="submit"
      :disabled="!startLocation || !destinationLocation || !availableSeats"
      @click.prevent="createRide"
    >
      create
    </button>
  </form>
</template>
