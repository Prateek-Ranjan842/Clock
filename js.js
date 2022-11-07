let date = new Date();


let day = date.getDay();
let mon = date.getMonth();
let date1 = date.getDate();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let msec = date.getMilliseconds();

switch(mon){
    case 0: {
        mon = "Jan";
        break;
    }
    case 1: {
        mon = "Feb";
        break;
    }
    case 2: {
        mon = "Mar";
        break;
    }
    case 3: {
        mon = "April";
        break;
    }
    case 4: {
        mon = "May";
        break;
    }
    case 5: {
        mon = "June";
        break;
    }
    case 6: {
        mon = "July";
        break;
    }
    case 7: {
        mon = "Aug";
        break;
    }
    case 8: {
        mon = "Sep";
        break;
    }

    case 9: {
        mon = "Oct";
        break;
    }
    case 10: {
        mon = "Nov";
        break;
    }
    case 11: {
        mon = "Dec";
        break;
    }
}
switch(day){
    case 0:{
        day = "Mon";
    }
    case 1: {
        day = "Tue";
    }
    case 2: {
        day = "Wed";
    }
    case 3: {
        day = "Thu";
    }
    case 4: {
        day = "Fri";
    }
    case 5: {
        day = "Sat";
    }
    case 6: {
        day = "Sun";
    }
}

document.write(`${mon} ${date1} ${day}`);
document.write('<br>');
document.write( `${hour} : ${min} : ${sec} : ${msec}`);