import experiencesItems from "../../data/experiences.json";

const experiencesItemLength = experiencesItems.length;

test("Number of experiences = 3", () => {
  expect(experiencesItemLength).toBe(3);
});

test("Having ventureLeap experience", () => {
  expect(experiencesItems[0].name).toContain("ventureLeap");
});
test("Having Lastsecond experience", () => {
  expect(experiencesItems[1].name).toContain("Lastsecond");
});
test("Having Chargoon experience", () => {
  expect(experiencesItems[2].name).toContain("Chargoon");
});
