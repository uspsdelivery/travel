
// Tab Switching + Remember Last
const tabButtons = document.querySelectorAll('.tab-button');
const tabSections = document.querySelectorAll('.trip-section');
const lastTab = localStorage.getItem('myTripsTab') || 'past';

function activateTab(tabName) {
  tabButtons.forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });
  tabSections.forEach(sec => {
    sec.classList.toggle('hidden', sec.id !== tabName);
  });
  localStorage.setItem('myTripsTab', tabName);
}

// Initial load
activateTab(lastTab);

// Tab click event
tabButtons.forEach(tab => {
  tab.addEventListener('click', () => {
    activateTab(tab.dataset.tab);
  });
});

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// Cancel Trip with toast
document.querySelectorAll('.cancel-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (confirm('Are you sure you want to cancel this trip?')) {
      const card = btn.closest('.trip-card');
      card.style.transition = 'all 0.5s ease';
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.remove();
        showToast('Trip canceled');
      }, 500);
    }
  });
});



