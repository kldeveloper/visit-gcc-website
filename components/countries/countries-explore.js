import React from 'react'
import style from './style.module.css';
import { CiCircleChevRight } from "react-icons/ci";


function CountryExplore(props) {

    return (
        <>
        <a  className={`item ${style['item-padding']}`}>
                <div className={style['country-explore-item']}>
                    <img src={props.image} className='w-100' alt="" />
                    <div className={style['country-explore-text']}>
                        <span><h4>{props.heading}</h4><p>{props.description}</p></span>
                        <span  className={style['icon-next']}><a href='#0'><CiCircleChevRight /></a></span>
                        
                    </div>
                </div>
            </a>
        </>
    )
}

export default CountryExplore

