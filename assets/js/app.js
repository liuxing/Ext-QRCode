var btn = document.getElementById('btn'),
  qrcodeBox = document.getElementById('qrcode')
  url = document.getElementById('url')

chrome.tabs.getSelected(null, function(tab){
  setTimeout(function() {
    generator(tab.url)
  }, 0)
})

btn.addEventListener('click', function(){
  if (url.value.trim() === '') {
    url.value = '请输入URL'
    return
  }
  qrcodeBox.innerHTML = ''
  generator(url.value)
}, false)

function generator(url) {
  new QRCode(document.getElementById("qrcode"), {
    text: url,
    width: 148,
    height: 148,
    colorDark : "#000",
    colorLight : "#efefef",
    correctLevel : QRCode.CorrectLevel.H
  });
}