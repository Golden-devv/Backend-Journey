# Lesson 2 - JavaScript Escapes the Browser

## The Problem

- JavaScript originally only ran inside web browsers.
- Browsers intentionally restrict JavaScript to protect the user's computer.

## Why Node.js Was Created

- Developers wanted to use JavaScript outside the browser.
- Ryan Dahl created Node.js in 2009 by using Google's V8 JavaScript engine.
- Node.js allows JavaScript to interact with the operating system.

## Browser vs Node.js

### Browser
- Sandboxed environment.
- Cannot directly read files.
- Cannot directly access the operating system.
- Do not expose these same APIs to website JavaScript
### Node.js
- Runs outside the browser.
- Can read and write files.
- Can create servers.
- Can communicate with the operating system.
- it gives JavaScript access to built-in modules

## Security

- Browsers follow the principle of user consent.
- Websites can only access sensitive resources after the user grants permission.
- Node.js programs run with the permissions of the user who starts them.

## Key Principle

Good engineering is almost always about trade-offs, not perfection.