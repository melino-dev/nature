document.getElementById('toggle-mode').addEventListener('click', function() {
  // Toggle between light and dark modes
  document.body.classList.toggle('light-mode');
  document.querySelector('.container').classList.toggle('light-mode');
  
  // Toggle the sun/moon icon
  const modeIcon = document.getElementById('mode-icon');
  if (document.body.classList.contains('light-mode')) {
    modeIcon.innerHTML = '&#9789;'; // Sun icon for day mode
  } else {
    modeIcon.innerHTML = '&#9728;'; // Moon icon for night mode
  }

  // Add/remove light mode for the filter elements
  document.querySelectorAll('.filter-item select, .filter-item input[type="range"], .filter-item input[type="checkbox"]').forEach(function(element) {
    element.classList.toggle('light-mode');
  });

  document.querySelectorAll('.filter-item label').forEach(function(label) {
    label.classList.toggle('light-mode');
  });

  // Add/remove light mode for the doctor cards
  document.querySelectorAll('.doctor-card').forEach(function(card) {
    card.classList.toggle('light-mode');
  });

  // Change text color for the doctor card titles and paragraphs
  document.querySelectorAll('.doctor-card h3, .doctor-card p').forEach(function(element) {
    element.classList.toggle('light-mode');
  });

  // Update carousel items for light/dark mode
  document.querySelectorAll('.carousel-item').forEach(function(item) {
    item.classList.toggle('light-mode');
  });
});

// Handle 'More' button click to show more items (optional functionality)
document.querySelectorAll('.more-btn').forEach(function(button) {
  button.addEventListener('click', function() {
    window.location.href = 'more-doctors.html'; // Redirect to a page with more items
  });
});

















// let currentIndex = 0;
// const items = document.querySelectorAll('.carousel-item');
// const prevBtn = document.querySelector('.carousel-btn-prev');
// const nextBtn = document.querySelector('.carousel-btn-next');

// function showItem(index) {
//   if (index < 0) {
//     currentIndex = items.length - 1;
//   } else if (index >= items.length) {
//     currentIndex = 0;
//   }
//   const offset = -currentIndex * (items[0].offsetWidth + 30); // فاصله بین باکس‌ها
//   document.querySelector('.carousel-items').style.transform = `translateX(${offset}px)`;
// }

// prevBtn.addEventListener('click', function() {
//   currentIndex--;
//   showItem(currentIndex);
// });

// nextBtn.addEventListener('click', function() {
//   currentIndex++;
//   showItem(currentIndex);
// });




document.addEventListener("DOMContentLoaded", function() {
  const prevButtons = document.querySelectorAll('.carousel-prev');
  const nextButtons = document.querySelectorAll('.carousel-next');

  prevButtons.forEach(button => {
    button.addEventListener('click', function() {
      const carouselContainer = button.closest('.carousel-container');
      const carouselItems = carouselContainer.querySelector('.carousel-items');
      const itemWidth = carouselItems.querySelector('.carousel-item').offsetWidth;
      carouselItems.scrollLeft -= itemWidth; // حرکت به سمت چپ
    });
  });

  nextButtons.forEach(button => {
    button.addEventListener('click', function() {
      const carouselContainer = button.closest('.carousel-container');
      const carouselItems = carouselContainer.querySelector('.carousel-items');
      const itemWidth = carouselItems.querySelector('.carousel-item').offsetWidth;
      carouselItems.scrollLeft += itemWidth; // حرکت به سمت راست
    });
  });
});



// document.querySelectorAll('.carousel-item').forEach(function(item) {
//   item.classList.toggle('light-mode');
// });
// document.querySelectorAll('.carousel-item').forEach(function(item) {
//   item.style.backgroundColor = '#f0f0f0'; // Change directly
// });




document.getElementById('toggle-mode').addEventListener('click', function() {
  // Toggle between light and dark modes
  document.body.classList.toggle('light-mode');
  document.querySelector('.container').classList.toggle('light-mode');
  
  // Toggle the sun/moon icon
  const modeIcon = document.getElementById('mode-icon');
  if (document.body.classList.contains('light-mode')) {
    modeIcon.innerHTML = '&#9789;'; // Sun icon for day mode
  } else {
    modeIcon.innerHTML = '&#9728;'; // Moon icon for night mode
  }

  // Add/remove light mode for the filter elements
  document.querySelectorAll('.filter-item select, .filter-item input[type="range"], .filter-item input[type="checkbox"]').forEach(function(element) {
    element.classList.toggle('light-mode');
  });

  document.querySelectorAll('.filter-item label').forEach(function(label) {
    label.classList.toggle('light-mode');
  });

  // Add/remove light mode for the doctor cards
  document.querySelectorAll('.doctor-card').forEach(function(card) {
    card.classList.toggle('light-mode');
  });

  // Change text color for the doctor card titles and paragraphs
  document.querySelectorAll('.doctor-card h3, .doctor-card p').forEach(function(element) {
    element.classList.toggle('light-mode');
  });

  // Update carousel items for light/dark mode
  document.querySelectorAll('.carousel-item').forEach(function(item) {
    item.classList.toggle('light-mode');
  });
});








document.getElementById('toggle-mode').addEventListener('click', function() {
  console.log("دکمه کلیک شد!");  // بررسی اینکه آیا دکمه فعال است
  // Toggle between light and dark modes
  document.body.classList.toggle('light-mode');
  document.querySelector('.container').classList.toggle('light-mode');
  
  // Toggle the sun/moon icon
  const modeIcon = document.getElementById('mode-icon');
  if (document.body.classList.contains('light-mode')) {
    modeIcon.innerHTML = '&#9789;'; // Sun icon for day mode
  } else {
    modeIcon.innerHTML = '&#9728;'; // Moon icon for night mode
  }

  // Add/remove light mode for the filter elements
  document.querySelectorAll('.filter-item select, .filter-item input[type="range"], .filter-item input[type="checkbox"]').forEach(function(element) {
    element.classList.toggle('light-mode');
  });

  document.querySelectorAll('.filter-item label').forEach(function(label) {
    label.classList.toggle('light-mode');
  });

  // Add/remove light mode for the doctor cards
  document.querySelectorAll('.doctor-card').forEach(function(card) {
    card.classList.toggle('light-mode');
  });

  // Change text color for the doctor card titles and paragraphs
  document.querySelectorAll('.doctor-card h3, .doctor-card p').forEach(function(element) {
    element.classList.toggle('light-mode');
  });

  // Update carousel items for light/dark mode
  document.querySelectorAll('.carousel-item').forEach(function(item) {
    item.classList.toggle('light-mode');
  });
});
























