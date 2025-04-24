interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
	}

// Create two student objects
const student1: Student = {
	firstName: "John",
	lastName: "Doe",
	age: 20,
	location: "New York",
};

const student2: Student = {
	firstName: "Jane",
	lastName: "Smith",
	age: 22,
	location: "London",
};

// Store Students inside an array
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
table.style.border = "1px solid black";
table.style.width = "50%";
table.style.margin = "20px auto";

// Create a table element to hold rows
const tbody = document.createElement("tbody");

// Loop through the studentsList array and create a row for each student
studentsList.forEach((student) => {
	const row = document.createElement("tr");
	const nameCell = document.createElement("td");
	const locationCell = document.createElement("td");

	// Assign text content from student objects
	nameCell.textContent = student.firstName;
	locationCell.textContent = student.location;

	// Add basic styling for clarity
	nameCell.style.border = "1px solid black";
	locationCell.style.border = "1px solid black";
	nameCell.style.padding = "8px";
	locationCell.style.padding = "8px";

	// Append both cells to the row
	row.appendChild(nameCell);
	row.appendChild(locationCell);

	// Append the row to the table body
	tbody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tbody);

// Append the table to the document's body so it appears on the page
document.body.appendChild(table);
