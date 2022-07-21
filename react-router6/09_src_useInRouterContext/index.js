import { createRoot } from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import App from './App'
import Demo from './components/Demo';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <div>
    <Demo/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);