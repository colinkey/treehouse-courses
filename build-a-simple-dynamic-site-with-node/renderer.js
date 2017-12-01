var fs = require("fs");

function mergeValues(values, content) {
  for (var key in values) {
    content = content.replace("{{" + key + "}}", values[key]);
  }
  return content;
}

function view(template, values, response) {
  //read from the template file
  var fileContents = fs.readFileSync("./views/" + template + ".html", {
    encoding: "utf8"
  });
  fileContents = mergeValues(values, fileContents);
  response.write(fileContents);
  //insert values into the content
  //write out to the reponse
}

module.exports.view = view;
