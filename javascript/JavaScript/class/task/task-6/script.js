const usersContainer = document.getElementById("users");
const statusText = document.getElementById("status");

async function fetchUsers() {
    try {
    const response = await fetch("https://fakestoreapi.com/users");

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    const users = await response.json();

    statusText.style.display = "none";

    users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";

        card.innerHTML = `<h3>${user.name.firstname} ${user.name.lastname}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>City:</strong> ${user.address.city}</p>`;

        usersContainer.appendChild(card);
    });

    } catch (error) {
    statusText.textContent = "Error loading users. Please try again.";
    statusText.classList.add("error");
    }
}

fetchUsers();


