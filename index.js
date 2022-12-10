
function fetchBooks() {
  
  let resultToBeReturned = fetch("https://anapioficeandfire.com/api/books") 
  .then((resp) => resp.json()) 
  .then((data) => renderBooks(data)) 
  .catch((error) => `ERROR => ${console.error(error.message)}`)
  return resultToBeReturned;
}


function renderBooks(books) {
  const main = document.querySelector('main');}
