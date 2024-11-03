 document.getElementById("convertButton101").addEventListener("click", () => {
    const fileInput = document.getElementById("xmlFile101");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload an XML file.");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (event) {
        const xmlData = event.target.result;
        const csvData = convertXMLToCSV(xmlData);
        downloadCSV(csvData);
    };
    reader.readAsText(file);
});

function convertXMLToCSV(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
    
    // Handle parsing errors
    if (xmlDoc.getElementsByTagName("parsererror").length > 0) {
        alert("Error parsing XML. Please check the file.");
        return "Error parsing XML"; // Return an error message
    }
    
    const rows = [];
    const items = xmlDoc.getElementsByTagName("*"); // Get all elements

    if (items.length === 0) {
        alert("No items found in the XML file.");
        return "No data"; // Return an empty CSV data string
    }

    // Generate headers from the unique tag names
    const headersSet = new Set();
    for (let item of items) {
        for (let child of item.children) {
            headersSet.add(child.nodeName);
        }
    }
    const headers = Array.from(headersSet);
    rows.push(headers.join(",")); // Add headers to CSV

    // Generate CSV rows
    for (let item of items) {
        const values = headers.map(header => {
            const child = item.getElementsByTagName(header)[0];
            return child ? child.textContent : ""; // Handle missing values
        });
        rows.push(values.join(","));
    }

    return rows.join("\n");
}

function downloadCSV(csvData) {
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.getElementById("downloadLink101");
    const url = URL.createObjectURL(blob);
    
    link.setAttribute("href", url);
    link.setAttribute("download", "converted.csv");
    link.style.display = "block"; // Show the download link
    link.innerText = "Download CSV";
}
