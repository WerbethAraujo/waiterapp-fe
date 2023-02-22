import { Order } from "../../types/Order";
import { Board, OrderContainer } from "./styles";
import { OrderModal } from "../OrderModal";

interface OrderProps {
  title: string;
  icon: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrderProps) {
  return (
    <Board>
      <OrderModal />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length > 0 && (
        <OrderContainer>
          {orders.map((order) => (
            <button type="button" key={order._id}>
              <strong>Mesa: {order.table}</strong>
              <span>{order.products.length} items</span>
            </button>
          ))}
        </OrderContainer>
      )}
    </Board>
  );
}
