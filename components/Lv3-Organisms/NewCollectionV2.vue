<script setup lang="ts">
import NewCollectionV2 from '~/assets/images/NewCollectionV2.png'
</script>

<template>
  <div class="NewCollectionV2 ">
    <div class="content">
      <div class="heading">
        <div class="heading-line" />
        <SnText tag="h3" color="textSecondary" fluid="xs" weight="semibold" class="leading-6 dark:text-textPrimary">
          New collection
        </SnText>
      </div>
      <SnText tag="h3" color="textSecondary" fluid="sm" weight="semibold" class="leading-6 md:leading-10 mt-1 mb-0.5 dark:text-textPrimary">
        BlazeStride Pro: Ignite Your Performance
      </SnText>
      <ul>
        <SnText tag="li" color="textSecondary" fluid="xs" class="list ">
          •️ Unmatched Comfort: Cushioned insoles for all-day support.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="list">
          •️ Sleek Design: Modern and stylish to keep you looking sharp.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="list">
          •️ Enhanced Speed: Lightweight materials for faster movement.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="list">
          •️ Breathable Fabric: Keeps your feet cool and dry.
        </SnText>
        <SnText tag="li" color="textSecondary" fluid="xs" class="list">
          •️ Durable Build: High-quality construction for long-lasting wear.
        </SnText>
      </ul>
      <SnButton color="primary" size="sm" class="mt-4">
        <SnText tag="p" color="textPrimary" size="lg" weight="semibold" class="leading-7">
          More
        </SnText>
      </SnButton>
    </div>

    <div class="image ">
      <img :src="NewCollectionV2" alt="New Collection 1" class="w-full h-auto md:w-auto md:h-full">
    </div>
  </div>
</template>

<style scoped>
.NewCollectionV2 {
  @apply max-w-[1200px] px-4 mx-auto flex flex-col md:flex-row-reverse md:gap-16 mt-7	md:mt-20 md:mb-16 mb-6 gap-6;
}
.heading {
  @apply flex items-center space-x-4;
}

.heading-line {
  @apply h-0.5 w-14 bg-textSecondary dark:bg-d-textPrimary;
}
.list{
  @apply leading-6 dark:text-textPrimary;
}
.content {
  @apply md:w-[52%]; /* Content takes 52% of the container width on medium screens */
}

.image {
  @apply md:w-[48%]; /* Image takes 48% of the container width on medium screens */
}
</style>
