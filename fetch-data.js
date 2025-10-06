document.addEventListener("DOMContentLoaded", function () {

    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById("api-data");

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const users = await response.json();
            console.log("Fetched users:", users);

            dataContainer.innerHTML = "";
            
            const userList = document.createElement("ul");
            // Loop through each user
            users.forEach(function(user) {
                // Create a <li> element
                const listItem = document.createElement("li");

                // Set the text content to the user's name
                listItem.textContent = `${user.name}`;

                // Append the <li> to the <ul>
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
            // users.forEach(user => {
            //     const userDiv = document.createElement("div");
            //     userDiv.textContent = `${user.name} (${user.email})`;
            //     dataContainer.appendChild(userDiv);
            // });

        } catch (error) {
            console.error("Failed to load user data", error);
        }
    }

    fetchUserData();
});
