# FoxWebsite Login/Registration UI

This project is a front-end user interface for a login and registration page, built with HTML, CSS, and JavaScript. It features a modern, visually appealing design with smooth animations powered by the GSAP library.

## Features

- **Animated UI:** Smooth, physics-based animations for user interactions using GSAP.
- **Modern Design:** A stylish glassmorphism effect with a dynamic gradient background.
- **Responsive Layout:** The interface is designed to be centered and functional on various screen sizes.
- **Interactive Forms:** The login and registration forms dynamically change based on user input.
- **Data Handling (Mock):** The forms collect user input and log it to the console as a JSON object for demonstration purposes.

## Technologies

- **HTML:** Structures the web pages.
- **CSS:** Styles the elements, including the gradient background and glassmorphism effects.
- **JavaScript:** Handles user interactions and animations.
- **GSAP (GreenSock Animation Platform):** A professional-grade JavaScript animation library used for all the dynamic effects.

## Project Structure

```
FoxWebsite/
├── HTML/
│   ├── 1.HTML      # Login page
│   └── 2.HTML      # Registration page
├── CSS/
│   ├── 1.css       # Styles for the login page
│   └── 2.css       # Styles for the registration page
├── JS/
│   ├── 1.js        # JavaScript for the login page animations and logic
│   └── 2.js        # JavaScript for the registration page animations and logic
├── docs/           # (Empty) Potentially for documentation
├── TEST/           # Test files for GSAP experiments
└── README.md       # This file
```

## How to Use

1.  **Clone or download the repository.**
2.  **Open `HTML/1.HTML` in your web browser** to see the login page.
3.  Click the "Зарегистрироваться" (Register) button to navigate to the registration page (`2.HTML`).
4.  Fill in the input fields on either page to see the animations trigger.
5.  Open the browser's developer console (usually by pressing F12) to see the captured user data logged as a JSON object upon clicking the "Вход" (Login/Register) button.

## Key Functionality (JavaScript)

- **`checkInputs()`:** This is the core function in both `1.js` and `2.js`. It's called whenever the user types in an input field.
    - It checks if all required fields are filled.
    - If they are, it triggers a GSAP animation to expand the form container and reveal the login/register button.
    - If not, it reverses the animation, hiding the button.
- **Event Listeners:** Event listeners are set up for mouse movements (hover effects on buttons) and clicks.
- **GSAP Animations:** The `gsap.timeline()` and `gsap.to()` functions are used to create all the visual effects, from the initial page load animations to the interactive responses of the form elements.
- **Data Mocking:** On form submission, the input values are collected into a JavaScript object, added to an array, and then logged to the console as a JSON string. This simulates how data would be prepared before being sent to a backend server.
