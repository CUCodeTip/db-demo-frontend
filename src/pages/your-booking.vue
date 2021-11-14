<script setup lang="ts">
import dumbInfo from '~/dumbRides'
</script>

<template>
  <div>
    <h2 class="mb-3">
      Results <span class="font-normal">({{ dumbInfo.length }})</span>
    </h2>
    <ol
      class="overflow-y-scroll h-45rem
    pr-3 space-y-5"
    >
      <li
        v-for="book in dumbInfo"
        :key="`${book.driver}${book.dateTime.getMilliseconds()}`"
        class="bg-gray-700 rounded-xl p-4"
      >
        <book-card
          :driver="book.driver"
          :from="book.from"
          :to="book.to"
          :date-time="book.dateTime"
          :max-passengers="book.maxPassengers"
          :passengers="book.passengers"
          :status="book.status"
        />
      </li>
    </ol>
  </div>
</template>
