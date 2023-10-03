async function getTodoById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    if (!response.ok) {
        throw new Error('Incorrect response');
    }
    return response.json();
}

async function getUserById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error('Incorrect response');
    }
    return response.json();
}

async function fetchData() {
    try {
        const [todo, user] = await Promise.all([getTodoById(1), getUserById(1)]);
        console.log("Todo:", todo);
        console.log("User:", user);

        const result = await Promise.race([getTodoById(1), getUserById(1)]);
        console.log("First completed response:", result);
    } catch (error) {
        console.error(error);
    }
}

fetchData();