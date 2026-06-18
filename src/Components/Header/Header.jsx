import React, { useEffect, useState } from 'react'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import './_Header.scss'
import { Link } from 'react-router-dom'

export default function Header() {

    // change navbar background color when scroll down
    let [navbarColor, setNavbarColor] = useState(false)

    function changeNavbarColor () {
        if (window.scrollY >= 20) {
            setNavbarColor(true);
        } else {
            setNavbarColor(false);
        }
    }

    useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
    return () => window.removeEventListener('scroll', changeNavbarColor)
}, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { logo } = PersonalInformation[0];

    return (
    
        <>
        
            <header className="header">
            
                <nav className={ navbarColor ? "navbar navbar-expand-md d-sm-none d-md-block bg-body-tertiary boxShadow" : "navbar navbar-expand-md d-sm-none d-md-block bg-transparent boxShadow" }>
                
                    <div className="container">
                    
                        <div className="d-flex justify-content-between align-items-center w-100">
                        
                            <div className="logo">
                            
                                <Link className="navbar-brand" onClick={scrollToTop} to="/"><img src={process.env.PUBLIC_URL + logo} width={100} alt="Abdelraouf Halaby logo" /></Link>
                            
                            </div>
                        
                            <div className="collapse navbar-collapse text-end justify-content-end" id="navbarSupportedContent">
                            
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" aria-current="page" to="/#brief">brief</Link>
                                    
                                    </li>
                                
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to='/skills'>skills</Link>
                                    
                                    </li>
                                
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to="/work">latest projects</Link>
                                    
                                    </li>
                                
                                    <li className="nav-item">
                                    
                                        <Link className="nav-link" to='/contact'>contact</Link>
                                    
                                    </li>
                                
                                    <li className="nav-item">
                                    
                                        <a 
                                            className="nav-link" 
                                            href={process.env.PUBLIC_URL + '/CV/cv.pdf'} 
                                            download="cv.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            download CV
                                        </a>
                                    
                                    </li>
                                
                                </ul>
                            
                            </div>
                        
                        </div>
                    
                    </div>
                
                </nav>
            
            </header>
        
        </>

)

}