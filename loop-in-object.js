// we can not use for of loop in object like array..we have to another choose way to count object like array

/*
// 3 ways to  read object properties
bottle.color
bottle['color']
bottle[key]
 */


const bottle = {color: 'yellow', price: 50, isCleaned: true};

const keys = Object.keys(bottle); // ekhane keys er maan array akare asbe
for(const key of keys){
    
    // console.log(key);
    console.log(key, bottle[key]);
}
// for in use korle for of er moto object.keys use korte hoy na 
// so we will use for of for array and for in for object
for(const key in bottle){
    console.log(key, bottle[key])
}

