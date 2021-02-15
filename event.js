//event emitter
const EventEmitter=require('events');//evenemitter acts as a class
const emitter=new EventEmitter();//emitter act as the object
//register a listener and listener  function alwaus before the event emitter if we add the function below emit it does not take the listener
/*emitter.on('messagelogged',function(){
    console.log('Listener called');
});
emitter.emit('messagelogged');*///emit means produce sound or alert the system 
//emit pass an argument
emitter.on('messagelogged',function(argument){
    console.log('Listener called',argument);
});
emitter.emit('messagelogged',{id:1,url:'http\\'});
//using arrow function
emitter.on('messagelogged',(argument)=>{
    console.log('Listener called',argument);
});
emitter.emit('messagelogged',{id:1,url:'http\\'});