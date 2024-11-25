/** @type {require('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#16166B',
					'primary-focus': '#6531FF',
					'primary-content': '#B7B7F1',
					secondary: '#FFC800',
					'secondary-focus': '#00cfbd',
					'secondary-content': '#212121',
					neutral: '#2E2A2E',
					'neutral-content': '#BFBECC',
					'base-100': '#06061E',
					'base-200': '#0C0C3C',
					'base-300': '#13135B',
					'base-content': '#B7B7F1'
				}
			}
		],
		darkTheme: 'dark',
		base: true,
		styled: true,
		utils: true,
		prefix: '',
		logs: false,
		themeRoot: ':root'
	}
};
