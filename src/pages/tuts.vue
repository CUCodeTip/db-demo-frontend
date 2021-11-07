<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'
import { setMetadata } from '~/composables'
import useIdleEmoji from '~/composables/idleEmoji'
// import { ref } from 'vue' // basic vue imports are unneccesary

const { emoji } = useIdleEmoji()

setMetadata({ title: 'Basic Usage of vue' })

const fruits = ref(new Set(['apple', 'pineapple', 'banana']))
const name = ref('Arm')
const isNameInFruits = computed(() => fruits.value.has(name.value))

const count = ref(0)
// When the value of count changes, count3 updates automatically.
const count3 = computed(() => count.value ** 3)
const count3ToRender = useTransition(count3, {
  transition: TransitionPresets.easeInSine,
}) // transition in value

const incrementBy = (amount: number) => {
  count.value += amount // .value is needed here to access or modify the value
}

// API calls
// see https://vueuse.org/core/useFetch/ for reactive Fetch API
// You can use typical fetch here but it's not reactive or self-changing in states

// predict nationality api
interface Country {
  country_id: string
  probability: number
}
interface NationalityAPIRes {
  name: string
  country: Country[]
  error?: string
}
const nationalityUrl = computed(() => `https://api.nationalize.io/?name=${name.value}`)
const {
  data: nationality,
  statusCode: nationalitySC,
} = useFetch(nationalityUrl, { refetch: true }).json<NationalityAPIRes>()
const httpCatUrl = computed(() => `https://http.cat/${nationalitySC.value ?? 425}.jpg`)

// random meme from reddit api
interface MemeAPIRes {
  postLink: string
  subreddit: string
  title: string
  url: string
  nsfw: boolean
  spoiler: boolean
  author: string
  ups: number
  preview: string[]
}
const seenMemeUrls = new Set<string>()
const { data: memeData, execute: nextMeme } = useFetch('https://meme-api.herokuapp.com/gimme', {
  afterFetch: (ctx) => {
    if (seenMemeUrls.has(ctx.data.postLink))
      nextMeme()
    else
      seenMemeUrls.add(ctx.data.postLink)
    return ctx
  },
}).json<MemeAPIRes>()

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
      <p>Your name is <span class="text-red-400">{{ name || '???' }}</span>.</p>
      <input v-model="name" type="text" class="inpt mr-3 text-black rounded" />
      <button
        class="btn mt-2"
        :disabled="!name || isNameInFruits"
        @click="fruits.add(name)"
      >
        ???
      </button>
    </article>

    <!-- data fetching -->
    <article class="hi-yo">
      <h2 class="subtopic mb-5">
        Data fetching/ API calls
      </h2>

      <div class="space-y-3">
        <!-- predict nationality -->
        <section class="hi-yo">
          <h3 class="font-semibold">
            Nationality
          </h3>
          <div v-if="nationality && !nationality.error">
            <ul v-for="nat in nationality.country" :key="nat.country_id">
              <li>{{ nat.country_id }} - {{ Math.round(nat.probability * 100) }}%</li>
            </ul>
          </div>
          <div v-else>
            {{ nationality?.error }}
          </div>
          <hr>
          <input v-model="name" type="text" class="inpt mr-3 text-black rounded" />
          <span class="block">status code: {{ nationalitySC }}</span>
          <img v-show="httpCatUrl" :src="httpCatUrl" alt="status code cat">
        </section>

        <!-- random meme -->
        <section class="hi-yo">
          <h3 class="font-semibold">
            Reddit Memes
          </h3>
          <button class="btn" @click="nextMeme()">
            Next Meme
          </button>
          <p>Title: <a :href="memeData?.postLink" class="font-semibold text-blue-400 hover:text-blue-700" target="_blank">{{ memeData?.title }}</a></p>
          <p>Upvotes: {{ memeData?.ups }}</p>
          <img :src="memeData?.url" :alt="memeData?.title">
        </section>
      </div>
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
