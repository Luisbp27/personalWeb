<?php
error_reporting(0);
$name = $_POST['name'];
$email= $_POST['email'];
$texto=$_POST['text'];
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$mensaje = "Este mensaje fue enviado por " . $nombre . " \r\n";
$mensaje .= "Su e-mail es: " . $email . " \r\n";
$mensaje .= "Mensaje: " . $_POST['GrupoOpciones1'] . " \r\n";
$mensaje .= "Enviado el " . date('d/m/Y', time());

$para = 'luisbarcapons@gmail.com';
$asunto = 'Mensaje para Luis Barca';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'Mensaje enviado correctamente.';

?>