<?php

// Проверка на пустые поля
if (empty($_POST['name']) || empty($_POST['email'])) {
	echo "Please fill your data";
	die();
}

$to = '0wpgames0@gmail.com';
$subject = 'Callback from wpgames.ca';
$message = '
<html>
	<head>
		<title>'. $subject .'</title>
	</head>
	<body>
		<p>Имя: ' . $_POST['name'] . '</p>
		<p>Email: ' . $_POST['email'] . '</p>
		<p>Сообщение: ' . (isset($_POST['comment']) ? $_POST['comment'] : '-') . '</p>
		<hr>
		<p>Страница запроса: ' . $_POST['page'] . '</p>
	</body>
</html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <no-reply@wpgames.ca>\r\n";
mail($to, $subject, $message, $headers);

echo 'OK';