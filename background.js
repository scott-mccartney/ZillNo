let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

// Auth: Sign in with Zillow account
// Store: Save homes (w/ zillowId, address, etc)
// UI: Hide results in searches/map
// Admin: Allow the removal of homes from the extension config
