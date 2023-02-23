import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { Overlay, ModalBody, OrderDetails, ActionsContainer } from "./styles";
import { formatCurrency } from "../../utils/formatCurrency";
import { useEffect } from "react";

interface modalProps {
  visible: boolean;
  order: Order | null;
  onClose(): void;
}

export function OrderModal({ visible, order, onClose }: modalProps) {
  if (!visible || !order) {
    return null;
  }
  // useEffect(() => {
  //   function closeModalKeyDown(e: KeyboardEvent) {
  //     if (e.key === "Escape") {
  //       onClose();
  //     }
  //   }
  //   document.addEventListener("keydown", closeModalKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", closeModalKeyDown);
  //   };
  // }, []);

  const total = order.products.reduce((total, { product, quantity }) => {
    return total + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="icone de fechar o modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido: </small>
          <div>
            <span>
              {order.status === "WAITING" && "⏱️"}
              {order.status === "IN_PRODUCTION" && "👨‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em Preparação"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Items</strong>

          <div className="order-description">
            {order.products.map((item) => (
              <div className="item" key={item._id}>
                <img
                  src={`http://localhost:3001/uploads/${item.product.imagePath}`}
                  alt={item.product.name}
                  width="56"
                  height="28"
                />
                <span className="quantity">{item.quantity}x</span>

                <div className="product-description">
                  <strong>{item.product.name}</strong>
                  <span>{formatCurrency(item.product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <ActionsContainer>
          <button className="primary">
            <span>👨‍🍳</span>
            <strong>Iniciar Preparo</strong>
          </button>
          <button className="secondary">
            <strong>Cancelar Pedido</strong>
          </button>
        </ActionsContainer>
      </ModalBody>
    </Overlay>
  );
}
