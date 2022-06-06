x = "";
y = 1;
let btns = document.querySelectorAll(".btn");
let screenLength;
btns.forEach((allBtn) => {
  allBtn.addEventListener("click", () => {
    // console.log(eval(screenResult.innerHTML));
    if (allBtn.innerHTML == "=") {
      screenResult.innerHTML = eval(screenResult.innerHTML);
      console.log("1");
    } else if (allBtn.innerHTML == "+" && screenLength == "+") {
      // console.log("if1");
    } else if (allBtn.innerHTML == "-" && screenLength == "-") {
      // console.log("if2");
    } else if (allBtn.innerHTML == "/" && screenLength == "/") {
      // console.log("if3");
    } else if (allBtn.innerHTML == "*" && screenLength == "*") {
      // console.log("if4");
    } else if (allBtn.innerHTML == "." && screenLength == ".") {
      // console.log("if5");
    } else if (allBtn.hasAttribute("type", "delete")) {
      screenResult.innerHTML = screenResult.innerHTML.substring(
        0,
        screenResult.innerHTML.length - 1
      ); //?????????
    } else if (allBtn.hasAttribute("typee", "deleteAll")) {
      screenResult.innerHTML = "";
    } else {
      screenResult.innerHTML += allBtn.innerHTML;
    }
    screenLength = screenResult.innerHTML[screenResult.innerHTML.length - 1];
  });
});
