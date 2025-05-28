interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York'
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles'
};

const studentsList: Student[] = [student1, student2];

// Create table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// Create header row
const headerRow = document.createElement('tr');
const headers = ['First Name', 'Location'];
headers.forEach(headerText => {
  const th = document.createElement('th');
  th.textContent = headerText;
  headerRow.appendChild(th);
});
tbody.appendChild(headerRow);

// Add student rows
studentsList.forEach(student => {
  const row = document.createElement('tr');
  
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);
  
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);
  
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table); 