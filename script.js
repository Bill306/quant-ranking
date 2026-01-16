let currentData = [...hedgeFundData];
let currentCountryFilter = 'all';
let currentSort = 'aum';

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    initializeModal();
    renderTables();
    updateStats();
});

function initializeEventListeners() {
    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            switchTab(tab);
        });
    });

    // Country filter
    document.getElementById('countryFilter').addEventListener('change', (e) => {
        currentCountryFilter = e.target.value;
        filterAndRender();
    });

    // Sort by
    document.getElementById('sortBy').addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterAndRender();
    });
}

function switchTab(tab) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');

    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${tab}Tab`).classList.add('active');
}

function filterAndRender() {
    // Filter by country
    if (currentCountryFilter === 'all') {
        currentData = [...hedgeFundData];
    } else {
        currentData = hedgeFundData.filter(fund => fund.country === currentCountryFilter);
    }

    renderTables();
    updateStats();
}

function renderTables() {
    renderAUMTable();
    renderReturnsTable();
}

function renderAUMTable() {
    const tbody = document.getElementById('aumTableBody');
    tbody.innerHTML = '';

    // Sort by AUM (descending)
    const sorted = [...currentData].sort((a, b) => b.aum - a.aum);

    sorted.forEach((fund, index) => {
        const row = document.createElement('tr');
        const fundId = fund.name.replace(/\s+/g, '-').toLowerCase();
        row.innerHTML = `
            <td class="rank">#${index + 1}</td>
            <td><a href="#" class="fund-link" data-fund-id="${fundId}" data-fund-name="${fund.name}"><strong>${fund.name}</strong><br><span class="chinese-name">${fund.nameCN}</span></a></td>
            <td><span class="country-badge ${fund.country.toLowerCase()}">${fund.country === 'US' ? 'United States' : 'China'}</span></td>
            <td class="aum-value">$${fund.aum.toFixed(1)}B</td>
            <td><span class="returns-value ${fund.returns >= 0 ? 'positive' : 'negative'}">${fund.returns >= 0 ? '+' : ''}${fund.returns.toFixed(1)}%</span></td>
        `;
        tbody.appendChild(row);
    });
    
    // Add click handlers for fund links
    attachFundLinkHandlers();
}

function renderReturnsTable() {
    const tbody = document.getElementById('returnsTableBody');
    tbody.innerHTML = '';

    // Sort by returns (descending)
    const sorted = [...currentData].sort((a, b) => b.returns - a.returns);

    sorted.forEach((fund, index) => {
        const row = document.createElement('tr');
        const fundId = fund.name.replace(/\s+/g, '-').toLowerCase();
        row.innerHTML = `
            <td class="rank">#${index + 1}</td>
            <td><a href="#" class="fund-link" data-fund-id="${fundId}" data-fund-name="${fund.name}"><strong>${fund.name}</strong><br><span class="chinese-name">${fund.nameCN}</span></a></td>
            <td><span class="country-badge ${fund.country.toLowerCase()}">${fund.country === 'US' ? 'United States' : 'China'}</span></td>
            <td><span class="returns-value ${fund.returns >= 0 ? 'positive' : 'negative'}">${fund.returns >= 0 ? '+' : ''}${fund.returns.toFixed(1)}%</span></td>
            <td class="aum-value">$${fund.aum.toFixed(1)}B</td>
        `;
        tbody.appendChild(row);
    });
    
    // Add click handlers for fund links
    attachFundLinkHandlers();
}

function updateStats() {
    const totalFunds = currentData.length;
    const avgAUM = currentData.reduce((sum, fund) => sum + fund.aum, 0) / totalFunds;
    const avgReturns = currentData.reduce((sum, fund) => sum + fund.returns, 0) / totalFunds;

    document.getElementById('totalFunds').textContent = totalFunds;
    document.getElementById('avgAUM').textContent = `$${avgAUM.toFixed(1)}B`;
    document.getElementById('avgReturns').textContent = `${avgReturns >= 0 ? '+' : ''}${avgReturns.toFixed(1)}%`;
}

function attachFundLinkHandlers() {
    document.querySelectorAll('.fund-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const fundName = link.dataset.fundName;
            showFounderModal(fundName);
        });
    });
}

function showFounderModal(fundName) {
    const fund = hedgeFundData.find(f => f.name === fundName);
    
    if (!fund || !fund.founder) {
        alert('Founder information not available for this fund.');
        return;
    }
    
    const modal = document.getElementById('founderModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="founder-header">
            <h2>${fund.name}</h2>
            <p class="chinese-name">${fund.nameCN}</p>
        </div>
        <div class="founder-content">
            <div class="founder-image-container">
                <img src="${fund.founder.image}" alt="${fund.founder.name}" class="founder-image">
            </div>
            <div class="founder-info">
                <h3>${fund.founder.name}</h3>
                <p class="founder-name-cn">${fund.founder.nameCN}</p>
                <div class="founder-section">
                    <h4>Education</h4>
                    <p>${fund.founder.education}</p>
                </div>
                <div class="founder-section">
                    <h4>Career Background</h4>
                    <p>${fund.founder.career}</p>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function initializeModal() {
    const modal = document.getElementById('founderModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}
