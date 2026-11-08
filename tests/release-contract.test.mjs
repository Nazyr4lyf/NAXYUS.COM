import test from "node:test";
import assert from "node:assert/strict";
import {readFileSync,existsSync} from "node:fs";
test("all 16 portfolio entries exist",()=>{const s=readFileSync("src/data/site.ts","utf8");assert.ok((s.match(/slug:"/g)||[]).length>=16);});
test("app routes and contact safeguards exist",()=>{for(const p of ["src/app/page.tsx","src/app/[...path]/page.tsx","src/app/api/contact/route.ts","src/components/WebGLHero.tsx"])assert.ok(existsSync(p),p);const api=readFileSync("src/app/api/contact/route.ts","utf8");assert.match(api,/validEmail/);assert.match(api,/CONTACT_TO_EMAIL/);assert.match(api,/website/);assert.match(api,/origin/);});
