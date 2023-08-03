import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UIControllerProvider } from './context';

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <BrowserRouter>
    <UIControllerProvider>
      <App />
    </UIControllerProvider>
  </BrowserRouter>
);
