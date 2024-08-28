<script setup lang="ts">
import FeaturedItem from '~/assets/images/FeaturedItem.png'
</script>

<template>
  <div class="featured-item">
    <div class="image ">
      <img :src="FeaturedItem" alt="featured item" class="w-full h-auto md:w-auto md:h-full">
    </div>

    <div class="content">
      <SnText tag="h3" color="textSecondary" fluid="base" weight="semibold" class="md:mt-0 md:mb-0 mt-4 mb-4 dark:text-textPrimary">
        Featured Item
      </SnText>
      <SnText tag="h1" color="textSecondary" fluid="xs" weight="semibold" class="dark:text-textPrimary">
        TurboRun Elite Sneakers
      </SnText>
      <ul>
        <SnText tag="li" color="textSecondary" fluid="xs" class="dark:text-textPrimary">
          • Ultra-Lightweight Design: Crafted with advanced materials to keep you light on your feet.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="dark:text-textPrimary">
          • Breathable Mesh Upper: Ensures maximum airflow to keep your feet cool and dry.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="dark:text-textPrimary">
          • Responsive Cushioning: Advanced foam midsole for superior shock absorption and energy return.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="dark:text-textPrimary">
          • Stylish Aesthetic: Sleek, modern look that complements any athletic or casual outfit.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="dark:text-textPrimary">
          • Durable Outsole: High-traction rubber for enhanced grip and long-lasting wear.
        </SnText>
      </ul>

      <SnButton color="primary" size="sm" class="mt-4">
        <SnText tag="p" color="textPrimary" size="lg" weight="semibold" class="leading-7">
          Order Now
        </SnText>
      </SnButton>
    </div>
  </div>
</template>

<style scoped>
.featured-item {
  @apply max-w-[1217px] px-4 mx-auto flex flex-col md:flex-row md:gap-12 items-center md:mt-28 mt-8 	;
}
.content {
  @apply md:w-[52%] ; /* Content takes 52% of the container width on medium screens */
}

.image {
  @apply md:w-[48%]; /* Image takes 48% of the container width on medium screens */
}
</style>
