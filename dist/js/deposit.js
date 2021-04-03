function copyToClipboard() {
  var copyText = document.getElementById("wallet");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}
