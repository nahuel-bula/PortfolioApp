import ButtonSVG from "../assets/svg/ButtonSvg"

const Button = ({ className, href, onClick, children, px, white }) => {
  const buttonClasses = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''} }`
  const spanClasses = "relative z-10"

  const renderButton = () => ( 
  <button className={buttonClasses} onClick={onClick}>
    <span className={spanClasses}>{children}</span>
    {ButtonSVG(white)}
  </button>)

  const renderLink = () => (
    <a href={href} className ={buttonClasses}>
      <span className={spanClasses}>{children}</span>
      {ButtonSVG(white)}
    </a>
  )

  return href ? renderLink() : renderButton();
}

export default Button
