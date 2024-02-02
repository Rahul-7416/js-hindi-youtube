// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
        // to duplicate the elements, select the code then press (shift+alt+down_arrow)

        // INTERVIEW_NOTE: if we will not use the break after any case then it will execute all the next cases except for the default.
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
