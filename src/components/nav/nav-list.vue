<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const uStore = useUserStore()
</script>

<template>
  <div v-show="uStore.loggedInUser" class="space-y-3rem">
    <h4>DDD</h4>
    <h4>DDD</h4>
    <h4>DDD</h4>
  </div>
</template>
