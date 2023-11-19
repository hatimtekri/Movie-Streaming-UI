import { TagStyle } from "./Tag.style";

const Tag = ({ ...props }) => {

  return (

    <TagStyle className="customTag"  {...props} >{props.children}</TagStyle>

  )
};
export default Tag;