import * as React from "react";

interface ButtonProps {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

const Button = (props: ButtonProps) => {
    const {
        className = '',
        type = 'button',
        children,
        onClick,
        disabled,
    } = props

    return (
        <button
            className={` ${className}`}
            type={type}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button