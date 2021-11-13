<script setup lang="ts">
import dumbInfo from './dumbInfo'
import { useFindRideStore } from '~/stores/findRideStore'
import { formatDateTime } from '~/utils'
const findRide = useFindRideStore()
</script>

<template>
  <section>
    <div class="flex items-center space-x-4">
      <h2 class="mb-3">
        Results <span class="font-normal">({{ dumbInfo.length }})</span>
      </h2>
      <span v-if="findRide.selectedRide">
        Booking a ride from
        <em class="text-orange-400">
          {{ findRide.selectedRide.driver }}
        </em> starting at
        <em class="text-orange-400">
          {{ formatDateTime(findRide.selectedRide.startTime) }}
        </em></span>
    </div>
    <ol class="space-y-2 h-120 overflow-y-scroll pr-3">
      <li
        v-for="ride in dumbInfo"
        :key="`${ride.driver}${ride.dateTime.getMilliseconds()}`"
      >
        <ride-result
          :driver="ride.driver"
          :max-passengers="ride.maxPassengers"
          :passengers="ride.passengers"
          :date-time="ride.dateTime"
          :from="ride.from"
          :to="ride.to"
          @click="findRide.selectRide(ride.driver, ride.dateTime)"
        />
      </li>
    </ol>
  </section>
</template>
