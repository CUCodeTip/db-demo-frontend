<script setup lang="ts">
import { formatDate } from '~/utils'
defineProps<{
  date: Date
}>()
</script>

<template>
  <div class="bruhslkdfjg2">
    <bx:bx-calendar class="icon-wg4938vdc" /><span>{{ formatDate(date) }}</span>
  </div>
</template>
