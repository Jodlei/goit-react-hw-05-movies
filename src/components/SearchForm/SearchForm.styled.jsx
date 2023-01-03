import styled from 'styled-components';
import { HiSearch } from 'react-icons/hi';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Icon = styled(HiSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 8px;
`;

export const SubmitButton = styled.button`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0px;
  background-color: transparent;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
