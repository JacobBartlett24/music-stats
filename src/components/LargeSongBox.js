import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom"

const LargeSongBox = (props) =>{
    
    return(
        
        <div className='SongBox Large'>
            <img src={props.picture} alt={props.picture}></img>
            <div>{props.name}</div>
            <div>{props.listens}</div>
            {props.link}
        </div>
    )
}

export default LargeSongBox;