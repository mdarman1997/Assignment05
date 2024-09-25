

function getInputValueById(id){
    const input = document.getElementById(id).value;
    const inputValue = parseFloat(input);
    return inputValue;
}

function getInnerTextValueById(id){
    const value=document.getElementById(id).innerText;
    const getValue = parseFloat(value);
    return getValue;

}

function getInnerHeadlineByID(id){
    const headline=document.getElementById(id).innerText;
    return headline;
}

function balanceSheet(DonationAmount,ownBalance,donatedBalance,id,headline){
   
    if(isNaN(DonationAmount) ||  (DonationAmount <= 0)){
        alert('Failed to Donate Money.');
        return;
    }
    
    if(DonationAmount > ownBalance){
        alert('You do not have enough money to donate');
        return;
    }
    const newDonatedBalance=donatedBalance + DonationAmount;
    const newOwnBalance=ownBalance - DonationAmount;

    document.getElementById('balance').innerText=newOwnBalance;
    document.getElementById(id).innerText=newDonatedBalance;

    historyTransaction(DonationAmount,headline);

}

function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
   
   
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}
