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
import Intro from './Components/Intro/Intro';
import { useState } from 'react';
import Experience from './Components/Experience/Experience';

const router = createBrowserRouter(
  
    createRoutesFromElements(
    
      <Route path='/' element={<Layout/>} errorElement={<NotFound/>} >
      
        <Route index element={<Home/>} />
      
        <Route path='work' element={<Work/>} />
      
        <Route path='contact' element={<Contact/>} />
      
        <Route path='project/:rank' element={<Project/>} />
      
        <Route path='info' element={<Brief/>} />
      
        <Route path='navigate' element={<Navigate/>} />
      
        <Route path='skills' element={<Skills/>} />
      
        <Route path='experience' element={<Experience />} />
      
      </Route>
    
    )
  
  , {basename: process.env.PUBLIC_URL} )

function App() {

  const [showIntro, setShowIntro] = useState(() => {
        return !sessionStorage.getItem('introShown');
    });

    const handleIntroComplete = () => {
        sessionStorage.setItem('introShown', 'true');
        setShowIntro(false);
    };

  return (

    <>
    
      {showIntro && (
        <Intro onComplete={handleIntroComplete} />
      )}
    
      <RouterProvider router={router} />
    
    </>

  );
}

export default App;