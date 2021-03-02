import React from 'react'
import './cssPage/Home.css'
import {Link} from 'react-router-dom'

function Contact() {
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
                                <Link className='link'  to='/resume'>
                                    Resume
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link className='link' to='/'>
                                    Portfolio
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
                <div className='aboutText'>
                    <div className="contactDiv">
                        <h1>
                        Contact
                        </h1>
                        <div>
                            <p>Email: Gatien13200@gmail.com</p>
                            <p>Phone: +1 929 305 5446</p>
                            <p><a target={"_blank"} href="https://www.linkedin.com/in/gatien-orti/">Linkedin  </a></p>
                            <p><a target={"_blank"} href="https://github.com/Gatienorti/">   Github</a></p>
                        </div>
                    </div>
                </div>



            </div>

        )
    }
export default Contact