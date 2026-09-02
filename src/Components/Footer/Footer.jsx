import { motion } from 'motion/react'
import { itemVariantsFromDown, listVariants } from '../../animations/variants'
import PersonalInformation from '../../Apis/PersonalInformation.json'

const {name} = PersonalInformation[0]

export default function Footer() {

    return (
    
        <motion.footer className="footer" 
            variants={listVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
        >
        
            <div className="container">
            
                <div className="d-flex justify-content-between footer-inner">
                
                    <div className="designedBy">
                    
                        <motion.h4 variants={itemVariantsFromDown}>Designed by {name}</motion.h4>
                    
                    </div>
                
                    <div className="social">
                    
                        <motion.a target='_blank' rel="noopener noreferrer" href='https://github.com/Abdelrouaf' aria-label="GitHub Profile" variants={itemVariantsFromDown}><i className="fa-brands fa-github"></i></motion.a>
                    
                        <motion.a target='_blank' rel="noopener noreferrer" href='https://wa.me/+201154812462' aria-label="Whatsapp" variants={itemVariantsFromDown}><i className="fa-brands fa-whatsapp"></i></motion.a>
                    
                        <motion.a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/abdelraouf-halaby-578913235/' aria-label="LinkedIn Profile" variants={itemVariantsFromDown}><i className="fa-brands fa-linkedin-in"></i></motion.a>
                    
                    </div>
                
                </div>
            
            </div>
        
        </motion.footer>
    
    )
}
