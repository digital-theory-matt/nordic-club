import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Button(props) {

    const handleButtonClick = (e) => {
        // if (props.link) {
        //     return (
        //         <Link to={props.link} />
        //     )
        // }
        if (props.onClick) {
            console.log(e.currentTarget.id);
            props.onClick();
        }
    }

    const [backgroundColor, setBackgroundColor] = useState();
    const [hoverColor, setHoverColor] = useState();
    const [textColor, setTextColor] = useState();
    const [hoverTextColor, setHoverTextColor] = useState();

    useEffect(() => {
        if (props.buttonType === 'primary') {
            setBackgroundColor('#453C41');
            setHoverColor('#FFFFFF');
            setTextColor('#FFFFFF');
            setHoverTextColor('#453C41');
        } else if (props.buttonType === 'secondary') {
            setBackgroundColor('#FFFFFF');
            setHoverColor('#453C41');
            setTextColor('#776871');
            setHoverTextColor('#FFFFFF');
        } else if (props.buttonType === 'tertiary') {
            setBackgroundColor('#776871');
            setHoverColor('#453C41');
            setTextColor('#FFFFFF');
            setHoverTextColor('#FFFFFF');
        }
    }, [props.buttonType]);

    const buttonVariants={
        initial: {backgroundColor: backgroundColor},
        hover: {backgroundColor: hoverColor},
    };

    const textVariants = {
        initial: {color: textColor},
        hover: {color: hoverTextColor},
    };

    if (props.link) return (
        <Link className='d-flex' to={props.link} style={{textDecoration:'none', width:props.width, height:props.height, margin:props.margin}}>
            <motion.button
                className='primary d-flex flex-column justify-content-center align-items-center'
                id={`${props.id}`}
                variants={buttonVariants}
                whileHover='hover'
                onClick={handleButtonClick}
                style={{
                    width: '100%',
                    height: '100%',
                    padding: '0 10px',
                    // margin: props.margin,
                    backgroundColor: backgroundColor,
                    borderRadius: '5px',
                    overflow: 'hidden',
                    border: 'none'
                }}
            >
                <motion.h4 variants={textVariants} style={{ color: textColor, margin: '0 0 5px 0', fontSize:props.fontSize }}>{props.buttonText}</motion.h4>
            </motion.button>
        </Link>
    );
}
