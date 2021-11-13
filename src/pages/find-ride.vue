<script setup lang="ts">
import { useFindRideStore } from '~/stores/findRideStore'
import { getDateAsInput } from '~/utils'

const inputs = useFindRideStore()

const defaultStartDate = getDateAsInput(new Date())
const defaultEndDate = defaultStartDate
</script>

<template>
  <main>
    <section class="space-y-4">
      <div class="flex pr-60 gap-20">
        <my-input
          label="Start Location"
          :setter="inputs.setStartLocation"
          placeholder="Location"
        />
        <my-input
          label="Destination Location"
          :setter="inputs.setDestinationLocation"
          placeholder="Location"
        />
      </div>
      <div class="flex gap-20">
        <my-input
          label="Start Date"
          :setter="inputs.setStartDate"
          type="date"
          :default="defaultStartDate"
        />
        <my-input
          label="End Date"
          :setter="inputs.setStartDate"
          type="date"
          :default="defaultEndDate"
        />
        <my-input
          label="Companions"
          :setter="inputs.setStartDate"
          type="number"
          min="0"
          :default="0"
        />
      </div>
    </section>
  </main>
</template>

<style>

</style>
