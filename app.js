function createMultiplicationTable(start) {
    var tableContainer = document.getElementById('multiplicationTable');
    tableContainer.innerHTML = ''; // Clear any existing table data

    // Generate tables from the given number down to 1
    for (let number = start; number >= 1; number--) {
        // Create a heading for each table
        var tableTitle = document.createElement('h3');
        tableTitle.innerText = `Multiplication Table of ${number}`;
        tableContainer.appendChild(tableTitle);

        // Create the multiplication list
        var list = document.createElement('p');

        for (let i = 1; i <= 12; i++) {
            var listItem = document.createElement('p');
            listItem.innerText = `${number} * ${i} = ${number * i}`;
            list.appendChild(listItem);
        }

        tableContainer.appendChild(list); // Add the list to the container
    }
}

// Handle form submission
document.getElementById('tableForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    var startNumber = parseInt(document.getElementById('startNumber').value);

    if (startNumber >= 1) {
        createMultiplicationTable(startNumber); // Call function with the start number
    } else {
        alert('Please enter a number greater than or equal to 1.');
    }
});