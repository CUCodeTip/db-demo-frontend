<script setup lang="ts">
// import { ref } from 'vue' // basic vue imports are unneccesary
useHead({
  title: 'Basic Usage of vue',
})

const fruits = ['apple', 'pineapple', 'banana']

const name = ref('Arm') // defaults

const count = ref<number>(0) // number is for typeScript not required in this case
const clickMe = () => {
  count.value++ // .value is needed here to access or modify the value
}
// this runs everytime the value of count changes
watch(count, () => {
  if (count.value % 5 === 0) alert('count is now a multiple of 5')
})
// If the value of count changes, countDouble also changes.
const countDouble = computed(() => count.value * 2)
</script>

<template>
  <main class="space-y-8">
    <header>
      <h1 class="font-bold text-5xl">
        Basic Usage 😉
      </h1>
      <p>See <code>/pages/tuts.vue</code></p>
    </header>

    <!-- iterate through values -->
    <section class="hi-yo">
      <h2 class="subtopic">
        iterate through values
      </h2>
      <!-- value for :key must be unique -->
      <p>const fruits = {{ fruits }}</p>
      <ul v-for="fruit in fruits" :key="fruit">
        <li class="text-red-400">
          😎 {{ fruit }}
        </li>
      </ul>
    </section>

    <!-- conditional rendering -->
    <section class="hi-yo">
      <h2 class="subtopic">
        Conditional rendering
      </h2>
      <p v-if="true /* any valid js expression */">
        Show this if v-if is true
      </p>
      <p v-else>
        This never renders.
      </p>
      <p v-show="false">
        This as well.
      </p>
    </section>

    <!-- binding input with a variable -->
    <section class="hi-yo">
      <h2 class="subtopic">
        Binding value with an input field
      </h2>
      <p>Your name is <span class="text-red-400">{{ name || '???' }}</span></p>
      <input v-model="name" type="text" class="bg-blue-300 p-3 text-black rounded" />
    </section>

    <!-- event handling -->
    <section class="hi-yo">
      <h2 class="subtopic">
        Event handling
      </h2>
      <p>count is {{ count }}</p>
      <p>count double is {{ countDouble }}</p>
      <!-- clickMe runs when this button is clicked (@click) -->
      <button class="btn mt-5" @click="clickMe">
        Click Me!
      </button>
    </section>
  </main>
</template>

<style scoped>
/* See https://windicss.org/ for these weird text-white border rounded ... thingy */
.hi-yo {
  @apply border rounded-lg p-5 hover:(border-pink-300);
}

/* You can just use normal CSS here */
.subtopic {
  font-weight: 600;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
}
</style>
