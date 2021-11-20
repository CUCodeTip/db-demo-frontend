<script setup lang="ts">
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
      ride.starting_time = new Date(ride.starting_time)
      return ride
    })
    return ctx
  },
}).post({ id: uStore.loggedInUser?.user_id }).json<RideCardo[]>()

onMounted(() => {
  getRides()
})
</script>

<template>
  <div>
    <h2 class="mb-3">
      Create Ride
    </h2>
    <create-ride-form class="mb-6" />
    <h2 v-show="rides" class="mb-3">
      Results <span class="font-normal">({{ rides?.length }})</span>
    </h2>
    <ol
      class="overflow-y-scroll max-h-75vh
    pr-3 space-y-5"
    >
      <li
        v-for="ride in rides"
        :key="ride.starting_time.getMilliseconds()"
        class="bg-gray-700 rounded-xl p-4"
      >
        <ride-card
          :from="ride.from"
          :to="ride.to"
          :date-time="ride.starting_time"
          :max-passengers="ride.max_available_seats"
          :passengers="ride.reserved_passengers"
          :status="ride.ride_status"
        />
      </li>
    </ol>
  </div>
</template>
