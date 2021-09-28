console.log("test: api file JS")

const apiUrl = `https://icanhazdadjoke.com/`

const myRequest = new Request(apiUrl, {
    method: 'GET',
    headers: { Accept: 'application/json', }

});

async function getData() {
    try {
        const res = await fetch(myRequest)
        console.log("response recieved")
        const response = await res.json();
        // console.log(response)
        return response
    } catch (err) {
        console.log(err)
    }
}


// getData()
// optie voor naslag
// const getJoke = async function () {
//     const apiURL = `https://icanhazdadjoke.com/`;
//     try {
//         const res = await fetch(apiURL, { headers: { Accept: "application/json" } });
//         const data = await res.json();
//         console.log("willekeurige grap: ", data);
//         return data.joke;
//     } catch (error) {
//         console.log(error);
//     }
// };
// console.log(getJoke())