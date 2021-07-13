'use strict';

let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm ', '5:00 pm', '6:00 pm', '7:00 pm'];

// Random Function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



let seattle = {

  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersEachhour: [],
  avgNumberOfCookies: [],
  total: 0,


  calculateCustomersEachHour: function () {

    for (let i = 0; i < hours.length; i++) {

      this.customersEachhour.push(random(this.minCustomers, this.maxCustomers));
      this.avgNumberOfCookies.push(Math.floor(this.avgCookies * this.customersEachhour[i]));

    }
  },
  render: function () {

    let parent = document.getElementById('SalmonCookies');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.location;
    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      unorderList.appendChild(listItems);
      listItems.textContent = hours[i] + ':' + this.avgNumberOfCookies[i];
      this.total += this.avgNumberOfCookies[i];
    }

    let totalofCookies = document.createElement('li');
    unorderList.appendChild(totalofCookies);
    totalofCookies.textContent = 'The Total is:' + this.total;


  }




};
seattle.calculateCustomersEachHour();
seattle.render();
// console.log(seattle.customersEachhour);
// console.log(seattle.avgNumberOfCookies);


let tokyo = {

  location: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  customersEachhour: [],
  avgNumberOfCookies: [],
  total: 0,


  calculateCustomersEachHour: function () {

    for (let i = 0; i < hours.length; i++) {

      this.customersEachhour.push(random(this.minCustomers, this.maxCustomers));
      this.avgNumberOfCookies.push(Math.floor(this.avgCookies * this.customersEachhour[i]));

    }
  },
  render: function () {

    let parent = document.getElementById('SalmonCookies');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.location;
    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      unorderList.appendChild(listItems);
      listItems.textContent = hours[i] + ':' + this.avgNumberOfCookies[i];
      this.total += this.avgNumberOfCookies[i];
    }

    let totalofCookies = document.createElement('li');
    unorderList.appendChild(totalofCookies);
    totalofCookies.textContent = 'The Total is:' + this.total;


  }




};
tokyo.calculateCustomersEachHour();
tokyo.render();



let dubia = {

  location: 'Dubia',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  customersEachhour: [],
  avgNumberOfCookies: [],
  total: 0,


  calculateCustomersEachHour: function () {

    for (let i = 0; i < hours.length; i++) {

      this.customersEachhour.push(random(this.minCustomers, this.maxCustomers));
      this.avgNumberOfCookies.push(Math.floor(this.avgCookies * this.customersEachhour[i]));

    }
  },
  render: function () {

    let parent = document.getElementById('SalmonCookies');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.location;
    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      unorderList.appendChild(listItems);
      listItems.textContent = hours[i] + ':' + this.avgNumberOfCookies[i];
      this.total += this.avgNumberOfCookies[i];
    }

    let totalofCookies = document.createElement('li');
    unorderList.appendChild(totalofCookies);
    totalofCookies.textContent = 'The Total is:' + this.total;


  }




};
dubia.calculateCustomersEachHour();
dubia.render();
// console.log(dubia.customersEachhour);
// console.log(dubia.avgNumberOfCookies);
let paris = {

  location: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  customersEachhour: [],
  avgNumberOfCookies: [],
  total: 0,


  calculateCustomersEachHour: function () {

    for (let i = 0; i < hours.length; i++) {

      this.customersEachhour.push(random(this.minCustomers, this.maxCustomers));
      this.avgNumberOfCookies.push(Math.floor(this.avgCookies * this.customersEachhour[i]));

    }
  },
  render: function () {

    let parent = document.getElementById('SalmonCookies');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.location;
    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      unorderList.appendChild(listItems);
      listItems.textContent = hours[i] + ':' + this.avgNumberOfCookies[i];
      this.total += this.avgNumberOfCookies[i];
    }

    let totalofCookies = document.createElement('li');
    unorderList.appendChild(totalofCookies);
    totalofCookies.textContent = 'The Total is:' + this.total;


  }



};
paris.calculateCustomersEachHour();
paris.render();
// console.log(paris.customersEachhour);
// console.log(paris.avgNumberOfCookies);
let lima = {

  location: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  customersEachhour: [],
  avgNumberOfCookies: [],
  total: 0,


  calculateCustomersEachHour: function () {

    for (let i = 0; i < hours.length; i++) {

      this.customersEachhour.push(random(this.minCustomers, this.maxCustomers));
      this.avgNumberOfCookies.push(Math.floor(this.avgCookies * this.customersEachhour[i]));

    }
  },

  render: function () {

    let parent = document.getElementById('SalmonCookies');
    let nameElement = document.createElement('h2');
    parent.appendChild(nameElement);
    nameElement.textContent = this.location;
    let unorderList = document.createElement('ul');
    parent.appendChild(unorderList);
    for (let i = 0; i < hours.length; i++) {

      let listItems = document.createElement('li');
      unorderList.appendChild(listItems);
      listItems.textContent = hours[i] + ':' + this.avgNumberOfCookies[i];
      this.total += this.avgNumberOfCookies[i];
    }

    let totalofCookies = document.createElement('li');
    unorderList.appendChild(totalofCookies);
    totalofCookies.textContent = 'The Total is:' + this.total;

  }


};
lima.calculateCustomersEachHour();
lima.render();
// console.log(lima.customersEachhour);
// console.log(lima.avgNumberOfCookies);
