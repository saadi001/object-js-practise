const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};

const keys = Object.keys(bottle);
console.log(keys);

const values = Object.values(bottle);
console.log(values);

const pair = Object.entries(bottle);
console.log(pair);

Object.seal(bottle); // you can not delete propertry after seal it. but you can updated. can not add new one 
Object.freeze(bottle); // by freeze you can not update, create anything.

delete bottle.isCleaned; //to delete a propertry 
console.log(bottle);