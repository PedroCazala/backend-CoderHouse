import {
    assert,
    assertStrictEquals,
} from "https://deno.land/std@0.151.0/testing/asserts.ts";
Deno.test("Hello Test", () => {
    assert("Hello");
});
Deno.test({
    name: "testing example",
    fn() {
        assertStrictEquals("world", "world");
    },
});
Deno.test("Test 3", () => {
    assertStrictEquals("world", "world2");
});
