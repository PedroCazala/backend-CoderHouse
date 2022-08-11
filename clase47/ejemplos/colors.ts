import * as colors from "https://deno.land/std@0.151.0/fmt/colors.ts";
console.log(colors.bgWhite(colors.black("Hello world!")));


// Otra forma
import {
    bgBlue,
    red,
    bold,
} from "https://deno.land/std@0.151.0/fmt/colors.ts";
console.log(bgBlue(red(bold("Hello world!"))));