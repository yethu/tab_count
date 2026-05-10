function updateBadge(tabCount) {
  let text = tabCount.toString();

  if (text.length > 4) {
    text = (tabCount >= 10000 ? "9999" : tabCount.toString().slice(0, 3) + "+");
  }

  browser.action.setBadgeText({ text });

  let color;
  if (tabCount <= 10) {
    color = "#4CAF50";
  } else if (tabCount <= 99) {
    color = "#FFEB3B";
  } else {
    color = "#FF5722";
  }
  browser.action.setBadgeBackgroundColor({ color });
  browser.action.setBadgeTextColor({ color: "#FFFFFF" });
}

browser.tabs.onCreated.addListener(() => {
  browser.tabs.query({}).then((tabs) => updateBadge(tabs.length));
});

browser.tabs.onRemoved.addListener(() => {
  browser.tabs.query({}).then((tabs) => updateBadge(tabs.length));
});

browser.tabs.onUpdated.addListener(() => {
  browser.tabs.query({}).then((tabs) => updateBadge(tabs.length));
});

browser.windows.onCreated.addListener(() => {
  browser.tabs.query({}).then((tabs) => updateBadge(tabs.length));
});

browser.windows.onRemoved.addListener(() => {
  browser.tabs.query({}).then((tabs) => updateBadge(tabs.length));
});

browser.tabs.query({}).then((tabs) => updateBadge(tabs.length));
