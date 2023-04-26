// Write a function that takes an ISO 639-1 language code and returns a greeting
// in that language. You can take the examples below or add whatever languages you like.

function greet(language) {
  switch(language) {
    case "en":
      console.log("Hello!");
      break;
    case "fr":
      console.log("Salut!");
      break;
    case "pt":
      console.log("Ola!");
      break;
    case "de":
      console.log("Hallo!");
      break;
    case "sv":
      console.log("Heji!");
      break;
    case "af":
      console.log("Haai!");
      break;
    case "es":
      console.log("Hola!");
      break;
    default:
      console.log("Ciao!");
      break;
  }
}
