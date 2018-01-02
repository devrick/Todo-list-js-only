var todos = [];
var input = prompt("What would you like to do?");

while(input !== "quit") {
  if(input === "list") {
    listTodo();
  } else if (input === "new") {
    newTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  input = prompt("What would you like to do?");
}
console.log("Shutting down.");

function listTodo() {
  // only for design
  console.log("**********");
  // lists each item in the array along with the index number
  todos.forEach(function(todo, i) {
    console.log(i + ": " + todo);
  });
  console.log("**********");
}

function newTodo() {
  // ask user what to add
  var newTodo = prompt("What would you like to add");
  // add user's item to the end of the array
  todos.push(newTodo);
  // visually confirm request
  console.log("Added todo");
}

function deleteTodo() {
  // ask user which item to remove
  var deleteInput = prompt("What would you like to remove");
  // remove only the item the user asked to be removed
  todos.splice(deleteInput, 1);
  // visually confirm user's request
  console.log("Removed todo");
}