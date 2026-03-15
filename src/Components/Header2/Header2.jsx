import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './_Header2.scss'

export default function Header2() {

    const location = useLocation();
    const [lastDirectory, setLastDirectory] = useState('');
    
    useEffect(() => {
    
        const pathArray = location.pathname.split('/');
        let lastDir = pathArray[pathArray.length - 1];
    
        if (!lastDir) {
            lastDir = 'Welcome';
        }
    
        setLastDirectory(lastDir);
    
        }, [location]);

    return (
    
        <>
        
            <header className="header smallScreen d-sm-block d-md-none">
                
                <div className="container">
                    
                    <div className="d-flex align-items-baseline">
                    
                        <div className="logo">
                        
                            <Link className="navbar-brand" to="/"></Link>
                        
                        </div>
                    
                        <div className="navigate">
                        
                            <h4 className="navigateTitle">{lastDirectory}</h4>
                        
                        </div>
                    
                    </div>
            
                </div>
                
            </header>
        
        </>
    
    )
}
