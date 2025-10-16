let day = 7;
let dayname;
switch(day){
    case 1:
        dayname = "monday";
        break;

        case 2:
            dayname = "tuesday";
            break;
            case 3:
            dayname = "wednesday";
            break;
            case 4:
            dayname = "thursday";
            break;
            case 5:
            dayname = "friday";
            break;
            case 6:
            dayname = "saturday";
            break;
            case 7:
            dayname = "sunday";
            break;
            default:
                dayname = "given day is invalid day";
}
       console.log(dayname);