const InterfaceDateFormatterHyphen = require('./IDateFormatter');

class DateFormatterHyphenStrategy implements InstanceType<typeof InterfaceDateFormatterHyphen> {

  getFormattedDate(day: string, month: string, year: string) :string{
    return [day, month, year].join('-');
  }

}

module.exports = DateFormatterHyphenStrategy;