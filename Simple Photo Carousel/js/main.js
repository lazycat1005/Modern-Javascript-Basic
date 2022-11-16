window.onload = function () {
  const a1 = document.getElementById("a1");
  const a2 = document.getElementById("a2");
  const a3 = document.getElementById("a3");
  const a4 = document.getElementById("a4");
  const a5 = document.getElementById("a5");
  const phone = document.getElementById("contentPhone");
  const photoUrl = [
    'url("https://images.pexels.com/photos/13445893/pexels-photo-13445893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/13007124/pexels-photo-13007124.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/13623557/pexels-photo-13623557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/13298639/pexels-photo-13298639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
    'url("https://images.pexels.com/photos/13292768/pexels-photo-13292768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
  ];
  let pageIdx = 1;
  let timeBox = null;

  a1.addEventListener("click", showPhoto);
  a2.addEventListener("click", showPhoto);
  a3.addEventListener("click", showPhoto);
  a4.addEventListener("click", showPhoto);
  a5.addEventListener("click", showPhoto);

  function showPhoto() {
    pageIdx = Number(this.id.substr(1));
    phone.style.backgroundImage = photoUrl[pageIdx - 1];
    resetPhoto();
    clearInterval(timeBox);
    timeGO();
  }

  function resetPhoto() {
    for (let i = 1; i < 6; i++) {
      document.getElementById("a" + i).style.opacity = 0.5;
    }
    document.getElementById("a" + pageIdx).style.opacity = 1;
  }

  function timeGO() {
    timeBox = setInterval(() => {
      pageIdx++;
      if (pageIdx > 5) {
        pageIdx = 1;
      }
      resetPhoto();
      phone.style.backgroundImage = photoUrl[pageIdx - 1];
    }, 1000);
  }

  a1.style.opacity = 1;
  timeGO();
};
