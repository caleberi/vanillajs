// listen for submit 
let $ =  document;
$.getElementById("loan-form").addEventListener('submit',function(e){
    //Hide result
    $.getElementById('results').style.display = 'none'
    // show loader
    $.getElementById('loading').style.display = 'block'

    setTimeout(calculateResult,2000);

    e.preventDefault()
})

function calculateResult() {
    // UI amount
    const  amountUI = $.getElementById('amount');
    const  interestUI = $.getElementById('interest');
    const  yearsUI = $.getElementById('years');
    const  monthlyPayment= $.getElementById('monthly-payment');
    const  totalPayment= $.getElementById('total-payment');
    const  totalInterest= $.getElementById('total-interest');

    const principal = parseFloat(amountUI.value);
    const calculateInterest = parseFloat(interestUI.value)/100/12;
    const calculatePayments = parseFloat(yearsUI.value) * 12;

    // compute monthly payment
    const x =  Math.pow(1+calculateInterest,calculatePayments);
    const monthly = (principal*x*calculateInterest)/(x-1);

    if (isFinite(monthly)) {
        monthlyPayment.value =  monthly.toFixed(3);
        totalPayment.value = (monthly* calculatePayments).toFixed(3);
        totalInterest.value = ((monthly* calculatePayments)-principal).toFixed(3);
        
        // show result
        $.getElementById('results').style.display = 'block';
        // hide spinner
        $.getElementById('loading').style.display = 'none';
    }
    else {
        showError("You looks so stupid that you can't figure out that something is missing")
    }

   
    
}


//Show Error
function showError(error) {
    // show result
    $.getElementById('results').style.display = 'none';
    // hide spinner
    $.getElementById('loading').style.display = 'none';
    // create a div
    const errorDiv = $.createElement('div');
    //get elements 
    const card =  $.querySelector('.card');
    const heading = $.querySelector('.heading');

    // add class
    errorDiv.className = 'alert alert-danger';
    //create text node and append to div
    errorDiv.appendChild($.createTextNode(error));
    // Insert error above heading
    card.insertBefore(errorDiv,heading);

    // clear  error
    setTimeout(clearError,3000);
}

// clear error function
function clearError() {
    $.querySelector('.alert').remove();
}