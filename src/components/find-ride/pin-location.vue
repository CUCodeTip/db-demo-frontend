<script setup lang="ts">
const props = defineProps<{
  location: string
}>()
</script>

<template>
  <div class="flex flex-col justify-center items-center space-y-1">
    <eva:pin-fill class="h-6 w-6" />
    <span class="w-15rem truncate text-center">{{ props.location }}</span>
  </div>
</template>
