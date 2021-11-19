<script setup lang="ts">
import { navItemOptToRoute } from './types'
import useIdleEmoji from '~/composables/idleEmoji'
import { useControlStore } from '~/stores/control'
import { useUserStore } from '~/stores/user'

const { emoji } = useIdleEmoji()
const uStore = useUserStore()
const router = useRouter()
const control = useControlStore()

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
    control.activeItem = 'Find Ride'
    router.push(navItemOptToRoute[control.activeItem])
    return
  }
  alert('Login failed')
  // uStore.login(username.value, () => alert('Login failed'), () => {
  //   username.value = ''
  //   usernameInput.value?.blur()
  //   control.activeItem = 'Find Ride'
  //   router.push(navItemOptToRoute[control.activeItem])
  // })
}

onMounted(() => usernameInput.value?.focus())
</script>

<template>
  <div class="flex flex-col space-y-3">
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
    text-3xl font-bold text-orange-500"
    >
      Login
    </span>
    <div class="flex space-x-3 items-center h-2.5rem">
      <input
        ref="usernameInput"
        v-model="username"
        type="text"
        class="border border-gray-900
        bg-transparent
        h-full px-3 w-2/3
        rounded-xl"
        placeholder="username"
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
