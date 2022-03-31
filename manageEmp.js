function display() {
  var data = localStorage.getItem("Employee Data");
  var obj = JSON.parse(data);
  console.log(obj.length, obj);
  var tbody = document.getElementById("tbody");

  for (var i = 0; i < obj.length; i++) {
    var tr = "<tr>";
    tr +=
      "<td>" +
      obj[i].name +
      "</td>" +
      "<td>" +
      obj[i].address +
      "</td>" +
      "<td>" +
      obj[i].empId +
      "</td>" +
      "<td>" +
      obj[i].Designation +
      "</td> </tr>"; /* We add the table row to the table body */

    tbody.innerHTML += tr;
  }
}

var empArr = [];
const addEmp = (ev) => {
  ev.preventDefault(); // stopping form from submit //emp obj

  let emp = {
    id: Date.now(),
    name: document.getElementById("name").value,
    address: document.getElementById("address").value,
    empId: document.getElementById("empid").value,
    Designation: document.getElementById("desg").value,
  }; //pusing to empData array

  if (emp.name && emp.Designation && emp.empId && emp.address) {
    empArr.push(emp);
    localStorage.setItem("Employee Data", JSON.stringify(empArr));
    document.forms[0].reset();
    alert("EMp added");
  } else {
    alert("Enter data");
  }
};

function handleEdit() {
  let empIdEdit = prompt("Enter emp Id to edit", "");
  var n = empArr.filter((a) => a.empId == `${empIdEdit}`);
  console.log("emp to be edited", n);
}
//event listner on dom laod
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("Employee Data")) {
    var temp = localStorage.getItem("Employee Data");
    var b = JSON.parse(temp);
    empArr = b;
  }
  console.log(localStorage.getItem("Employee Data"));
  document.getElementById("btn").addEventListener("click", addEmp);
});
