export default {
  name: {
    en: "Check web die",
    vi: "Kiểm tra tình trạng web die",
  },
  description: {
    en: "Check web die using downforeveryoneorjustme",
    vi: "Dùng bên thứ 3 để kiểm tra xem website có bị die thật không",
  },
  func() {
    let url = prompt("Enter web url to check", location.hostname);
    window.open("https://downforeveryoneorjustme.com/" + url);
  },
};

