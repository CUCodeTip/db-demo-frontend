<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <h1 class="text-5xl mb-10">
      Hello World!
    </h1>
    <button class="btn" @click="router.push('/tuts')">
      Go to <em>/tuts</em>
    </button>
  </div>
</template>
