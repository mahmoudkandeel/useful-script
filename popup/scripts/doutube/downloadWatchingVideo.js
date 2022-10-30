export default {
  name: {
    en: "Download watching video",
    vi: "Tải video đang xem",
  },
  description: {
    en: "Download video that you are watching",
    vi: "Tải video bạn đang xem",
  },
  func() {
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < window.innerWidth &&
        rect.top < window.innerHeight
      );
    };
    for (let v of Array.from(document.querySelectorAll("video")))
      if (isElementInViewport(v) && v.src) return window.open(v.src);
    alert(
      "Không tìm thấy video nào, hãy scroll tới khi nào video tự động phát rồi ấn lại bookmark nhé."
    );
  },
};
