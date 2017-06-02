const randomNumber = (x,y)=>{
let value = Math.floor(Math.random() * y) + x;
return value;
}

export { randomNumber};