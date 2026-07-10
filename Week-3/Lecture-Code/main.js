let name = "Marwan";
const birthplace = "Gaza";
// birthplace = "Jerusalem"; // This would cause an error because birthplace is a constant and cannot be reassigned.
console.log(name);
console.log(birthplace);
document.getElementById("myButton").addEventListener("click", function () {
  alert("Hello, " + name + "! You were born in " + birthplace + ".");
});
document.getElementById("closeBanner").addEventListener("click", function () {
  document.getElementById("myButton").style.display = "none";
});

document.getElementById("btnAge").addEventListener("click", function () {
  const age = document.getElementById("txtAge").value;
  console.log("Submitted age: " + age);
  document.getElementById("ageResult").innerText =
    "You are " + age + " years old.";
});
