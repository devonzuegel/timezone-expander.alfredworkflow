An [Alfred workflow](https://www.alfredapp.com/workflows) that helps you write the same time  in multiple timezones.

⚡️ [**Install workflow**](./timezone-expander.alfredworkflow) ⚡️

### Example

<small>You can find more examples in [`test.js`](./test.js).</small>

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


### Installation

1. Find your `Alfred.alfredpreferences`, right-click on it, and select "Show package contents". You should now see a list of directories that includes one called `workflows`.
2. Download this directory, and drag it into the `workflows` directory.
3. Open this directory in your terminal and install the dependencies with `npm install`.
4. Now, when you open your Alfred Preferences from the Alfred launcher, you should see a new workflow called `Timezone expander` in the left-hand sidebar. If so, you should be able to use this workflow from the launcher now! 🎉