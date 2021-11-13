<script setup lang="ts">
// import { useFindRideStore } from '~/stores/findRideStore'

import dumbInfo from './dumbInfo'

// const inputs = useFindRideStore()
</script>

<template>
  <section>
    <h2>Results</h2>
    <div
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
      />
    </div>
  </section>
</template>
