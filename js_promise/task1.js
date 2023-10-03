function printWithDelay(text, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(text);
        }, ms);
    });
}
async function delayedPrint(text, milliseconds) {
    try {
        const result = await printWithDelay(text, milliseconds);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

delayedPrint("Text that displayed after 2 seconds", 2000);