<script setup lang="ts">
const name = ref('')
</script>

<template>
  <div class="contact-form">
    <SnText tag="h3" color="textSecondary" fluid="base" weight="semibold" class="mb-4 dark:text-textPrimary">
      Fill out our form to reach out
    </SnText>
    <div class="form">
      <SnInput
        v-model="name"
        type="text"
        size="sm"
        placeholder="Name*"
        class="dark:bg-d-background bg-white placeholder-d-bgFooter dark:placeholder-textPrimary"
      />
      <SnInput
        v-model="name"
        type="text"
        size="sm"
        placeholder="E-mail*"
        class="dark:bg-d-background bg-white placeholder-d-bgFooter dark:placeholder-textPrimary"
      />
      <SnInput
        v-model="name"
        type="text"
        size="sm"
        placeholder="Subject"
        class="dark:bg-d-background bg-white placeholder-d-bgFooter dark:placeholder-textPrimary"
      />
      <SnTextarea class="dark:bg-d-background bg-white placeholder-d-bgFooter dark:placeholder-textPrimary" />
    </div>
    <SnButton color="primary" size="lg">
      <SnText tag="p" color="textPrimary" size="lg" weight="semibold">
        Send Message
      </SnText>
    </SnButton>
  </div>
</template>

<style scoped>
.contact-form {
  @apply max-w-[1039px] px-4 mx-auto flex flex-col gap-12 md:mt-16 mt-16 md:mb-16 mb-10 ;
}

.form {
  @apply flex flex-col gap-6;
}
</style>
