<script setup lang="ts">
defineProps<{
  passengers: number
  maxPassengers: number
}>()
</script>

<template>
  <div class="bruhslkdfjg2">
    <el:person class="icon-wg4938vdc" /><span>{{ passengers }}/{{ maxPassengers }}</span>
  </div>
</template>
