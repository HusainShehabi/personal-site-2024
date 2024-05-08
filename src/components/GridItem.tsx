import { motion } from "framer-motion";
import React, { useState } from "react";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  title?: string;
  value?: string;
  className?: string;
  image?: string;
};

export default function GridItem({
  title,
  value,
  className,
  image,
  children,
  style,
}: Props) {
  const combinedClassName = `bg-white/5 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center justify-center overflow-hidden shadow-lg border border-gray-100/10 ${
    className || ""
  }`;

  const [hoverVariant, setHoverVariant] = useState("rest");
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  // Define variants for animation
  const variants = {
    rest: { scale: 1, rotate: 0 },
    hoverTopLeft: { scale: 1, rotate: -1.5 },
    hoverTopRight: { scale: 1, rotate: 1.5 },
    hoverBottomLeft: { scale: 1, rotate: 1.5 },
    hoverBottomRight: { scale: 1, rotate: -1.5 },
  };

  // Handle mouse enter
  const handleMouseEnter = (e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    if (x < width / 2 && y < height / 2) {
      setHoverVariant("hoverTopLeft");
    } else if (x >= width / 2 && y < height / 2) {
      setHoverVariant("hoverTopRight");
    } else if (x < width / 2 && y >= height / 2) {
      setHoverVariant("hoverBottomLeft");
    } else {
      setHoverVariant("hoverBottomRight");
    }
  };

  // Reset to rest state on mouse leave
  const handleMouseLeave = () => {
    setHoverVariant("rest");
  };

  // Handle mouse move within the component
  const handleMouseMove = (e: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPosition({ x, y });
  };

  // Inline style for dynamic gradient
  const dynamicStyle = {
    backgroundImage: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(52, 242, 125, 10%), rgba(255,255,255,0) 70%)`,
    ...style,
  };

  return (
    <motion.div
      className={`${combinedClassName} hover-effect`}
      style={dynamicStyle}
      variants={variants}
      initial="rest"
      animate={hoverVariant}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}
