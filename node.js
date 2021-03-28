const fs = require("fs");
const chalk = require("chalk");

const getNotes = function () {
  return "your Notes ";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    // this fuction return subset of previous notes if it's  give boolean value
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.red.inverse(" New notes added "));
  } else {
    console.log(chalk.red.inverse(" Note already taken "));
  }
};

const saveNotes = function (notes) {
  const dataJson = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJson);
  //console.log("You data is save succefully ");
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = dataBuffer.toString();
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};

const removeNotes = function (title) {
  const notes = loadNotes();
  const noteToKeep = notes.filter(function (note) {
    return note.title !== title;
  });
  if (notes.length == noteToKeep.length) {
    console.log(chalk.inverse.red(" NO NOTES FOUND "));
  } else {
    console.log(chalk.inverse.green("NOTES REMOVED"));
    saveNotes(noteToKeep);
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
};
