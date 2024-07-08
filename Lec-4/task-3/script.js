function handleError(){
    throw new Error("New Error Made");
}
try {
    handleError();
} 
catch (error) {
    console.log("I have handled the error successfully.");
}