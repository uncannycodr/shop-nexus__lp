<script setup lang="ts">
import type { bgColors } from '~/assets/bg-colors'

type ButtonColor = keyof typeof bgColors
type Size = | 'sm' | 'lg'
interface Props {
  color: ButtonColor
  size?: Size
}
const props = defineProps<Props>()

const colorVariants: Record<ButtonColor, string> = {

  bgFooter: 'bg-bgFooter',
  circle1: 'bg-circle1',
  circle2: 'bg-circle2',
  circle3: 'bg-circle3',
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  background: 'bg-background',

}
const sizeVariants: Record<Size, string> = {

  sm: ' px-4 py-2 w-36',
  lg: ' px-6 py-2 w-52',

}
const classes = computed(() => [
  sizeVariants[props.size as Size],
  colorVariants[props.color],

])
</script>

<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<style scoped>

</style>
