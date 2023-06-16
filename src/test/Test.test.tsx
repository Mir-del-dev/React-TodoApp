import {describe, test, expect} from "vitest";
describe("Mathematic oprerations",()=>{
    test("should add two numbers",()=>{
        expect(1 + 1).toBe(2);
    });
    test("should return the same number", ()=>{
        expect(1).toBe(1);
    });
});