    async function fetchDataFromSource1() {
    console.log("Fetching data from source 1...");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      if (!response.ok) {
        throw new Error("Error fetching data from source 1");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data from source 1");
    }
  }
  
  async function fetchDataFromSource2() {
    console.log("Fetching data from source 2...");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/2"
      );
      if (!response.ok) {
        throw new Error("Error fetching data from source 2");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Error fetching data from source 2");
    }
  }
  
  async function fetchAndProcessData() {
    try {
      const data1 = await fetchDataFromSource1();
      console.log(`Data from source 1: ${JSON.stringify(data1, null, 2)}`);
    } catch (error) {
      console.error(error.message);
      return; // Stop further execution if an error occurs in source 1
    }
  
    try {
      const data2 = await fetchDataFromSource2();
      console.log(`Data from source 2: ${JSON.stringify(data2, null, 2)}`);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  // Call the function to see the output
  fetchAndProcessData();