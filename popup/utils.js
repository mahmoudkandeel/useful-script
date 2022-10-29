export const getTabId = async () => {
  let tabArray = await chrome.tabs.query({ currentWindow: true, active: true });
  return tabArray[0].id;
};

export const runScript = async (func, tabId) => {
  return chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: func,
    world: "MAIN",
  });
};

export const runScriptFile = (scriptFile, tabId) => {
  return chrome.scripting.executeScript({
    target: { tabId: tabId },
    files: [scriptFile],
    world: "MAIN",
  });
};

export const runScriptInCurrentTab = async (func) => {
  const tabId = await getTabId();
  return await runScript(func, tabId);
};

export const runScriptFileInCurrentTab = async (scriptFile) => {
  const tabId = await getTabId();
  return await runScriptFile(scriptFile, tabId);
};

export const openUrlInNewTab = async (url) => {
  return chrome.tabs.create({ url });
};

export const openUrlAndRunScript = async (url, func) => {
  let tab = await openUrlInNewTab(url);
  return await runScript(func, tab.id);
};

// https://developer.chrome.com/docs/extensions/reference/storage/
export const localStorage = {
  set: async (key, value) => {
    return chrome.storage.sync.set({ [key]: value });
  },
  get: async (key, defaultValue = "") => {
    let result = await chrome.storage.sync.get([key]);
    return result[key] || defaultValue;
  },
};
