//-------------- This code doesn't calculate correctly the length ---------------------------------------//
// function analyzeSentence() {
//   const sentence = document.getElementById("sentenceInput").value;

//   // Initialize counters
//   let length = 0;
//   let wordCount = 0;
//   let vowelCount = 0;
//   let inWord = false;

//   // Iterate through each character
//   for (const char of sentence) {
//     if (char.match(/[a-zA-Z]/)) {
//       length++;
//       if ("aeiouAEIOU".includes(char)) {
//         vowelCount++;
//       }
//       if (!inWord) {
//         wordCount++;
//         inWord = true;
//       }
//     } else {
//       inWord = false;
//     }
//   }

//   // Display the results
//   const resultElement = document.getElementById("result");
//   resultElement.textContent = `Length: ${length} characters | Words: ${wordCount} | Vowels: ${vowelCount}`;
// }
//-----------------------------------------------------//

function analyzeSentence() {
  const sentence = document.getElementById("sentenceInput").value;

  // Initialize counters
  let length = 0;
  let words = 0;
  let vowels = 0;
  let i = 0;
  const vowelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // Iterate through each character until the end of the sentence
  while (i < sentence.length && sentence[i] !== ".") {
    length++;
    if (sentence[i] === " ") {
      words++;
    }
    if (vowelArr.includes(sentence[i])) {
      vowels++;
    }
    i++;
  }

  // Adjust word count to include the last word if the sentence doesn't end with a space
  if (sentence.length > 0 && sentence[sentence.length - 1] !== " ") {
    words++;
  }

  // Display the results
  const resultElement = document.getElementById("result");
  resultElement.textContent = `Length with spaces: ${length} characters | Words: ${words} | Vowels: ${vowels}`;
}
