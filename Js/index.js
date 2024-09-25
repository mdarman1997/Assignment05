// noakhaliDonation balance sheet

document.getElementById('btn-noakhali').addEventListener('click',function(){
// Donated ammount for Noakhali = user input
    const noakhaliDonationAmount=getInputValueById('noakhali-donated-amount');
    

// Owner balance  5500 tk
    const ownBalance=getInnerTextValueById('balance');
   
    // Noakhali doneted tatal ammunt = 0 tk
    const noakhaliBalance=getInnerTextValueById('noakhali-donation');
    
// get Headline 
const noakhaliHeadline=getInnerHeadlineByID('noakhali-headline');


    balanceSheet(noakhaliDonationAmount,ownBalance,noakhaliBalance,'noakhali-donation',noakhaliHeadline);

});

// Donation Feni banlance sheet

document.getElementById('btn-feni').addEventListener('click',function(){
    // Donated ammount for feni = user input
    const feniDonationAmount=getInputValueById('feni-donated-amount');
   
// Owner balance  5500 tk
    const ownBalance=getInnerTextValueById('balance');
  
    // feni doneted tatal ammunt = 600 tk
    const feniBalance=getInnerTextValueById('feni-donation');
  
// get Headline 
const feniHeadline=getInnerHeadlineByID('feni-headline');


    balanceSheet(feniDonationAmount,ownBalance,feniBalance,'feni-donation',feniHeadline);

});

// Aid for Injured in the Quota Movement banlance sheet
document.getElementById('btn-injured').addEventListener('click',function(){
 // Donated ammount for Aid for Injured  = user input
    const injuredDonationAmount=getInputValueById('injured-donation-amount');
   
// Owner balance  5500 tk
    const ownBalance=getInnerTextValueById('balance');
   
    // Aid for Injured doneted tatal ammunt =2400 tk
    const injuredBalance=getInnerTextValueById('injured-donation');
    
// get Headline 
const injuredHeadline=getInnerHeadlineByID('injured-headline');


    balanceSheet(injuredDonationAmount,ownBalance,injuredBalance,'injured-donation',injuredHeadline);

});




