
import caesarCipher from "./caesarCipher";

test("Encode string with caesar cipher", () => {
    expect(caesarCipher("test with jest", 13)).toBe("grfg jvgu wrfg")
});