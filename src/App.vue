<script setup lang="ts">
import { setMetadata } from './composables'
import { useUserStore } from './stores/user'

setMetadata()

const router = useRouter()
const uStore = useUserStore()

onBeforeMount(() => {
  if (!uStore.loggedInUser)
    router.replace('/')
})
</script>

<template>
  <router-view />
</template>
