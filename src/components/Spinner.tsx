import React from 'react';

interface SpinnerProps{
    type:string
}

const Spinner = ({type}:SpinnerProps)=>{
    return(
        <div className={`${type}`}></div>
    );
}

export default Spinner;