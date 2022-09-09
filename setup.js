const fs = require('fs');

const newProjectName = process.argv[2];
const paths = fs.readdirSync(".").concat(fs.readdirSync("src"));

const replaceRegex = /fdm-test/gm

for (let path of paths) {
  if (fs.lstatSync(path).isDirectory() || path.startsWith(".")) {
    continue;
  }

  const content = fs.readFileSync(path, 'utf-8');
  fs.writeFileSync(path, content.replace(replaceRegex, newProjectName));
}
