// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// APPEND ROWS AND FILL WITH DATA
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// SELECT THE FORM AND BUTTON
var form = d3.select("#form");
var button = d3.select("#filter-btn");

// HANDLERS FOR CLICKING BUTTON OR PRESSING ENTER KEY
button.on("click", runEnter);
form.on("submit", runEnter);

//FUNCTION TO RUN BOTH EVENTS
function runEnter() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    tbody.html("");
    var filteredData = tableData.filter(dateData => dateData.datetime === inputValue);
    filteredData.forEach((FilterSighting) => {
        var row = tbody.append("tr");
        Object.entries(FilterSighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};