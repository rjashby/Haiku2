import { TestWatcher } from "jest";
import Line from "../src/line";

describe("Line", () => {
  let line1;
  let line2;
  let line3;

  beforeEach(() => {
    line1 = new Line("Happy there Francis!"); 
    line2 = new Line("How are you doing today?");
    line3 = new Line("I am fine thank you");
  });

  test("should create three lines objects ", () => {
    expect(line1.line).toEqual("Happy there Francis!");
    expect(line2.line).toEqual("How are you doing today?");
    expect(line3.line).toEqual("I am fine thank you");
  });

  test("should create three arrays of words for each line", () => { 
    line1.splitLine();
    line2.splitLine();
    line3.splitLine();
    expect(line1.lineArray).toEqual(["happy","there","francis"]);
    expect(line2.lineArray).toEqual(["how","are","you","doing","today"]);
    expect(line3.lineArray).toEqual(["i","am","fine","thank","you"]);
  });

  test("should remove silent vowels", () => {
    line1.splitLine();
    line2.splitLine();
    line3.splitLine();
    line1.subtractVowels();
    line2.subtractVowels();
    line3.subtractVowels();
    expect(line1.lineArray).toEqual(["happy","ther","francis"]);
    expect(line2.lineArray).toEqual(["how","ar","yo","doing","today"]);
    expect(line3.lineArray).toEqual(["i","am","fin","thank","yo"]);
  });

  test("should return the count of vowels per each word for each line", () => {
    line1.splitLine();
    line2.splitLine();
    line3.splitLine();
    line1.subtractVowels();
    line2.subtractVowels();
    line3.subtractVowels();
    line1.countVowels();
    line2.countVowels();
    line3.countVowels();
    expect(line1.count).toEqual(5);
    expect(line2.count).toEqual(7);
    expect(line3.count).toEqual(5);
  });
});
