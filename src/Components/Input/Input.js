import { InputStyle } from "./Input.style";

const Input = ({...props}) => {
   
    return(
  <>
    <InputStyle className="input"  {...props} ></InputStyle>
  </>
)};
export default Input;