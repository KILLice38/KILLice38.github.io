<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

require_once __DIR__ . '/vendor/autoload.php';


$mail = new PHPMailer(true);
$mail->CharSet = "utf-8";
try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'kirillos382000@gmail.com';
    $mail->Password = 'qrqt gxff srmx ahob';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('info@corvicul.ru', 'Corrosion');
    // $mail->addAddress('info@corvicul.ru');
    $mail->addAddress('kirillos382000@mail.ru');
    // $mail->addAddress('kirillos382000@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = 'Новая заявка Коррозия';
    $mail->Body = '
        Пользователь оставил данные <br>
        Имя: ' . $name . ' <br>
        Номер телефона: ' . $phone . '<br>
        e-mail: ' . $email . '<br>';
    
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены!';
    }
    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
} catch (Exception $e) {
    echo "Could not be sent";
}
?>