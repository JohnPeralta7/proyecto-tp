import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import phone from './data/phone';
import Phoneview from './views/Phoneview';

let routes = [
  {    
    path: '/',
    element: <App />,
  }
]

phone.forEach(p => {
  routes.push({
    path: p.img,
    element: <Phoneview p={phone}/>
  })
})

let router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);