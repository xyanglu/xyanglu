<style>
  .floating-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
  }
  
  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    border: 1px solid #ccc;
    padding: 20px;
    display: none;
  }
</style>
<p><a href="#" class="floating-button" onclick="showPopup(event)"> <img src="https://play-lh.googleusercontent.com/TI8o079rVoxaQ5ZeDcLfQRlS7MQrwNbpGh4-WdOYC2lYIZk1jAhABtABLU_kl2aReCSl" alt="Floating Button" width="50" height="50" /> </a></p>
<div id="popup" class="popup">
<p>This is the popup content.</p>
<button onclick="hidePopup()">Close</button></div>
<p>
<script>
  function showPopup(event) {
    event.preventDefault();
    var popup = document.getElementById("popup");
    popup.style.display = "block";
  }
  
  function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
</script>
</p>
