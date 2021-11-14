<script setup lang="ts">
import dumbInfo from '~/dumbRides'
</script>

<template>
  <div>
    <h2 class="mb-3">
      Results <span class="font-normal">({{ dumbInfo.length }})</span>
    </h2>
    <ol
      class="overflow-y-scroll h-45rem
    pr-3 space-y-5"
    >
      <li
        v-for="ride in dumbInfo"
        :key="`${ride.driver}${ride.dateTime.getMilliseconds()}`"
        class="bg-gray-700 rounded-xl p-4"
      >
        <ride-card
          :driver="ride.driver"
          :from="ride.from"
          :to="ride.to"
          :date-time="ride.dateTime"
          :max-passengers="ride.maxPassengers"
          :passengers="ride.passengers"
          :status="'Ended'"
        />
      </li>
    </ol>
  </div>
</template>
