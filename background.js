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

function refreshBadge() {
  browser.tabs.query({}).then((tabs) => updateBadge(tabs.length));
}

browser.tabs.onCreated.addListener(refreshBadge);
browser.tabs.onRemoved.addListener(refreshBadge);
browser.tabs.onUpdated.addListener(refreshBadge);
browser.windows.onCreated.addListener(refreshBadge);
browser.windows.onRemoved.addListener(refreshBadge);

refreshBadge();
