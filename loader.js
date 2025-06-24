function b64DecodeUnicode(str) {
  return decodeURIComponent(atob(str).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

fetch("script.js.b64")
  .then(response => response.text())
  .then(b64 => {
    const decoded = b64DecodeUnicode(b64);
    const script = document.createElement('script');
    script.textContent = decoded;
    document.body.appendChild(script);
  })
  .catch(e => {
    document.body.innerHTML = '<h1 style="color:red">読み込み失敗</h1>';
    console.error(e);
  });
