// noakhaliDonation balance sheet

document.getElementById('btn-noakhali').addEventListener('click',function(){
// Donated ammount for Noakhali = user input
    const noakhaliDonationAmount=getInputValueById('noakhali-donated-amount');
    console.log(noakhaliDonationAmount);

// Owner balance  5500 tk
    const ownBalance=getInnerTextValueById('balance');
    console.log(ownBalance);
    // Noakhali doneted tatal ammunt = 0 tk
    const noakhaliBalance=getInnerTextValueById('noakhali-donation');
    console.log(noakhaliBalance);
    balanceSheet(noakhaliDonationAmount,ownBalance,noakhaliBalance,'noakhali-donation');

});

// Donation Feni banlance sheet

document.getElementById('btn-feni').addEventListener('click',function(){
    // Donated ammount for feni = user input
    const feniDonationAmount=getInputValueById('feni-donated-amount');
    console.log(feniDonationAmount);
// Owner balance  5500 tk
    const ownBalance=getInnerTextValueById('balance');
    console.log(ownBalance);
    // feni doneted tatal ammunt = 600 tk
    const feniBalance=getInnerTextValueById('feni-donation');
    console.log(feniBalance);
    balanceSheet(feniDonationAmount,ownBalance,feniBalance,'feni-donation');

});

// Aid for Injured in the Quota Movement banlance sheet
document.getElementById('btn-injured').addEventListener('click',function(){
 // Donated ammount for Aid for Injured  = user input
    const injuredDonationAmount=getInputValueById('injured-donation-amount');
    console.log(injuredDonationAmount);
// Owner balance  5500 tk
    const ownBalance=getInnerTextValueById('balance');
    console.log(ownBalance);
    // Aid for Injured doneted tatal ammunt =2400 tk
    const injuredBalance=getInnerTextValueById('injured-donation');
    console.log(injuredBalance);
    balanceSheet(injuredDonationAmount,ownBalance,injuredBalance,'injured-donation');

});