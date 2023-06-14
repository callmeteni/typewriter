const sentence = "hello there from lighthouse labs";
delay = 0;
for (const char of sentence){
setTimeout(() => {console.log(char);
}, delay);

delay+= 500;
}