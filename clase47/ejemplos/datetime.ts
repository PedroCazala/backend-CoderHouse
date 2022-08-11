import { format } from "https://deno.land/std@0.151.0/datetime/mod.ts";

const currentTime =new Date();
console.log(currentTime);

console.log(format(currentTime, "yyyy-MM-dd HH:mm"));
