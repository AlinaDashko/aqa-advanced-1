function getTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        (response) => response.json()
    );
}

function getUserById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
        (response) => response.json()
    );
}

Promise.all([getTodoById(1), getUserById(1)])
    .then(([todo, user]) => {
        console.log("Todo:", todo);
        console.log("User:", user);
    })
    .catch((error) => {
        console.error(error);
    });

Promise.race([getTodoById(1), getUserById(1)])
    .then((result) => {
        console.log("First completed response", result);
    })
    .catch((error) => {
        console.error(error);
    });