const fs = require("fs");
const path = require("path");

const notesDir = path.join(__dirname, "notes");

function init() {
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir);
    console.log("Created 'notes' folder.");
  }
}

function createNote(title, content) {
  const file = path.join(notesDir, title);
  fs.writeFile(file, content, "utf-8", (error) => {
    if (error) console.error("Error writing note:", error);
    else console.log(`Created ${title}`);
  });
}

function readNote(title) {
  const file = path.join(notesDir, title);
  if (!fs.existsSync(file)) {
    console.error(`No such file as '${title}' was found!`);
    return;
  }
  
  fs.readFile(file, "utf-8", (error, content) => {
    if (error) console.error("Error reading note:", error);
    else console.log(`Reading '${title}':\n${content}`);
  });
}

function addContent(title, extraContent) {
  const file = path.join(notesDir, title);
  if (!fs.existsSync(file)) {
    console.error(`No such file as '${title}' was found!`);
    return;
  }

  fs.appendFile(file, extraContent, "utf-8", (error) => {
    if (error) console.error("Error appending content:", error);
    else console.log(`Content has been added to ${title}`);
  });
}

async function deleteNote(title) {
  const file = path.join(notesDir, title);
  try {
    await fs.promises.unlink(file);
    console.log(`${title} has been deleted successfully`);
  } catch (err) {
    console.error(`Error deleting ${title}:`, err.message);
  }
}

init();