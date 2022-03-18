import React, { useRef, useEffect } from 'react';

let width
let height
let ctx

export default function Background(props) {
    const canvas = useRef();

    useEffect(() => {
        var framesPerSecond = 10;
        setInterval(() => {
            requestAnimationFrame(animate);
        }, 1000 / framesPerSecond);

        width = window.innerWidth;
        height = window.innerHeight;

        canvas.current.width = width;
        canvas.current.height = height;
        ctx = canvas.current.getContext('2d');

        ctx.fillStyle = `hsla(240, 100%, 50%, 0.1)`;
        ctx.strokeStyle = `hsla(240, 100%, 50%, 0.7)`;
    }, []);

    const animate = () => {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(100, 100, 300, 300)
        ctx.strokeRect(100, 100, 300, 300)
    }

    return (
        <canvas className="background" ref={canvas} />
    );
}