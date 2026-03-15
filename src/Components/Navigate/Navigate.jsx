import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigate() {
    return (
    
        <>
        
        <section className="section">
        
            <div className="container">
            
                <div className="boxShadow">
                
                    <h4 className="title">Where would you like to go?</h4>
                
                </div>
            
                <div className="links">
                
                    <div className="linkShadow">
                    
                        <Link to='/info'>info</Link>
                
                    </div>
                    
                    <div className="linkShadow">
                    
                        <Link to='/contact'>links/contacts</Link>
                    
                    </div>
                    
                    <div className="linkShadow">
                        
                        <Link to='/skills'>skills</Link>
                    
                    </div>
                    
                    <div className="linkShadow">
                        
                        <Link to='/work'>projects</Link>
                    
                    </div>
                
                </div>
            
            </div>
        
        </section>
        
        </>
    
    )
}
