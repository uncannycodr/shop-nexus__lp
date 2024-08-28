<script setup lang="ts">
interface Props {
  variant?: 'header' | 'footer' // Different variants for header and footer
  vertical?: boolean // Whether the menu should be vertical
}

const props = defineProps<Props>()

const menuClasses = computed(() => [
  props.vertical ? 'flex flex-col' : 'flex flex-row',
  props.variant === 'header' ? ' text-white space-x-4' : '',
  props.variant === 'footer' ? 'text-gray-200 space-y-6 ' : '',
])
</script>

<template>
  <div :class="menuClasses">
    <slot />
  </div>
</template>

<style scoped></style>
