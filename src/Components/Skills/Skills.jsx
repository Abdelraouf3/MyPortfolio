import React from 'react'
import PersonalInformation from '../../Apis/PersonalInformation.json'
import { Link } from 'react-router-dom'
import '../Home/_Home.scss'

export default function Skills() {

    const { skills, skillsName } = PersonalInformation[0];

    return (
    
        <>
        
            <section className="skills section">
                
                <div className="container">
                
                    <div className="infoTitles infoTitles2 d-md-block d-none">
                    
                        <span className="headTitle">my skills</span>
                    
                        <h3 className="subTitle">Why hire me for your <span className="changeColor">project?</span> </h3>
                    
                        <p className="paragraph">I create engaging and responsive user interfaces that enhance user experience and meet business objectives.</p>
                    
                        <div className="btns">
                        
                            <Link to='/contact' className='primaryBtn'>hire me</Link>
                        
                        </div>
                    
                    </div>
                
                    <div className="boxShadow d-md-none d-block">

                        <span className="title">skills</span>

                    </div>
                
                    <div className="row justify-content-center align-items-center">
                    
                        {skills.map( (skill, index) =>  (
                                
                                <div className="col-md-6 col-lg-3" key={`${skill}-${index}`}>
                        
                                    <div className="box text-center">
                                    
                                        <div className="image">
                                        
                                            <img src={process.env.PUBLIC_URL + skill} width={100} alt={skillsName[index]} />
                                        
                                        </div>
                                    
                                        <h4 className='personalSkill'>{skillsName[index]}</h4>
                                    
                                    </div>
                                
                                </div>
                            
                            ) )}
                    
                    </div>
                
                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                    
                        <Link to='/contact' className='smallScreenBtn'>Back (Contact)</Link>
                    
                        <Link to='/work' className='smallScreenBtn'>Projects</Link>
                    
                    </div>
                
                </div>
                
            </section>
        
        </>
    
    )
}
