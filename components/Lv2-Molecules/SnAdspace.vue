<script setup lang="ts">
</script>

<template>
  <div class="banner">
    <div class="banner-content">
      <SnText
        tag="h1"
        color="textPrimary"
        fluid="lg"
        weight="semibold"
        class="text-center md:space-y-0 space-y-2 md:text-[58px] text-[18px] md:leading-[87px] leading-7"
      >
        Step Into Comfort, Stride With Style
      </SnText>
    </div>
  </div>
</template>

<style scoped>
.banner {
  @apply relative bg-ad-space bg-cover bg-center w-full h-[300px] md:h-[500px] flex items-center justify-center md:mt-16  mt-10;
}

.banner-content {
  @apply bg-banner text-white w-11/12 h-4/6 md:h-5/6 flex items-center justify-center;
}
</style>
