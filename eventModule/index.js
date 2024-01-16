const EventEmitter=require('events')
const event=new EventEmitter();
event.on('myCustomEvent',()=>{
    console.log("hello")
})
event.on('myCustomEvent',()=>{
    console.log("welcome")
})
event.on('myCustomEvent',()=>{
    console.log("all")
})
event.emit('myCustomEvent');
