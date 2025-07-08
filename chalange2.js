document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll('.rate-btn');
  const submitBtn = document.querySelector('.submit-btn');
  const ratingCard = document.getElementById('rating-card');
  const thankYouCard = document.getElementById('thank-you-card');
  const selectedText = document.getElementById('selected-text');

  let selectedRating = null;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedRating = btn.textContent;
    });
  });

  submitBtn.addEventListener('click', () => {
    if (selectedRating) {
      ratingCard.classList.add('hidden');
      thankYouCard.classList.remove('hidden');
      selectedText.textContent = `You selected ${selectedRating} out of 5`;
    } else {
      alert("Please select a rating before submitting.");
    }
  });
});
