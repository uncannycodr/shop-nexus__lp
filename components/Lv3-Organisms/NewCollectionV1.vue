<script setup lang="ts">
import NewCollectionV1 from '~/assets/images/NewCollectionV1.png'
</script>

<template>
  <div class="NewCollectionV1">
    <div class="content space-y-12 mt-8 ">
      <div class="content-text space-y-2">
        <div class="heading">
          <div class="heading-line" />
          <SnText tag="h3" color="textSecondary" size="base" weight="semibold" class="dark:text-textPrimary">
            New collection
          </SnText>
        </div>
        <SnText tag="h1" color="textSecondary" size="1.75rem" weight="bold" class="dark:text-textPrimary">
          Stride Master Elite
        </SnText>
      </div>

      <div class="space-y-6">
        <div class="flex gap-4">
          <SnText tag="span" color="circle3" size="base" weight="semibold" class="line-through decoration-[3px] decoration-textSecondary dark:text-textPrimary dark:decoration-textPrimary">
            Regular $150
          </SnText>
          <SnText tag="span" color="textSecondary" size="base" weight="semibold" class="dark:text-textPrimary">
            Just $60
          </SnText>
        </div>
        <SnButton color="primary" size="sm">
          <SnText tag="p" color="textPrimary" size="lg" weight="semibold">
            Shop
          </SnText>
        </SnButton>
      </div>
    </div>

    <div class="image mt-8 md:mt-0">
      <img :src="NewCollectionV1" alt="New Collection 1" class="w-full h-auto md:w-auto md:h-full">
    </div>
  </div>
</template>

<style scoped>
.NewCollectionV1 {
  @apply max-w-[1150px] px-4 mx-auto flex flex-col md:gap-16 gap-16  md:flex-row  md:mt-28 ;
}

.heading {
  @apply flex items-center space-x-4;
}

.heading-line {
  @apply h-0.5 w-14 bg-textSecondary dark:bg-d-textPrimary ;
}

.content {
  @apply md:w-[30%]; /* Content takes 70% of the container width on medium screens */
}

.image {
  @apply md:w-[70%]; /* Image takes 30% of the container width on medium screens */
}

img {
  @apply object-cover w-full h-auto; /* Ensure the image scales to its container */
}
</style>
