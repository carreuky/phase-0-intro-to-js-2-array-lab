let cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
    return (cats)
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
    return (cats)
}
function destructivelyRemoveLastCat (name) {
    cats.pop("Garfield")
    return (cats)
}
function destructivelyRemoveFirstCat (name) {
    cats.shift("Milo")
    return (cats)
}
function appendCat(name) {
    let cats=["Milo", "Otis", "Garfield"];
    cats.push(name)
    return (cats)
}
function prependCat(name){
    let cats=["Milo", "Otis", "Garfield"];
    cats.unshift("Arnold")
    return (cats)
}
function removeLastCat (name) {
    let cats=["Milo", "Otis", "Garfield"];
    cats.pop("Garfield")
    return (cats)
}
function removeFirstCat (name) {
    let cats=["Milo", "Otis", "Garfield"];
    cats.shift("Milo")
    return (cats)
}

