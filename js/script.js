function initCarousel() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    let currentSlide = 0;
    const slideInterval = 3000;
  
    function showSlide(index) {
      carouselItems.forEach((item) => {
        item.style.display = "none";
      });
      carouselItems[index].style.display = "block";
    }
  
    function nextSlide() {
      showSlide(currentSlide);
      currentSlide = (currentSlide + 1) % carouselItems.length;
      setTimeout(nextSlide, slideInterval);
    }
 
    nextSlide();
  }

  document.addEventListener('DOMContentLoaded', function() {
    initCarousel();
  });
  

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      

      const name = document.getElementById('name').value.trim();
      const birthdate = document.getElementById('birthdate').value.trim();
      const genderMale = document.getElementById('male').checked;
      const genderFemale = document.getElementById('female').checked;
      const message = document.getElementById('message').value.trim();
      
      if (name === '' || birthdate === '' || (!genderMale && !genderFemale) || message === '') {
        alert('Please fill in all fields.');
        return;
      }

      const resultSuccess = document.getElementById('resultSuccess');
      const resultName = document.getElementById('resultName');
      const resultBirthdate = document.getElementById('resultBirthdate');
      const resultGender = document.getElementById('resultGender');
      const resultMessage = document.getElementById('resultMessage');
      
      resultSuccess.textContent = 'Message Sent Successfully!';
      resultName.textContent = name;
      resultBirthdate.textContent = birthdate;
      resultGender.textContent = genderMale ? 'Male' : 'Female';
      resultMessage.textContent = message;

      form.reset();
    });
  });


  document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('openPopupBtn');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const popupOverlay = document.getElementById('popupOverlay');
    const popupForm = document.getElementById('popupForm');
    const popupInput = document.getElementById('popupInput');
    const welcomeMessage = document.getElementById('welcomeMessage');

    function showPopup() {
      popupOverlay.style.display = 'block';
    }

    openPopupBtn.addEventListener('click', showPopup);
  

    closePopupBtn.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
    });
  

    popupForm.addEventListener('submit', function(event) {
      event.preventDefault(); 
  

      const message = popupInput.value.trim();
      welcomeMessage.textContent = message;
  
      // Tutup popup
      popupOverlay.style.display = 'none';
      popupInput.value = ''; 
    });
  

    showPopup();
  });
  