import fs from "node:fs";

fs.readFile("public/test.txt", "utf-8", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

async function writefile(){
    try{
        await fs.promises.writeFile("public/test.txt", "Hello World!", "utf-8");
        console.log("File has been written.");
    } catch (err) {
        throw err;
    }
}