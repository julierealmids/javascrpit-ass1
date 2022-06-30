for ( var i = 1; i <= 100; i++ ) {
    if ( i%3 === 0 && i%5 === 0 ) {
    console. log( i + " FizzBuzz" ); }
    else if ( i%3 === 0 ) {
    console. log(i+ " Fizz" ); }
    else if ( i%5 === 0 ) {
    console. log(i+ " Buzz" ); }
    console. log(i); 

}


    var sum = 0;
    for (var x = 0; x < 1000; x++)
    {
        if (x % 3 === 0 || x % 5 === 0)
        {
           sum += x;
        }
    }
    console.log(sum);



    for (var x=0; x<=20; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }

}
a=-2;
b=4;
c=-5;
d= 6;
f=0;
if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}

function largest_number(x,y){	
    if( (x >= 10) && (x <= 40) && (y >= 10 && y <= 40) ){
    if(x === y){
    return "Numbers are the same";
    }else if (x > y){
    return x;
    }else{
    return y;
    }
    }else{
    return "Numbers don't fit in range";
    }
}
largest_number()

function isLeap(year) {
    if (year % 4 === 0) {
       if (year % 100 === 0){
          if (year % 400 == 0){
             return ("Leap year.");
          } else {
             return ("Not leap year.");
          }
       } else {
          return ("Leap year.");
       }
    } else{
       return ("Not leap year.");
    }
 }
isLeap()