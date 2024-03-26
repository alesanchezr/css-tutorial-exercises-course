const fs = require("fs");
const path = require("path");
const css = fs.readFileSync(path.resolve(__dirname, "./styles.css"), "utf8");

jest.dontMock("fs");

describe("CSS Styles", () => {
    beforeAll(() => {
        document.querySelector("head").innerHTML = `<style>${css.toString()}</style>`;
    });

    test("Body should have specified styles", () => {
        const body = document.querySelector("body");
        expect(body.style.height).toBe("100vh");
        expect(body.style.background).toBe("rgb(189, 189, 189)");
    });

    test("Container class should have specified styles", () => {
        const container = document.querySelector(".container");
        expect(container).toBeTruthy();
        expect(container.style.fontFamily).toBe(
            '"Comic Sans MS", "Comic Sans", cursive'
        );
        expect(container.style.margin).toBe("0px auto");
        expect(container.style.width).toBe("300px");
        expect(container.style.boxShadow).toBe("3px 5px 20px #312f2f");
        expect(container.style.backgroundColor).toBe("white");
        expect(container.style.padding).toBe("120px");
    });

    test("Cocacola list style should be applied correctly", () => {
        const cocacolaItems = document.querySelectorAll(".cocacola");
        cocacolaItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("lower-alpha");
        });
    });

    test("Pepsi list style should be applied correctly", () => {
        const pepsiItems = document.querySelectorAll(".pepsi");
        pepsiItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("square");
        });
    });

    test("Healthy list style should be applied correctly", () => {
        const healthyItems = document.querySelectorAll(".healthy");
        healthyItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("armenian");
        });
    });

    test("Dev-drinks list style should be applied correctly", () => {
        const devDrinksItems = document.querySelectorAll(".dev-drinks");
        devDrinksItems.forEach(item => {
            expect(getComputedStyle(item).listStyleType).toBe("none");
        });
    });
});