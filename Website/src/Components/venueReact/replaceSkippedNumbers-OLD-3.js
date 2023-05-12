import { format, parse, startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';

const placeholder = 'Nothing';
const dateFormat = 'M.d';

const replaceSkippedDates = (events) => {
  // Create object mapping month numbers to number of days in that month
  const daysInMonth = {};
  for (let i = 0; i < 12; i++) {
    const month = new Date(2022, i);
    daysInMonth[i] = endOfMonth(month).getDate();
  }

  // Loop through events and fill in skipped dates
  const output = [];
  for (const event of events) {
    const [name, date] = event;
    const month = parse(date, dateFormat, new Date()).getMonth();
    const startDate = startOfMonth(parse(date, dateFormat, new Date()));
    const endDate = endOfMonth(parse(date, dateFormat, new Date()));
    const allDates = eachDayOfInterval({ start: startDate, end: endDate });
    let j = 0;
    for (const date of allDates) {
      const formattedDate = format(date, dateFormat);
      const event = events[j];
      if (event && event[1] === formattedDate) {
        output.push(event);
        j++;
      } else {
        output.push([placeholder, formattedDate]);
      }
    }
  }

  return output;
};

export { replaceSkippedDates };

