<script setup lang="ts">
const props = defineProps<{
  location: string
}>()
</script>

<template>
  <div>
    <eva:pin-fill class="inline-block" />
    <span>{{ props.location }}</span>
  </div>
</template>

<style>

</style>
