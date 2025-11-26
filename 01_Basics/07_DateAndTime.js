// 1. Current date and time
const myDate = new Date();

// console.log(myDate.toString()); //Wed Nov 26 2025 14:36:24 GMT+0530 (India Standard Time)

// console.log(myDate.toDateString()); //Wed Nov 26 2025

// console.log(myDate.toISOString()); //2025-11-26T09:06:24.739Z

// console.log(myDate.toJSON()); //2025-11-26T09:06:24.739Z

// console.log(myDate.toLocaleString()); //26/11/2025, 2:36:24 pm

// console.log(myDate.toLocaleTimeString()); //2:36:24 pm

// console.log(myDate.toLocaleDateString()); //26/11/2025

// 2. From a timestamp (ms since 1970-01-01 UTC)
const fromTimestamp = new Date(0); // 2025-01-01 00:00:00 UTC
// console.log(fromTimestamp);

// 3. From a date string (ISO 8601 recommended)
const fromString = new Date("2025-11-26T14:30:45.123Z"); // UTC
const fromStringLocal = new Date("2025-11-26T14:30:45"); // treated as local time

// console.log(fromString);

const myCustomDate = new Date(2025, 10, 26);

// console.log(myCustomDate.toDateString());
// console.log(myCustomDate.getTime());

const myDateStamp = Date.now();
// console.log(Math.floor(myDateStamp / 1000));

const date = new Date(2025, 10, 23);
// console.log(date.getDay());

// console.log(date.getDate());

const dates = new Date();
console.log(
  dates.toLocaleString("default", {
    weekday: "long",
  })
);
