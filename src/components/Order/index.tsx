import { Order } from "../../types/Order";
import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";

const orders: Order[] = [
  {
    _id: "6372e48cbcd195b0d3d0f7f3",
    table: "02",
    status: "WAITING",
    products: [
      {
        product: {
          name: "Pizza quatro queijos",
          imagePath: "1676860073565-quatro-queijos.png",
          price: 40,
        },
        quantity: 3,
        _id: "6372e48cbcd195b0d3d0f7f4",
      },
      {
        product: {
          name: "Suco de laranja",
          imagePath: "1676862208793-suco-de-laranja.png",
          price: 7,
        },
        quantity: 2,
        _id: "6372e48cbcd195b0d3d0f7f5",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="Fila de Espera" orders={orders} />
      <OrdersBoard icon="👨‍🍳" title="Em Preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
