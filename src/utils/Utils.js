export function isPresent(data, key, searchTerm) {
  return data[key].toLowerCase().includes(searchTerm.toLowerCase());
}

export function alphebetize(data) {
  return data.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}
