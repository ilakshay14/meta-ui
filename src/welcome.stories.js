import React from "react";

import { storiesOf } from "@storybook/react";

storiesOf("Welcome", module).add("ReadMe", () => (
    <>
        <h1>Welcome to my new component lib! 🎉</h1>

        <h4>It is just the begining. </h4>
        <p>
            I've been meaning to work on this since a long time. And now since
            I've finally got it up & running, I would request you to try it out.
            Would love to hear your feedback on how I can improve this and make
            it better.
            <br />
            <br />
            It is just in the early stages and to be honest, I dont' even have a
            cool name for it. I do have this urge to name my component lib
            something like Mark I or Ultron 0.0, but we all know how that ended!
            (xD)
            <br />
            <br />
            So stay tuned for a lot updates, and do give this a shot and let me
            know your thoughts on how I can make it better.
            <br />
            <br />
            Cheers! 🥃 ❣️
        </p>

        <h4>The Installation! ⚙️</h4>
        <code
            style={{
                backgroundColor: "#d6d6d7",
                padding: "10px",
                borderRadius: "5px",
            }}
        >
            yarn add @ilakshay14/comp-lib
        </code>
        <br />
        <br />
        <h5>OR</h5>
        <br />
        <code
            style={{
                backgroundColor: "#d6d6d7",
                padding: "10px",
                borderRadius: "5px",
            }}
        >
            npm install @ilakshay14/comp-lib
        </code>
    </>
));
