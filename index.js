// const add = require("./add")
// const math = require("./math")
// // console.log("hello");

// // const sum = add(1, 2)
// // console.log(sum);


// console.log(add(1,2));

// console.log(math.add(1,2));
// console.log(math.subtract(1,2));


// const data = require("./data.json")

// console.log(data);


// const path = require("node:path")

// console.log(__filename);
// console.log(__dirname);
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));
// console.log(path.extname(__dirname));
// console.log(path.parse(__dirname));
// console.log(path.format(path.parse(__filename)));
// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));
// console.log(path.join("folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "index.html"));
// console.log(path.join("/folder1", "//folder2", "../index.html"));
// console.log(path.join(__dirname, "data.json"));
// console.log(path.resolve("folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function higherOrderFunction(callback){
//     const name = "Vishwas"
//     callback(name)
// }

// higherOrderFunction(greet)


// const EventEmitter = require("node:events")

// const emitter = new EventEmitter()

// emitter.on("order-pizza", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
// })

// emitter.on("order-pizza", (size) => {
//     if (size === "large") {
//         console.log("Serving complimentary drink");
//     }
// })
// emitter.emit("order-pizza", "large", "mushroom")


// const PizzaShop = require("./pizza-shop")
// const DrinkMachine = require("./drink-machine")

// const pizzaShop = new PizzaShop()
// const drinkMachine = new DrinkMachine()

// pizzaShop.on("order", (size, topping) => {
//     console.log(`Order received! Baking a ${size} pizza with ${topping}`);
//     drinkMachine.serveDrink(size)
// })

// pizzaShop.order("large", "mushrooms")
// pizzaShop.displayOrderNumber()


// const buffer = new Buffer.from("Vishwas")

// buffer.write("Code")

// console.log(buffer);
// console.log(buffer.toJSON());
// console.log(buffer.toString());


// const fs = require("node:fs")

// const fileContents = fs.readFileSync("./file.txt", "utf-8")
// console.log(fileContents);


// fs.readFile("./file.txt", (error, data) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(data);
// })

// fs.writeFileSync("./file.txt", "Hello world")

// fs.writeFile("./file.txt", "Hello world", (error, ) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log("File written");
// })

// const fs = require("node:fs/promises")

// fs.readFile("file.txt", "utf-8").then(data => console.log(data)).catch(error => console.log(error))

// async function readFile(){
//     try {
//         const data = await fs.readFile("file.txt", "utf-8")
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// readFile()

// const fs = require("node:fs")
// const zlib = require("node:zlib")

// const gzip = zlib.createGzip()

// const readableStream = fs.createReadStream("./file.txt", {
//     encoding: "utf-8",
//     highWaterMark: 2
// })

// readableStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))

// const writeableStream = fs.createWriteStream("./file2.txt")


// readableStream.on("data", (chunk) => {
//     console.log(chunk);
//     writeableStream.write(chunk)
// })


// readableStream.pipe(writeableStream)


// const http = require("node:http")
// const fs = require("node:fs")

// const server = http.createServer((req, res) => {

    // const superHero = {
    //     firstName: "Bruce",
    //     lastName: "Wayne"
    // }

    // const name = "Vishwas"

    // // req.writeHead(200, {"Content-Type": "application/json"})
    // req.writeHead(200, {"Content-Type": "text/html"})
    // // res.end(JSON.stringify(superHero))

    // // const html = fs.readFileSync("./index.html")
    // // res.end(html)

    // let html = fs.readFileSync("./index.html", "utf-8")
    // html = html.replace("{{name}}", name)

    // // fs.createReadStream(__dirname + "./index.html").pipe(res)
    // res.end(html)





//     res.end(req.url)

//     if (req.url === "/") {
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         res.end("Homepage")
//     }else if (req.url === "/about") {
//         res.writeHead(200, {"Content-Type": "text/plain"})
//         res.end("AboutPage")
//     }else if (req.url === "/api") {
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.end(JSON.stringify({
//             firstName: "Bruce",
//             lastName: "Wayne"
//         }))
//     } else {
//         res.writeHead(404)
//         res.end("Page not found")
//     }
// })


// server.listen(3000, () => {
//     console.log("Server initialized on port 3000");
// })





// const fs = require("node:fs")
// console.log("First");

// fs.readFile("./file.txt", "utf-8", (error, data) => {
//     console.log("File contents");
// })

// console.log("Last");



// const crypto = require("node:crypto")

// // crypto.pbkdf2 = Date.now()
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512")
// // console.log("Hash: ", Date.now() - start);

// process.env.UV_THREADPOOL_SIZE = 5
// const MAX_CALLS = 3

// const start = Date.now()

// for (let i = 0; i < MAX_CALLS; i++) {
//     crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
//         console.log(`Hash: ${i + 1}`, Date.now() - start);
//     })
    
// }



// const https = require("node:https") 

// const MAX_CALLS = 16

// const start = Date.now()
// for (let i = 0; i < MAX_CALLS; i++) {
//     https.request("https://www.google.com", (res) => {
//         res.on("data", () => {})
//         res.on("end", () => {
//             console.log(`Request: ${i + 1}`, Date.now() - start);
//         })
//     })    
// }

// console.log("log 1");
// process.nextTick(() => console.log("process next 1"))
// console.log("log 2");


// Promise.resolve().then(() => console.log("promise resolve 1"))
// process.nextTick(() => console.log("process nextTick 1"))



const fs = require("fs")

fs.readFile(__filename, () => {
    console.log("this is readfile 1");
    setImmediate(() => console.log("this is setimmediate1"))
    process.nextTick(() => console.log("this is process nexttick1"))
    Promise.resolve().then(() => console.log("this is promise resolve1 "))

})


setTimeout(() => console.log("this is settimeout1"))
for (let i = 0; i < 2000000000; i++) {
    
}