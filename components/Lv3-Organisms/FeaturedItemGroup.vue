<script setup lang="ts">
import FeaturedItem1 from '~/assets/images/FeaturedItem1.png'
import FeaturedItem2 from '~/assets/images/FeaturedItem2.png'
import FeaturedItem3 from '~/assets/images/FeaturedItem3.png'

const featuredItems = [
  {
    imgSrc: FeaturedItem1,
    title: 'SpeedFlex Racer: Push Your Limits',
    description: 'Unleash your inner athlete with the SpeedFlex Racer. Engineered for speed and agility, these sneakers feature a lightweight design and responsive cushioning. Perfect for runners and fitness enthusiasts looking to break their personal bests.',
  },
  {
    imgSrc: FeaturedItem2,
    title: 'UrbanStride Comfort: Walk in Style',
    description: 'Experience all-day comfort with UrbanStride Comfort sneakers. With a sleek, modern design and breathable fabric, these shoes are perfect for city dwellers and casual wearers alike. Stay stylish and comfortable, no matter where your day takes you.',
  },
  {
    imgSrc: FeaturedItem3,
    title: 'TrailBlaze Pro: Conquer Every Terrain',
    description: 'Tackle any trail with confidence in the TrailBlaze Pro. Designed for durability and stability, these sneakers feature a rugged outsole and waterproof materials. Ideal for hikers and outdoor adventurers seeking reliable performance in every step.',
  },
]
</script>

<template>
  <div class="FeaturedItemGroup">
    <SnText
      tag="p"
      color="textSecondary"
      fluid="sm"
      weight="semibold"
      class="md:mb-6 lg:mb-12 mt-4 mb-4 md:leading-10 leading-7 text-center dark:text-textPrimary"
    >
      Featured Item
    </SnText>

    <div class="FeaturedItem-wrapper">
      <!-- featured items -->
      <div
        v-for="(item, index) in featuredItems"
        :key="index"
        class="featured-item flex flex-col justify-center items-center"
      >
        <!-- image -->
        <div class="image">
          <img :src="item.imgSrc" alt="featured item" class="w-full h-auto">
        </div>

        <!-- content -->
        <div class="content flex flex-col justify-center items-center text-center lg:mt-4">
          <SnText tag="p" color="textSecondary" fluid="sm" weight="semibold" class="md:mb-0 mt-4 mb-4 md:leading-10 leading-7 dark:text-textPrimary">
            Featured Item
          </SnText>
          <SnText tag="p" color="textSecondary" fluid="xl" weight="semibold" class="md:leading-7 leading-6 dark:text-textPrimary">
            {{ item.title }}
          </SnText>
          <SnText tag="p" color="textSecondary" fluid="xl" class="md:leading-7 leading-6 dark:text-textPrimary">
            {{ item.description }}
          </SnText>

          <SnButton color="primary" size="sm" class="mt-6">
            <SnText tag="p" color="textPrimary" size="lg" weight="semibold">
              Buy Now
            </SnText>
          </SnButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.FeaturedItemGroup {
  @apply max-w-[1300px] px-4 md:mt-16 mx-auto;
}

.FeaturedItem-wrapper {
  @apply grid grid-cols-1 gap-4 md:gap-8  md:grid-cols-2 lg:grid-cols-3;
}

.featured-item {
  @apply flex flex-col justify-center items-center;
}

.content {
  @apply flex flex-col justify-center items-center text-center;
}

.image img {
  @apply w-full h-auto;
}
</style>
