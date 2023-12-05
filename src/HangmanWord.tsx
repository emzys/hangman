type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({ guessedLetters, wordToGuess }): HangmanWordProps {
  // const word = "text";
  // const guessedLetters = ["t", "e"];
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, idx) => (
        <span style={{ borderBottom: ".1em solid black" }} key={idx}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
