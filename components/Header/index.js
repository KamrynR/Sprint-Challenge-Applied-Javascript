// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header(date, header, temp) {
    let header1 = document.createElement('div');
    let hDate = document.createElement('span');
    let hH1 = document.createElement('h1');
    let hTemp = document.createElement('span');

    header1.appendChild(hDate);
    header1.appendChild(hH1);
    header1.appendChild(hTemp);

    header1.classList.add('header');
    hDate.classList.add('date');
    hTemp.classList.add('temp');

    hDate.innerHTML = date;
    hH1.innerHTML = header;
    hTemp.innerHTML = temp;

    return header1;
}

let newHeader = document.querySelector('.header-container');

newHeader.appendChild(Header("SMARCH 28, 2019", "Lambda Times", "98°"));
