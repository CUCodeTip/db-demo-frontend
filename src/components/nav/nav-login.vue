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
  <div class="flex flex-col space-y-3 px-10">
    <span v-show="uStore.loggedInUser">
      Logged in as
      <span
        class="
      font-semibold text-orange-500"
      >{{ uStore.loggedInUser }}</span>
      {{ emoji }}
    </span>
    <span
      v-show="!uStore.loggedInUser"
      class="
    text-2xl font-bold text-orange-500"
    >
      Login First! 😠
    </span>
    <div class="flex space-x-3 items-center h-2.5rem">
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
</template>
