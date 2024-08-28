<script setup lang="ts">
interface Props {
  variant?: 'header' | 'footer' // Different variants for header and footer
  vertical?: boolean // Whether the menu should be vertical
}

const props = defineProps<Props>()

const socialClasses = computed(() => [
  props.vertical ? 'flex flex-col' : 'flex flex-row',
  props.variant === 'header' ? ' text-white space-x-2' : '',
  props.variant === 'footer' ? 'text-gray-200 ' : '',
])
</script>

<template>
  <div :class="socialClasses">
    <slot />
  </div>
</template>

<style scoped></style>
