// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    'switch-animation': 'transition duration-500',
    'bg-base': 'bg-[#ffffff] dark:bg-[#000000] switch-animation',
    'card-base': 'bg-[#ffffff] dark:bg-[#10101a] shadow-xl hover:shadow-2xl switch-animation',
    'text-base': 'text-[#20202a] dark:text-[#f0f0f0] switch-animation',
    'border-base': 'b-1 b-solid border-[#20202a] dark:border-[#f0f0f0] switch-animation',
    'switch-label-base': 'bg-gray-200 dark:bg-gray-800 switch-animation',
    'switch-span-base': 'bg-white dark:bg-gray-300 switch-animation',
    link: 'cursor-pointer select-none opacity-75 hover:opacity-100 text-base no-underline switch-animation',
    "social-link": 'no-underline text-dark-50 dark:text-light-50 hover:text-dark-100 dark:hover:text-light-100 flex items-center justify-center switch-animation',
    article: 'w-3/4 md:w-2/5',
  },
});
