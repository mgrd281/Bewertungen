// Data is now loaded from reviews_data.js

// Generate stars based on rating
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? '★' : '☆';
    }
    return stars;
}

// Get initials for avatar
function getInitials(name) {
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

// Format date to German format
function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// Create table row
function createTableRow(review, index) {
    const row = document.createElement('tr');

    row.innerHTML = `
        <td class="number-cell">${index + 1}</td>
        <td class="stars-cell">${generateStars(review.rating)}</td>
        <td>${review.title || ''}</td>
        <td class="content-cell">${review.content}</td>
        <td>
            <div class="name-cell">
                <div class="mini-avatar">${getInitials(review.customer_name)}</div>
                <span>${review.customer_name}</span>
            </div>
        </td>
        <td class="date-cell">${formatDate(review.date)}</td>
    `;

    return row;
}

// Calculate average rating
function calculateAverageRating(reviews) {
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
}

// Show Toast Notification
function showToast(message) {
    // Remove existing toast if any
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <span class="toast-icon">✓</span>
        <span>${message}</span>
    `;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
        toast.classList.add('show');
    });

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Copy Column Data
async function copyColumn(key) {
    if (typeof REVIEWS_DATA === 'undefined') return;

    // Map correct data based on key
    const values = REVIEWS_DATA.map(review => {
        if (key === 'date') {
            return formatDate(review.date);
        }
        return review[key];
    });

    const textToCopy = values.join('\n');

    try {
        await navigator.clipboard.writeText(textToCopy);
        const count = values.length;
        let label = '';
        switch (key) {
            case 'content': label = 'Bewertungen'; break;
            case 'customer_name': label = 'Namen'; break;
            case 'date': label = 'Daten'; break;
        }
        showToast(`${count} ${label} kopiert!`);
    } catch (err) {
        console.error('Failed to copy: ', err);
        showToast('Fehler beim Kopieren');
    }
}

// Download CSV Data
function downloadCSV() {
    if (typeof REVIEWS_DATA === 'undefined') return;

    // Define CSV header
    const headers = ['rating', 'title', 'content', 'customer_name', 'date'];

    // Convert data to CSV format
    // Use semicolon separator for German Excel/Numbers compatibility
    const csvContent = [
        headers.join(';'),
        ...REVIEWS_DATA.map(row => {
            const cleanContent = row.content.replace(/"/g, '""');
            return [
                row.rating,
                row.title || '',
                `"${cleanContent}"`,
                row.customer_name,
                row.date
            ].join(';');
        })
    ].join('\n');

    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bewertungen_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();

    showToast('CSV Datei heruntergeladen!');
}

// Download Excel (.xlsx) using SheetJS
function downloadExcel() {
    if (typeof REVIEWS_DATA === 'undefined' || typeof XLSX === 'undefined') {
        alert('Excel library not loaded');
        return;
    }

    // Prepare data for Excel
    const data = REVIEWS_DATA.map(r => ({
        Rating: r.rating,
        Titel: r.title,
        Inhalt: r.content,
        Name: r.customer_name,
        Datum: r.date
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Bewertungen");

    XLSX.writeFile(wb, `bewertungen_export_${new Date().toISOString().split('T')[0]}.xlsx`);
    showToast('Excel Datei heruntergeladen!');
}

// Download for Numbers (Optimized CSV)
function downloadNumbers() {
    // Numbers opens CSVs with BOM and semicolons perfectly.
    // We can reuse the CSV logic but perhaps with a specific nuance if needed.
    // For now, we will use the same robust CSV generation which is already Numbers-friendly.
    downloadCSV();
    showToast('Datei für Numbers heruntergeladen!');
}

// Load and display reviews
function loadReviews() {
    const tbody = document.getElementById('reviews-tbody');

    // Check if REVIEWS_DATA is available
    if (typeof REVIEWS_DATA === 'undefined') {
        tbody.innerHTML = '<tr><td colspan="6" class="loading">Fehler: Bewertungsdaten nicht gefunden</td></tr>';
        return;
    }

    const reviews = REVIEWS_DATA;

    // Update header stats
    const avgRating = Math.round(calculateAverageRating(reviews));
    document.getElementById('averageStars').textContent = generateStars(avgRating);
    document.getElementById('reviewCount').textContent = `(${reviews.length} Bewertungen)`;

    // Clear tbody
    tbody.innerHTML = '';

    // Add reviews as table rows
    reviews.forEach((review, index) => {
        const row = createTableRow(review, index);
        tbody.appendChild(row);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', loadReviews);
