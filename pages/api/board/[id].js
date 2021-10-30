import freeApi from './free/index.js';

let today = new Date();
let year  = today.getFullYear();
let month = today.getMonth();
let date  = today.getDay();
let currentDay = year + '/' + month + '/' +  date

export default function detailApi(re, res) {
  res.status(200).json('how can i make a dynamic api?')
}
