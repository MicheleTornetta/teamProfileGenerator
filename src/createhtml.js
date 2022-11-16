function createHtml(employees) {
  // generate html
  let employeeHtml = "";

  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];

    if (i % 3 === 0) {
      if (i !== 0) {
        employeeHtml += "</li>";
      }
      employeeHtml += '<li class="row">';
    }

    employeeHtml += `<div class="col">
        <div class="topBox">
        <h2 class="padding">${employee.getName()}</h2>
        <h2 class="padding">${employee.getRole()}</h2>
        </div>
        <div id="bottomBox">
        <p>ID: ${employee.getId()}</p>
        <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p>${employee.getSpecialDataName()}: ${employee.getSpecialData()}</p>
        </div>
    </div>  
        `;
  }
  
  if (employees.length !== 0) {
    employeeHtml += "</li>";
  }

  return employeeHtml;
}

module.exports = createHtml;
