import React, { useEffect } from "react";

export default function Coding() {
  useEffect(() => {
    document.querySelector("body").className = "coding";
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/coding/1.jpg"
            alt="coding_1"
          />
        </div>
        <div className="image flex-item-50">
          <img
            className="responsive-image"
            src="/static/images/coding/2.webp"
            alt="coding_2"
          />
        </div>
      </div>

      <div className="row">
        <div className="grid-container flex-container">
          <div className="flex-item-80">
            <div className="grid-item-header">Beginner</div>
            <div className="grid-item">
              <a href="https://www.amazon.de/Spiele-mit-Python%C2%AE-supereasy-programmieren/dp/3831036756/ref=sr_1_4?__mk_de_DE=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=python+easy&qid=1602710998&sr=8-4">
                <img
                  src="/static/images/coding/SpieleMitPython.png"
                  width="115px"
                  height="130px"
                  alt="SpieleMitPython"
                />
              </a>
              <h5>Coded: 29.07.2020-22.08.2020</h5>
              <p>
                Children and teenagers can build their own computer games. Nine
                exciting projects are explained with detailed step-by-step
                instructions and witty illustrations in an application-oriented
                and child-friendly manner.
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/click-on-fruit#main.py"
                  target="_blank"
                  rel="noreferrer"
                >
                  1. Click the fruit
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/collect-coins#main.py"
                  target="_blank"
                  rel="noreferrer"
                >
                  2. Collect coins
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/connect-numbers"
                  target="_blank"
                  rel="noreferrer"
                >
                  3. Connect numbers
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/click-on-red-star#main.py"
                  target="_blank"
                  rel="noreferrer"
                >
                  4. Click on red star
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/quiz#main.py"
                  target="_blank"
                  rel="noreferrer"
                >
                  5. Quiz
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/ballooning"
                  target="_blank"
                  rel="noreferrer"
                >
                  6. Ballooning
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/remember-dance-moves"
                  target="_blank"
                  rel="noreferrer"
                >
                  7. Remember dance moves
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/watering-flowers"
                  target="_blank"
                  rel="noreferrer"
                >
                  8. watering flowers
                </a>
              </p>
              <p>
                <a
                  className="link"
                  href="https://repl.it/@sbuck/sleeping-dragon"
                  target="_blank"
                  rel="noreferrer"
                >
                  9. sleeping dragon
                </a>
              </p>
              <p>Click/Tap the image and links for more details</p>
            </div>
          </div>
          <div className="flex-item-20">
            <div className="grid-item-header">Advanced</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
