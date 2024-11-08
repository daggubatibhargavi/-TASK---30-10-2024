const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Bubbling Phase (default behavior)
grandparent.addEventListener(
  "click",
  () => alert("Grandparent Div clicked - bubbling"),
  false
);
parent.addEventListener(
  "click",
  () => alert("Parent Div clicked - bubbling"),
  false
);
child.addEventListener(
  "click",
  () => alert("Child Div clicked - bubbling"),
  false
);

// Trickling Phase
grandparent.addEventListener(
  "click",
  () => alert("Grandparent Div clicked - capturing"),
  true
);
parent.addEventListener(
  "click",
  () => alert("Parent Div clicked - capturing"),
  true
);
child.addEventListener(
  "click",
  () => alert("Child Div clicked - capturing"),
  true
);

// // Example 1: Grandparent and Parent in capturing phase, Child in bubbling phase

// grandparent.addEventListener(
//   "click",
//   () => alert("Grandparent Div clicked - capturing"),
//   true
// );

// parent.addEventListener(
//   "click",
//   () => alert("Parent Div clicked - capturing"),
//   true
// );

// child.addEventListener(
//   "click",
//   () => alert("Child Div clicked - bubbling"),
//   false
// );

// // Example 2: All in bubbling phase grandparent.addEventListener('click', () => alert('Grandparent Div clicked - bubbling'), false);

// parent.addEventListener(
//   "click",
//   () => alert("Parent Div clicked - bubbling"),
//   true
// );

// child.addEventListener(
//   "click",
//   () => alert("Child Div clicked - bubbling"),
//   false
// );
