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
    var inputDate = d3.select("#datetime");
    var dateValue = inputDate.property("value");
    tbody.html("");
    var filteredDate = tableData.filter(dateData => dateData.datetime === dateValue);
    filteredDate.forEach((FilterDate) => {
        var row = tbody.append("tr");
        Object.entries(FilterDate).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

function runCity() {
    d3.event.preventDefault();
    var inputCity = d3.select("#city");
    var cityValue = inputCity.property("value");
    tbody.html("");
    var filteredCity = tableData.filter(cityData => cityData.city === cityValue);
    filteredCity.forEach((FilterCity) => {
        var row = tbody.append("tr");
        Object.entries(FilterCity).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

//     d3.event.preventDefault();
//     var inputState = d3.select("#state");
//     var stateValue = inputState.property("value");
//     tbody.html("");
//     var filteredState = tableData.filter(stateData => stateData.state === stateValue);
//     filteredState.forEach((FilterState) => {
//         var row = tbody.append("tr");
//         Object.entries(FilterState).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
//     d3.event.preventDefault();
//     tbody.html("");
//     var inputCountry = d3.select("#country");
//     var countryValue = inputCountry.property("value");
//     var filteredCountry = tableData.filter(countryData => countryData.country === countryValue);
//     filteredCountry.forEach((FilterCountry) => {
//         var row = tbody.append("tr");
//         Object.entries(FilterCountry).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
//     d3.event.preventDefault();
//     var inputShape = d3.select("#shape");
//     var shapeValue = inputShape.property("value");
//     tbody.html("");
//     var filteredShape = tableData.filter(shapeData => shapeData.shape === shapeValue);
//     filteredShape.forEach((FilterShape) => {
//         var row = tbody.append("tr");
//         Object.entries(FilterShape).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//         });
//     });
// };