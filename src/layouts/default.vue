<script setup lang="ts">
import { useControlStore } from '~/stores/control'
import { useUserStore } from '~/stores/user'

const control = useControlStore()
const uStore = useUserStore()

const opacity = computed(() => uStore.loggedInUser ? 100 : 0)
const opacictyTransition = useTransition(opacity, { delay: 500 })
</script>

<template>
  <div class="min-h-full bg-gray-900 text-white flex">
    <Nav />
    <div
      v-show="uStore.loggedInUser"
      class="w-full pl-1/5"
      :style="{ opacity: opacictyTransition }"
    >
      <div class="p-10">
        <h1 class="text-center mb-5">
          {{ control.activeItem }}
        </h1>
        <router-view />
      </div>
    </div>
  </div>
</template>
