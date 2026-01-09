import React from 'react';

const Button = ({ children, onClick, type = 'button', variant = 'primary', className = '' }) => {
    const baseStyle = "px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900";

    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/30 focus:ring-blue-500",
        secondary: "bg-surface text-gray-200 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 focus:ring-gray-500",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
