const data={
    name:"Suvi",
    add:"pune",
    phone:52030
}
// console.log(data.name)
const jsondata=JSON.stringify(data)// stringyfy used to onver object to json data
// console.log(jsondata);
const objdata=JSON.parse(jsondata)// parse used to convert json data to object
console.log(objdata);