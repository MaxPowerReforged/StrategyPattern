const InvoiceDateFormatter = require('./DateFormatter');

class InvoiceProvider {

  DateFormatter = new InvoiceDateFormatter();

  printInvoice() :string {
    return "string";
  }

  //other methods

}

module.exports = InvoiceProvider;