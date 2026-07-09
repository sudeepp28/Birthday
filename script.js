let currentScreen = 0;

const screens = document.querySelectorAll(".screen");
const music = document.getElementById("birthdayMusic");

function showScreen(index) {

    screens.forEach(screen => screen.classList.remove("active"));
    screens[index].classList.add("active");

    // Birthday Reveal Screen (index 3)
    if (index === 5) {
        if (music.paused) {
            music.currentTime = 0;
            music.play().catch(() => {});
        }
    } else {
        music.pause();
        music.currentTime = 0;
    }
}

function nextScreen() {
  

  if (currentScreen < screens.length - 1) {
    currentScreen++;
    showScreen(currentScreen);
  }
}

function prevScreen() {
  if (currentScreen > 0) {
    currentScreen--;
    showScreen(currentScreen);
  }
}

function unlockSurprise() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();

  if (input === "bhindi" || input === "sister") {
    nextScreen();
  } else {
    alert("Wrong nickname 😜 Try again!");
  }
}

function unlockBrother() {

    const input = document
        .getElementById("brotherInput")
        .value
        .trim()
        .toLowerCase();

    if (input === "tinda") {

         nextScreen(); 
        

    } else {

        alert("Arre! You forgot your brother's nickname? It starts from T😂");

    }
}


/* Memories */
const memories = [
  {
    image: "images/WhatsApp Image 2026-07-07 at 9.48.08 AM.jpeg",
    caption: "My forever favorite selfie partner. 💛"
  },
  {
    image: "images/WhatsApp Image 2026-07-07 at 9.48.09 AM (1).jpeg",
    caption: "Laughs, fights, and endless love 💕"
  },
  {
    image: "images/WhatsApp Image 2026-07-07 at 9.48.09 AM (2).jpeg",
    caption: "Smiles that never go out of style. 😊❤️"
  },
   {
    image: "images/WhatsApp Image 2026-07-09 at 8.35.49 PM.jpeg",
    caption: "Another memory I'll always cherish. 🌸"
  },
  {
    image: "images/WhatsApp Image 2026-07-07 at 9.48.09 AM.jpeg",
    caption: "Side by side, always. 😊❤️"
  },
  {
    image: "images/WhatsApp Image 2026-07-07 at 9.49.14 AM.jpeg",
    caption: "Forever grateful to have you as my sister. 🤍"
  }
];

let memoryIndex = 0;

function updateMemory() {
  document.getElementById("memoryImage").src = memories[memoryIndex].image;
  document.getElementById("memoryCaption").textContent = memories[memoryIndex].caption;
  document.getElementById("memoryCount").textContent = `${memoryIndex + 1} / ${memories.length}`;
}

function nextMemory() {
  memoryIndex = (memoryIndex + 1) % memories.length;
  updateMemory();
}

function prevMemory() {
  memoryIndex = (memoryIndex - 1 + memories.length) % memories.length;
  updateMemory();
}

function showFinalMessage() {
  document.getElementById("popup").classList.add("show");
}

function closePopup() {
  document.getElementById("popup").classList.remove("show");

    const phone = "918398974086"; 

    const message = encodeURIComponent(
        "Thank you for the surprise! ❤️🥹\n\nI loved it so much."
    );

    setTimeout(() => {
        window.open(
            `https://wa.me/${phone}?text=${message}`,
            "_blank"
        );
    }, 300);
}

function submitReason() {
  const selected = document.querySelector('input[name="reason"]:checked');

  if (!selected) {
    alert("Select one option first 😜");
    return;
  }

  nextScreen();
}