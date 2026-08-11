
interface ButtonProps {
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
    const {
        className = '',
        type = 'button',
        children,
        onClick,
    } = props

    return (
        <button
            className={`$/* {styles.button}*/ ${className}`}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button