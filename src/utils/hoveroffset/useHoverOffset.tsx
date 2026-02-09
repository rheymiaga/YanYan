// useHoverOffset.ts
import { useState } from "react";

export const useHoverOffset = () => {
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const normX = (x / rect.width) * 2 - 1;
        const normY = (y / rect.height) * 2 - 1;

        setOffset({ x: normX * 20, y: normY * 20 });
    };

    return { offset, handleMouseMove };
};