export function DateFormatComplete(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minuts = String(date.getMinutes()).padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()} - ${date.toLocaleString(
    "en-us",
    { weekday: "long" }
  )} at ${hour}:${minuts}`;
}

export function DateFormatDay(date: Date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${day}/${month}/${date.getFullYear()} - ${date.toLocaleString(
    "en-us",
    { weekday: "long" }
  )}`;
}
