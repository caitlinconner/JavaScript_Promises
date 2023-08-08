/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10; //10% change to fail, 90% to succeed.
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

//select elements
let feedbackP = document.getElementById("error");
let ul = document.getElementById("list");

let promise = getList(); //returns a promise, and added a variable to the getList funciton

// TODO: Handle the resolved or rejected states of the promise
//render the list of hobbits as list items within the unordered list with id="list"
function handleList(list) {
  list.forEach((hobbit) => {
    let li = document.createElement("li");
    li.textContent = hobbit;
    ul.appendChild(li);
  });
}

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)
function handleError(err) {
  console.error(err);
  feedbackP.textContent = err.message;
}


// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)

promise.then(handleList).catch(handleError); 


//async 08
//use getList still
