<script setup lang="ts">
import { useUserStore } from '~/stores/user'
import { useControlStore } from '~/stores/control'

const uStore = useUserStore()
const control = useControlStore()
</script>

<template>
  <div v-show="uStore.loggedInUser">
    <nav-item
      name="Find Ride"
      :active="'Find Ride' === control.activeItem"
      @click="control.changeActiveItem('Find Ride')"
    />
    <nav-item
      v-show="uStore.loggedInUser?.license_plate"
      name="Your Ride"
      :active="'Your Ride' === control.activeItem"
      @click="control.changeActiveItem('Your Ride')"
    />
    <nav-item
      name="Your Booking"
      :active="'Your Booking' === control.activeItem"
      @click="control.changeActiveItem('Your Booking')"
    />
    <nav-item
      name="Chat Room"
      :active="'Chat Room' === control.activeItem"
      @click="control.changeActiveItem('Chat Room')"
    />
  </div>
</template>
