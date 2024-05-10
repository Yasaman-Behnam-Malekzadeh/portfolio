import educationItems from "../../data/education.json";

const educationItemsLength = educationItems.length;

test("Number educations items = 2", () => {
  expect(educationItemsLength).toBe(2);
});

test("Having master", () => {
  expect(educationItems[0].name).toContain("master");
});
test("Having bachelor", () => {
  expect(educationItems[1].name).toContain("bachelor");
});
