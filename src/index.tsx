import './styles.scss';

import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 👇️ make sure to use the correct root element ID
// from your public/index.html file
const rootElement: any = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
