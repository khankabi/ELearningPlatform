document.addEventListener('DOMContentLoaded', function () {
  const popBtns = document.querySelectorAll('.popBtn');
  const popupOverlays = document.querySelectorAll('.popupOverlay');
  const closePopups = document.querySelectorAll('.closePopup');

  // Open popup
  popBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const targetPopup = this.dataset.popup;
      console.log(this.dataset.popup)
      const overlay = document.querySelector(`.popupOverlay[data-popup="${targetPopup}"]`);
      if (overlay) {
        overlay.style.display = 'block'
        overlay.style.zIndex = "100";
      }
      else { alert("not fountd") }
    });
  });

  // Close popup via close button
  closePopups.forEach(btn => {
    btn.addEventListener('click', function () {
      const overlay = this.closest('.popupOverlay');
      if (overlay) overlay.style.display = 'none';
    });
  });

  // Close popup by clicking on overlay (outside popup)
  popupOverlays.forEach(overlay => {
    overlay.addEventListener('click', function (event) {
      if (event.target === overlay) {
        overlay.style.display = 'none';
      }
    });
  });
});
