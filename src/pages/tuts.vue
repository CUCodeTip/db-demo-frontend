<script setup lang="ts">
const fruits = ['apple', 'pineapple', 'banana']

const name = ref('Arm')

const count = ref<number>(0) // number is for typeScript
const clickMe = () => {
  count.value++ // .value is needed here
}
// this runs everytime the value of count changes
watch(count, () => {
  if (count.value % 5 === 0) alert('Hi')
})
</script>

<template>
  <main class="mx-20">
    <!-- iterate through values -->
    <h2 class="font-bold">
      iterate through values
    </h2>
    <section class="mb-15 border">
      <ul v-for="f in fruits" :key="f">
        <li class="text-red-500">
          {{ f }}
        </li>
      </ul>
    </section>

    <!-- conditional rendering -->
    <h2 class="font-bold">
      Conditional rendering
    </h2>
    <section class="mb-15 border">
      <h1 v-if="true">
        Show this if v-if is true
      </h1>
      <h1 v-else>
        This never renders
      </h1>
    </section>

    <!-- binding input with a varible -->
    <h2 class="font-bold">
      Binding value with an input field
    </h2>
    <section class="mb-15 border">
      <h3>Your name is <span class="text-red-500">{{ name }}</span></h3>
      <input v-model="name" type="text" class="bg-blue-300 p-3" />
    </section>

    <!-- event handling -->
    <h2 class="font-bold">
      Event handling
    </h2>
    <section>
      <h3>count is {{ count }}</h3>
      <!-- clickMe runs when this button is clicked (@click) -->
      <button class="bg-purple-400 p-3 rounded-full" @click="clickMe">
        Click Me!
      </button>
    </section>
  </main>
</template>

<style>

</style>
