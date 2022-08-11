import { serve } from "https://deno.land/std@0.151.0/http/mod.ts";
serve(() => new Response("Hello World\n"));
console.log("http://localhost:8000/");