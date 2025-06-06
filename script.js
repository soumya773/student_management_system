const students = [
      {
        id: 1,
        first_name: "Avi",
        last_name: "Vashishta",
        email: "avi@gmail.com",
        gender: "Male",
        class: 12,
        marks: 99,
        passing: false,
        img_src: "https://robohash.org/avi.png"
      }
      // Add remaining students here
    ];

    function renderTable(data) {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";
      data.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${student.id}</td>
          <td><img src="${student.img_src}" />${student.first_name} ${student.last_name}</td>
          <td>${student.gender}</td>
          <td>${student.class}</td>
          <td>${student.marks}</td>
          <td>${student.passing ? "Passing" : "Failed"}</td>
          <td>${student.email}</td>
        `;
        tbody.appendChild(row);
      });
    }

    function searchStudents(query) {
      const filtered = students.filter(s =>
        s.first_name.toLowerCase().includes(query.toLowerCase()) ||
        s.last_name.toLowerCase().includes(query.toLowerCase()) ||
        s.email.toLowerCase().includes(query.toLowerCase())
      );
      renderTable(filtered);
    }

    document.getElementById("search").addEventListener("input", e => {
      searchStudents(e.target.value);
    });

    document.getElementById("searchBtn").addEventListener("click", () => {
      const query = document.getElementById("search").value;
      searchStudents(query);
    });

    function sortAZ() {
      const sorted = [...students].sort((a, b) =>
        (a.first_name + a.last_name).localeCompare(b.first_name + b.last_name)
      );
      renderTable(sorted);
    }

    function sortZA() {
      const sorted = [...students].sort((a, b) =>
        (b.first_name + b.last_name).localeCompare(a.first_name + a.last_name)
      );
      renderTable(sorted);
    }

    function sortByMarks() {
      const sorted = [...students].sort((a, b) => a.marks - b.marks);
      renderTable(sorted);
    }

    function sortByPassing() {
      const passingStudents = students.filter(s => s.passing);
      renderTable(passingStudents);
    }

    function sortByClass() {
      const sorted = [...students].sort((a, b) => a.class - b.class);
      renderTable(sorted);
    }

    function sortByGender() {
      const males = students.filter(s => s.gender.toLowerCase() === "male");
      const females = students.filter(s => s.gender.toLowerCase() === "female");
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";

      renderTable(females);

      const separator = document.createElement("tr");
      separator.innerHTML = `<td colspan="7" style="text-align:center; font-weight:bold;">Male Students</td>`;
      tbody.appendChild(separator);

      males.forEach(student => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${student.id}</td>
          <td><img src="${student.img_src}" />${student.first_name} ${student.last_name}</td>
          <td>${student.gender}</td>
          <td>${student.class}</td>
          <td>${student.marks}</td>
          <td>${student.passing ? "Passing" : "Failed"}</td>
          <td>${student.email}</td>
        `;
        tbody.appendChild(row);
      });
    }

    // Initial render
    renderTable(students);