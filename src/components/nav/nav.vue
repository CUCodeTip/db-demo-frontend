<script setup lang="ts">
import useIdleEmoji from '~/composables/idleEmoji'
import { useUserStore } from '~/stores/user'

const { emoji } = useIdleEmoji()
const uStore = useUserStore()

const usernameInput = ref<null | HTMLInputElement>(null)
const username = ref('')
const buttonDisabled = computed(
  () => !username.value
    || (uStore.loggedInUser !== '' && uStore.loggedInUser === username.value),
)

const login = () => {
  if (buttonDisabled.value) return
  if (uStore.login(username.value)) {
    username.value = ''
    usernameInput.value?.blur()
    return
  }
  alert('Login failed')
}

onMounted(() => usernameInput.value?.focus())
</script>

<template>
  <nav
    class="
  w-30rem min-h-screen p-10
  flex flex-col justify-between
  bg-gray-700
  rounded-tr-3rem rounded-br-3rem
  "
  >
    <div v-show="uStore.loggedInUser" class="space-y-3rem">
      <h4>DDD</h4>
      <h4>DDD</h4>
      <h4>DDD</h4>
    </div>
    <div class="flex flex-col space-y-3">
      <span v-show="uStore.loggedInUser">
        Logged in as
        <span class="font-semibold">{{ uStore.loggedInUser }}</span>
        {{ emoji }}
      </span>
      <div class="flex justify-between items-center h-2.5rem">
        <span>username: </span>
        <input
          ref="usernameInput"
          v-model="username"
          type="text"
          class="border border-gray-900
        bg-transparent
        h-full px-3
        rounded-xl"
          @keyup.enter="login"
        >
        <button
          class="btn bg-gray-900
        rounded-xl
        w-6rem h-full
        "
          :disabled="buttonDisabled"
          @click="login"
        >
          <span>Login</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<style>

</style>
