const yargs = require("yargs");
const notes = require("./node.js");

yargs.command({
  command: "add",
  describe: "Add new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body ",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});
//create a remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNotes(argv.title);
  },
});

/*
yargs.command({
  command: "list",
  describe: "Listing your notes",
  handler: function () {
    console.log("Listing your notes");
  },
});
//creating read command
yargs.command({
  command: "read",
  describe: "reading your list",

  handler: function () {
    console.log("Going to read your notes");
  },
});
//console.log(process.argv); // to catch process argumet i command
//console.log(yargs.argv); // to creat deaflut to add command functionality


*/
yargs.parse(); //parsing all argument
