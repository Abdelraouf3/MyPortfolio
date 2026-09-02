import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import { itemVariantsFromDown, listVariants } from '../../animations/variants';

export default function Skills() {

    const { skills, skillsName } = PersonalInformation[0];

    return (
    
        <>
        
            <motion.section className="skills section"
                variants={listVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}
            >
                
                <div className="container">
                
                    <div className="infoTitles infoTitles2 d-md-block d-none">
                    
                        <motion.span className="headTitle" variants={itemVariantsFromDown}>my skills</motion.span>
                    
                        <motion.h3 className="subTitle" variants={itemVariantsFromDown}>Why hire me for your <span className="changeColor">project?</span> </motion.h3>
                    
                        <motion.p className="paragraph" variants={itemVariantsFromDown}>I create engaging and responsive user interfaces that enhance user experience and meet business objectives.</motion.p>
                    
                        <motion.div className="btns" variants={itemVariantsFromDown}>
                        
                            <Link to='/contact' className='primaryBtn'>hire me</Link>
                        
                        </motion.div>
                    
                    </div>
                
                    <div className="boxShadow d-md-none d-block">

                        <motion.span className="title" variants={itemVariantsFromDown}>skills</motion.span>

                    </div>
                
                    <div className="row justify-content-center align-items-center">
                    
                        {skills.map( (skill, index) =>  (
                                
                                <motion.div className="col-md-6 col-lg-3" key={`${skill}-${index}`} variants={itemVariantsFromDown}>
                        
                                    <div className="box skillsBox text-center">
                                    
                                        <div className="image">
                                        
                                            <img src={process.env.PUBLIC_URL + skill} alt={skillsName[index]} />
                                        
                                        </div>
                                    
                                        <h4 className='personalSkill'>{skillsName[index]}</h4>
                                    
                                    </div>
                                
                                </motion.div>
                            
                            ) )}
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                    
                        <Link to='/contact' className='smallScreenBtn'>Back (Contact)</Link>
                    
                        <Link to='/work' className='smallScreenBtn'>Projects</Link>
                    
                    </div>
                
                </div>
                
            </motion.section>
        
        </>
    
    )
}
