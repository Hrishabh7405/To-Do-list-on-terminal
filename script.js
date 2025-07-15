const todos = [];

let inp = prompt("What would you like to do?");
while (inp !== "quit") {
  if (inp === "new") {
    let task = prompt("What do you want to add?");
    for (let i = 0; i < todos.length + 1; i++) {
      if (todos[i] === undefined) {
        todos.push(`${todos.length}:${task}`);
        break;
      } else if (todos[i] === null) {
        todos[i] = `${i}: ${task}`;
        break;
      }
    }
  } else if (inp === "list") {
    console.log(todos);
  } else if (inp === "delete") {
    let num = prompt("Enter the task number you want to delete:");
    todos[num] = null;
  } else {
    alert("Please Enter a valid input.");
  }

  inp = prompt("What would you like to do?");
}
