const InvoiceDateFormatter = require('./IDateFormatter');

class InvoiceProvider {

  currentDateFormatterStrategy: InstanceType<typeof InvoiceDateFormatter>;

  constructor(DateFormatterStrategy: InstanceType<typeof InvoiceDateFormatter>){
    this.currentDateFormatterStrategy = DateFormatterStrategy;
  }

  printInvoice() :string {
    return 'string';
  }

  //other methods

}

module.exports = InvoiceProvider;