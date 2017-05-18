const moment = require('moment');
// JAN 1st 1970 00:00:00 am UTC

// var date = new Date();
// console.log(date.getMonth());
var date = moment(1234);
var someTimestamp = moment().valueOf();
// date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY '));

// 10:35 am 
console.log(date.format('h:mm a'))