import React from 'react'
import './cssPage/Home.css'
import {Link} from 'react-router-dom'

function Project(){
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
                <div className='AboutText'>
                    <div className="aboutDiv">
                        <h1>
                        My Project
                        </h1>
                        <div className='sign'>
                            <h2><a href='https://signae-8pb8fvwi5.vercel.app/'>Sign Language Translator</a></h2>
                            <p>
                            My goal with this project is to able people that are mute and/or deaf to be able to use zoom and other telecommunication services

For the moment my project translate sign laguage to word, my second step will be to add an AI voice to read each word that are sign and to add more sign
                            </p>
                        </div>
                    </div>
                    
                </div>



            </div>

        )
    }
export default Project