<script setup lang="ts">
import ourstory4 from '~/assets/images/ourstory4.png'
import ourstory5 from '~/assets/images/ourstory5.png'
import ourstory6 from '~/assets/images/ourstory6.png'
</script>

<template>
  <div class="wrapper">
    <div class="our-story-container">
      <div class="our-story-images">
        <img :src="ourstory4" alt="Story 4" class="story-image">
        <img :src="ourstory5" alt="Story 5" class="story-image">
        <img :src="ourstory6" alt="Story 6" class="story-image">
      </div>

      <div class="our-story-content">
        <div class="our-story-heading">
          <div class="heading-line" />
          <SnText tag="h3" color="textSecondary" size="lg" weight="semibold" class="dark:text-textPrimary">
            About Us
          </SnText>
        </div>

        <div class="our-story-text">
          <SnText tag="h1" color="textSecondary" fluid="base" weight="bold" class="dark:text-textPrimary">
            Our Story
          </SnText>

          <div class="our-story-description">
            <SnText tag="p" color="textSecondary" fluid="xs" class="description-text dark:text-textPrimary ">
              Our journey began with a simple idea: to create a platform where sneaker lovers could find their perfect pair. Our founders, lifelong friends and sneaker enthusiasts, saw the need for a dedicated space that celebrated both the art and functionality of sneakers. They envisioned a place where quality, comfort, and style meet the diverse needs of every customer.
            </SnText>
            <SnText tag="p" color="textSecondary" fluid="xs" class="description-text dark:text-textPrimary">
              At The Sole Journey, our mission is to transform the sneaker shopping experience. We believe the right pair of sneakers can elevate your outfit, confidence, and performance. Whether you're an athlete, a fashionista, or someone who values everyday comfort, we've got you covered.
            </SnText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  @apply bg-secondary dark:bg-d-secondary; ;
}
.our-story-container {
  @apply  flex flex-col justify-center space-y-8 max-w-[1288px] py-8 px-4 mx-auto;
}

.our-story-images {
  @apply flex md:flex-row md:leading-7 leading-6 flex-col md:gap-6 gap-4 justify-center w-full;
}

.story-image {
  @apply flex-1 md:max-w-[30%] max-w-[100%] h-auto;
}

.our-story-content {
  @apply flex flex-col space-y-2 w-full justify-center m-auto max-w-[94%];
}

.our-story-heading {
  @apply flex items-center space-x-4;
}

.heading-line {
  @apply h-0.5 w-14 bg-textSecondary dark:bg-d-textPrimary;
}

.our-story-text {
  @apply flex flex-col space-y-2;
}

.our-story-description {
  @apply flex lg:flex-row flex-col  gap-4 lg:gap-8  ;
}

.description-text {
  @apply flex-1;
}
</style>
