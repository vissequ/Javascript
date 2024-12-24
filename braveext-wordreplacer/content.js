// Define a list of words to replace and their replacements
const replacements = {
  "YouTube": "<b>CommieTube</b> (please consider <a href='rumble.com/register/StayConstantlyCurious/' target='blank'><b>Rumble</b></a> as a free-speech alternative)",
  "Google": "<b>Scroogle</b> (please consider duckduckgo, or <i>literally</i> <u>anything</u> else)"
};

// Function to replace the text, case-insensitive
function replaceText() {
  const bodyText = document.body.innerHTML;
  let newBodyText = bodyText;

  // Iterate through each word to replace
  for (let word in replacements) {
    const regex = new RegExp(word, "gi"); // Global and case-insensitive match
    newBodyText = newBodyText.replace(regex, replacements[word]);
  }

  document.body.innerHTML = newBodyText;
}

// Run the replacement function after the page loads
replaceText();
