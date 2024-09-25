import React from 'react';

const faqs = [
    {title:'Can I buy a day pass for the Nordic Club?', answer: 'To ensure there is ample space for existing members should they need it, we do not offer day passes. You are welcome to purchase a single months pass if you are visiting and wish to use our facilities.'},
    {title:'What are the Nordic Clubs hours?', answer: 'We are open daily from 8am to 9pm. We are closed on all major holidays.'},
    {title:'Does the Nordic Club allow guests?', answer: 'We do allow guests for a small fee. Please see the front-desk staff for assistance.'},
    {title:'Does the Nordic Club have towel service?', answer: 'No, we do not provide towels. Please plan accordingly and bring your own towels for pools or saunas.'},
    {title:'Do you offer any discounts on passes?', answer: 'Yes! We offer a 10% discount for military service members, veterans, and first responders. Please specify that you qualify for this discount at check-in, and we will ask you to provide proof of service when you are admitted as a member.'},    
]

export default function FAQs({content}) {

    return(
        <div id='faqs' className='d-flex flex-column justify-content-center align-items-center' style={{width:'100%', gap:'10px', margin:'0px 0px 100px 0px'}}>
            <div id='faqs-title'>
                <h3 style={{color:'#776871'}}>{content.title}</h3>
            </div>
            <div id='faqs-content' className='d-flex flex-column' style={{gap:'10px', margin:'0px 30px 0px 30px'}}>
                {content.qa.map((faq, index) => {
                    return ( // Add return here
                        <div id={`faq-${index}`} key={`faq-${index}`} className='d-flex flex-column' style={{width:'100%', gap:'10px', maxWidth:'1024px'}}>
                            <div id={`faq-${index}-question`} key={`faq-${index}-question`}>
                                <h3 key={`faq-${index}-question-text`}>{faq.question}</h3>
                            </div>
                            <div id={`faq-${index}-answer`} key={`faq-${index}-answer`}>
                                <p key={`faq-${index}-answer-text`}>{faq.answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}