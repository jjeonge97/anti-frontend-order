import { Order } from "../Models";

const parseOrder = (fetchOrder: Order): Promise<Order> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const order: Order = {
        paymentInfo: fetchOrder.paymentInfo,
        shipping: fetchOrder.shipping,
      };
      resolve(order);
    }, 500);
  });
};

export { parseOrder };
