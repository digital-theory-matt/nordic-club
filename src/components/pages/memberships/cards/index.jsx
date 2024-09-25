import React from 'react';

import Button from '../../../site-components/buttons/index.jsx';

export default function Card(props) {

    const CheckMark = ({ fillColor }) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px" // Ensure these are consistent across all SVGs
            height="20px"
            fill={fillColor}
            padding='10'
            
            className=""
            viewBox="0 0 16 16" // Ensure viewBox is consistent
        >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
        </svg>
    );

    return(
        <div id={props.cardId} className='d-flex flex-column justify-content-evenly' style={{width:'291px', height: '245px', borderRadius:'20px', backgroundColor:`${props.backgroundColor}`, boxShadow:'0px 4px 14px rgba(0, 0, 0, 0.25)', padding:'10px', margin:'10px'}}>
            <div id={`membership-plan-${props.cardId}`} className='d-flex align-items-start' style={{width:'100%'}}>
                <h3 style={{fontSize:'20px', color:props.textColor}}>{props.membershipType}</h3>
            </div>
            <div id={`membership-price-${props.cardId}`} className='d-flex align-items-end' style={{width:'100%', gap:'10px'}}>
                <h1 className='m-0' style={{fontSize:'32px', color:props.textColor}}>{props.price}</h1>
                <h4 className='mr-auto ml-2 mb-1' style={{fontSize:'16px', color:props.textColor}}>per month</h4>
            </div>
            <div id={`membership-benefits-${props.cardId}`} className='d-flex align-items-start' style={{width:'100%', gap:'10px'}}>
                {/* <img src='/images/svgs/check-circle-fill.svg' alt='checkmark' style={{fill:props.textColor}}/> */}
                <CheckMark fillColor={props.textColor} style={{height:'100%'}}/>
                <h4 style={{fontSize:'16px', color:props.textColor}}>{props.membershipBenefit}</h4>
            </div>
            <div id={`membership-button-${props.cardId}`} >
                <Button height='50px' width='150px' id={`${props.cardId}-button`} link={props.onButtonClick} buttonType={props.buttonType} buttonText='Get Started' />
            </div>
        </div>
    )
}