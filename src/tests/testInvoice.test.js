const InvoiceProvider = require('../InvoiceProvider');

test('invoiceProviderCanPrintInvoice', () => {
  const invoiceProvider = new InvoiceProvider();
  expect(invoiceProvider.printInvoice()).toMatch("string");
});