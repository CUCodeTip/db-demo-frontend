<script setup lang="ts">
import dumbInfo from '~/dumbRides'
import fetchy from '~/fetchy'
import { useUserStore } from '~/stores/user'
import { RideCardo } from '~/types'

const uStore = useUserStore()
const { data: rides, execute: getRides } = fetchy('rides', {
  immediate: false,
  afterFetch(ctx) {
    ctx.data = ctx.data.map((ride: any) => {
      const [from, to] = ride.route.split(', ')
      ride.from = from
      ride.to = to
      delete ride.route
      return ride
    })
    return ctx
  },
}).post({ id: uStore.loggedInUser!.user_id }).json<RideCardo[]>()

onMounted(() => {
  getRides()
})
</script>

<template>
  <div>
    <create-ride-form class="mb-4" />
    <h2 class="mb-3">
      Results <span class="font-normal">({{ dumbInfo.length }})</span>
    </h2>
    <ol
      class="overflow-y-scroll max-h-75vh
    pr-3 space-y-5"
    >
      <li
        v-for="ride in dumbInfo"
        :key="`${ride.driver}${ride.dateTime.getMilliseconds()}`"
        class="bg-gray-700 rounded-xl p-4"
      >
        <ride-card
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
