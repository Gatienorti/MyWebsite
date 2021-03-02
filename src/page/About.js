import React from 'react'
import './cssPage/Home.css'
import {Link} from 'react-router-dom'
import Card from './Card'
import SignImg from '../picture/background/signBckg.PNG'

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
                        <div href="https://sign-asl.vercel.app/" className='sign'>
                            <Card title="Sign Language Translator" img={SignImg}/>
                        </div>
                    </div>
                    
                </div>



            </div>

        )
    }
export default Project