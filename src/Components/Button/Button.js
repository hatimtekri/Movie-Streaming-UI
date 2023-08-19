import { ButtonStyle } from "./Button.style";

const Button = ({...props}) => {
    
    return(
  <>
    <ButtonStyle className="button"  {...props} >{props.children}</ButtonStyle>
  </>
)};
export default Button;