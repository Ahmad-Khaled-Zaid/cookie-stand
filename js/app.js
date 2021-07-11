'use strict';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let avgCookie=[];

avgCookie.push(6.3);
let Seattle = {
  name: 'Seattle',
  CustomersPerHours:0,
  hourlyCustomers: function () {
    this.CustomersPerHours = random(23,65);
    console.log(this.CustomersPerHours);
    return this.CustomersPerHours;
  },
  Time: ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm ', '5:00 pm', '6:00 pm', '7:00 pm'],
};



// };


// Seattle.hourlyCustomers();


// eslint-disable-next-line no-redeclare
let parent = document.getElementById('SalmonCookies');
// console.log(parent);

let articleElement = document.createElement('article');
parent.appendChild(articleElement);
let h2Element = document.createElement('h2');
articleElement.appendChild(h2Element);
let ulElement = document.createElement('ul');
articleElement.appendChild(ulElement);


for (let i = 0; i < Seattle.Time.length; i++) {
  let liElement = document.createElement('li');

  ulElement.appendChild(liElement);

  liElement.textContent = Seattle.Time[i] + ':' + Math.floor(avgCookie[0] * Seattle.hourlyCustomers()) + ' Cookies';


  //   console.log(Seattle.hourlyCustomers());
}

avgCookie.push(1.2);
// console.log(avgCookie);


let Tokyo = {


  name: 'Tokyo',

  CustomersPerHours: 0,
  hourlyCustomers: function () {
    this.CustomersPerHours = random(3, 24);
    console.log(this.CustomersPerHours);
    return this.CustomersPerHours;
  },
  Time: ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm ', '5:00 pm', '6:00 pm', '7:00 pm'],



};
Tokyo.render=function (){


  let articleElement = document.createElement('article');
  parent.appendChild(articleElement);
  let h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  let ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);


  for (let i = 0; i < Seattle.Time.length; i++) {
    let liElement = document.createElement('li');

    ulElement.appendChild(liElement);

    liElement.textContent = Tokyo.Time[i] + ':' + Math.floor(avgCookie[1] * Tokyo.hourlyCustomers()) + ' Cookies';
  }
};
Tokyo.render();

avgCookie.push(3.7);
// console.log(avgCookie);

let Dubai = {
  name: 'Dubai',
  CustomersPerHours: 0,
  hourlyCustomers: function () {
    this.CustomersPerHours = random(11, 38);
    console.log(this.CustomersPerHours);
    return this.CustomersPerHours;
  },
  Time: ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm ', '5:00 pm', '6:00 pm', '7:00 pm'],



};
Dubai.render=function (){


  let articleElement = document.createElement('article');
  parent.appendChild(articleElement);
  let h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  let ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);


  for (let i = 0; i < Dubai.Time.length; i++) {
    let liElement = document.createElement('li');

    ulElement.appendChild(liElement);

    liElement.textContent = Dubai.Time[i] + ':' + Math.floor(avgCookie[2] * Dubai.hourlyCustomers()) + ' Cookies';
  }
};
Dubai.render();

avgCookie.push(2.3);


let Paris = {
  name: 'Paris',
  CustomersPerHours: 0,
  hourlyCustomers: function () {
    this.CustomersPerHours = random(20, 38);
    console.log(this.CustomersPerHours);
    return this.CustomersPerHours;
  },
  Time: ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm ', '5:00 pm', '6:00 pm', '7:00 pm'],



};
Paris.render=function (){


  let articleElement = document.createElement('article');
  parent.appendChild(articleElement);
  let h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  let ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);


  for (let i = 0; i < Paris.Time.length; i++) {
    let liElement = document.createElement('li');

    ulElement.appendChild(liElement);

    liElement.textContent = Paris.Time[i] + ':' + Math.floor(avgCookie[3] * Paris.hourlyCustomers()) + ' Cookies';
  }
};
Paris.render();

avgCookie.push(4.6);

let Lima = {
  name: 'Lima',
  CustomersPerHours: 0,
  hourlyCustomers: function () {
    this.CustomersPerHours = random(2, 16);
    console.log(this.CustomersPerHours);
    return this.CustomersPerHours;
  },
  Time: ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm ', '5:00 pm', '6:00 pm', '7:00 pm'],



};
Lima.render=function (){


  let articleElement = document.createElement('article');
  parent.appendChild(articleElement);
  let h2Element = document.createElement('h2');
  articleElement.appendChild(h2Element);
  let ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);


  for (let i = 0; i < Lima.Time.length; i++) {
    let liElement = document.createElement('li');

    ulElement.appendChild(liElement);

    liElement.textContent = Lima.Time[i] + ':' + Math.floor(avgCookie[4] * Lima.hourlyCustomers()) + ' Cookies';
  }
};
Lima.render();

// console.log(avgCookie);
