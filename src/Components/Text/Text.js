import { TextStyle } from "./Text.style";

const Text = ({...props}) => {
    const fontsize={
        extraLarge:20,
        large:18,
        medium:16,
        small:14,
        extraSmall:12,
    }
   
    return(
  <>
    <TextStyle className="text" fontSize={fontsize[props.size]} {...props} ></TextStyle>
  </>
)};
export default Text;