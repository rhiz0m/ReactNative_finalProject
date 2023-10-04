export function DateFormatted(date) {
  //Januari is at index 0, so to fix that: add +1
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function TwoWeeksAgo(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
