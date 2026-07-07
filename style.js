// formに作用させます
const form = document.querySelector("form");


// formが送信された時に処理を実行する
form.addEventListener("submit", function (event) {

  // 本来の流れを止める
  // contact.php→confirm.phpに行く流れを一旦止める
  event.preventDefault();


  // 入力内容を取得する
  const name = document.getElementById("name").value;

  const companyName = document.getElementById("companyName").value;

  const email = document.getElementById("email").value;

  const age = document.getElementById("age").value;

  const message = document.getElementById("message").value;



  // 入力漏れかどうかを確認（もしも入力漏れだった場合、）
  if (
    name === "" ||
    companyName === "" ||
    email === "" ||
    age === "" ||
    message === ""
  ) {

    // 入力漏れだった場合、エラーメッセージを表示する
    alert("必須項目が未入力です。入力内容をご確認ください。");

    // 入力漏れだった場合、ここで処理を終了する
    return;
  }


  const text =
    "下記の内容を本当に送信しますか？" +
    "\n\nお名前➡️" + name +
    "\n会社名➡️" + companyName +
    "\nメールアドレス➡️" + email +
    "\n年齢➡️" + age +
    "\nお問い合わせ内容➡️" + message;

  // それ以外の場合、
  // 確認画面を表示する
  const result = confirm(text);

  // resultがtrue(OK)の場合、preventDefaultで止めてた処理を送信する　（ifは条件がtrueの時だけ実行する）
  if (result) {
    form.submit();
  }

});

// buttonタグを引っ張ってくる
const button = document.querySelector("button");

// footerタグを引っ張ってくる
const footer = document.querySelector("footer");

// 色は青赤黄色灰色で定義する
const colors = ["blue", "red", "yellow", "gray"];

// 現在の色番号
let currentIndex = 0;

// クリックされた時、この中の処理を実行
button.addEventListener("click", function () {

  // 背景色をcurrentIndex番目の色に変える
  footer.style.backgroundColor = colors[currentIndex];

  // インデックス0123をループさせる
  currentIndex = (currentIndex + 1) % colors.length;

});
