import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Button(props) {

    const handleButtonClick = (e) => {
        if (props.link) {
            const target = '_self';
            window.open(props.link, target);
        }
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

    return (
        <motion.button
            className='primary d-flex flex-column justify-content-center align-items-center'
            id={`${props.id}`}
            variants={buttonVariants}
            whileHover='hover'
            onClick={handleButtonClick}
            style={{
                width: props.width,
                height: props.height,
                padding: '0 10px',
                margin: props.margin,
                backgroundColor: backgroundColor,
                borderRadius: '5px',
                overflow: 'hidden',
                border: 'none'
            }}
        >
            <motion.h4 variants={textVariants} style={{ color: textColor, margin: '0 0 5px 0', fontSize:props.fontSize }}>{props.buttonText}</motion.h4>
        </motion.button>
    );
}
