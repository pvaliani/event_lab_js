document.addEventListener('DOMContentLoaded', () => {
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButtonItem = document.createElement('button');
  deleteButtonItem.id = 'delete';
  deleteButtonItem.textContent = "delete all"
  document.body.appendChild(deleteButtonItem);

  const button = document.querySelector('#delete');
  button.addEventListener('click', handleButtonClick);

})


const handleFormSubmit = function (event) {

  // stops the post request
  event.preventDefault();

  const title = event.target.title.value
  const author = event.target.author.value
  const category = event.target.category.value

  // create li element i.e list
  // 

  const newListItem = document.createElement('li');

  // Title
  const newTitleItem = document.createElement('h2');
  newTitleItem.textContent = `Title: ${title}`;
  newListItem.appendChild(newTitleItem);

  // Author
  const newAuthorItem = document.createElement('h3');
  newAuthorItem.textContent = `Author: ${author}`;
  newListItem.appendChild(newAuthorItem);

  // Category

  const newCategoryItem = document.createElement('h4');
  newCategoryItem.textContent = `Category: ${category}`;
  newListItem.appendChild(newCategoryItem);


  const readingList = document.querySelector("#reading-list");


  readingList.appendChild(newListItem);
  event.target.reset();
};


const handleButtonClick = function (event) {
  const readingList = document.querySelector("#reading-list");
  readingList.textContent = "";

  // event.target.newTitleItem.value.reset();
  // event.target.newAuthorItem.value.reset();
  // event.target.newCategoryItem.value.reset();

  
};