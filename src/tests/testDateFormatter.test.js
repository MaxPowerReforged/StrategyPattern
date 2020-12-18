const DateFormatter = require('../DateFormatter');

test('dateFormatterCanFormatDate', () => {
  const dateFormatter = new DateFormatter();
  expect(dateFormatter.getFormattedDate('01', '01', '2021')).toMatch('01/01/2021');
});