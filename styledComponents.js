import styled from 'styled-components/native';

import { Typo16BlackPoppins } from './common/styleGuide/Typos'

export const Container = styled.View`
  flex: 1;
  flex-grow: 0.5;
  background-color: #999966;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Typo16BlackPoppins)`
  color: green;
  text-align: center;
  font-size: 43px;
`;

export const Button = styled.TouchableOpacity`
  border: none;
   cursor: pointer;
   margin: 4px;
   padding: 6px;
   border-radius: 4px;
   display: flex;
   align-items: center;
   background-color: #24a0ed;`


export const ButtonText = styled(Typo16BlackPoppins)`
color: #ffffff;
`

export const ImageElement = styled.Image`
 width: 38px;
    height: 38px;
    marginBottom: 20;`