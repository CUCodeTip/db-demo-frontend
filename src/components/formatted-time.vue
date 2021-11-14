<script setup lang="ts">
import { formatTime } from '~/utils'
defineProps<{
  date: Date
}>()
</script>

<template>
  <div class="bruhslkdfjg2">
    <akar-icons:clock class="icon-wg4938vdc" /><span>{{ formatTime(date) }}</span>
  </div>
</template>
