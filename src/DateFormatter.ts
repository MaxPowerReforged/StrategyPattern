class DateFormatter {

    getFormattedDate(day: string, month: string, year: string) :string {
        return [day, month, year].join('/');
    }
}

module.exports = DateFormatter;