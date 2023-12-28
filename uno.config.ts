// uno.config.ts
import { defineConfig } from 'unocss';

export default defineConfig({
  // ...UnoCSS options
  shortcuts: {
    'switch-animation': 'transition duration-300',
    'bg-base': 'bg-[#ffffff] dark:bg-[#000000] switch-animation',
    'card-base': 'bg-[#ffffff] dark:bg-[#10101a] switch-animation',
    'text-base': 'text-[#20202a] dark:text-[#f0f0f0] switch-animation',
    'switch-label-base': 'bg-gray-200 dark:bg-gray-800 switch-animation',
    'switch-span-base': 'bg-white dark:bg-gray-300 switch-animation',
    link: 'cursor-pointer select-none opacity-75 hover:opacity-100 text-base no-underline',
    article: 'w-3/4 md:w-2/5',
    'border-base': 'border-[#20202a] border:text-[#f0f0f0] switch-animation',
  },
});
