const parentContainers = document.querySelectorAll('.post1');

parentContainers.forEach((parentContainer) => {
  const readMoreBtn = parentContainer.querySelector('.read-more-btn');
  const readMoreText = parentContainer.querySelector('.read-more-text');

  readMoreBtn.addEventListener('click', (event) => {
    event.preventDefault();

    readMoreText.classList.toggle('read-more-text--show');

    readMoreBtn.textContent = readMoreBtn.textContent.includes('Read More')
      ? 'Read Less..'
      : 'Read More';
  });
});
