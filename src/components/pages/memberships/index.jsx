import React, { useState } from 'react';
import { motion } from 'framer-motion';

// import Logo from '../../site-components/logo/index.jsx';
// import Button from '../../site-components/buttons/index.jsx';
import Card from './cards/index.jsx';

const membershipTerms = ['Monthly', '3-Month', '6-Month', '12-Month'];

const memberships = [
    {
        cardId: 'individual',
        membershipType: 'Individual',
        backgroundColor: '#FFFFFF',
        textColor: 'var(--primary-color)',
        buttonType: 'tertiary',
        price: ['$60', '$50', '$45', '$42'],
        purchaseLink: ['https://buy.stripe.com/test_8wM17r54B6sa0RG28f', 'https://buy.stripe.com/test_6oEaI168F3fYfMAeV5' , 'https://buy.stripe.com/test_6oE03ndB77we8k8fZ7', 'https://buy.stripe.com/test_8wM5nHcx317Q57WcMW'],
        membershipBenefit: ['For all individuals 18 years of age or older'],
    },
    {
        cardId: 'family',
        membershipType: 'Family',
        backgroundColor: 'var(--primary-color)',
        textColor: '#FFFFFF',
        buttonType: 'primary',
        price: ['$175', '$150', '$145', '$130'],
        purchaseLink: ['https://buy.stripe.com/test_3csg2lbsZ03MgQE147', 'https://buy.stripe.com/test_dR66rL7cJ8Ai2ZO6os' , 'https://buy.stripe.com/test_cN25nHdB72bU2ZO5kp', 'https://buy.stripe.com/test_aEU3fz9kR4k2gQEbIO'],
        membershipBenefit: ['Allow entry for 2 adults', 'Up to 4 children age 17 and under'],
    },
    {
        cardId: 'rental',
        membershipType: 'Rental',
        backgroundColor: '#FFFFFF',
        textColor:'var(--primary-color)',
        buttonType: 'tertiary',
        price: ['$300', '0', '$133', '$130'],
        purchaseLink: ['https://buy.stripe.com/test_5kA8zTcx34k20RGcMM', '' , 'https://buy.stripe.com/test_dR62bv8gN2bU7g45kl', 'https://buy.stripe.com/test_5kA3fz1Sp2bUcAodQS'],
        membershipBenefit: ['For a maximum of 10 guests for a rental unit'],
    }
]

export default function Memberships() {

    const [selectedTerm, setSelectedTerm] = useState(membershipTerms[0]);
    const [selectedTermIndex, setSelectedTermIndex] = useState(0);

    const handleClick = (e) => {
        setSelectedTermIndex(e.currentTarget.id.slice(-1));
        setSelectedTerm(e.currentTarget.children[0].innerText);
        e.currentTarget.style.backgroundColor='var(--logo-color)';
    }

    return(
        <div id='memberships' className='d-flex flex-column' style={{width:'100%'}}>
            <div id='memberships-duration-row' className='d-flex justify-content-center align-items-center mt-auto' style={{height:'50px', width:'100%', gap:'20px'}}>
                {membershipTerms.map((term, index) => {
                    return (
                        <motion.div id={`membership-term-${index}`} key={`membership-term-container-${term}`} whileHover={{backgroundColor:'var(--primary-color)', color:'#FFFFFF'}} onClick={handleClick} style={{borderRadius:'10px', backgroundColor:`${selectedTerm !== term ? '#FFFFFF' : 'var(--primary-color)'}`}}>
                            <h5 key={term} style={{fontWeight:'400', fontSize:'14px', cursor:'pointer', margin:'5px', marginBottom:'6px', color:`${selectedTerm !== term ? 'black' : 'white'}`}}>{term}</h5>
                        </motion.div>
                    )
                })}
            </div>
            <div id='memberships-cards-row' className='d-flex justify-content-center align-items-center flex-wrap mb-auto' style={{height:'100%', width:'100%', gap:'20px'}}>
                {memberships.map((membership, index) => {
                    if(membership.price[selectedTermIndex] !=='0') return(
                        <Card key={membership.cardId} onButtonClick={memberships[index].purchaseLink[selectedTermIndex]} id={membership} cardId={membership.cardId} backgroundColor={membership.backgroundColor} membershipType={membership.membershipType} price={membership.price[selectedTermIndex]} membershipBenefit={membership.membershipBenefit} textColor={membership.textColor} buttonType={membership.buttonType} />
                    )
                })}
            </div>
        </div>
    )
}

{/* <h5 style={{fontWeight:'400', fontSize:'14px'}} onMouseOver={handleOnHover}> Monthly</h5>
<h5 style={{fontWeight:'400', fontSize:'14px'}}> 3 Month</h5>
<h5 style={{fontWeight:'400', fontSize:'14px'}}> 6 Month</h5>
<h5 style={{fontWeight:'400', fontSize:'14px'}}> 12 Month</h5> */}