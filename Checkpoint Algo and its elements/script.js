function analyzeSentence() {
  const sentence = document.getElementById("sentenceInput").value;

  // Initialize counters
  let length = 0;
  let wordCount = 0;
  let vowelCount = 0;

  // Iterate through each character
  for (const char of sentence) {
    if (char.match(/[a-zA-Z]/)) {
      length++;
      if ("aeiouAEIOU".includes(char)) {
        vowelCount++;
      }
    } else if (char === " ") {
      wordCount++;
    }
  }

  // Adjust length to exclude the point
  length--;

  // Display the results
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Length: ${length} characters | Words: ${
    wordCount + 1
  } | Vowels: ${vowelCount}`;
}
