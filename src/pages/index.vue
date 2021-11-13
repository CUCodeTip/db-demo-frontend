<script setup lang="ts">
import { useControlStore } from '~/stores/control'
import { useUserStore } from '~/stores/user'

const control = useControlStore()
const uStore = useUserStore()
</script>

<template>
  <div v-show="uStore.loggedInUser" class="w-full">
    <h1 class="text-center">
      {{ control.activeItem }}
    </h1>
  </div>
</template>
