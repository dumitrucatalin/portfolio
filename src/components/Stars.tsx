"use client"
import React, { useEffect } from "react";

const Stars = () => {
    useEffect(() => {
        const createStars = () => {
            const starsContainer = document.querySelector(".stars");
            if (!starsContainer) return;

            const numberOfStars = 100;

            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement("div");
                const size = Math.random() * 3 + 1; // Random size between 1px and 4px
                const posX = Math.random() * window.innerWidth;
                const posY = Math.random() * window.innerHeight;

                star.classList.add("star");
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.top = `${posY}px`;
                star.style.left = `${posX}px`;
                star.style.animationDelay = `${Math.random() * 3}s`; // Random delay for twinkle effect

                starsContainer.appendChild(star);
            }
        };

        createStars();
    }, []);

    return <div className="stars"></div>;
};

export default Stars;