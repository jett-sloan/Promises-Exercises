let favNumber = 5;
let url = "http://numbersapi.com"

const factPromises = [];
for (let i = 0; i < 4; i++) {
    factPromises.push(axios.get(`${url}/${favNumber}?json`));
}

Promise.all(factPromises)
  .then(favFactArr => {
    const favFactContainer = document.getElementById('apiDataFavNum')
    favFactArr.forEach(response => {
          const favFactElement = document.createElement('p');
          favFactElement.textContent = response.data.text
          favFactContainer.appendChild(favFactElement)
      });
  })
  .catch(err => console.log(err));

let multipleNum = []
for (let i = 1; i < 4; i++) {
    multipleNum.push(
      axios.get(`${url}/${i}?json`)
    );
  }
  Promise.all(multipleNum)
  .then(numArr => {
    const apiDataContainer = document.getElementById('apiData')
      numArr.forEach(response => {
        const facts = document.createElement('p');
        facts.textContent = response.data.text
        apiDataContainer.appendChild(facts)

      });
  })
  .catch(err => console.log(err));
