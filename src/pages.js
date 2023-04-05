import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import { Pets }  from './pets';
import { AddPet} from './addPet';

export function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Pets />} path="/" />
        <Route element={<AddPet />} path="addPet" />
      </Routes>
    </BrowserRouter>
  );
}
