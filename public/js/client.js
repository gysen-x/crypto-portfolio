const signupForm = document.querySelector('#signup-form');
const signinForm = document.querySelector('#signinForm');
console.log('signinForm: ', signinForm);

signupForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (event.target.id = 'signup-submit') {
    const username = signupForm.querySelector('#username').value;
    const useremail = signupForm.querySelector('#useremail').value;
    const password = signupForm.querySelector('#password').value;
    const data = { username, useremail, password };
    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('result: ', result);
      window.location = '/auth/signin';
    } catch (error) {
      console.log(error);
    }
  }
});

signinForm?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (event.target.id = 'signin-submit') {
    const name = signinForm.querySelector('#username').value;
    const password = signinForm.querySelector('#password').value;
    const data = { name, password };
    try {
      const response = await fetch('/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('result: ', result);
      window.location = '/';
    } catch (error) {
      console.log(error);
    }
  }
});
