import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Work from './Components/Work/Work';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Brief from './Components/Brief/Brief';
import Navigate from './Components/Navigate/Navigate';
import Skills from './Components/Skills/Skills';

const router = createBrowserRouter(
  
    createRoutesFromElements(
    
      <Route path='/' element={<Layout/>} errorElement={<NotFound/>} >
      
        <Route index element={<Home/>} />
      
        <Route path='work' element={<Work/>} />
      
        <Route path='contact' element={<Contact/>} />
      
        <Route path='project/:id' element={<Project/>} />
      
        <Route path='info' element={<Brief/>} />
      
        <Route path='navigate' element={<Navigate/>} />
      
        <Route path='skills' element={<Skills/>} />
      
      </Route>
    
    )
  
  , {basename: process.env.PUBLIC_URL} )

function App() {

  return (

      <RouterProvider router={router} />

  );
}

export default App;
