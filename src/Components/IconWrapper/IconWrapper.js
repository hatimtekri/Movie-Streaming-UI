import { IconWrapperStyle } from "./Iconwrapper.style";


const IconWrapper = ({children,...props}) => {
    
    return(
  <>
    <IconWrapperStyle className="icon-wrapper"  {...props} >{children}</IconWrapperStyle>
  </>
)};
export default IconWrapper;