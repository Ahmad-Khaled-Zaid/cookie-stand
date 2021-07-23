'use strict';


let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm ', '5:00 pm', '6:00 pm', '7:00 pm'];
// Random Function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let shops = [];
console.log(shops);

function Shop(locationName, minCustomers, maxCustomers, avgCookie) {

  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookie = avgCookie;
  this.totalCokkiesPerDay = 0;
  this.customersPerHour = [];
  this.cookiesEachHour = [];
  // console.log(this);
  shops.push(this);



}

Shop.prototype.numberOfCusomersPerHour = function () {
  for (let i = 0; i < hours.length; i++) {

    this.customersPerHour.push(random(this.minCustomers, this.maxCustomers));

  }



};
Shop.prototype.numberOfCookiesPerHour = function () {

  for (let i = 0; i < hours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersPerHour[i] * this.avgCookie));
    this.totalCokkiesPerDay += this.cookiesEachHour[i];
  }


};

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);




// console.log(shops);

// eslint-disable-next-line no-redeclare
let parent = document.getElementById('SalmonCookies');
let table = document.createElement('table');
parent.appendChild(table);



function makeHeader() {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);
  let firstRow = document.createElement('th');
  headerRow.appendChild(firstRow);
  firstRow.textContent = 'Name/Time ';
  for (let i = 0; i < hours.length; i++) {

    let hoursheading = document.createElement('th');
    headerRow.appendChild(hoursheading);
    hoursheading.textContent = hours[i];

  }
  let lastTh = document.createElement('th');
  headerRow.appendChild(lastTh);
  lastTh.textContent = 'Daily Location Total';
}

makeHeader();

Shop.prototype.render = function () {
  let dataRows = document.createElement('tr');
  table.appendChild(dataRows);
  let nameTd = document.createElement('td');
  dataRows.appendChild(nameTd);
  nameTd.textContent = this.locationName;

  for (let i = 0; i < hours.length; i++) {
    let cookiesTd = document.createElement('td');
    dataRows.appendChild(cookiesTd);
    cookiesTd.textContent = this.cookiesEachHour[i];

  }

  let totaltd = document.createElement('td');
  dataRows.appendChild(totaltd);
  totaltd.textContent = this.totalCokkiesPerDay;

};

function makeFotter() {
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);
  let firstTh = document.createElement('th');
  footerRow.appendChild(firstTh);
  firstTh.textContent = 'Totals';
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let totalForEachHour1 = 0;
    for (let j = 0; j < shops.length; j++) {
      totalForEachHour1 += shops[j].cookiesEachHour[i];
      totalOfTotals += shops[j].cookiesEachHour[i];

    }
    // console.log(totalOfTotals);
    let fotterTh = document.createElement('th');
    footerRow.appendChild(fotterTh);
    fotterTh.textContent = totalForEachHour1;
  }
  let lastTh = document.createElement('th');
  footerRow.appendChild(lastTh);
  lastTh.textContent = totalOfTotals;
  


}

// makeFotter();



let form = document.getElementById('form');
form.addEventListener('submit', submitter);

function submitter(event) {

  event.preventDefault();

  let name = event.target.locationName.value;
  console.log(name);
  let minimumCustomers = parseInt(event.target.minCustomers.value);
  // console.log(minimumCustomers);

  let maximumCustomers =parseInt(event.target.maxCustomers.value);
  // console.log(maximumCustomers);

  let averageCookiesNumber =parseFloat( event.target.avgCookies.value);
  // console.log(averageCookiesNumber);

  let addshop = new Shop(name, minimumCustomers, maximumCustomers, averageCookiesNumber);

  table.textContent='';
makeHeader();

  for (let i = 0; i < shops.length; i++) {
    shops[i].numberOfCusomersPerHour();
    shops[i].numberOfCookiesPerHour();
    shops[i].render();

  }
  makeFotter();




}
for (let i = 0; i < shops.length; i++) {
  shops[i].numberOfCusomersPerHour();
  shops[i].numberOfCookiesPerHour();
  shops[i].render();
}
makeFotter();






