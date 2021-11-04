<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div>
    <router-view />
    <button
      class="btn m-3 text-sm mt-8"
      @click="router.back()"
    >
      ย้อนกลับ
    </button>
  </div>
</template>
