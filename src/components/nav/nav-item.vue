<script setup lang="ts">
import { NavItemOption } from './types'

const props = defineProps<{
  active: boolean
  name: NavItemOption
}>()
const emit = defineEmits<{
  (event: 'click'): void
}>()

const emitClick = () => {
  !props.active && emit('click')
}
</script>

<template>
  <button
    class="w-full py-6
  flex justify-center items-center
  transition-colors active:outline-none"
    :class="{
      'bg-orange-500': props.active,
      'hover:bg-orange-300': !props.active,
      'cursor-auto': props.active,
    }"
    :disabled="props.active"
    @click="emitClick"
  >
    <span class="text-gray-white font-medium text-2xl">
      {{ name }}
    </span>
  </button>
</template>

<style>

</style>
