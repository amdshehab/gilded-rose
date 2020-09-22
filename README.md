# Gilded Rose

## Getting Started


1. Clone and Navigate into the `js` directory
```sh
cd js
```
2. Run yarn
```sh
yarn
```
3. Run the tests
```sh
yarn test
```
4. Serve the HTML example
```sh
yarn start
```

## Thought Process

1. First thing first, there was a lot of requirements so I started by writing some tests to ensure I didn't break anything once I started refactoring/adding new stuff.

2. I then began by refactoring the foundation of the `update_quality` function; the ability to decrement `quality` and `sell_in` for standard items.

3. The main problem with the code written was the lack of Separation of Concerns, this algorithm is always going to involve loads of iff'ing as it's the nature of the program to check for various scenarios but that logic can be split up to keep things DRY and Deterministic.

4. The secondary problem I decided to tackle was the imperative code style + state mutation approach, constantly mutating a single object in this way makes the algorithm very brittle. I opted for a more functional approach; building up a new array of updated items rather than mutating the original array.

5. I then tackled all the other special cases for different items with TDD. I'd already built up some reusable functions to handle incrementation/decrementation, so that made handling different scenarios straight forward.

6. I then added the requested feature; I realised `Conjured` is not just a specific item but a prefix for item names, so I built a small function to check for that prefix and then handled its updates accordingly

7. I set up a small server to serve the HTML demo, this is because I'm using es6 modules and had to change the script type to `module`




