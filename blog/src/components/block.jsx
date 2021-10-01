import React from 'react';

const Block = (props) =>{
    return(
      
                <div className={props.element.div}>
                    <img src={props.element.image} alt="img" className={props.element.class}/>
                    <div>{!props.isMall && <h3>{props.element.heading}</h3>}</div>
                    <div>{props.isMall && <h1>{props.element.heading}</h1>}</div>
                    <div>{props.element.subtext}</div>
                </div>
            )
  
}

export default Block