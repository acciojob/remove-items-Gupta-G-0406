const button = document.querySelector('input[type="button"]');

button.onclick = function () {
  const select = document.getElementById("colorSelect");
  const selectedIndex = select.selectedIndex;

  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  }
};
