<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useControlStore } from '~/stores/control'

const uStore = useUserStore()
const control = useControlStore()
</script>

<template>
  <!-- <div v-show="uStore.loggedInUser"> -->
  <div
    class="opacity-0 transition-opacity duration-1000"
    :class="{ 'opacity-100': uStore.loggedInUser }"
  >
    <nav-item
      name="Find Ride"
      :active="'Find Ride' === control.activeItem"
      @click="uStore.loggedInUser && control.changeActiveItem('Find Ride')"
    />
    <nav-item
      v-show="uStore.loggedInUser?.license_plate"
      name="Your Ride"
      :active="'Your Ride' === control.activeItem"
      @click="uStore.loggedInUser && control.changeActiveItem('Your Ride')"
    />
    <nav-item
      name="Your Booking"
      :active="'Your Booking' === control.activeItem"
      @click="uStore.loggedInUser && control.changeActiveItem('Your Booking')"
    />
    <nav-item
      name="Chat Room"
      :active="'Chat Room' === control.activeItem"
      @click="uStore.loggedInUser && control.changeActiveItem('Chat Room')"
    />
  </div>
</template>
