import React from 'react';



function Card(props){
    return(
        <div className="projectCard">
            <div className="cardTitle">{props.title}</div>
            <a target={"_blank"} href={'https://sign-asl.vercel.app/'}><img src={props.img} alt='Project'/></a>
            
        </div>
    )
}

export default Card