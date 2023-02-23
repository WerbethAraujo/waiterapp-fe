import { Order } from "../../types/Order";
import { Board, OrderContainer } from "./styles";
import { OrderModal } from "../OrderModal";
import { useState } from "react";

interface OrderProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrderProps) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenOrderModal(order: Order) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function hendleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={hendleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <OrderContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenOrderModal(order)}
            >
              <strong>Mesa: {order.table}</strong>
              <span>{order.products.length} items</span>
            </button>
          ))}
        </OrderContainer>
      )}
    </Board>
  );
}
