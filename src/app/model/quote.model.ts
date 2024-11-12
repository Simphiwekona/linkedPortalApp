export interface Quote {
  quotationId: number;
  quotationNumber: string;
  client: {
    clientName: string;
    customerNumber: string;
    clientEmail: string;
    clientNumber: string;
    clientAddress: string;
    clientCity: string;
    clientZip: string;
    clientState: string;
    clientType?: string;
  };
  items: {
    product: {
      productName: string;
      productDescription: string;
      productPrice: string;
      availability: string;
    },
    description: string;
    price: string;
    quantity: string;
  };
  status: string;
}
