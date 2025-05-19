document.addEventListener('DOMContentLoaded', function () {
  const popBtn = document.getElementById("popBtn");
  const popupOverlay = document.getElementById('popupOverlay');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');

  // Function to open the popup
  function openPopup() {
    popupOverlay.style.display = 'block';
  }

  // Function to close the popup
  function closePopupFunc() {
    popupOverlay.style.display = 'none';
  }

  // 👉 Add event listener to the button
  popBtn.addEventListener('click', openPopup);

  closePopup.addEventListener('click', closePopupFunc);

  popupOverlay.addEventListener('click', function (event) {
    if (event.target === popupOverlay) {
      closePopupFunc();
    }
  });
});

