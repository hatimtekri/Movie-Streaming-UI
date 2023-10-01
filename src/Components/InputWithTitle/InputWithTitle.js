import Input from "../Input/Input";
import Text from "../Text/Text";
import { InputWithTileStyle } from "./InputWithTitle.style";

const InputWithTitle = (props) => {
  return (
    <>
      <InputWithTileStyle {...props}>
        <div className="title">
          <Text>{props.title}</Text>
        </div>

        <Input placeholder={props.placeholder}></Input>
      </InputWithTileStyle>
    </>
  );
};
export default InputWithTitle;
