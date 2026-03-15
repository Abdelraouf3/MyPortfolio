import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Works from '../../Apis/Works.json'
import './_Header2.scss'

export default function Header2() {

    const location = useLocation();
    const [lastDirectory, setLastDirectory] = useState('');
    
    useEffect(() => {

        const pathArray = location.pathname.split('/').filter(Boolean);
        let lastDir = pathArray[pathArray.length - 1];

        if (!lastDir) {
            // root path → Welcome
            lastDir = 'Welcome';

        } else if (!isNaN(lastDir)) {
            // last segment is a number
            const prevSegment = pathArray[pathArray.length - 2];

            if (prevSegment === 'project') {
                // ✅ find project title from Works.json
                const project = Works.find(w => w.id === parseInt(lastDir));
                lastDir = project ? `project / ${project.title}` : 'project';
            } else {
                lastDir = prevSegment || 'Welcome';
            }
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
