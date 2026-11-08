import {existsSync,readFileSync} from "node:fs";
const required=["src/app/layout.tsx","src/app/page.tsx","src/app/globals.css","src/app/[...path]/page.tsx","src/app/api/contact/route.ts","src/data/site.ts","src/components/WebGLHero.tsx","public/assets/naxyus-mark.webp","tsconfig.json"];
const missing=required.filter(x=>!existsSync(x));if(missing.length){console.error("Missing required files:",missing);process.exit(1);}
const data=readFileSync("src/data/site.ts","utf8");const count=(data.match(/slug:"/g)||[]).length;
if(count<16)throw Error(`Expected at least 16 portfolio projects; found ${count}.`);
console.log(`NAXYUS source verification passed: ${required.length} required paths, ${count} projects.`);
