/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const studentItem = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;
const totalPages = Math.ceil(studentItem.length/itemsPerPage);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show. ***/
const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   for ( let i = 0; i < list.length; i++ ) {
      if ( i >= startIndex && i < endIndex ) {
         list[i].style.display = 'block';
      } else {
         list[i].style.display = 'none';
      }
   }
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   const paginationDiv = document.createElement('div');
   const pageDiv = document.querySelector('.page');
   const ul = document.createElement('ul');
   let li;
   let a;
   paginationDiv.className = "pagination";
   pageDiv.appendChild(paginationDiv);
   paginationDiv.appendChild(ul);
   for (let i = 0; i < totalPages; i++) {
      li = document.createElement('li');
      a = document.createElement('a');
      a.setAttribute("href", "#");
      a.innerHTML = i + 1;
      ul.appendChild(li);
      li.appendChild(a);
   }
   const myLinks = document.querySelectorAll('.pagination a');
   myLinks[0].className = "active";
   for (let i = 0; i < myLinks.length; i++ ) { 
      myLinks[i].addEventListener('click', (event) => {  
         for ( let j = 0; j < myLinks.length; j++ ) {
            myLinks[j].classList.remove('active');
         }
         const eventTarget = event.target;                  
         eventTarget.classList.add('active');
         showPage(list, eventTarget.innerHTML);
      });
   }
}

showPage(studentItem, 1);
appendPageLinks(studentItem);

// const search = () => {
const parentDiv = document.querySelector('div.page-header');
const searchDiv = document.createElement('div');
const searchInput = document.createElement('input');
const searchButton = document.createElement('button');
searchDiv.setAttribute("class", "student-search");
searchInput.setAttribute("placeholder", "Search for students...");
searchButton.innerHTML = "Search";
parentDiv.appendChild(searchDiv);
searchDiv.append(searchInput, searchButton);

const performSearch = (input, names) => {
   for ( let i = 0; i < names.length; i++) {
      names[i].classList.remove('match');
      if ( input.value.length !== 0 && names[i].textContent.toLowerCase().includes(input.value.toLowerCase()) ) {
               names[i].classList.add('match');
      }
   }
}

searchButton.addEventListener('click', (event) => {
   event.preventDefault();
   performSearch(searchInput, studentItem);
});

searchInput.addEventListener('keyup', (event) => {
   event.preventDefault();   
   performSearch(searchInput, studentItem);  
});
// }








