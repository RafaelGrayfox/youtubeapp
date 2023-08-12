import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HamburgerButtonStore } from './contexts/HamburgerButtonStore';
import { MenuItemStore } from './contexts/MenuIconStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HamburgerButtonStore>
      <MenuItemStore>
        <App />
      </MenuItemStore>
    </HamburgerButtonStore>
  </React.StrictMode>
);

