export const replaceAll = (string, search, replace) => {
    return string.split(search).join(replace);
  }

  export const titleCase = (str) => {
    return str
    //   .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };