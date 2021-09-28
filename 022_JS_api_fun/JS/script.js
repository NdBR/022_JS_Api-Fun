console.log("test: script file JS")

const emptyResultList = () =>
    (document.querySelector(".results").innerHTML = "");

const addToResultList = (li) => {
    console.log("dit is de waarde in functie add ", li)
    resultlist = document.querySelector(".results")

    resultlist.appendChild(li);
}
document.querySelectorAll("nav input").forEach(input =>
    input.addEventListener("click", () => {
        emptyResultList();
    })
);

async function getJoke() {
    joke = await getData();
    console.log(joke.joke)
    const arr = new Array(joke.joke)
    console.log(arr)

    return arr;
}

function generateJokeHTML(joke) {
    const li = document.createElement("li");
    li.innerText = joke;
    console.log(li)
    return li;
};

async function displayJokes() {
    console.log("functie display jokes wordt aangeroepen")
    const array = await getJoke()
    array.map(generateJokeHTML)
        .forEach(addToResultList);
}
document
    .querySelector(".jokes")
    .addEventListener("click", displayJokes);