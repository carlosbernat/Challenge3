import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import FirstApp from './FirstApp';
import  ComponentApp  from './ComponentApp';
import  GifExpertApp from './GitfExpertApp';
import reportWebVitals from './reportWebVitals';
import DataDisplay from './DataDisplay';
import MultipleCustomHooks from './components/MultipleCustomHooks';
import { Father } from './components/Father';
import { CallbackHook } from './components/CallbackHook';
import { MemoHook } from './components/MemoHook';
import { Memorize } from './components/Memorize';
import { TodoApp } from './components/TodoApp';
import './styles.css';
import NavComponent from './components/NavComponent';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PrivateRoute from './Context/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <NavComponent />
    <FirstApp value = {20} />
    <ComponentApp />
    <GifExpertApp />
    <DataDisplay />
    <Father />
    <CallbackHook />
    <MemoHook />
    <Memorize />
    <MultipleCustomHooks />
    <TodoApp />
    <HomePage />
    <AboutPage />

    <PrivateRoute />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
