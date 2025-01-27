export interface Order {
  paymentInfo: PaymentInfo;
  shipping: Shipping;
}

export interface PaymentInfo {
  id: number;
  orderAt: string;
  amount: number;
}

export interface Shipping {
  id: number;
  trackingNumber: string;
  shippingFee: number;
  address: string;
  post: string;
  message: string;
  products: OrderProduct[];
}

export interface OrderProduct {
  id: number;
  name: string;
  price: number;
  imageUrls: string[];
  stock: Stock;
}

export interface Stock {
  color: string;
  band: string;
  cup: string;
  quantity: number;
}
