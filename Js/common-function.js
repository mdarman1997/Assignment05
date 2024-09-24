

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

function balanceSheet(DonationAmount,ownBalance,donatedBalance,id){
   
    if(isNaN(DonationAmount) ||  (DonationAmount < 0)){
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


}