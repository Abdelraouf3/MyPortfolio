import React from 'react';
import PersonalInformation from '../../Apis/PersonalInformation.json';
import '../Home/_Home.scss';
import { Link } from 'react-router-dom';

export default function Contact() {

    const { email, phone, whatsappURL, linkedinURL, githubURL } = PersonalInformation[0] || {};

    return (
        <>
            <section className="contact2 section">
                <div className="container">
                    <div className="infoTitles text-center d-md-block d-none">
                        <span className="headTitle">contact</span>
                        <h3 className="subTitle">let's discuss your <span className="changeColor">project</span></h3>
                        <p className="paragraph">Let's make something new, different and more meaningful or make things move visual or conceptual</p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-sm-6 col-lg-4">
                            <div className="box linkedIn">
                                <a target='_blank' rel="noopener noreferrer" href={linkedinURL}>LinkedIn</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box github">
                                <a target='_blank' rel="noopener noreferrer" href={githubURL}>Github</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box gmail">
                                <a rel="noopener noreferrer" href={`mailto:${email}`}>{email}</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box whatsapp">
                                <a target='_blank' rel="noopener noreferrer" href={whatsappURL}>Whatsapp</a>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="box phone">
                                <a rel="noopener noreferrer" href={`tel:+${phone}`}>+{phone}</a>
                            </div>
                        </div>
                    </div>

                    <div className="btns d-flex justify-content-center gap-2 d-md-none">
                        <Link to='/info/' className='smallScreenBtn'>Back (Info)</Link>
                        <Link to='/skills' className='smallScreenBtn'>Next (Skills)</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
