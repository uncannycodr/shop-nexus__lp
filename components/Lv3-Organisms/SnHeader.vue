<script setup lang="ts">
import { ref } from 'vue'
import { IconBrandFacebook, IconBrandX, IconBrandYoutube, IconMenuDeep, IconMoon, IconSun, IconX } from '@tabler/icons-vue'

// Reactive state to control the visibility of the menu
const isMenuOpen = ref(false)

// Function to toggle the menu state
function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <header class=" border-b-2 border-textSecondary dark:border-textPrimary pb-4 ">
    <nav class="flex items-center justify-between pt-5 nav-container ">
      <!-- Logo -->
      <SnLogo />

      <!-- Navigation Menu (Default) -->
      <SnMenu
        variant="header"
        class="hidden md:flex items-center  bg-primary dark:bg-d-background md:bg-transparent  w-auto px-5"
      >
        <ul class="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-6">
          <li>
            <SnText tag="a" color="textSecondary" fluid="xs" weight="semibold" class="dark:text-textPrimary">
              Home
            </SnText>
          </li>
          <li>
            <SnText tag="a" color="textSecondary" fluid="xs" weight="semibold" class="dark:text-textPrimary">
              About
            </SnText>
          </li>
          <li>
            <SnText tag="a" color="textSecondary" fluid="xs" weight="semibold" class="dark:text-textPrimary">
              Shop
            </SnText>
          </li>
          <li>
            <SnText tag="a" color="textSecondary" fluid="xs" weight="semibold" class="dark:text-textPrimary">
              Testimonial
            </SnText>
          </li>
          <li>
            <SnText tag="a" color="textSecondary" fluid="xs" weight="semibold" class="dark:text-textPrimary">
              Contact
            </SnText>
          </li>
        </ul>
      </SnMenu>

      <!-- Navigation Menu (Responsive) -->
      <SnMenu
        variant="header"
        class="fixed top-0 right-0 bg-primary  w-60 h-full p-6 pt-16  transition-transform duration-300 ease-in-out z-50 md:hidden"
        :class="[
          isMenuOpen ? 'translate-x-0' : 'translate-x-full',
        ]"
      >
        <!-- Close Button (Visible when the menu is open on mobile) -->
        <button
          v-if="isMenuOpen"
          class="absolute top-5 right-5 text-textPrimary bg-transparent p-2"
          @click="toggleMenu"
        >
          <IconX class="w-6 h-6" />
        </button>

        <ul class="flex flex-col space-y-6">
          <li><a href="#home" class="menu-item">Home</a></li>
          <li><a href="#about" class="menu-item">About</a></li>
          <li><a href="#shop" class="menu-item">Shop</a></li>
          <li><a href="#testimonial" class="menu-item">Testimonial</a></li>
          <li><a href="#contact" class="menu-item">Contact</a></li>
        </ul>
      </SnMenu>

      <!-- Social Menu -->
      <SnSocial variant="header" class="hidden md:block">
        <ul class="flex items-center space-x-4">
          <li><IconBrandX class="social-icon" /></li>
          <li><IconBrandFacebook class="social-icon" /></li>
          <li><IconBrandYoutube class="social-icon" /></li>
          <button
            class="toggle-btn"
            aria-label="Toggle Dark Mode"
            @click="toggleMode"
          >
            <IconSun v-if="colorMode.value === 'dark'" class="h-6 w-6 text-yellow-500" />
            <IconMoon v-else class="h-6 w-6 text-gray-500" />
          </button>
        </ul>
      </SnSocial>

      <!-- Hamburger Menu Button -->
      <button class="md:hidden p-2 text-textSecondary dark:text-textPrimary bg-transparent" @click="toggleMenu">
        <IconMenuDeep class="w-6 h-6" />
      </button>
    </nav>
  </header>
</template>

<style scoped>
.nav-container {
  @apply max-w-[1240px] px-4 mx-auto;
}

.menu-item {
  @apply text-lg font-semibold text-textPrimary;
}

.social-icon {
  @apply text-textSecondary w-6 h-6 dark:text-textPrimary;
}
</style>
