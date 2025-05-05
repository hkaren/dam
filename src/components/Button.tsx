type ButtonProps = {
    variant: 'login'
} & React.ComponentProps<'button'>

export const Button = ({variant, children, ...rest}: ButtonProps) => {
    return (
        <button className={`button-${variant}`} {...rest}>
            {children}
        </button>
    )
}