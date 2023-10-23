import { TitleStyle } from "./Title.style";

const Title = ({...props}) => {
    const fontsize={
        1:64,
        2:56,
        3:48,
        4:40,
        5:32,
        6:24,
        7:20
    }
   
    return(
  <>
    <TitleStyle className="title" fontSize={fontsize[props.level]} {...props} ></TitleStyle>
  </>
)};
export default Title;