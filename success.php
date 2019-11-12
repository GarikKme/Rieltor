<?php
if (!isset($_POST['check'])) {
	return 'Error';
}
header("Content-Type: text/html; charset=utf-8");
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["phone"]);
$email = htmlspecialchars($_POST["email"]);
$stairs = htmlspecialchars($_POST["stairs"]);
$street = htmlspecialchars($_POST["street"]);
$rooms = htmlspecialchars($_POST["rooms"]);
$square = htmlspecialchars($_POST["square"]);


$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );


$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "dmital1981@gmail.com"; // e-mail администратора


// Отправка письма администратору сайта

$tema = "Здравствуйте, Дмитрий, Вам письмо с сайта : ";
$message_to_myemail = "Заявка :
<br><br>
Имя: $name<br><br>
E-mail: $email<br><br>
Телефон: $tel<br><br>
Улица и номер дома: $street<br><br>
Этаж/Этажность: $stairs<br><br>
Количество комнат: $rooms<br><br>
Общая площадь: $square<br><br>
Источник (ссылка): $refferer";

mail($myemail, $tema, $message_to_myemail, "From: AlexeevDmitrij <mailresendering@mail.com> \r\n Reply-To: AlexeevDmitrij \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );



// Сохранение инфо о лидах в файл leads.xls

$f = fopen("leads.xls", "a+");
fwrite($f," <tr>");    
fwrite($f," <td>$email</td> <td>$name</td> <td>$tel</td>   <td>$date / $time</td>");   
fwrite($f," <td>$refferer</td>");    
fwrite($f," </tr>");  
fwrite($f,"\n ");    
fclose($f);
?>