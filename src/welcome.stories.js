import React from "react";

import { storiesOf } from "@storybook/react";

const STORY_CODE_BLOCK = {
    backgroundColor: "#d6d6d7",
    padding: "10px",
    borderRadius: "5px",
};

storiesOf("Welcome", module).add("ReadMe", () => (
    <>
        <h1>Welcome to Meta UI! 🎉</h1>

        <h4>It is just the begining. </h4>
        <p>
            I've been meaning to work on this since a long time. And now since
            I've finally got it up & running, I would request you to try it out.
            Would love to hear your feedback on how I can improve this and make
            it better.
            <br />
            <br />
            It is just in the early stages. I have decided to name it as Meta UI, after the
            concept of metahumans from DC universe - yes, I am a DC fan! Meta UI's super
            power is its simplicity and flexibiltiy - you can use it out of box or pass your custom
            style to modify it completely!
            <br />
            <br />
            I am still thinking about its branding which is why you'll see many components looking very basic.
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
            style={STORY_CODE_BLOCK}
        >
            yarn add @ilakshay14/comp-lib
        </code>
        <br />
        <br />
        <h5>OR</h5>
        <br />
        <code
            style={STORY_CODE_BLOCK}
        >
            npm install @ilakshay14/comp-lib
        </code>
    </>
));
