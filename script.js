

var trick_arr = ["Play Dead", "Say Please", "Roll Over", "Crawl", "Sit", "Stay", "Fetch", "Lay Down", "Spin", "High Five", "Shake", "Speak", "Drop It", "Wait", "Heel"]

function trick_list() {
    let new_list = document.createElement("ul")
    new_list.className = "list-group"
    for (let i = 0; i < trick_arr.length; i++) {
        let new_trick = document.createElement("li")
        new_trick.textContent = trick_arr[i]
        new_trick.className = "list-group-item"
        new_list.appendChild(new_trick)
    }
    if (document.getElementById("trickdiv") !== null) {
        document.getElementById("trickdiv").appendChild(new_list)

    }
}
trick_list()

let btn = document.createElement("button");
btn.id = "map_btn"
btn.textContent = "Download Map"

// function map_download(file, text) {
//     let dl = document.createElement("a");
//     dl.setAttribute('href', 'data:text/plain;charset=utf8,' + encodeURIComponent(text));
//     dl.setAttribute('download', "map.jpg")

//     dl.appendChild(btn)
//     return dl
// }

// if (document.getElementById("button_container") !== null) {
//     document.getElementById("button_container").appendChild(map_download())
// }
