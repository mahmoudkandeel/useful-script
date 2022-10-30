export default {
  name: {
    en: "Get window size",
    vi: "Lấy kích thước trang web",
  },
  description: {
    en: "Alerts the width and height in pixels of the inner window.",
    vi: "đơn vị pixels",
  },
  func() {
    alert(
      "Window inner dimensions:\n\n   " +
        document.body.clientWidth +
        " x " +
        document.body.clientHeight
    );
  },
};
