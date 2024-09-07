# React Portfolio Website

This project is a modern portfolio website built using React, styled-components, and Framer Motion for animations. The website showcases various sections such as About Us, Our Work, and Contact Us, with smooth animations and transitions.

## Table of Contents

- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Pages](#pages)
- [Animations](#animations)
- [Contributing](#contributing)
- [License](#license)

## Project Structure

The project is structured as follows:

src/ ├── components/ │ ├── AboutSection.js │ ├── FaqSection.js │ ├── GlobalStyle.js │ ├── Nav.js │ ├── ScrollTop.js │ ├── Toggle.js │ ├── useScroll.js │ └── Wave.js ├── pages/ │ ├── AboutUs.js │ ├── ContactUs.js │ ├── MovieDetail.js │ ├── OurWork.js │ ├── animation.js │ └── styles.js ├── App.js ├── index.js └── movieState.js


## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **styled-components**: A library for styling React components using tagged template literals.
- **Framer Motion**: A production-ready motion library for React, used for animations.
- **React Router**: A collection of navigational components for React applications.

## Key Features

- **Smooth Animations**: Utilizes Framer Motion for smooth page transitions and element animations.
- **Responsive Design**: The website is designed to be responsive and work well on various screen sizes.
- **Dynamic Content**: Uses state management to dynamically display content such as movie details.
- **FAQ Section**: An interactive FAQ section with toggleable questions and answers.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/your-repo.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-repo
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

## Usage

Once the development server is running, you can view the website by navigating to [http://localhost:3000](http://localhost:3000) in your web browser. The website consists of several pages:

- **About Us**: Displays information about the company or individual.
- **Our Work**: Showcases a portfolio of work with links to detailed pages.
- **Contact Us**: Provides a contact form or contact information.
- **Movie Detail**: Displays detailed information about a selected movie.

## Components

- **AboutSection.js**: This component displays the About Us section of the website. It includes a description and an image, with animations provided by Framer Motion.
- **FaqSection.js**: The FAQ section component allows users to toggle the visibility of answers to frequently asked questions. It uses the Toggle component for each question.
- **GlobalStyle.js**: This file contains global styles that are applied throughout the application.
- **Nav.js**: The navigation component provides links to different sections of the website.
- **ScrollTop.js**: This component ensures that the page scrolls to the top when a new route is entered.
- **Toggle.js**: A reusable component for toggling the visibility of content, used in the FAQ section.
- **useScroll.js**: A custom hook used to handle scroll animations.
- **Wave.js**: A decorative component that adds a wave effect to the About Us section.

## Pages

- **AboutUs.js**: The About Us page includes the AboutSection, ServicesSection, and FaqSection components.
- **ContactUs.js**: The Contact Us page is a placeholder for a contact form or contact information.
- **MovieDetail.js**: This page displays detailed information about a selected movie, fetched from the movieState.js file.
- **OurWork.js**: The Our Work page showcases a portfolio of work with links to detailed movie pages. It includes animations and styled components.
- **animation.js**: This file contains animation variants used throughout the application, such as pageAnimation, lineAnim, slider, fade, photoAnim, and sliderContainer.
- **styles.js**: Contains styled components used across multiple pages, such as About, Description, Image, and Hide.

## Animations

The project uses **Framer Motion** for animations. Key animations include:

- **Page Transitions**: Smooth transitions between different pages.
- **Element Animations**: Animations for elements such as titles, images, and lines.
- **Scroll Reveal**: Animations that trigger as elements come into view.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more deta