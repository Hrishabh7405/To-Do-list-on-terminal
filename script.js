const todos = [];

let inp = prompt("What would you like to do?");
while (inp !== "quit") {
  if (inp === "new") {
    let task = prompt("What do you want to add?");
    for (let i = 0; i < todos.length + 1; i++) {
      if (todos[i] === undefined) {
        todos.push(`${i}:${task}`);
        console.log(`${task} has been added to index ${i}.`);
        break;
      } else if (todos[i] === "empty") {
        todos[i] = `${i}: ${task}`;
        console.log(`${task} has been added to index ${i}.`);
        break;
      }
    }
  } else if (inp === "list") {
    console.log("********");
    for (let i = 0; i < todos.length; i++) {
      console.log(todos[i]);
    }
    console.log("********");
  } else if (inp === "delete") {
    let num = prompt("Enter the task number you want to delete:");
    if (num < todos.length) {
      console.log(`${todos[num]} has been deleted.`);
      todos[num] = `${num}: empty`;
    } else {
      alert("Please enter a valid index.");
    }
  } else {
    alert("Please Enter a valid input.");
  }

  inp = prompt("What would you like to do?");
}
