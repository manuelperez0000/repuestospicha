import React from 'react';
import useNotify from './hooks/useNotify';
import Router from './pages/Router';

const App: React.FC = () => {

  const { ToastContainer } = useNotify()
  
  return <>
    <ToastContainer theme="dark" />
    <Router />
  </>
};

export default App;
