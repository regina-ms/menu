import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Menu />} >
        <Route index element={<HomePage />} />
        <Route path='/drift' element={<DriftPage />} />
        <Route path='/timeattack' element={<TimeAttackPage />} />
        <Route path='/forza' element={<ForzaPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
