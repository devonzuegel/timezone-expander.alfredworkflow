An [Alfred workflow](https://www.alfredapp.com/workflows) that helps you write the same time  in multiple timezones.

<h3 style="text-align: center">⚡️ <a href="./timezone-expander.workflow">Install workflow</a> ⚡️</h3>

---

For example, if your system time is in Miami (ET) and you enter `tz 5pm PT Shanghai Zurich` in your Alfred launcher, this result will be pasted into your topmost app: `2pm PT / 5am Shanghai / 11pm Zurich`.

Here's a breakdown of how the input works:
- **`tz`** – This first argument is the command that tells to Alfred what workflow to run.
- **`5pm`** – This second argument is your local time. In this example, that means 5pm in Miami, which is in the Eastern Timezone.
- **`PT Shanghai Zurich`** – All of the remaining arguments are a list of cities and/or timezones you want to display.
  - Note: You can also put your local timezone in this list in order to include it in the results (e.g. input: `tz 5pm PT ET` → output: `2pm PT / 5pm ET`).

The input can handle either spaces and slashes as delimiters. This means that all of the following inputs give the same output:
- `tz 5pm PT Shanghai Zurich`
- `tz 5pm/PT/Shanghai/Zurich`
- `tz 5pm / PT / Shanghai / Zurich`

---

You can find more examples in [`test.js`](./test.js).