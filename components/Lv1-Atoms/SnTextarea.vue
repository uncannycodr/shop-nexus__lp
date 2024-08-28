<script setup lang="ts">
import { ref } from 'vue'

const textareaValue = ref('')
</script>

<template>
  <textarea
    v-model="textareaValue"
    placeholder="Your Message"
    class=" text-base py-2 border-b border-textSecondary dark:border-d-textSecondary focus:outline-none focus:border-textSecondary w-full  h-24',
"
    rows="5"
  />
</template>

<style scoped></style>
