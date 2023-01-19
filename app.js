/**
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

const errorMsg = document.getElementById("error");
const listOfHobbits = document.getElementById("list");

getList()
.then((value) => value.forEach(name => {
    const hobbit = document.createElement("li");
    hobbit.textContent = name;
    listOfHobbits.appendChild(hobbit);
  })
)
.catch((error) => {
  errorMsg.textContent = error.message;
});