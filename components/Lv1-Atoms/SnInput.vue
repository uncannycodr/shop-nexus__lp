<script setup lang="ts">
import { computed, defineProps } from 'vue'

type InputType = 'text' | 'email' | 'password' | 'number' | 'url'
type InputSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl'

interface Props {
  type: InputType
  placeholder?: string
  size?: InputSize
  inputClass?: string
  modelValue: string
  bgColor?: string

}

const props = defineProps<Props>()

const sizeVariants: Record<InputSize, string> = {
  xs: 'text-xs py-1',
  sm: 'text-sm  py-2',
  base: 'text-base  py-2',
  lg: 'text-lg  py-3',
  xl: 'text-xl  py-4',
}

const classes = computed(() => [

  'w-full',
  'border-b',
  'border-textSecondary',
  'dark:border-d-textSecondary',
  'focus:outline-none',
  sizeVariants[props.size || 'base'],
  props.inputClass || '',
  props.bgColor || '',
])
</script>

<template>
  <input
    :type="props.type"
    :placeholder="props.placeholder"
    :class="classes"
    :value="props.modelValue"
  >
</template>

<style scoped></style>
