// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


async function main() {
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await users.json();
    const userListElem = document.querySelector(".user-list")
    console.log(userData);
    userListElem.innerHTML = userData.map((user) => userHTML(user)).join("");

}

main();

function showUserPosts(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/user-posts-starter/user.html`
}

function userHTML(user) {
    return `<div class="user-card" onclick="showUserPosts(${user.id})">
        <div class="user-card__container">
        <h3>${user.name}</h4>
            <p><b>Email:</b> ${user.email}</p>
            <p><b>Phone:</b> ${user.phone}</p>
            <p><b>Website:</b> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
    </div>
  </div>`
}