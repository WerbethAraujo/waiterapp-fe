import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 198px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1216px;

  .header-details {
    h1 {
      font-size: 32px;
      color: #fff;
    }

    h2 {
      font-size: 16px;
      font-weight: 400;
      color: #fff;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
