/* The following code keeps looping forever. (You can hit Ctrl-C to stop it.) 
Why is that? Also modify it so that it stops after the first iteration. */

for (let i = 0; i < 1; i += 1) {
  console.log("and on");
  break;
}

/* This iterates forever because there is no condition to stop it. To stop it 
after the first iteration, add a condition i < 1. You could also terminate it 
with a break statement.*/