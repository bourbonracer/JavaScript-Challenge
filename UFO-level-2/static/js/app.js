// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// Append rows and fill with data
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Select the form and button
var form = d3.select("#form");
var button = d3.select("#filter-btn");

// Handles for click and submit
button.on("click", runEnter);
form.on("submit", runEnter);

// Function to run both events with filters for date, city, state, country and shop
function runEnter() {
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");
    var dateValue = inputDate.property("value");
    var cityValue = inputCity.property("value");
    var stateValue = inputState.property("value");
    var countryValue = inputCountry.property("value");
    var shapeValue = inputShape.property("value");
    tbody.html("");
    var filteredDate = tableData.filter(dateData => dateData.datetime === dateValue);
    var filteredCity = tableData.filter(cityData => cityData.city === cityValue);
    var filteredState = tableData.filter(stateData => stateData.state === stateValue);
    var filteredCountry = tableData.filter(countryData => countryData.country === countryValue);
    var filteredShape = tableData.filter(shapeData => shapeData.shape === shapeValue);
    filteredDate.forEach((FilterDate) => {
        var row = tbody.append("tr");
        Object.entries(FilterDate).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    filteredCity.forEach((FilterCity) => {
        var row = tbody.append("tr");
        Object.entries(FilterCity).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    filteredState.forEach((FilterState) => {
        var row = tbody.append("tr");
        Object.entries(FilterState).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    filteredCountry.forEach((FilterCountry) => {
        var row = tbody.append("tr");
        Object.entries(FilterCountry).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    filteredShape.forEach((FilterShape) => {
        var row = tbody.append("tr");
        Object.entries(FilterShape).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};