function calculateAndDisplay(){
    // get the values from HTML
    let bill = parseFloat(document.querySelector('#totalBill').value);
    let numOfPpl = parseInt(document.querySelector('#numOfPeople').value);
    let serviceQuality = document.querySelector('#serviceQuality').value;

    //Calc tip, totalBill, and amt each person owes

    let tip = calcTip(bill, serviceQuality);
    let totalBill = calcTotalBill(bill, tip);
    let amtPerPerson = calcAmtPerPerson(totalBill, numOfPpl);

    //Display the Results in the HTML
    document.querySelector('#tipResult').innerText = 'Tip: $' + tip.toFixed(2);
    document.querySelector('#totalBillResult').innerText = 'Total: $' + totalBill.toFixed(2);
    document.querySelector('#amtPerPersonResult').innerText = 'Total Per Person: $' + amtPerPerson.toFixed(2);

    //
}

// helper function for calculations
function calcTip(bill, quality) {

    if (quality === 'Great') {
        return bill * 0.2;
    } else if (quality === 'Good') {
        return bill * 0.15;
    } else {
        return bill * 0.1;
    }

}

function calcTotalBill(bill, tip) {
    return bill + tip
}

function calcAmtPerPerson (totalBill, numOfPpl) {
    return totalBill / numOfPpl
}