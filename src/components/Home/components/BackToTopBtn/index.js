import React, { useEffect, useState } from "react";

const BackToTopBtn = () => {

    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsShow(window.scrollY >= 300);
        };

        window.addEventListener('scroll', handleScroll);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

    return <div className={`back-to-top`} style={{
        visibility: isShow ? "visible" : "hidden"
    }} onClick={handleClick} ></div>;
}

export default BackToTopBtn;