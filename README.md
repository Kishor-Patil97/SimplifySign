# SimplifySign - Master's Thesis Project

SimplifySign is a web application designed to enhance web accessibility by translating spoken language into text and converting the text into Sign Language animations. This project aims to support hearing-impaired users by providing a more inclusive digital communication platform. Developed as part of a Master’s Thesis on "Web Accessibility through Dynamic Inclusive Design Strategies."

## Features

- **Speech-to-Text Conversion**: Captures spoken input through a microphone and converts it into text displayed on the web application.
- **Text-to-Sign Language Translation**: Converts text input into sign language animations, either through animated hand gestures or a 3D avatar (future enhancement).
- **Text Simplification**: Simplifies complex text for easier understanding by users with cognitive disabilities or learning difficulties.

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
      ├── Frontend/                 # Contains all project files
      │   ├── data/                 # Contains all data-related files
      │   ├── images/               # Contains background image of the login page
      │   ├── app.js                # Main JavaScript logic
      │   ├── index.js              # Additional JavaScript logic for the application
      │   ├── login.html            # Login page HTML file
      │   └── simplifyText.html     # Text simplification page HTML file
      ├── videos/                   # Folder containing video files (ignored by .gitignore)
      └── package.json              # Project metadata (future versions may require backend packages)

      Note: The video files are not included in this repository due to GitHub's storage limitations. In the future, videos will be loaded directly from cloud storage.


## Usage Guide
   **1. Speech to Text to Sign Language**
   - **Speech-to-Text**: Click on the microphone button to start speaking. Your speech will be converted into text and displayed in the text area.
   - **Text-to-Sign Language**: Once text is displayed, click "Play" to start the sign language animation. Use "Pause" and "Stop" to control playback.
     
   **2. SimplifyText**
   - Users can enter or paste complex text into the text area, and the application will simplify it for easier understanding.
   - The simplified text can then be converted into sign language using the text-to-sign language functionality.

## Future Enhancements
- **3D Avatar or Animated Hand Gestures**: Expand to support more dynamic and realistic sign language animations.
- **Database Integration**: Optimize MongoDB for faster video retrieval and larger datasets.
- **Sign Language Recognition**: Develop algorithms for real-time sign language recognition and response.
- **Enhanced Text Simplification Algorithm**s: Implement advanced natural language processing techniques for better text simplification.

## License
This project is for academic purposes as part of a Master’s Thesis and is open for educational use. All rights reserved by the author.

## Acknowledgments
Thanks to SRH Hochschule Heidelberg for providing an inclusive platform for this project, as well as to all collaborators, supervisors, and supporters who contributed to the project.
