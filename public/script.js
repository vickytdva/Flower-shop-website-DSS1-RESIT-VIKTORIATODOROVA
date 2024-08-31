// script.js

document.addEventListener('DOMContentLoaded', () => {
    const reviewForm = document.getElementById('review-form');
    const reviewList = document.getElementById('review-list');

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const review = document.getElementById('review').value;

        // Create a new review item
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `<strong>${name}</strong><p>${review}</p>`;

        // Add the new review to the list
        reviewList.appendChild(reviewItem);

        // Clear the form fields
        reviewForm.reset();
    });
});
