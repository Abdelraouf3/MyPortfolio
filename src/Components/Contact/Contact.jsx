import { Link } from 'react-router-dom';
import { motion } from 'motion/react'
import PersonalInformation from '../../Apis/PersonalInformation.json';
import { itemVariantsFromDown, listVariants } from '../../animations/variants';

export default function Contact() {

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0] || {};

    return (
        <>
        
            <motion.section className="contact2 section"
                variants={listVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
            
                <div className="container">
                
                    <div className="infoTitles text-center d-md-block d-none">
                    
                        <motion.span className="headTitle" variants={itemVariantsFromDown}>contact</motion.span>
                    
                        <motion.h3 className="subTitle" variants={itemVariantsFromDown}>let's discuss your <span className="changeColor">project</span></motion.h3>
                    
                        <motion.p className="paragraph" variants={itemVariantsFromDown}>Let's make something new, different and more meaningful or make things move visual or conceptual</motion.p>
                    
                    </div>
                
                    <div className="row justify-content-center">
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box linkedIn" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={linkedinURL}>LinkedIn</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box github" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={githubURL}>Github</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box gmail" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={`mailto:${email}`}>{email}</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box whatsapp" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={whatsappURL}>Whatsapp</a>
                            </motion.div>
                        
                        </div>
                    
                        <div className="col-sm-6 col-lg-4">
                        
                            <motion.div className="box phone" variants={itemVariantsFromDown}>
                                <a target='_blank' rel="noopener noreferrer" href={`tel:+${phone}`}>+{phone}</a>
                            </motion.div>
                        
                        </div>
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2">
                    
                        <Link to='/info' className='smallScreenBtn'>Back (Info)</Link>
                    
                        <Link to='/skills' className='smallScreenBtn'>Next (Skills)</Link>
                    
                    </div>
                
                </div>
            
            </motion.section>
        
        </>
    
    );

}