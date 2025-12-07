import './button.css'

export const Button = ({
    children,
    onClick,
    type = 'button',
    disabled = false,
    variant = 'primary',
    className = '',
    icon = null,
    iconPosition = 'left',
    as: Component = 'button',   
    ...props
}) => {

    const btnClass = () => {
        switch (variant) {
            case 'primary': return 'btn-primary';
            case 'secondary': return 'btn-secondary';
            case 'noOutlined': return 'btn-no-outlined';
            case 'transparent': return 'btn-transparent';
            case 'danger': return 'btn-danger';
            case 'disabled': return 'btn-disabled';
            default: return 'btn-primary';
        }
    };

    return (
        <Component
            // si es un <button>, le pasamos type; si es un NavLink o <a>, no
            type={Component === 'button' ? type : undefined}
            onClick={onClick}
            disabled={Component === 'button' ? disabled : undefined}
            className={`btn ${btnClass()} ${className}`}
            {...props}
        >
            {icon && iconPosition === 'left' && (
                <span className="btn-icon">{icon}</span>
            )}

            {children}

            {icon && iconPosition === 'right' && (
                <span className="btn-icon">{icon}</span>
            )}
        </Component>
    );
};
