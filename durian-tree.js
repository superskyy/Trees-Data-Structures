class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
  	this.subordinates.push(subordinate);
  	subordinate.boss = this;
  }

  get numberOfSubordinates() {
  	return this.subordinates.length;
  }

  get numberOfPeopleToCEO() {
  	let numberOfPeople = 0;
  	let currentEmployee = this;

  	while (currentEmployee.boss) {
  		currentEmployee = currentEmployee.boss;
  		numberOfPeople++;
  	}

  	return numberOfPeople;
  }

  hasSameBoss(employee) {
  	return this.boss === employee.boss;
  }
}

const ada 		 = new Employee("Ada", "CEO", 3000000.00);
const craig    = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela   = new Employee("Angela", "VP Retail", 1000000);
const phil     = new Employee("Phil", "VP Marketing", 1000000);
const david    = new Employee("David", "Manager", 1000000);
const ali      = new Employee("Ali", "Supervisor", 1000000);
const brian    = new Employee("Brian", "employee1", 1000000);
const simone   = new Employee("Simone", "employee2", 1000000);
const karla    = new Employee("Karla", "employee3", 1000000);
const florida  = new Employee("Florida", "employee4", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);

craig.addSubordinate(simone);
craig.addSubordinate(ali);

phil.addSubordinate(florida);
phil.addSubordinate(david);
phil.addSubordinate(brian);

angela.addSubordinate(karla);

// DRIVER

// s
console.log("simone", simone.boss);
console.log("Subordinates", simone.numberOfSubordinates);
console.log("NUMBER", simone.numberOfPeopleToCEO);








