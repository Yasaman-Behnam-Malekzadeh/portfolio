import experiencesItem from "../../data/experiences.json";

const experiencesItemLength = experiencesItem.length;

test("Number of experiences = 3", () => {
  expect(experiencesItemLength).toBe(3);
});

test("Having ventureLeap experience", () => {
  expect(experiencesItem[0].name).toContain("ventureLeap");
});
test("Having Lastsecond experience", () => {
  expect(experiencesItem[1].name).toContain("Lastsecond");
});
test("Having Chargoon experience", () => {
  expect(experiencesItem[2].name).toContain("Chargoon");
});
