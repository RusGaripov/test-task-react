export const msToTime = (ms) => {
  let seconds = (ms / 1000).toFixed(0);
  let minutes = (ms / (1000 * 60)).toFixed(0);
  let hours = (ms / (1000 * 60 * 60)).toFixed(0);
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(0);
  if (seconds < 60) return seconds + " секунд";
  else if (minutes < 60) return minutes + " минут";
  else if (hours < 24) return hours + " часов";
  else return days + " дней";
};
