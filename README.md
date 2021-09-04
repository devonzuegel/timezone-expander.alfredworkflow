An [Alfred workflow](https://www.alfredapp.com/workflows) that helps you write the same time  in multiple timezones.

---

For example, if your system time is in Miami and you enter `tz 5pm PT Shanghai Zurich`, you'll get this result pasted into your topmost app: `2pm PT / 5am Shanghai / 11pm Zurich`.

A few notes about how the input works:
- The first argument (`5pm`) is your local time. In this example, that means it's 5pm in Miami, which is in the Eastern Timezone.
- All of the following arguments (`PT Shanghai Zurich`) are a list of cities and/or timezones you want to display.
  - Note that you can also put your local timezone in this list in order to include it in the results (e.g. `5pm PT ET` → `2pm PT / 5pm ET`).
- For the input, the script accepts both spaces and slashes as delimiters. This means that inputing `tz 5pm PT Shanghai Zurich`, `tz 5pm/PT/Shanghai/Zurich`, and `tz 5pm / PT / Shanghai / Zurich` all give the same result.
- The `tz` at the beginning of the input is the command that tells to Alfred what workflow to run.

---

You can find more examples in [`test.js`](./test.js).