function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (e.target.checked) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "white";
  }
}
