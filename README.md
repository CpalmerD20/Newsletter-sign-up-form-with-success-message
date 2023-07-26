# Frontend Mentor - Newsletter sign-up form with success message solution
This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor]
(https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). 
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
- [The challenge](#the-challenge)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)

## The challenge
Users should be able to:
- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

## Built with
- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- Screen Reader in mind

## What I learned
How to notify a screen reader of a content update.

```html
<span class="email-error" aria-live="polite" aria-atomic="true">
  
</span>
```
```javascript
if (!emailField.validity.valid) {
    const updated = new CustomEvent('content-updated');
    emailError.textContent = "Valid email required";
    emailError.dispatchEvent(updated);
    return;
  }
```
I feel it's very important that if a page has an error message, they are picked up by screen readers. 
It took quite a bit of time to find a resource to get this to work, and I am glad it was for this project.
I'll be able to impliment this on pages I develop.