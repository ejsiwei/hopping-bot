function getElementsByXPath(xpath, parent) {
    // Function to retrieve elements by XPath
    let results = [];
    let query = document.evaluate(xpath, parent || document,
        null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) {
        results.push(query.snapshotItem(i));
    }
    return results;
};

a = async function(o) {
    // Asynchronous function
    for (var i = 0; i < o; i++) {
        // Loop for a specified number of iterations
        document.querySelector("#jumper").click(); 
        // Click on element with id "jumper"
        const timeoutDuration1 = Math.floor(Math.random() * 3000) + 3000;
        await new Promise((resolve) => setTimeout(resolve, timeoutDuration1));
        // Wait for a random duration between 3000ms and 6000ms
        
        getElementsByXPath('//button[@onclick="if (!window.__cfRLUnblockHandlers) return false; collectPrize();"]').forEach(element => element.click());
        // Find elements with specified XPath and click on each element
        
        const timeoutDuration2 = Math.floor(Math.random() * 3000) + 3000;
        await new Promise((resolve) => setTimeout(resolve, timeoutDuration2));
        // Wait for a random duration between 3000ms and 6000ms
        
        await new Promise(r => setTimeout(r, 500));
        // Wait for 500ms
    }
};
