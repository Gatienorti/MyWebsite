import React from 'react'
import './cssPage/Home.css'
import {Link} from 'react-router-dom'


function Home() {
    
        return(
            <div className='body'>
                <div className='navBar'>
                     <div className='logo'>
                         <span>Wel</span>come
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
                                <Link className='link' to='/resume' >
                                    Resume
                                </Link>
                            </li> */}
                            {/* <li>
                                <Link className='link' >
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
                <div className='mainText'>
                    <div className='myName'>
                       <h1>I'm <span>Gatien</span></h1>
                    </div>
                    <div className='myhobbies'>
                        programmer <span className='hide'>|</span> Web Geek <span className='hide'>|</span> Tech Savvy
                    </div>
                    <div className='enterBtn'>
                        <a target={"_blank"} href='https://docs.google.com/document/d/19jWfmJJrJvO4dmHhnpnRWtsbuuyE2s39t6kki-CYkes/edit?usp=sharing' download='My Resume'>download my resume</a>
                    </div>
                    <div className='incons'>
                        <ul>
                            <li><a target={"_blank"} href='https://www.linkedin.com/in/gatien-orti/'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></li>
                            <li><a target={"_blank"} href='https://github.com/Gatienorti'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                        </ul>
                    </div>
                    
                </div>



            </div>

        )
}

export default Home