fetch("script.js.b64")
  .then(res => res.text())
  .then(b64 => {
    const decoded = atob(b64);
    const script = document.createElement("script");
    script.textContent = decoded;
    document.body.appendChild(script);
  })
  .catch(err => {
    document.body.innerHTML = "<h1 style='color:red;'>🔴 読み込み失敗</h1>";
    console.error("script load error:", err);
  });
