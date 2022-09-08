import React, { useEffect } from 'react'
import "./toast.css";

const Toast = ({ Message, time, visible }) => {
    useEffect(() => {
        if (visible) {
            console.log("toast: ");
            setTimeout(() => {
                document.getElementsByClassName('toast')[0].classList.add('hide')
            }, time * 1000);
        }
    }, [visible]);
    return (
        visible && < div className='toast' > {Message}</div >
    )
}

export default Toast