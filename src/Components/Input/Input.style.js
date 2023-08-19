import { Input } from 'antd';

import styled, { css } from "styled-components";

export const InputStyle = styled(Input)`
&.input{
    background-color: ${(props) => props.theme.Base_13};  
    color: ${(props) => props.theme.Base_03};
    border-color: transparent;
    border-radius: 24px;
    
 
}

`