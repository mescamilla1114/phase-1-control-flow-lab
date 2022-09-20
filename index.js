let someNumber;
let response;
let city;
let rides;
let tip;

function scuberGreetingForFeet(rides, response){
  // Write your code here!
  if (rides <= 200){
    response = "This one is on me!";
    return(response);

  }

  if (rides> 200 && rides <= 2000){
    response = "That will be twenty bucks.";
    return(response);
  }

  if (rides > 2000 && rides <=2500){
    response = "I will gladly take your thirty bucks.";
    return(response);

  }

  if (rides > 2500){
    response = "No can do.";
    return(response);

  }

 
}

function ternaryCheckCity(city, response){
  // Write your code here!
  response = city == "NYC" ? "Ok, sounds good." : "No go.";
  return(response);
}

function switchOnCharmFromTip(tip, response){
  // Write your code here!
  switch (tip) {
    case 'generous': 
      response = "Thank you so much.";
      return(response);
      break;

    case 'not as generous':
      response = "Thank you.";
      return(response);
      break;

    default:
      response = "Bye.";
      return(response);
      break;
  }
}