'use strict';

  document.getElementById("btn1").onclick = () => openModal("modal1");
  document.getElementById("btn2").onclick = () => openModal("modal2");
  document.getElementById("btn3").onclick = () => openModal("modal3");

  function openModal(id) {
    document.getElementById(id).style.display = "block";
  }

  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }


  window.onclick = function(event) {
    ["modal1", "modal2", "modal3"].forEach(id => {
      const modal = document.getElementById(id);
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
  