<script setup lang="ts">
import { navItemOptToRoute } from './types'
import useIdleEmoji from '~/composables/idleEmoji'
import { useControlStore } from '~/stores/control'
import { useUserStore } from '~/stores/user'
import { useFindRideStore } from '~/stores/findRideStore'

const { emoji } = useIdleEmoji()
const uStore = useUserStore()
const router = useRouter()
const control = useControlStore()
const findRide = useFindRideStore()

const usernameInput = ref<null | HTMLInputElement>(null)
const username = ref<number | null>(null)
const buttonDisabled = computed(
  () => username.value === null
    || (uStore.loggedInUser !== null
    && uStore.loggedInUser.user_id === username.value),
)

const login = () => {
  if (buttonDisabled.value) return
  // eslint-disable-next-line no-alert
  uStore.login(username.value!, () => { alert('Login failed') }, () => {
    username.value = null
    usernameInput.value?.blur()
    control.activeItem = 'Find Ride'
    findRide.reset()
  })
}

onMounted(() => usernameInput.value?.focus())
</script>

<template>
  <div class="flex flex-col space-y-3">
    <span
      class="opacity-0 transition-opacity delay-1000 duration-1000"
      :class="{ 'opacity-100': uStore.loggedInUser }"
    >
      Welcome,
      <span
        class="
      font-semibold text-orange-500"
      >{{ uStore.loggedInUser?.name }}</span>!
      {{ emoji }}
      <br />
      As a
      <span class="italic">
        {{ uStore.loggedInUser?.vehicle_capacity ? 'Driver 🚗' : 'Passenger 🏃‍♀️' }}
      </span>
      <br />
      uid: {{ uStore.loggedInUser?.user_id }}
    </span>
    <span
      v-show="!uStore.loggedInUser"
      class="py-5
    text-4xl font-bold text-orange-500"
    >
      Login
    </span>
    <div class="flex space-x-3 items-center h-2.5rem">
      <input
        ref="usernameInput"
        v-model="username"
        type="number"
        class="border border-gray-900
        bg-transparent
        h-full px-3 w-2/3
        rounded-xl"
        :class="{ 'w-20rem': !uStore.loggedInUser }"
        placeholder="username (integer)"
        min="1"
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
