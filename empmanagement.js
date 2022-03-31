var rIndex,
  table = document.getElementById("table"); // check the empty input

function checkEmptyInput() {
  var isEmpty = false,
    fname = document.getElementById("fname").value,
    address = document.getElementById("address").value,
    empid = document.getElementById("empid").value;
  desg = document.getElementById("desg").value;

  if (fname === "") {
    alert("First Name Connot Be Empty");
    isEmpty = true;
  } else if (address === "") {
    alert("Address Connot Be Empty");
    isEmpty = true;
  } else if (empid === "") {
    alert("emp id Connot Be Empty");
    isEmpty = true;
  } else if (desg === "") {
    alert("desg id Connot Be Empty");
    isEmpty = true;
  }
  return isEmpty;
}
var empArr = [];
// add Row
function addHtmlTableRow() {
  // get the table by id
  // create a new row and cells
  // get value from input text
  // set the values into row cell's
  table = document.getElementById("table");
  if (!checkEmptyInput()) {
    var newRow = table.insertRow(table.length),
      cell1 = newRow.insertCell(0),
      cell2 = newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      //getting the value from input tag
      fname = document.getElementById("fname").value,
      address = document.getElementById("address").value,
      empid = document.getElementById("empid").value;
    desg = document.getElementById("desg").value;

    //putting the values in the table cell
    cell1.innerHTML = fname;
    cell2.innerHTML = address;
    cell3.innerHTML = empid;
    cell4.innerHTML = desg;

    //creating a object for each emp to add in array
    let emp = {
      id: Date.now(),
      name: document.getElementById("fname").value,
      address: document.getElementById("address").value,
      empId: document.getElementById("empid").value,
      Designation: document.getElementById("desg").value,
    };

    //checking if all the values present in the emp object to be pushed in array
    if (emp.name && emp.Designation && emp.empId && emp.address) {
      //pushing in empArr
      empArr.push(emp);
      // adding it to session storage
      sessionStorage.setItem("localData", JSON.stringify(empArr));
      alert("EMp added");
    }

    // call the function to set the event to the new row
    selectedRowToInput();
  }
  document.getElementById("fname").value = "";
  document.getElementById("address").value = "";
  document.getElementById("empid").value = "";
  document.getElementById("desg").value = "";
}

// display selected row data into input text
function selectedRowToInput() {
  for (var i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("address").value = this.cells[1].innerHTML;
      document.getElementById("empid").value = this.cells[2].innerHTML;
      document.getElementById("desg").value = this.cells[3].innerHTML;
    };
  }
}
//calling the select row method
selectedRowToInput();

function editHtmlTbleSelectedRow() {
  var fname = document.getElementById("fname").value,
    address = document.getElementById("address").value,
    empid = document.getElementById("empid").value;
  desg = document.getElementById("desg").value;
  if (!checkEmptyInput()) {
    table.rows[rIndex].cells[0].innerHTML = fname;
    table.rows[rIndex].cells[1].innerHTML = address;
    table.rows[rIndex].cells[2].innerHTML = empid;
    table.rows[rIndex].cells[3].innerHTML = desg;
  }
}
