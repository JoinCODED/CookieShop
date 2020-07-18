import styled from "styled-components";

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const LabelStyled = styled.label`
  color: ${(props) => props.theme.black};
`;

export const ModalTitle = styled.h3`
  color: ${(props) => props.theme.black};
`;
