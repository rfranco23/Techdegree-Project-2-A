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
// document.addEventListener('DOMContentLoaded', () => {
   const studentItem = document.getElementsByClassName('student-item cf');
   const itemsPerPage = 10;
   const totalPages = studentItem.length/itemsPerPage;


/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show. ***/
   const showPage = (list, page) => {
      let startIndex = (page * itemsPerPage) - itemsPerPage;
      let endIndex = page * itemsPerPage;

      for ( let i = 0; i < list.length; i++ ) {
         if ( i >= startIndex && i <= endIndex ) {
            list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
         }
      }
   }


   /*** Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const appendPageLinks = (list) => {
   const paginationDiv = document.createElement('div');
   const pageDiv = document.querySelector('.page');
   paginationDiv.className = "pagination";
   pageDiv.appendChild(paginationDiv);
   const ul = document.createElement('ul');
   paginationDiv.appendChild(ul);
   let li;
   let a;
   for (let i = 0; i < totalPages; i++) {
     li = document.createElement('li');
     a = document.createElement('a');
     a.setAttribute("href", "#");
     li.appendChild(a);
     a.innerHTML = i + 1;
   }
   li.firstElementChild.className = "active";
   for (let i = 0; i < totalPages; i++) {
      a.addEventListener('click', (event) => {
         for (let i = 0; i < totalPages; i++) {
            a[i].classList.remove('active');
         }
         let eventTarget = event.target;
         eventTarget.classList.add('active');
         showPage(studentItem, a.innerHTML);
      });
   }
}

showPage(studentItem, 1);
appendPageLinks(studentItem);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.

// });







