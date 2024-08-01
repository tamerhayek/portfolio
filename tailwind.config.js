/** @type {require('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			{
				dark: {
					primary: '#6558FF',
					'primary-focus': '#6531FF',
					'primary-content': '#ebecf0',
					secondary: '#5EEAD4',
					'secondary-focus': '#00cfbd',
					'secondary-content': '#212121',
					accent: '#1F3A8A',
					'accent-focus': '#1F5A8A',
					'accent-content': '#ebecf0',
					'base-100': '#020817',
					'base-200': '#021947',
					'base-300': '#1C143A',
					'base-content': '#EBEBF2',
					success: '#45b56e',
					error: '#96291e'
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
