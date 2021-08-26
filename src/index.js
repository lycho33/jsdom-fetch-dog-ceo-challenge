console.log('%c HI', 'color: firebrick')

// let breeds = [];

// document.addEventListener('DOMContentLoaded', function () {
//   loadImages();
//   loadBreedOptions();
// });

// function loadImages() {
//   const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//   fetch(imgUrl)
//     .then(res=> res.json())
//     .then(results => {
//       results.message.forEach(image => addImage(image))
//     });
// }

// function addImage(dogPicUrl) {
//   let container = document.querySelector('#dog-image-container');
//   let newImageEl = document.createElement('img');
//   newImageEl.src = dogPicUrl;
//   container.appendChild(newImageEl);
// }

// function loadBreedOptions() {
//   const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//   fetch(breedUrl)
//     .then(res => res.json())
//     .then(results => {

//       breeds = Object.keys(results.message);
//       updateBreedList(breeds);
//       addBreedSelectListener();
//     });
// }

// function updateBreedList(breeds) {
//   let ul = document.querySelector('#dog-breeds');
//   removeChildren(ul);
//   breeds.forEach(breed => addBreed(breed));
// }

// function removeChildren(element) {
//   let child = element.lastElementChild;
//   while (child) {
//     element.removeChild(child);
//     child = element.lastElementChild;
//   }
// }

// function selectBreedsStartingWith(letter) {
//   updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
// }

// function addBreedSelectListener() {
//   let breedDropdown = document.querySelector('#breed-dropdown');
//   breedDropdown.addEventListener('change', function (event) {
//     selectBreedsStartingWith(event.target.value);
//   });
// }

// function addBreed(breed) {
//   let ul = document.querySelector('#dog-breeds');
//   let li = document.createElement('li');
//   li.innerText = breed;
//   li.style.cursor = 'pointer';
//   ul.appendChild(li);
//   li.addEventListener('click', updateColor);
// }

// function updateColor(event) {
//   event.target.style.color = 'palevioletred';
// }

//Goal: load all dog breeds in <ul>
//1. loadBreedOptions() -> fetch, parse into json, add images for each image
//2. addBreed(breed) -> gget ul/id, create 'li', put innerText, append li into 'ul'
//3. updateColor(event) -> update color of particular 'li' breed
//4. updateBreedList(breeds) -> get id, iterate to add breed
//5. selectBreedsStartingWith(letter) -> updatedBreedList -> filtering through breeds to start with (letter)
//6. addBreedSelectListener() -> find id, addEventListener to get selectBreedsStartingWith(event.target.value)
//7. put updateBreedList(breeds); && addBreedSelectListener(); into loadBreedOptions()