if (typeof window === "undefined") {
  module.exports = function (word) {
    return `a ${word}`;
  };
} else {
  module.exports = require("indefinite");
}
