import React from 'react'
import './cssPage/Home.css'
import {Link} from 'react-router-dom'

function Resume(){
        return(
            <div className='body'>
                <div className='navBar'>
                     <div className='logo'>
                         <span>Gatien</span> Orti-vinas
                     </div>
                    <div className='mainNav'>
                        <ul className="navList">
                            <li>
                                <Link className='link'  to='/'>
                                   Home
                                </Link>
                            </li>
                            <li>
                                <Link className='link'  to='/project'>                        
                                Project                                   
                                </Link>
                            </li>
                            {/* <li>
                                <Link className='link' to='/resume'>
                                    Resume
                                </Link>
                            </li> */}
                            <li>
                                <Link className='link'  to='/contact'>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className='resumeText'>
                    <div className="resumeDiv">
                        <div className="experience">
                        <h2>Experience:</h2>
                        <div className='expCard'>
                        <p>
                         <h4>Atrium Dumbo, New York — Executif chef</h4>01/2020 - 10/2020
                            <ul>
                                <li>Guided junior kitchen staff (20 people)</li>
                                <li>Created new high-quality plates, in terms of taste and design </li>
                                <li>Ordered food supply daily, sourced new suppliers, and reduced food costs</li>
                                <li>Kept a positive and professional approach with coworkers</li>
                            </ul>
                        </p>
                        </div>
                        <div className='expCard'>
                        <p>
                         <h4>Majorelle, New York  — Chef de cuisine</h4>03/2018 - 11/2019
                            <ul>
                                <li>Oversee menu creation, food operations, and management of ingredient stocking</li>
                                <li>Reduced  restaurant Food Cost  by 35% by introducing strict inventory  management</li>
                                <li>Test product and source new  farmers to growth with our restaurant</li>
                                <li>Hired and trained staff help profit margins </li>
                            </ul>
                        </p>
                        </div>
                        </div>
                    </div>
                    
                </div>



            </div>

        )
    }
export default Resume