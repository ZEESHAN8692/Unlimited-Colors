const UnlimitedColor = () => {
  setInterval(() => {
    let color = "ABCDEF123456789";
    let randomColr = "#";
    for (let i = 0; i < 6; i++) {
      randomColr += color[Math.floor(Math.random() * 10)];
    }
    // console.log(randomColr);
    document.body.style = `background-color:${randomColr}`;
  }, 700);
};
UnlimitedColor();
