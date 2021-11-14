<script setup lang="ts">
const props = defineProps<{
  location: string
}>()
</script>

<template>
  <div class="flex flex-col justify-center items-center space-y-1">
    <eva:pin-fill class="h-6 w-6" />
    <span>{{ props.location }}</span>
  </div>
</template>
