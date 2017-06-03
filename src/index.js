import {h, render, options as preactOptions} from 'preact';  // eslint-disable-line no-unused-vars
import 'styles/index.less'; // eslint-disable-line import/no-unassigned-import

let root;
function init() {
	preactOptions.debounceRendering = requestAnimationFrame;
	const App = require('components/app.js').default;
	root = render((<App />), document.body, root);
}

// In development, set up HMR:
if (module.hot) {
	require('preact/devtools'); // eslint-disable-line import/no-unassigned-import
	module.hot.accept('./components/app.js', () => requestAnimationFrame(init));
}

init();
