'use client'
import { useState, useEffect } from 'react';

function GotoTop() {
    const [isVisible, setIsVisible] = useState(false);

    // 监听页面滚动
    const toggleVisibility = () => {
        if (window.scrollY > 300 && !isVisible) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // 平滑滚动到顶部
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
                    Go to Top
                </button>
            )}
        </>
    );
};

export {
    GotoTop,
}
