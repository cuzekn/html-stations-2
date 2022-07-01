function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  if (check.checked == false) {
    document.getElementById('text').style.backgroundColor = "#ffffff";
  } else {
    document.getElementById('text').style.backgroundColor = "#ff0000";
  }
}
