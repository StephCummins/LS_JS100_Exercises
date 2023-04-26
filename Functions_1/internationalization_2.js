// Write a function localGreet that takes a locale as input, and returns a greeting. 

function localGreet(locale) {
  let language = extractLanguage(locale);
  let region = extractRegion(locale);
  
  switch (region) {
    case "US":
      console.log("Hey!");
      break;
    case "GB":
      console.log("Hello!");
      break;
    case "AU":
      console.log("Howdy!");
      break;
    default:
      console.log(greet(language));
  }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'

function extractLanguage(locale) {
  return locale.slice(0, 2);
}

function extractRegion(locale) {
  return locale.slice(3, 5);
}

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
