<script setup lang="ts">
const props = defineProps<{
  label: string
  setter: (value: any) => void
  placeholder?: string
}>()

const value = ref('')
watch(value, () => {
  props.setter(value.value)
})
</script>

<template>
  <div class="flex flex-col w-full">
    <span class="text-xl">{{ props.label }}</span>
    <input
      v-model="value"
      type="text"
      class="bg-transparent
      border rounded p-3 mt-3
      text-gray-100"
      :placeholder="props.placeholder ?? props.label"
    >
  </div>
</template>
