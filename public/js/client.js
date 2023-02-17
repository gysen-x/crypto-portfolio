const signupForm = document.querySelector('#signup-form');
const signinForm = document.querySelector('#signin-form');
const portfolioForm = document.forms.portfolioform;

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
    // console.log('data: ', data);
    try {
      const response = await fetch('/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.status !== 200) {
        const errorDiv = signinForm.querySelector('#error');
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error');
        const dataLog = await response.json();
        errorMessage.innerText = dataLog.message;
        errorDiv.appendChild(errorMessage);
      } else {
        response.json();
        window.location = '/';
      }
      // console.log('result: ', result);
    } catch (error) {
      console.log(error);
    }
  }
});

// portfolioForm?.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const coin = portfolioForm[0].value;
//   const amount = portfolioForm[1].value;
//   const price = portfolioForm[2].value;
//   const date = portfolioForm[3].value;
//   const data = {
//     coin, amount, price, date,
//   };
//   const response = await fetch('/portfolio', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   });
//   const result = await response.json();
//   console.log('response: ', result.transactionDataBase);
// });
