//q1
let numbers = [10,20,30,40,50,60]
const [frist,second,,fourth] = numbers
console.log(frist,second,fourth);

//q2
let student = {
    name: "Rahul",
    age: 21,
    city: "Mumbai"
};

const { name, age, city: studentCity, course = "Unknown" } = student;
console.log(name);
console.log(age);
console.log(studentCity);
console.log(course);

//q3
let numbers1 = [2, 5, 8, 10, 15, 20];
const square = numbers.map((num) => {
    return num * num;
});
console.log(square);

const greater = numbers.filter((num) => {
    return num > 20;
});
console.log(greater);

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);
console.log(sum);

//q4
let students = [
    { name: "Tom", marks: 75 },
    { name: "Harry", marks: 90 },
    { name: "Jarry", marks: 45 },
    { name: "John", marks: 80 }
];

const passed = students.filter((student) => {
    return student.marks > 60;
});
console.log(passed);

const names = passed.map((student) => {
    return student.name;
});
console.log(names);

const average = students.reduce((total, student) => {
    return total + student.marks;
}, 0) / students.length;

console.log(average);

//q5
class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        } else {
            console.log("Insufficient balance!");
        }
    }

    checkBalance() {
        console.log("Account Holder:", this.accountHolder);
        console.log("Current Balance:", this.balance);
    }
}

const account1 = new BankAccount("Tom", 5000);

account1.deposit(1000);
account1.withdraw(2000);
account1.checkBalance();


//q6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Employee extends Person {
    constructor(name, age, employeeId, salary) {
        super(name, age);
        this.employeeId = employeeId;
        this.salary = salary;
    }

    displayDetails() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Employee ID:", this.employeeId);
        console.log("Salary:", this.salary);
    }
}

const emp1 = new Employee("Harry", 22, 1, 25000);

emp1.displayDetails();


//q7
class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    try {
        if (age < 18) {
            throw new InvalidAgeError("Age must be 18 or above");
        } else {
            console.log("Valid age");
        }
    } catch (error) {
        console.log(error.name + ": " + error.message);
    }
}

checkAge(20);
checkAge(15);


 // q8
class InvalidAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAmountError";
    }
}

class InsufficientBalanceError extends Error {
    constructor(message) {
        super(message);
        this.name = "InsufficientBalanceError";
    }
}

function withdraw(balance, amount) {
    try {
        if (amount <= 0) {
            throw new InvalidAmountError("Amount must be greater than 0");
        }

        if (amount > balance) {
            throw new InsufficientBalanceError("Insufficient balance");
        }

        balance = balance - amount;
        console.log("Withdrawal successful");
        console.log("Remaining balance: " + balance);

    } catch (error) {
        if (error instanceof InvalidAmountError) {
            console.log("Invalid amount: " + error.message);
        } else if (error instanceof InsufficientBalanceError) {
            console.log("Insufficient balance: " + error.message);
        }
    }
}

withdraw(1000, 200);
withdraw(1000, 0);
withdraw(1000, 1500);


 // q9
const task = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Task completed successfully");
    }, 2000);
});

task.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


 // q10
function checkNumber(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (number > 0) {
                resolve("Positive number");
            } else {
                reject("Invalid number");
            }
        }, 2000);
    });
}

checkNumber(10)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

checkNumber(-5)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

 // q12
const task1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});

task1.then((num) => {
    return num * 2;
})
.then((num) => {
    return num + 5;
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});
