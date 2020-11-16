import { alphebetize } from "./Utils";

describe("Sorting function", () => {
  it("should sort an array of objects", () => {
    const initialData = [
      { name: "A great resturant" },
      { name: "Zee Resturant at the End of the universe" },
      { name: "Not so great resturant" },
    ];
    const expected = [
      { name: "A great resturant" },
      { name: "Not so great resturant" },
      { name: "Zee Resturant at the End of the universe" },
    ];

    expect(alphebetize(initialData)).toStrictEqual(expected);
  });
});
