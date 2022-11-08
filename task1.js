const cats = ["tony", "daisy", "socks", "rockie" ];

const capitalisedCats = cats.map(function (catUpper) {
    return catUpper.toUpperCase()
}
);
console.log(capitalisedCats)
