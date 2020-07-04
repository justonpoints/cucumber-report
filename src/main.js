import App from './App.svelte';
require('./mystyles.scss');

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

window.app = app;

export default app;
