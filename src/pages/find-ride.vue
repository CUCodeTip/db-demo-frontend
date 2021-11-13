<script setup lang="ts">
import { useFindRideStore } from '~/stores/findRideStore'

const inputs = useFindRideStore()
</script>

<template>
  <main>
    <section class="space-y-4">
      <div class="flex gap-15">
        <div class="ipt-container">
          <span class="text-xl">Start Location</span>
          <input
            v-model="inputs.startLocation"
            class="ipt"
            placeholder="Location"
          >
        </div>
        <div class="ipt-container">
          <span class="text-xl">Destination Location</span>
          <input
            v-model="inputs.destinationLocation"
            class="ipt"
            placeholder="Location"
          >
        </div>
        <div class="ipt-container">
          <span class="text-xl">Companions</span>
          <input
            v-model="inputs.companions"
            class="ipt"
            type="number"
            min="0"
          >
        </div>
      </div>
      <div class="flex gap-15 items-end">
        <div class="ipt-container">
          <span class="text-xl">Start Date</span>
          <input
            v-model="inputs.startDate"
            class="ipt"
            type="date"
          >
        </div>
        <div class="ipt-container">
          <span class="text-xl">End Date</span>
          <input
            v-model="inputs.endDate"
            class="ipt"
            type="date"
          >
        </div>
        <div class="flex gap-5">
          <button
            class="button h-full bg-red-600"
            @click="inputs.reset"
          >
            clear
          </button>
          <button class="button h-full">
            search
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<style>

</style>
