// json2html.js

export default function json2html(data) {
  // Start table with data attribute
  let html = `<table data-user="mohanasreeummidi@gmail.com">`;

  // Add the table header with columns for Name, Age, and Gender
  html += `
        <thead>
            <tr><th>Name</th><th>Age</th><th>Gender</th></tr>
        </thead>
        <tbody>
    `;

  // Loop through the data to create table rows
  data.forEach((item) => {
    html += `<tr><td>${item.Name || ""}</td><td>${item.Age || ""}</td><td>${
      item.Gender || ""
    }</td></tr>`;
  });

  // Close the table body and table tags
  html += `
        </tbody>
    </table>`;

  return html;
}
