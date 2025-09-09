// FinSmart Tracker JavaScript Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Expense form submission
    const expenseForm = document.getElementById('expense-form');
    
    if (expenseForm) {
        expenseForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const description = expenseForm.querySelector('input[type="text"]').value;
            const amount = parseFloat(expenseForm.querySelector('input[type="number"]').value);
            const category = expenseForm.querySelector('select').value;
            
            // In a real app, you would save this data to storage or send to a server
            console.log('New expense added:', { description, amount, category });
            
            // Show success message
            alert(`Expense of $${amount.toFixed(2)} added successfully!`);
            
            // Reset form
            expenseForm.reset();
        });
    }
    
    // Chart initialization placeholder
    initializeCharts();
    
    // Simulate data loading
    loadDashboardData();
});

function initializeCharts() {
    // In a real application, you would use a charting library like Chart.js
    console.log('Initializing charts...');
    
    // Placeholder for expense distribution chart
    const expenseChart = document.querySelector('.chart-placeholder:first-child');
    if (expenseChart) {
        expenseChart.innerHTML = `
            <div class="chart-visualization">
                <div class="chart-bar" style="height: 60%; background: #3498db;"></div>
                <div class="chart-bar" style="height: 40%; background: #2ecc71;"></div>
                <div class="chart-bar" style="height: 70%; background: #e74c3c;"></div>
                <div class="chart-bar" style="height: 30%; background: #f39c12;"></div>
            </div>
            <div class="chart-legend">
                <span>Housing</span>
                <span>Food</span>
                <span>Transport</span>
                <span>Other</span>
            </div>
        `;
    }
    
    // Placeholder for investment growth chart
    const investmentChart = document.querySelectorAll('.chart-placeholder')[1];
    if (investmentChart) {
        investmentChart.innerHTML = `
            <div class="investment-chart">
                <div class="chart-line"></div>
                <div class="chart-points">
                    <div class="point" style="left: 10%; top: 70%;"></div>
                    <div class="point" style="left: 30%; top: 50%;"></div>
                    <div class="point" style="left: 50%; top: 40%;"></div>
                    <div class="point" style="left: 70%; top: 30%;"></div>
                    <div class="point" style="left: 90%; top: 20%;"></div>
                </div>
            </div>
        `;
    }
}

function loadDashboardData() {
    // Simulate loading data
    console.log('Loading dashboard data...');
    
    // In a real application, this would fetch data from an API or storage
    setTimeout(() => {
        console.log('Dashboard data loaded successfully');
    }, 500);
}

// Responsive navigation handler
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

// Update dashboard values periodically
setInterval(() => {
    // In a real app, this would fetch updated data
    console.log('Refreshing dashboard data...');
}, 30000); // Refresh every 30 seconds

// Service worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}