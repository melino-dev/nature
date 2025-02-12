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
  });
  