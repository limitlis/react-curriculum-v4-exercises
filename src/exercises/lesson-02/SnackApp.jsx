import SnackHeader from './SnackHeader';
import SnackList from './SnackList';
import SnackFooter from './SnackFooter';
import { StrictMode } from 'react';
import './snack-app.css';

export default function SnackApp() {
  return (
    <StrictMode>
      <div className="snacks-app">
        <SnackHeader />
        <SnackList />
        <SnackFooter />
      </div>
    </StrictMode>
  );
}
