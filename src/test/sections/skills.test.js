import skillsItems from "../../data/skills.json";

const skillsItemsLength = skillsItems.length;

test("Number of skills = 13", () => {
  expect(skillsItemsLength).toBe(13);
});
