export const process = {
	dev: true
};

export const site = {
	home: process.dev ? 'http://localhost:8080/' : 'https://tocode.ru'
};

export const app = {
	title: 'Notes'
};

export const links = [
	{
		title: 'Notes vue3',
		alias: 'home-vue3',
		url: '/'
	},
	{
		title: 'Notes vue2',
		alias: 'home-vue2',
		url: '/vue2'
	},
	{
		title: 'About',
		alias: 'about',
		url: '/about'
	}
];
