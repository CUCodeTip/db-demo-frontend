<script setup lang="ts">
const props = defineProps<{
  driver: string
  maxPassengers: number
  passengers: number
  dateTime: Date
  from: string
  to: string
}>()

const date = `${String(props.dateTime.getDay()).padStart(2, '0')}/${
  String(props.dateTime.getMonth() + 1).padStart(2, '0')}/${
  String(props.dateTime.getFullYear())}`
const time = `${String(props.dateTime.getHours()).padStart(2, '0')}:${
  String(props.dateTime.getMinutes()).padStart(2, '0')}`
</script>

<template>
  <div class="flex w-full">
    <div class="driver">
      <span>{{ driver }}</span>
    </div>
    <div class="passengers">
      <el:person /><span>{{ passengers }}/{{ maxPassengers }}</span>
    </div>
    <div class="date">
      <bx:bx-calendar /><span>{{ date }}</span>
    </div>
    <div>
      <akar-icons:clock /><span>{{ time }}</span>
    </div>
    <pin-from-to :from="from" :to="to" />
  </div>
</template>

<style>

</style>
