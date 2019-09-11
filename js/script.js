/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Global Variables
const studentItem = document.getElementsByClassName('student-item cf');
const itemsPerPage = 10;
const totalPages = Math.ceil(studentItem.length/itemsPerPage);

// 'showPage' function shows up to 10 items per page from the 'studentItem' variable
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

// 'appendPageLinks' function generates, appends, and adds functionality to 'studentItem' variable items
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

// Calling 'showPage' and 'appendPageLinks' functions
showPage(studentItem, 1);
appendPageLinks(studentItem);



   








