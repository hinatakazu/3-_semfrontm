// sahiba_fast.js
const lyrics = [
  "Baato-baato me hi, khwabo-khwabo me hi mere qareeb hai tu",
  "Teri talab mujhko, teri talab, jaana, ho to kabhi ru-ba-ru",
  "Shor-sharaba jo seene me hai mere, kaise bayaan mai karu?",
  "Haal jo mera hai, mai kis ko bataau?",
  "Mere sahiba, dil na kiraaye ka, thoda to sambhalo na",
  "Nazuk hai yeh, toot jaata hai",
  "Sahiba, neende-veende aaye na,",
  "raate kaati jaaye na",
  "Tera hi khayal din-rain aata hai"
];

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ⏱ Adjust this to control speed (smaller = faster)
const charDelay = 20;   // 20 ms per character
const linePause = 200;  // 200 ms between lines

async function typeLyrics() {
  console.log("\n🎵 Now Playing - Sahiba 💕\n");
  for (const line of lyrics) {
    for (const ch of line) {
      process.stdout.write(ch);
      await sleep(charDelay);
    }
    process.stdout.write("\n");
    await sleep(linePause);
  }
}

typeLyrics();