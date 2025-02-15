export default {
  name: {
    en: "Get all video from user doutu.be profile",
    vi: "Tải tất cả video từ doutu.be profile",
  },
  description: {
    en: "Get all video in doutu.be user profile",
    vi: "Tải tất cả video từ profile của user doutu.be bất kỳ",
  },
  blackList: [],
  whiteList: ["*://doutu.be"],

  func: async function () {
    const WAIT_FOR_FULL_VIDEO_LOADED = 5000;
    const FIND_FULL_VIDEO_INTERVAL = 100;
    const sleep = (m) => new Promise((r) => setTimeout(r, m));
    const getAllVideo = () =>
      Array.from(document.querySelectorAll('img[loading="lazy"].object-cover'));
    const getFullVideo = () => document.querySelector("video");
    const closeFullVideo = () =>
      document.querySelector("div.top-8.left-4")?.click();

    alert("Getting video, open console (F12) to see result.");

    const queue = getAllVideo();
    while (queue.length > 0) {
      const first = queue.shift();
      first.scrollIntoView();
      first.click();

      let full_video;
      let limit = WAIT_FOR_FULL_VIDEO_LOADED / FIND_FULL_VIDEO_INTERVAL;

      while (!full_video && limit > 0) {
        full_video = getFullVideo();
        limit--;
        await sleep(FIND_FULL_VIDEO_INTERVAL);
      }

      if (full_video) {
        console.log(full_video.src);
      } else {
        console.log("Not found full video");
      }

      closeFullVideo();
      await sleep(500);
    }
  },
};
