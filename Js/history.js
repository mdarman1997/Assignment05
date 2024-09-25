
function historyTransaction(donatedAmount,headLine) {
    const history = document.createElement('div');


    history.innerHTML = `<div class="card bg-base-100 w-full shadow-xl py-2 px-2">
          <div class="card-body">
            <h2 class="card-title"> ${donatedAmount} Taka is donated for ${headLine} </h2>
            <p>Date: ${new Date()}</p>
          </div>
        </div>`
    document.getElementById('history-section-list').appendChild(history);
}





