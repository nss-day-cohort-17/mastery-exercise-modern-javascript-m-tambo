# Modern JavaScript Developer Quiz
# Robot Battledome

## Setup

1. `cd` to your quizzes directory.
1. Clone this repository and `cd` into the directory it creates.
1. Now run the following commands.

    ```bash
    git checkout -b quiz
    touch index.html
    touch quiz.js
    touch quiz.css
    ```

You are now ready to work in the `quiz` branch.

When your work in complete, push up the branch (`git push origin quiz`) and submit the pull request on Github.

## Instructions

### Code/Tools Requirements

1. You must use jQuery for interacting with the DOM.
1. You muse use Bootstrap for base styling.

### Logical Requirements

You'll be building robots to battle each other.

1. A base Robot function.
1. Define three robot type functions (e.g. Drone, Bipedal, ATV).
1. Each type must have a unique property, for example, if it is aerial or ground based.
1. Define at least 2 specific robot model functions for each type.
1. Give each robot model a different range of health. For example, one model can have health range of 50-80, and another one will have a range of 60-120. To accomplish this, read about the [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) function in JavaScript.
1. Give each robot model a different range of damage they do using the same technique.

### Functional Requirements

1. When your user interface first loads, provide 2 text inputs to name the two robots that will do battle.
1. You must also provide a select element underneath each text input so that the user can select one of the 6 robot models you defined.
1. Provide a Attack! button that, when clicked, simply applies the damage output of each robot against the other one.
1. Once either robot's health is <0 display a message that the battle is over, and which one won. For example...

##### The Viper Drone defeated the Behemoth ATV with its flamethrower.
