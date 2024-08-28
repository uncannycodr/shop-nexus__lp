<script setup lang="ts">
import { IconMoon, IconSun } from '@tabler/icons-vue'

const colorMode = useColorMode()

function toggleMode() {
  colorMode.preference = colorMode.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <footer class=" footer">
    <div class="footer-container">
      <nav class="upper-footer">
        <div class="footer-menu">
          <SnMenu
            variant="footer" vertical
          >
            <ul>
              <SnText tag="li" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                Sitemap
              </SnText>
              <SnText tag="li" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                Work
              </SnText>
              <SnText tag="li" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                About
              </SnText>
              <SnText tag="li" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                Contact
              </SnText>
            </ul>
          </SnMenu>
          <SnSocial variant="header">
            <ul>
              <li>
                <SnText tag="a" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                  Follow Us
                </SnText>
              </li>
              <li>
                <SnText tag="a" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                  Youtube
                </SnText>
              </li>
              <li>
                <SnText tag="a" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                  X
                </SnText>
              </li>
              <li>
                <SnText tag="a" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
                  Linkedin
                </SnText>
              </li>
            </ul>
          </SnSocial>
        </div>

        <SnMenu
          variant="footer" vertical
          class=""
        >
          <ul class="max-w-[200px] space-y-2 flex flex-col md:justify-normal md:ml-0 ml-16">
            <SnText tag="li" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
              Company
            </SnText>
            <SnText tag="li" color="textSecondary" size="xl" class="leading-8 dark:text-textPrimary">
              Where we are located
            </SnText>
          </ul>
        </SnMenu>
      </nav>

      <div class="lower-footer">
        <SnLogo />
        <SnText tag="p" color="textSecondary" size="sm" class="leading-6 dark:text-textPrimary">
          © 2024 ShopNexus Template
        </SnText>

        <button
          class="toggle-btn"
          aria-label="Toggle Dark Mode"
          @click="toggleMode"
        >
          <IconSun v-if="colorMode.value === 'dark'" class="h-6 w-6 text-yellow-500" />
          <IconMoon v-else class="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  @apply   bg-bgFooter dark:bg-d-bgFooter border-red-100 ;
}
.footer-container {
  @apply  max-w-[1288px] px-4 mx-auto py-10;
}
.upper-footer {
  @apply flex flex-col md:flex-row justify-center md:justify-between gap-6 md:items-start items-center border-b border-textSecondary dark:border-textPrimary px-6 pb-24
}
.footer-menu {
  @apply flex flex-col md:flex-row md:gap-48;
}
.lower-footer {
  @apply flex lg:flex-row md:flex-col flex-col md:gap-10 gap-8  md:justify-between md:mt-2 mt-6 items-center;
}
.toggle-btn{
  @apply px-4 py-2 h-9 inline-flex items-center justify-center text-slate-200 dark:text-gray-950
}
</style>
