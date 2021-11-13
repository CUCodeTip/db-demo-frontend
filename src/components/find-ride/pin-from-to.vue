<script setup lang="ts">
const props = defineProps<{
  from: string
  to: string
}>()
</script>

<template>
  <div class="flex gap-5 justify-center items-center">
    <pin-location :location="props.from" />
    <akar-icons:arrow-left class="transform rotate-180" />
    <pin-location :location="props.to" />
  </div>
</template>

<style>

</style>
