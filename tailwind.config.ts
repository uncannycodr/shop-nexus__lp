import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',

  theme: {
    extend: {
      backgroundImage: {
        'ad-space': 'url(~/assets/images/adSpace.png)',
      },
      colors: {
        'background': 'var(--background)',
        'primary': 'var(--primary)',
        'secondary': 'var(--secondary)',
        'textPrimary': 'var(--text-primary)',
        'textSecondary': 'var(--text-secondary)',
        'bgFooter': 'var(--bg-footer)',
        'circle1': 'var(--circle1)',
        'circle2': 'var(--circle2)',
        'circle3': 'var(--circle3)',
        'banner': 'var(--banner)',
        'd-background': 'var(--d-background)',
        'd-primary': 'var(--d-primary)',
        'd-secondary': 'var(--d-secondary)',
        'd-textPrimary': 'var(--d-text-primary)',
        'd-textSecondary': 'var(--d-text-secondary)',
        'd-bgFooter': 'var(--d-bg-footer)',
        'd-circle1': 'var(--d-circle1)',
        'd-circle2': 'var(--d-circle2)',
        'd-circle3': 'var(--d-circle3)',
        'd-banner': 'var(--d-banner)',
      }
    }
  },
  plugins: [],
}
