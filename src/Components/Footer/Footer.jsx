import React from 'react'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import './_Footer.scss'

const {name} = PersonalInformation[0]

export default function Footer() {

    return (
    
        <footer className="footer">
        
            <div className="container">
            
                <div className="d-flex justify-content-between footer-inner">

                    <div className="designedBy">
                    
                        <h4>Designed by {name}</h4>
                    
                    </div>
                
                    <div className="social">
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/abdelrouaf.halaby' aria-label="Facebook Profile"><i className="fa-brands fa-facebook-f"></i></a>
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://github.com/Abdelrouaf' aria-label="GitHub Profile"><i className="fa-brands fa-github"></i></a>
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://wa.me/+201154812462' aria-label="Whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
                    
                        <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/abdelraouf-halaby-578913235/' aria-label="LinkedIn Profile"><i className="fa-brands fa-linkedin-in"></i></a>
                    
                    </div>
                
                </div>
            
            </div>
        
        </footer>
    
    )
}
