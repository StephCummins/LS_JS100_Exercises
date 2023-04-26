/* Create a function that calculates a person's body mass index (BMI). It 
should take two parameters: someone's height (in cm) and weight (in kg). The 
formula for calculating the BMI is as follows: */

// bmi = weightInKilograms / heightInMeters**2;

function calculateBMI(height, weight) {
  height = height / 100;
  let bmi = weight / (height**2);
  console.log(`Your BMI is ${bmi.toFixed(2)}.`)
}

calculateBMI(180, 80); // "24.69"

