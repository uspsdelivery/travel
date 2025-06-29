document.addEventListener('DOMContentLoaded', function() {
  // Handle swap button functionality
  const swapButton = document.querySelector('.swap-button');
  const fromInput = document.querySelector('.input-group:first-child input');
  const toInput = document.querySelector('.input-group:last-child input');

  swapButton.addEventListener('click', function() {
    const fromValue = fromInput.value;
    const toValue = toInput.value;
    
    fromInput.value = toValue;
    toInput.value = fromValue;
    
    // Add animation effect
    swapButton.style.transform = 'translateY(-50%) rotate(180deg)';
    setTimeout(() => {
      swapButton.style.transform = 'translateY(-50%) rotate(0deg)';
    }, 300);
  });

  // Handle favorite button clicks
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (this.textContent === '♡') {
        this.textContent = '❤️';
        this.style.color = '#ff4757';
      } else {
        this.textContent = '♡';
        this.style.color = '#666';
      }
    });
  });

  // Handle category tab switching
  const categoryTabs = document.querySelectorAll('.category-tab');
  
  categoryTabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // Remove active class from all tabs
      categoryTabs.forEach(t => t.classList.remove('active'));
      
      // Add active class to clicked tab
      this.classList.add('active');
    });
  });

  // Handle input focus effects
  const inputs = document.querySelectorAll('input');
  
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.style.transform = 'scale(1.02)';
      this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement.style.transform = 'scale(1)';
    });
  });

  // Handle destination card clicks
  const destinationCards = document.querySelectorAll('.destination-card, .offer-card');
  
  destinationCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't trigger if clicking on favorite button
      if (e.target.classList.contains('favorite-btn')) return;
      
      // Add click animation
      this.style.transform = 'scale(0.95)';
      this.style.transition = 'transform 0.1s ease';
      
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 100);
      
      // Here you could add navigation logic
      console.log('Clicked on:', this.querySelector('h3').textContent);
    });
  });

  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = 'smooth';

  // Handle see all button clicks
  const seeAllButtons = document.querySelectorAll('.see-all');
  
  seeAllButtons.forEach(button => {
    button.addEventListener('click', function() {
      console.log('See all clicked for:', this.parentElement.querySelector('h2').textContent);
      // Add your navigation logic here
    });
  });
});
