<script setup lang="ts">
const props = defineProps<{
  label: string
  setter: (value: any) => void
  placeholder?: string
  type?: 'text' | 'number' | 'date'
  min?: number | string
  default?: string | number | Date
}>()

const value = ref(props.default ?? '')
watch(value, () => {
  props.setter(value.value)
})
</script>

<template>
  <div class="ipt-container">
    <span class="text-xl">{{ props.label }}</span>
    <input
      v-model="value"
      :type="props.type ?? 'text'"
      class="ipt"
      :placeholder="props.placeholder ?? props.label"
      :min="props.min"
    >
  </div>
</template>
