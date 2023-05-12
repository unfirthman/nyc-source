import { format } from 'date-fns';
import { eachDayOfInterval } from 'date-fns';

/**
 * Replaces skipped dates in an array of name:date pairs with { name: null, date: missingDate } objects.
 * @param {Array} data - An array of name:date pairs.
 * @returns {Array} - A new array with skipped dates replaced with { name: null, date: missingDate } objects.
 */
export const replaceSkippedDates = (data) => {
  const filteredData = [];
  const dateFormat = 'yyyy-MM-dd';

  let lastDate = null;

  for (let i = 0; i < data.length; i++) {
    const curr = data[i];
    const prev = data[i - 1];

    if (prev && curr[1] !== prev[1]) {
      const startDate = new Date(prev[1]);
      const endDate = new Date(curr[1]);
      if (!isNaN(startDate.getTime()) && !isNaN(endDate.getTime()) && startDate < endDate) {
        const allDates = eachDayOfInterval({
          start: startDate,
          end: endDate
        }).map(date => format(date, dateFormat));

        if (allDates.length > 0) {
          if (allDates[0] !== prev[1]) {
            filteredData.push({ name: null, date: allDates[0] });
            lastDate = allDates[0];
          }
          allDates.slice(1).forEach(date => {
            const day = new Date(date).getDate();
            const prevDay = new Date(prev[1]).getDate();
            if (day !== prevDay && date !== lastDate) {
              filteredData.push({ name: null, date: date });
              lastDate = date;
            }
          });
        }
      } else {
        console.error(`Invalid interval: start date ${startDate}, end date ${endDate}`);
      }
    }

    const obj = { name: curr[0], date: curr[1] };
    filteredData.push(obj);
    lastDate = curr[1];
  }

  return filteredData;
};

