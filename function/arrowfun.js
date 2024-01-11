//compact way to write function

const arrowfun=(a,b)=>{
    console.log(a+b);
    console.log(a-b);
    console.log(a*b);
    console.log(a/b);
    console.log(a%b);
};
arrowfun(10,2);

//we can return the value also
const arrret= (msg)=>{
    console.log(msg);
};
arrret(" use return instead of console.log to print values:");

const arrowfun2=(a,b)=>{
    return a+b;
    return a-b;
    return a*b;
    return a/b;
    return a%b;
};
arrowfun(10,2);