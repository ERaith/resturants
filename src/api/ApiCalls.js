import {alphebetize} from "../utils/Utils"

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
  return alphebetize(data);
}
