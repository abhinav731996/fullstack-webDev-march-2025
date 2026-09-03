const users = [
      { id: 1, name: "Anand", role: "Admin", active: true },
      { id: 2, name: "Riya", role: "Editor", active: false },
      { id: 3, name: "Karan", role: "Viewer", active: true },
      { id: 4, name: "Meera", role: "Editor", active: true }
    ];

    document.addEventListener("DOMContentLoaded", () => {
      const tableBody = document.getElementById("tabledata");
      const summary = document.getElementById("summary");

      // Sort users by name (ascending)
      users.sort((a, b) => a.name.localeCompare(b.name));

      let activeCount = 0;
      let inactiveCount = 0;

      // Loop, create rows and append to tbody
      users.forEach(user => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = user.id;

        const tdName = document.createElement("td");
        tdName.textContent = user.name;

        const tdRole = document.createElement("td");
        tdRole.textContent = user.role;

        const tdActive = document.createElement("td");
        tdActive.textContent = user.active ? "Yes" : "No";

        tr.append(tdId, tdName, tdRole, tdActive);
        tableBody.appendChild(tr);

        // Count active/inactive
        if (user.active) activeCount++;
        else inactiveCount++;
      });

      // Show summary
      summary.textContent = `Total Users: ${users.length} | Active: ${activeCount} | Inactive: ${inactiveCount}`;
    });