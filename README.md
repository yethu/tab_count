# Tab Count

A Firefox extension that displays the total number of open tabs across all windows as a badge on the extension icon. I wrote this extension to curb my tab addiction.

## Badge Colors

| Tab Count | Color |
|-----------|-------|
| 1–10      | Green |
| 11–99     | Orange |
| 100+      | Red   |

## Installation

### Temporary Installation (for development)

1. Open Firefox and navigate to `about:debugging`
2. Click on **This Firefox** in the left sidebar
3. Scroll down and click **Load Temporary Add-on**
4. Select the `manifest.json` file in this directory
5. The extension icon will appear in the toolbar

The extension will be loaded until Firefox is restarted.

### Permanent Installation

1. Navigate to the extension directory in the terminal and run:
   ```bash
   zip -r tab_count.zip *
   ```
2. Open `about:debugging` in Firefox
3. Click **This Firefox** → **Register Temporary Add-on**
4. Select the `tab_count.zip` file
5. Pin the extension to the toolbar by right-clicking the extension icon and selecting **Pin to Toolbar**

## How It Works

The extension listens for tab and window events (`onCreated`, `onRemoved`, `onUpdated`) and updates the badge count accordingly. It also queries all tabs on load to display the initial count.

## Attribution

The `icons/123.svg` icon is from [Google Material Icons](https://fonts.google.com/icons), licensed under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
