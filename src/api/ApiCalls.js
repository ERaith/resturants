export async function fetchData() {
  const res = await fetch(
    "https://code-challenge.spectrumtoolbox.com/api/restaurants",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Api-Key q3MNxtfep8Gt",
      },
    }
  );
  const data = await res.json();
  console.log(data);
  return alphebetize(data);
}

function alphebetize(data) {
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
