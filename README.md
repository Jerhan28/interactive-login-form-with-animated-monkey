# Dark Interactive Login Form

A modern, interactive login form with animated SVG avatar that responds to user input. This project includes a login page, sign-up page, and password recovery page with a cohesive dark theme design.

## Features

- **Interactive Avatar**: SVG character that responds to email input with facial animations
- **Password Visibility Toggle**: Show/hide password functionality
- **Password Strength Meter**: Visual indicator of password strength
- **Responsive Design**: Works on all device sizes
- **Smooth Animations**: GSAP-powered animations for a polished user experience
- **Form Validation**: Client-side validation with visual feedback
- **Dark Theme**: Modern dark color scheme with gradient backgrounds

## Pages

1. **Login Page** (`index.html`) - Main authentication page with interactive avatar
2. **Sign Up Page** (`sign_up.html`) - User registration with password confirmation
3. **Forgot Password Page** (`forgot_password.html`) - Password recovery form

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS variables, flexbox, and animations
- **JavaScript** - Interactive functionality
- **GSAP** - Advanced animations for the SVG avatar
- **Font Awesome** - Icon library
- **Google Fonts** - Montserrat font family

## Getting Started

### Prerequisites

No special prerequisites needed. Just a modern web browser.

### Installation

1. Clone or download the project files
2. Place all files in your web server directory
3. Open `index.html` in a web browser

### File Structure

```
project-folder/
│
├── index.html          # Main login page
├── sign_up.html        # Registration page
├── forgot_password.html # Password recovery page
└── README.md           # This file
```

## Usage

### Login Page

1. Enter your email address - watch the avatar react to your typing
2. Type your password - the avatar will cover its eyes
3. Toggle password visibility using the checkbox
4. Submit the form to "login" (simulated)

### Sign Up Page

1. Fill in your full name, email, and password
2. Confirm your password
3. Watch the password strength meter as you type
4. Agree to terms and create your account

### Forgot Password Page

1. Enter your email address
2. Submit to receive password reset instructions (simulated)

## Customization

### Colors

The color scheme can be easily modified by changing the CSS custom properties in the `:root` selector:

```css
:root {
    --darkBlue: #217093;
    --medBlue: #4eb8dd;
    --lightBlue: #ddf1fa;
    --inputBG: #f3fafd;
    --darkBg: #121826;
    --cardBg: #1a2238;
    --textColor: #e6e9f0;
    --accentColor: #6c5ce7;
    --successColor: #00b894;
    --errorColor: #d63031;
}
```

### Animations

Animation timing and easing can be adjusted in the GSAP commands:

```javascript
gsap.to(element, { duration: 1, ease: "expo.out", x: 0, y: 0 });
```

## Browser Compatibility

This project works in all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## Known Issues

- The avatar animation might be slightly jerky on slower devices
- Some very old browsers may not support all CSS features

## Future Enhancements

Potential improvements for future versions:
- Backend integration for actual authentication
- Remember me functionality
- Social media login options
- Two-factor authentication
- Multi-language support

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Acknowledgments

- SVG avatar animation inspired by various interactive login concepts
- GSAP for powerful animation capabilities
- Font Awesome for the beautiful icons
- Google Fonts for the Montserrat typeface

## Created by

Jerhan Taji. Bartasan