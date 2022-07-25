/* Calvin Chan
2022-07-24
Bank ATM Console Application
*/

/*  TASKS:
    1. Users should be able to login to the system
        1a) If not in the system, create a new account
    2. Users should be able to see how much money is in their account
    3. Should be able to deposit funds into their account
        3a) Funds should update an account screen
    4. Should be able to withdraw funds from their account
        4a) Funds should update on account screen
    5. User should be able to log out
*/

// ******Objects*******
// Class version:
class Customer {
    _id;
    _username;
    #_password;
    loggedIn = false;
    amount = 0;
    constructor(username, password) {
        this._username = username;
        this.#_password = password;
        this._id = Customer.incrementId();
    }

    get id() {
        return this._id;
    }

    get username() {
        return this._username;
    }

    get loggedIn() {
        return this.loggedIn;
    }

    get amount() {
        return this.amount;
    }

    static incrementId() {
        if (!this.lastId) this.lastId = 1;
        else this.lastId++;
        return this.lastId;
    }

    static logIn() {
        this.loggedIn = true;
    }

    static logOut() {
        this.loggedIn = false;
    }

    passwordCheck(password) {
        if (this.#_password === password) {
            Customer.logIn();
            return true;
        } else {
            return false;
        }
    }

    printInfo = function() {
        if (this.loggedIn) {
            alert(this.username + ' ' + this.password + ' ' + this.id);
        }
    }

    deposit() {
        let cash = prompt("How much money to deposit?");
        while (cash < 0) {
            cash = prompt("How much money to deposit?");
        }
        this.amount += cash;
    }

    withdraw() {
        let cash = ("How much money to withdraw?");
        while (cash < 0 || cash > this.amount) {
            cash = ("How much money to withdraw?");
        }
        this.amount -= cash;
    }

    displayBalance() {
        alert('$' + this.amount);
    }
}

/*
class Account extends Customer {
    constructor(amount) {
        super(amount);
    }

    deposit() {
        let cash = prompt("How much money to deposit?");
        while (cash < 0) {
            cash = prompt("How much money to deposit?");
        }
        this.amount += cash;
    }

    withdraw() {
        let cash = ("How much money to withdraw?");
        while (cash < 0 || cash > this.amount) {
            cash = ("How much money to withdraw?");
        }
        this.amount -= cash;
    }

    displayBalance() {
        alert('$' + this.amount);
    }
}
*/

/*
// Class that holds a collection of customers
class Users {
    constructor(){
        this.customers = [];
    }

    newCustomer(username, password) {
        let c = new Customer(username, password);
        this.customers.push(c);
        return c;
    }

    oneCustomer(username) {
        return this.customers.find(user => user === username);
    }   
}
*/

/* Function version:
const Customer = (function() {
    let nextId = 1;

    return function Customer(username, password) {
        this.username = username;
        this.password = password;
        this.id = nextId++;
        this.loggedIn = false;
    }
})();

Customer.prototype.printInfo = function() {
    if (this.loggedIn) {
        alert(this.username + ' ' + this.password + ' ' + this.id);
    }
}
*/

/*
// Accounts: checking / savings
const Accounts = function() {
    Customer.call(this, id);
    this.checking
} */

// Opening alert bubble
function Welcome() {
    return confirm("Start the ATM?");
}

// Credential handling
function Login() {
    let user = prompt("Username: ");
    let customer = userList.find(item => item.username === user);
    alert(customer.id);
    if (userList.indexOf(customer) !== -1) {
        //alert("Customer exists!");
        let guesses = 0
        pass = prompt("Enter password: ");
        while (!customer.passwordCheck(pass) && guesses < 5) {
            pass = prompt("Enter password: ");
            guesses++;
            if (guesses == 5) {
                alert("You have guessed too many times.");
            }
        }
    } else {
        alert("Customer does not exist!");
        customer = CreateNewCustomer();
    }

    if (customer.loggedIn) {
        return customer;
    }
}

function CreateNewCustomer() {
    let u = prompt("Enter username: ");
    let p = prompt("Enter password: ");
    let newCustomer = new Customer(u, p);
    newCustomer.logIn;
    userList.push(newCustomer);
    return newCustomer;
}

function Options(op, user) {
    switch(op) {
        case '1':
            user.deposit();
            break;
        case '2':
            user.withdraw();
            break;
        case '3':
            user.displayBalance();
            break;
        case '4':
            return !(ExitConfirmation(user)); // Exits program (w/ confirmation)
    }
    return true;
}

function ExitConfirmation(customerToLogOut){
    let choice = confirm("Are you sure?")
    if (choice) {
        customerToLogOut.loggedIn = false;
    }
    return choice;
}

function MainProgram() {
    let customer = Login();
    //Request Option
    let option = prompt("Enter a number \n (1) to make a Deposit,\n (2) to make a withdrawal \n (3) to Display Balance \n (4) to Exit", "Type here");
    while (!(Math.round(option) >= 1 && Math.round(option) <= 4)) {
        option = prompt("Enter a number \n (1) to make a Deposit,\n (2) to make a withdrawal \n (3) to Display Balance \n (4) to Exit", "Type here");
    }
    return Options(option, customer);
    // Options
    // 1. Deposit
    // 2. Withdraw
    // 3. Display Balance
    // 4. Exit
}

let run = Welcome();
// Adding temp accounts
let userList = [
    new Customer('user1', 'pass1'),
    new Customer('user2', 'pass2'),
    new Customer('user3', 'pass3'),
    new Customer('user4', 'pass4'),
    new Customer('user5', 'pass5'),
];
userList[2].loggedIn = true;
userList[2].printInfo();
alert(userList[2].username);

/*
let users = new Users();
users.newCustomer('user6', 'pass6');
users.newCustomer('user7', 'pass7');
users.newCustomer('user8', 'pass8');
temp = users.oneCustomer('user7');
alert(temp.id);
*/

while (run) {
    run = MainProgram();
}







/*
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

*/