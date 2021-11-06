<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'
import { setMetadata } from '~/composables'
// import { ref } from 'vue' // basic vue imports are unneccesary

setMetadata({ title: 'Basic Usage of vue' })

const fruits = ref(['apple', 'pineapple', 'banana'])
const name = ref('Arm')

const count = ref(0)
// When the value of count changes, count3 updates automatically.
const count3 = computed(() => count.value ** 3)
const count3ToRender = useTransition(count3, {
  transition: TransitionPresets.easeInSine,
}) // transition in value

const incrementBy = (amount: number) => {
  count.value += amount // .value is needed here to access or modify the value
}

const { idle, lastActive } = useIdle(3000, { initialState: true })
const emoji = ref('😴')
const now = useTimestamp()
const idledFor = computed(() =>
  Math.floor((now.value - lastActive.value) / 1000),
)
watch(idle, () => {
  if (idle.value) emoji.value = '😴'
  else emoji.value = '😀'
})
watch(idledFor, () => {
  if (idledFor.value > 9 && idledFor.value < 60) emoji.value = '💀'
  else if (idledFor.value >= 60) emoji.value = '👻'
})
</script>

<template>
  <main class="space-y-8">
    <header>
      <h1 class="font-bold text-5xl">
        Basic Usage {{ emoji }}
      </h1>
      <p>See <code>/pages/tuts.vue</code></p>
    </header>

    <!-- iterate through values -->
    <article class="hi-yo">
      <h2 class="subtopic">
        Iterating through values
      </h2>
      <!-- value for :key must be unique -->
      <p>const fruits = {{ fruits }}</p>
      <ul v-for="fruit in fruits" :key="fruit">
        <li class="text-red-400">
          😎 {{ fruit }}
        </li>
      </ul>
    </article>

    <!-- conditional rendering -->
    <article class="hi-yo">
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
    </article>

    <!-- event handling -->
    <article class="hi-yo">
      <h2 class="subtopic">
        Event handling
      </h2>
      <p>count = {{ count }}</p>
      <p>count<span>&#179;</span> = {{ Math.round(count3ToRender) }}</p>
      <!-- clickMe runs when this button is clicked (@click) -->
      <button class="btn mt-5 mr-3" @click="incrementBy(1)">
        +1
      </button>
      <button class="btn mt-5 mr-3" @click="incrementBy(5)">
        +5
      </button>
      <button class="btn" :disabled="!count" @click="count = 0">
        Reset
      </button>
    </article>

    <!-- binding input with a variable -->
    <article class="hi-yo">
      <h2 class="subtopic">
        Binding value with an input field
      </h2>
      <p>Your name is <span class="text-red-400">{{ name || '???' }}</span></p>
      <input v-model="name" type="text" class="bg-blue-300 py-1 px-3 mr-3 text-black rounded" />
      <button class="btn mt-2" :disabled="!name" @click="fruits.push(name + '???')">
        ???
      </button>
    </article>
  </main>
</template>

<style scoped>
/* See https://windicss.org/ for these weird text-white border rounded ... thingy */
.hi-yo {
  @apply border rounded-lg p-5 hover:(border-pink-300);
}

/* You can just use normal CSS here as well */
.subtopic {
  font-weight: 600;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
}
</style>
