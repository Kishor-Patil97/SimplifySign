// Accessing HTML elements
const micBtn = document.getElementById("mic-btn");
const textOutput = document.getElementById("text-output");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const stopBtn = document.getElementById("stop-btn");
const clearBtn = document.getElementById("clear-btn");
const videoContainer = document.getElementById("sign-language-display");

let currentVideo = null;
let currentVideoIndex = 0;
let isPlaying = false;
let isPaused = false;

// Speech Recognition API setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  micBtn.textContent = "Listening...";
};

recognition.onspeechend = function () {
  micBtn.textContent = "🎤 Start Speaking";
  recognition.stop();
};

recognition.onresult = function (event) {
  const transcript = event.results[0][0].transcript;
  textOutput.value = transcript;
};

// Error Handling of Speech to Text
recognition.onerror = function (event) {
  console.error("Error occurred in speech recognition: ", event.error);
  alert("Speech recognition failed. Please try again.");
};

// Microphone button action
micBtn.addEventListener("click", () => {
  recognition.start();
});

// Clear Text Button Action
clearBtn.addEventListener("click", () => {
  textOutput.value = ""; // Clear the text area
});

// Placeholder Sign Language Animation (Logic)
const glossToVideo = {};

// Fetch gloss mapping
fetch("/data/wlasl_class_list.txt")
  .then((response) => response.text())
  .then((data) => {
    const lines = data.split("\n");
    lines.forEach((line) => {
      const [id, word] = line.split("\t");
      glossToVideo[word.trim()] = id;
    });
    console.log("Gloss mapping loaded:", glossToVideo);
  })
  .catch((error) => console.error("Error loading gloss list:", error));

const wordToVideoUrls = {};

// Fetch video URLs
fetch("/data/WLASL_v0.3.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((entry) => {
      const word = entry.gloss;
      const videos = entry.instances.map((instance) => instance.url);
      wordToVideoUrls[word] = videos;
    });
    console.log("Video URLs loaded:", wordToVideoUrls);
  })
  .catch((error) => console.error("Error loading video URLs:", error));

// Check for missing words and notify the user
function checkForMissingVideos(words) {
  const missingVideos = [];

  words.forEach((word) => {
    if (!wordToVideoUrls[word] || wordToVideoUrls[word].length === 0) {
      missingVideos.push(word);
    }
  });

  if (missingVideos.length > 0) {
    console.log("The following words don't have videos:", missingVideos);
    alert(
      `No videos found for the following words: ${missingVideos.join(", ")}`
    );
  } else {
    console.log("All words have corresponding videos.");
  }
}

// Video Playback Logic
function playNextVideo(words) {
  if (currentVideoIndex >= words.length || isPaused) return;

  const word = words[currentVideoIndex];
  const videoUrls = wordToVideoUrls[word];

  console.log(`Playing video for word: ${word}`);

  if (videoUrls && videoUrls.length > 0) {
    const videoUrl = videoUrls[0];

    // Check if the URL is a YouTube link or YouTube Shorts link
    if (videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")) {
      const videoId = extractYouTubeId(videoUrl);
      if (videoId) {
        const iframe = document.createElement("iframe");
        iframe.width = "560";
        iframe.height = "315";
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; // Normal embed link, works for both YouTube videos and Shorts
        iframe.frameBorder = "0";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;

        videoContainer.innerHTML = ""; // Clear previous video
        videoContainer.appendChild(iframe);

        currentVideo = iframe; // Treat iframe as current video for pause/stop logic if needed
        isPlaying = true;

        currentVideoIndex++;
        playNextVideo(words); // Continue to next word if needed (auto-play next video in the sequence)
      }
    } else {
      // Fallback to normal video element for non-YouTube links
      const videoElement = document.createElement("video");
      videoElement.src = videoUrl;
      videoElement.controls = true;
      videoElement.autoplay = true;
      videoContainer.innerHTML = ""; // Clear previous video
      videoContainer.appendChild(videoElement);

      currentVideo = videoElement; // Store reference to current video
      isPlaying = true;

      videoElement.addEventListener("ended", () => {
        currentVideoIndex++;
        playNextVideo(words); // Continue to next word in the list
      });
    }
  } else {
    console.log(`No video available for ${word}`);
    currentVideoIndex++;
    playNextVideo(words); // Continue with the next word
  }
}

// Helper function to extract the YouTube video ID
function extractYouTubeId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|\/u\/\w\/|embed\/|watch\?v=|shorts\/|&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Play Button Logic
playBtn.addEventListener("click", () => {
  if (textOutput.value) {
    const text = textOutput.value.trim().toLowerCase();
    const words = text.split(" ");

    // Check for missing videos
    checkForMissingVideos(words);

    currentVideoIndex = 0;
    isPaused = false;
    playNextVideo(words);
  }
});

// Pause Button
pauseBtn.addEventListener("click", () => {
  if (currentVideo && isPlaying) {
    currentVideo.pause();
    isPaused = true;
    isPlaying = false;
    console.log("Pausing sign language video");
  }
});

// Stop Button
stopBtn.addEventListener("click", () => {
  if (currentVideo && isPlaying) {
    currentVideo.pause();
    currentVideo.currentTime = 0; // Reset video to the start
    currentVideo = null;
    isPlaying = false;
    isPaused = false;
    currentVideoIndex = 0;
    console.log("Stopping sign language video");
    videoContainer.innerHTML = ""; // Clear the video display
  }
});

