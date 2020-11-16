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
  return res.json();
}
