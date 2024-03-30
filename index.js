function scuberGreetingForFeet(scubaRideDepth){
  // Write your code here!
  let freeScuba, twentyDollarScuba, thirtyDollarScuba, noScuba
  
  if (scubaRideDepth <= 400) {
    freeScuba = true;
    return "This one is on me!";
  } 
    else if(scubaRideDepth >= 400 && scubaRideDepth <= 2000) {
      twentyDollarScuba = true;
      freeScuba = false;
      return "That will be twenty bucks."
    }
      else if (scubaRideDepth >= 2000 && scubaRideDepth <= 2499) {
        thirtyDollarScuba = true;
        freeScuba = false;
        twentyDollarScuba = false;
        return "I will gladly take your thirty bucks."
      }
        else if (scubaRideDepth > 2500) {
          noScuba = true;
          freeScuba = false;
          twentyDollarScuba = false;
          thirtyDollarScuba = false;
          return "No can do."
        }
      }

function ternaryCheckCity(cityName){
  // Write your code here!
  if (cityName === "NYC") {
    return "Ok, sounds good."
  }
    else if (cityName !== "NYC") {
      return "No go."
    }
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here! 
  let tipResponse;

  switch (tipAmount) {
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    case 'thanks for everything':
      tipResponse = 'Bye.';
      break;
      default:
      tipResponse = tipGiven
  }
  return tipResponse
}
