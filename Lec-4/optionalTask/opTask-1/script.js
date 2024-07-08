// Function that returns a Promise which resolves after a given number of seconds
function delayedMessage(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello after ${delay} seconds`);
        }, delay * 1000);
    });
}

// Async function to call delayedMessage and handle the resolved message
async function handleMessage() {
    try {
        const message = await delayedMessage(5); //  the number of seconds delayed
        console.log(message);
    } catch (error) {
        console.error("An error occurred:", error);
    } 
}

// Call the async function
handleMessage();