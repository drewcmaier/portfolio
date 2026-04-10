import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function createThemeStore() {
	// Determine initial theme
	function getInitialTheme(): Theme {
		if (!browser) return 'light';

		// Check localStorage first
		const stored = localStorage.getItem('theme') as Theme | null;
		if (stored === 'light' || stored === 'dark') {
			return stored;
		}

		// Check system preference
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			return 'dark';
		}

		return 'light';
	}

	const { subscribe, set } = writable<Theme>(getInitialTheme());

	// Watch for system preference changes
	if (browser) {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleChange = (e: MediaQueryListEvent) => {
			const newTheme: Theme = e.matches ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			set(newTheme);
		};

		// Support both old and new API
		if (mediaQuery.addEventListener) {
			mediaQuery.addEventListener('change', handleChange);
		}
	}

	return {
		subscribe,
		toggle: () => {
			const currentTheme = get({ subscribe });
			const newTheme: Theme = currentTheme === 'light' ? 'dark' : 'light';
			if (browser) {
				localStorage.setItem('theme', newTheme);
				document.documentElement.setAttribute('data-theme', newTheme);
			}
			set(newTheme);
		},
		set: (theme: Theme) => {
			set(theme);
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.setAttribute('data-theme', theme);
			}
		}
	};
}

export const theme = createThemeStore();
