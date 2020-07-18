import styled from "styled-components";

export const CookieWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;

    &.cookie-price {
      color: ${(props) => props.theme.pink};
    }
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
