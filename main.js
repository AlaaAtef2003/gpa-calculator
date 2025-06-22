window.onload = function () {
  // Initialization if needed
};

function add_new_course() {
  const tableBody = document.querySelector("#course_info table tbody");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" placeholder="Course Name" required></td>
    <td>
      <select class="Grade">
        <option value="4">A</option>
        <option value="3.7">A-</option>
        <option value="3.3">B+</option>
        <option value="3">B</option>
        <option value="2.7">B-</option>
        <option value="2.3">C+</option>
        <option value="2">C</option>
        <option value="1.7">C-</option>
        <option value="1.3">D+</option>
        <option value="1">D</option>
        <option value="0">F</option>
      </select>
    </td>
    <td><input type="number" placeholder="Credits" class="credit" required min="1"></td>
  `;

  tableBody.appendChild(row);
}

function checkGrade() {
  const grades = document.querySelectorAll(".Grade");
  const credits = document.querySelectorAll(".credit");

  const currentGpaInput = document.getElementById("currentGpa");
  const currentCreditsInput = document.getElementById("currentCredits");

  const currentGpa = parseFloat(currentGpaInput?.value);
  const currentCredits = parseFloat(currentCreditsInput?.value);

  let totalPoints = 0;
  let totalCredits = 0;

  // Add current GPA if valid
  if (!isNaN(currentGpa) && !isNaN(currentCredits)) {
    totalPoints += currentGpa * currentCredits;
    totalCredits += currentCredits;
  }

  // Loop over the new courses
  for (let i = 0; i < grades.length; i++) {
    const gradeValue = parseFloat(grades[i].value);
    const creditValue = parseFloat(credits[i].value);

    if (!isNaN(gradeValue) && !isNaN(creditValue)) {
      totalPoints += gradeValue * creditValue;
      totalCredits += creditValue;
    }
  }

  if (totalCredits === 0) {
    alert("Please enter valid course credits.");
    return;
  }

  const gpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById("gpaResult").textContent = "Comulative GPA: " + gpa;
}
