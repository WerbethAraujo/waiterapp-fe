import styled from "styled-components";

export const Overlay = styled.div`
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      background: transparent;
      line-height: 0;
      border: none;
    }
  }

  .status-container {
    margin-top: 32px;
  }

  > small {
    font-size: 14px;
    opacity: 0.8;
  }

  > div {
    margin-top: 8px;
    gap: 8px;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-description {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 16px;
      }
    }

    img {
      border-radius: 6px;
    }

    .quantity {
      display: block;
      min-width: 20px;
      font-size: 14px;
      color: #666;
      margin-left: 12px;
    }

    .product-description {
      margin-left: 4px;

      > strong {
        display: block;
        margin-bottom: 4px;
      }

      > span {
        font-size: 14px;
        color: #666;
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    > span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const ActionsContainer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 32px;

  .primary {
    background: #333;
    border-radius: 48px;
    color: #fff;
    border: 0;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    outline: none;
  }

  .secondary {
    background: transparent;
    color: #d73035;
    padding: 12px 24px;
    margin-top: 12px;
    border: 0;
    outline: none;
  }
`;
