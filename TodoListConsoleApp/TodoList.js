/* Calvin Chan
2022-06-01
To Do List Console Application
*/

// Opening alert bubble
function Welcome() {
    return confirm("Start a To Do List?");
}

function Options(op) {
    switch(op) {
        case '1':
            AddItem(); // Adds item to the end of the array
            break;
        case '2':
            RemoveItem(); // Remove an item and close the gap
            break;
        case '3':
            PrintList(); // Displays all items in the array
            break;
        case '4':
            return !(ExitConfirmation()); // Exits program (w/ confirmation)
    }
    return true;
}

function AddItem(){
    let newItem = prompt("Enter a new item: ", "New Item " + (toDoList.length+1));
    toDoList.push(newItem);
}

function RemoveItem(){
    if (toDoList.length === 0) {
        alert("No items exist.");
        return;
    }

    // create list with index value + 1 (could replace PrintList function)
    let list = "";
    for (let i = 0; i < toDoList.length; i++) {
        list += `${i+1}. ${toDoList[i]}\n`;
    }
    // remove value based on given index
    let id = prompt("Which item would you like to remove?\n" + list, "Enter a number");
    while (!(Math.round(id) >= 1 && Math.round(id) <= toDoList.length)) {                   // Negation(!) prevents NaN values from going through
        id = prompt("Which item would you like to remove?\n" + list, "Enter a number");
    }
    //console.log(id);
    let removed = toDoList.splice(id-1, 1);
    alert(removed + " is removed.");
}

function PrintList(){
    alert(toDoList.join("\n"));
}

function ExitConfirmation(){
    return confirm("Are you sure?")
}

function MainProgram() {
    //Request Option
    let option = prompt("Enter a number \n (1) to Add an item,\n (2) to Remove an item \n (3) to Print list \n (4) to Exit", "Type here");
    while (!(Math.round(option) >= 1 && Math.round(option) <= 4)) {
        option = prompt("Enter a number \n (1) to Add an item \n (2) to Remove an item \n (3) to Print list \n (4) to Exit", "Type here...");
    }
    return Options(option);
    // Options
    // 1. Add item
    // 2. Delete item
    // 3. Print list
    // 4. Quit
}

let run = Welcome();
const toDoList = []; //Global array
while (run) {
    run = MainProgram();
}