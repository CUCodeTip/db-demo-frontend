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
  <div class="ipt-container">
    <span class="text-xl">{{ props.label }}</span>
    <input
      v-model="value"
      type="text"
      class="ipt"
      :placeholder="props.placeholder ?? props.label"
    >
  </div>
</template>
