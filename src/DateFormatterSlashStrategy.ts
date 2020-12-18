const InterfaceDateFormatterSlash = require('./IDateFormatter');

class DateFormatterSlashStrategy implements InstanceType<typeof InterfaceDateFormatterSlash> {
    
  getFormattedDate(day: string, month: string, year: string) :string{
      return [day, month, year].join('/');
  }

}

module.exports = DateFormatterSlashStrategy;