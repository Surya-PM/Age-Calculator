
//create a div element
var pdiv=document.createElement('div');
pdiv.setAttribute('style','padding-top:20px');
pdiv.setAttribute('class','pdiv');


//create a input element (date)
var dateElem=document.createElement('input');
dateElem.setAttribute('type','date');
dateElem.setAttribute('id','dob');
dateElem.setAttribute('name','dob');

pdiv.appendChild(dateElem);

//create a button element
var button=document.createElement('button');
button.innerHTML="Display Data";
button.setAttribute('class','btn btn-primary');
button.style.margin="20px";
button.addEventListener('click',calculate);
pdiv.appendChild(button);

//display data in the html
var dd=document.createElement('div');
dd.setAttribute('id','display');
dd.setAttribute('class','dd');



//create function calculate() to the button

function calculate(){
    var input=document.getElementById('dob').value;
    console.log(input);
    //checking whether the input date is valid 
    //because invalid Date.parse(input) returns NaN
    if(Date.parse(input)){
        // standard representation of date
        var inputDate=new Date(input);
        console.log(inputDate);
        var currDate=new Date();
        console.log(currDate);

        // converting milliseconds using getTime()
        var milliSecondsDiff=parseInt(currDate.getTime())-parseInt(inputDate.getTime());
        console.log(milliSecondsDiff);

        // converting milliseconds to seconds
        var secondsDiff=mathFloor(milliSecondsDiff,1000);
        console.log(secondsDiff);

        //converting seconds to minutes
        var minutesDiff=mathFloor(secondsDiff,60);
        console.log(minutesDiff);

        //converting minutes to hour
        var hoursDiff=mathFloor(minutesDiff,60);
        console.log(hoursDiff);

        //converting minutes to hour
        var daysDiff=mathFloor(hoursDiff,24);
        console.log(daysDiff);

        //calculating year difference
        var yearDiff = getYear(inputDate,currDate);
        console.log(yearDiff);

        //calculating month difference
        var monthDiff=getmonth(inputDate,currDate);
        console.log(monthDiff);

        dd.innerHTML=`Given date is ${inputDate}<br>
        Year : ${yearDiff} <br>
        Month : ${monthDiff} <br>
        Day : ${daysDiff} <br>
        Hours : ${hoursDiff} <br>
        Minutes : ${minutesDiff} <br>
        Seconds : ${secondsDiff} <br>
        MilliSeconds: ${milliSecondsDiff} `;
    }
    else{
        dd.innerHTML="Invalid Date";
    }
    document.body.appendChild(dd);
}
// function for converting and rounding off
function mathFloor(value1,value2){
    return Math.floor(value1/value2);
}

function getYear(value1,value2){
    var date1=new Date(value1);
    var date2=new Date(value2);
    return date2.getFullYear()-date1.getFullYear();
}

function getmonth(value1,value2){
    var year =getYear(value1,value2);
    var month=(year*12)+(value2.getMonth()-value1.getMonth());
    return month;
}

document.body.appendChild(pdiv);




