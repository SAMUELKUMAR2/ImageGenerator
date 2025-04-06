### Live Project Link - https://freeimage-generator.netlify.app/
# Image Generator Project

This is a simple image gallery web application that allows users to search and view images.. Users can also download images, view them in a lightbox, and load more images dynamically. The application features a clean, user-friendly interface with easy navigation.

## Features

- **Image Search**: Users can search for images by keywords.
- **Image Gallery**: User can preview each Image.
- **Lightbox View**: Clicking an image opens it in a lightbox for a larger view.
- **Download Images**: Users can download images by clicking on the download button.
- **Load More Images**: Users can load more images with a "Load More" button.
- **Responsive Design**: The gallery is mobile-friendly and adapts to different screen sizes.

## Technologies Used

- **HTML5**: For the structure of the webpage.
- **CSS3**: For styling the page, including the gallery and lightbox.
- **JavaScript (ES6)**:For dynamic content generation, and interaction handling.
- 

## Setup

### Prerequisites

Before running the application, you need the following:
- A web browser (Chrome, Firefox, etc.)
- An internet connection to fetch images.
- ![Screenshot 2025-04-06 102158](https://github.com/user-attachments/assets/be021def-c03e-4681-a503-44b511b4a939)


### Steps to run the project

1. Clone the repository or download the project files.
2. Open the project directory and make sure all necessary files are included (HTML, CSS, JavaScript).
3. Open `index.html` in a web browser to see the gallery in action.
4. If you want to make changes to the project, you can modify the `style.css` for design and `script.js` for functionality.

### API Key

You will need an API key from Pexels to fetch images. You can get a free API key by signing up on [Pexels](https://www.pexels.com/api/).

Once you have the key, replace the value of `ApiKey` in the `script.js` file:

```js
const ApiKey = "YOUR_API_KEY";
