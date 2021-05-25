const args = process.argv.slice(2);
console.log(args);

const reverse = function(args) {
  for (let i = 0; i < args.length; i++) {
    let newString = "";
    for (let j = args[i].length - 1; j >= 0; j--) {
      newString += args[i][j];
    }
    console.log(newString);
  }
};

reverse(args);