const calendarContainer = document.getElementById('calendar-container');
const departureInput = document.getElementById('departure-date');
const returnInput = document.getElementById('return-date');

let selectedDeparture = null;
let selectedReturn = null;

function generateCalendar(monthOffset = 0) {
  const today = new Date();
  const current = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const monthName = current.toLocaleString('default', { month: 'long' });
  const year = current.getFullYear();

  const firstDayIndex = new Date(year, current.getMonth(), 1).getDay();
  const lastDay = new Date(year, current.getMonth() + 1, 0).getDate();

  const days = [];

  for (let i = 0; i < (firstDayIndex + 6) % 7; i++) {
    days.push('');
  }

  for (let d = 1; d <= lastDay; d++) {
    days.push(d);
  }

  const html = `
    <div class="month">
      <h3>${monthName} ${year}</h3>
      <div class="days-header">
        <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
      </div>
      <div class="days-grid">
        ${days.map(d => {
          const dateStr = `${year}-${String(current.getMonth() + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
          return d
            ? `<div class="day" data-date="${dateStr}">${d}</div>`
            : `<div></div>`;
        }).join('')}
      </div>
    </div>
  `;

  return html;
}

function renderCalendars() {
  calendarContainer.innerHTML = generateCalendar(0) + generateCalendar(1);

  document.querySelectorAll('.day').forEach(day => {
    day.addEventListener('click', () => {
      const date = day.dataset.date;
      if (!selectedDeparture || (selectedDeparture && selectedReturn)) {
        selectedDeparture = date;
        selectedReturn = null;
        departureInput.value = formatDate(selectedDeparture);
        returnInput.value = '';
        document.querySelectorAll('.day').forEach(d => d.classList.remove('selected'));
        day.classList.add('selected');
      } else if (!selectedReturn) {
        selectedReturn = date;
        returnInput.value = formatDate(selectedReturn);
        highlightRange(selectedDeparture, selectedReturn);
      }
    });
  });
}

function highlightRange(start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  document.querySelectorAll('.day').forEach(day => {
    const d = new Date(day.dataset.date);
    if (d >= startDate && d <= endDate) {
      day.classList.add('selected');
    }
  });
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return `${d} ${new Date(y, m - 1).toLocaleString('default', { month: 'short' })} ${y}`;
}

renderCalendars();
