export interface Quote {
  quotationId: number;
  quotationNumber: string;
  client: {
    clientName: string;
    customerNumber: string;
    clientEmail: string;
    clientNumber: string;
  };
  status: string;
}
