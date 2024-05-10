import navbarItems from "../../data/navbarItems.json";

const navItems = navbarItems.length;

//all data check
describe("data check", () => {
  test("Number of NavItems = 5", () => {
    expect(navItems).toBe(5);
  });
  test("Number of Nav Items greater than 4", () => {
    expect(navItems).toBeGreaterThan(4);
  });
  test("Number of navItems less than 6", () => {
    expect(navItems).toBeLessThan(6);
  });
});

const homeItem = navbarItems[0].name;

test("the first element in header = home", () => {
  expect(homeItem).toMatch("home.title");
});

const contactItem = navbarItems[4].name;
test("The last Item = contact", () => {
  expect(contactItem).toContain("contact");
});
