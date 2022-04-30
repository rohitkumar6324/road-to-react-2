const API = "UNC4D46Hrh9cie7v2CdUJ8iFg9bRbHw3JHQSQk0VqvU"

const searchImages = async (url) => {
    try {
        const res = await fetch(url)

        const data = await res.json()
        console.log(data);
        appendData(data.results)
    }
    catch (err) {
        console.log(err)
    }
}


const search = (e) => {
    if (e.key === "Enter") {
        const value = document.getElementById("query").value;
        searchImages(`https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=${API}`);
        document.querySelector("#sort").value = "relevant";
        document.querySelector("#filter").value = "";
    }
}

const appendData = (data) => {
    const container = document.querySelector("#container");
    container.innerHTML = null;
    data.forEach(({ alt_description, urls: { small } }) => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = small;
        img.style.width = "100%";
        let p = document.createElement("p");
        p.innerText = alt_description;

        div.append(img, p);
        container.append(div);
    })
}

function cSearch() {
    searchImages(`https://api.unsplash.com/search/photos/?query=${this.id}&per_page=20&client_id=${API}`);
}
let id;
const debounce = () => {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
        const query = document.querySelector("#query").value;
        searchImages(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=${API}`)
        document.querySelector("#sort").value = "relevant";
        document.querySelector("#filter").value = "";
    }, 1000);
}

const sortSearch = () => {
    const query = document.querySelector("#query").value;

    const value = document.querySelector("#sort").value;
    searchImages(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&order_by=${value}&client_id=${API}`)

}

const filterSearch = () => {
    const query = document.querySelector("#query").value;
    const value = document.querySelector("#filter").value;
    searchImages(`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&orientation=${value}&client_id=${API}`)
}
export { searchImages, search, cSearch, debounce, sortSearch, filterSearch }