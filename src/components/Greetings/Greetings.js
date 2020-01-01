import React from "react";

function Greeting() {
  return (
    <header className="jumbotron my-4">
      <h3 className="display-4">Greetings from Marvel Universe!</h3>
      {/* <p className="lead">
        In its 10 years, 3 phases and 18 films, the Marvel Cinematic Universe has dominated our
        screens (and our lives) with epic action sequences, hilarious moments, and lovable heroes. However, as
        well as being raucous fun, the films have often provided tidbits of wisdom. Here are my picks of the
        inspiring, helpful and memorable quotes from the MCU that actually offer some life advice.
      </p> */}
      <p className="lead">
        <i>
          <b>“Compromise where you can, but where you can’t, don’t. Even if everyone is telling you that
              something wrong is something right. Even if the whole world is telling you to move. It is your
              duty to plant yourself like a tree, to look them in the eye and say, no, you move.” – Sharon
              Carter (Captain America: Civil War, 2016)
            </b>
        </i>
      </p>
      <button className="btn grad-btn btn-lg">Find a Match!</button>
    </header>
  );
}
export default Greeting;
