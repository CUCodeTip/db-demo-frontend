<script setup lang="ts">
import fetchy from '~/fetchy'
import { useUserStore } from '~/stores/user'
import { Book } from '~/types'

const uStore = useUserStore()

const { data: books, execute: getBooks } = fetchy('book', {
  immediate: false,
  afterFetch(ctx) {
    ctx.data = ctx.data.map((book: any) => {
      book.starting_time = new Date(book.starting_time)
      return book
    })
    return ctx
  },
}).post({ userId: uStore.loggedInUser?.user_id }).json<Book[]>()

onMounted(() => {
  getBooks()
})
</script>

<template>
  <div>
    <h2 class="mb-3">
      Results <span v-show="books" class="font-normal">({{ books?.length }})</span>
    </h2>
    <ol
      class="overflow-y-scroll max-h-75vh
    pr-3 space-y-5"
    >
      <li
        v-for="(book, idx) in books"
        :key="idx"
        class="bg-gray-700 rounded-xl p-4"
      >
        <book-card
          :driver="book.name"
          :from="book.pickup_location"
          :to="book.dropoff_location"
          :date-time="book.starting_time"
          :max-passengers="book.max_available_seats"
          :passengers="book.reserved_passengers"
          :status="book.booking_status"
          :refetch-books="getBooks"
          :book-id="book.booking_id"
        />
      </li>
    </ol>
  </div>
</template>
