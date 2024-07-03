const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
const userNameSpan = document.querySelector('#user-name');
const storyParagraph = document.querySelector('#story');

form.addEventListener('submit', e => e.preventDefault());

submitBtn.addEventListener('click', () => {
  const name = nameInput.value;
  localStorage.setItem('name', name);
  nameDisplayCheck(name);
  updateStory(name);
});

forgetBtn.addEventListener('click', () => {
  localStorage.removeItem('name');
  nameDisplayCheck('');
  updateStory('');
});

function nameDisplayCheck(name) {
  if (name) {
    h1.textContent = `Welcome, ${name}`;
    personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
    forgetDiv.style.display = 'block';
    rememberDiv.style.display = 'none';
  } else {
    h1.textContent = 'Welcome to our website';
    personalGreeting.textContent = 'Welcome to our website. We hope you have fun while you are here.';
    forgetDiv.style.display = 'none';
    rememberDiv.style.display = 'block';
  }
}

function updateStory(name) {
  if (name) {
    userNameSpan.textContent = name;
    storyParagraph.innerHTML = `In a bustling city, there lived an inquisitive person named <span id="user-name">${name}</span>. With an insatiable thirst for knowledge and a spirit for adventure, <span id="user-name">${name}</span> explored the vibrant streets and hidden gems, uncovering stories and experiences that would last a lifetime...`;
  } else {
    userNameSpan.textContent = '';
    storyParagraph.textContent = `In a bustling city, there lived an inquisitive person. With an insatiable thirst for knowledge and a spirit for adventure, they explored the vibrant streets and hidden gems, uncovering stories and experiences that would last a lifetime...`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const storedName = localStorage.getItem('name') || '';
  nameDisplayCheck(storedName);
  updateStory(storedName);
});
