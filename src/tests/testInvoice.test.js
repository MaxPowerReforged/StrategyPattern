const InvoiceProvider = require('../InvoiceProvider');
const HyphenStrategy = require('../DateFormatterHyphenStrategy');
const SlashStrategy = require('../DateFormatterSlashStrategy');
const InterfaceDateFormatter = require('../IDateFormatter');

test('invoiceProviderCanUseStrategy', () => {
  const hyphenStrategy = new HyphenStrategy();
  const invoiceProvider = new InvoiceProvider(hyphenStrategy);

  expect(invoiceProvider.currentDateFormatterStrategy.getFormattedDate('01', '01', '2021'))
  .toMatch("01-01-2021");
});