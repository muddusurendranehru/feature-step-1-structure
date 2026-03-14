/**
 * Runs next dev after loading .env.local so project env wins over system DATABASE_URL.
 * Use: node run-dev-with-env.js   or   npm run dev:local
 */
require("dotenv").config({ path: ".env.local", override: true });
const { spawn } = require("child_process");
const proc = spawn("npx", ["next", "dev"], { stdio: "inherit", env: process.env, shell: true });
proc.on("exit", (code) => process.exit(code ?? 0));
