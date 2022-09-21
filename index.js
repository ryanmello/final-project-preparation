// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"

async function main(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await users.json();
    console.log(usersData);
}
main();