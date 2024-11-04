# SimplifySign - Master's Thesis Project

SimplifySign is a web application designed to enhance web accessibility by translating spoken language into text and converting the text into Sign Language animations. This project aims to support hearing-impaired users by providing a more inclusive digital communication platform. Developed as part of a Master’s Thesis on "Web Accessibility through Dynamic Inclusive Design Strategies."

## Features

- **Speech-to-Text Conversion**: Captures spoken input through a microphone and converts it into text displayed on the web application.
- **Text-to-Sign Language Translation**: Converts text input into sign language animations, either through animated hand gestures or a 3D avatar (future enhancement).
- **User Controls**: Play, pause, and stop buttons allow control over the sign language animation playback.
- **Clear Text Functionality**: Easily clears the text area for new input.

## Technologies Used

- **HTML/CSS/JavaScript**: For the front-end structure and styling.
- **Speech Recognition API**: Captures and transcribes speech input.
- **Node.js & Express.js** (for future enhancements): Possible backend framework to manage MongoDB and server-side interactions.
- **MongoDB**: Local database to manage a large dataset of sign language videos (WLASL dataset).
- **live-server**: Development server with auto-reload for testing and debugging.

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your local machine.
- MongoDB (locally installed) to manage and serve video files.
- `live-server` package globally installed for running the project.

### Step-by-Step Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/SimplifySign.git
   cd SimplifySign

2. **Install Dependencies**: (Currently, there are no external dependencies, but this will change as the project develops.)

3. **Load the WLASL Dataset**:
Set up a local MongoDB instance and load the WLASL dataset. Ensure MongoDB is running locally.

4. **Run the Application**: Start the server using live-server:
   ```bash
   live-server --port=8080

Open your browser and navigate to http://localhost:8080 to view the application.

## Project Structure
   
      SimplifySign/
      ├── public/                    # Contains HTML, CSS, JavaScript files
      │   ├── index.html             # Main HTML file
      │   ├── style.css              # Stylesheet
      │   └── app.js                 # Main JavaScript logic
      ├── videos/                    # Folder for storing local video files (ignored by .gitignore)
      ├── README.md                  # Project documentation
      ├── .gitignore                 # Ignores node_modules, video files, and other non-essential items
      └── package.json               # Project metadata (future versions may require backend packages)


## Usage Guide
1. **Speech-to-Text**: Click on the microphone button to start speaking. Your speech will be converted into text and displayed in the text area.
2. **Clear Text**: Use the "Clear Text" button to clear the text area for new input.
3. **Text-to-Sign Language**: Once text is displayed, click "Play" to start the sign language animation. Use "Pause" and "Stop" to control playback.

## Future Enhancements
- **3D Avatar or Animated Hand Gestures**: Expand to support more dynamic and realistic sign language animations.
- **Database Integration**: Optimize MongoDB for faster video retrieval and larger datasets.
- **Sign Language Recognition**: Develop algorithms for real-time sign language recognition and response.

## License
This project is for academic purposes as part of a Master’s Thesis and is open for educational use. All rights reserved by the author.

## Acknowledgments
Thanks to SRH Hochschule Heidelberg for providing an inclusive platform for this project, as well as to all collaborators, supervisors, and supporters who contributed to the project.
