<?php
if ($_SERVER["REQUEST_METHOD"] !== "POST") {

  header("Location: contact.php");
  exit;
}

$name = $_POST['name'];
$companyName = $_POST['companyName'];
$email = $_POST['email'];
$age = $_POST['age'];
$message = $_POST['message'];

$to = $email;

$subject = "お問い合わせありがとうございます";

$body =
  "お名前：" . $name .
  "\n会社名：" . $companyName .
  "\nメールアドレス：" . $email .
  "\n年齢：" . $age .
  "\nお問い合わせ内容：" . $message;

$result = mail($to, $subject, $body);

if ($result) {
  // 成功
  $messageText = "お問い合わせが送信されました。ありがとうございます！";
} else {
  // 失敗
  $messageText = "メール送信に失敗しました。";
}

?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <title>お問い合わせフォーム - 送信完了画面</title>
</head>

<body>

  <h1>お問い合わせフォーム - 送信完了画面</h1>

  <p><?php echo $messageText; ?></p>

  <a href="contact.php">お問い合わせフォームに戻る</a>

</body>

</html>
