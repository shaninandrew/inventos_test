console.log ("Вход в  scripts.js");
const message = 'Hello world  <br>' // Try edit me

const user_id = Math.floor( Math.random()*90000); //Id пользователя в чате - обычно это cookie

console.log("Id пользователя = "+user_id);
// Update header text
//document.querySelector('#header').innerHTML = message

// Log to console
console.log(message);

/// Отправляется сообщения на сервер
function send_message(id)
{
	if (id==null)
  {
    id ="input_chat_msg";
  }
  console.log(" --- Используется чат id "+id);

 var input= document.getElementById(id);
 var new_msg = input.value;
  console.log ("Отправка данных на сервер - "+new_msg+" to server");

 //дата сообщения
 const date_stamp = new Date();
 var mark_date = date_stamp.getDay()+"-"+date_stamp.getMonth()+"-"+ date_stamp.getYear()+"/"+ date_stamp.getHours()+":"+date_stamp.getMinutes()+":"+date_stamp.getSeconds()
  console.log ("Время отправки на сервер "+mark_date);
 //тут в реальности идет POST запрос на сервер
 /*
 fetch("https://server.ru/chat/post", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    msg: new_msg,
    completed: false
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
 
 */
 
 //представим, что скачали данные и раскидываем их по локалке
 localStorage.setItem(mark_date, user_id+":"+new_msg);
  
  //чистим
 input.value="";
 
}


/// Принимает сообщения с сервера 
function recive_message(id_div_print)
{
	if (id_div_print==null)
  {
    id ="chat_messages";
  }
  console.log(" --- Используется чат id "+id_div_print);


 /*
 fetch("https://server.ru/chat/messages", {
  method: "GET"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
*/	

//считываем чат в формате метка дата/время и выводим сообщения 
var msg = "";
console.log ("Выгружаем ранее принятые сообщения...");
//по хорошему нужен еще список дат когда были сообщения
const date_stamp = new Date();
const day= date_stamp.getDay()+"-"+date_stamp.getMonth()+"-"+ date_stamp.getYear()+"/";

for (var k= date_stamp.getHours(); k>0; k--)
for (var j= 59; j>0; j--)
for (var i= 59; i>0; i--)
{
	//время назад 
	var mark_date =  day+ k+":"+j+":"+i;
	if (localStorage[mark_date]!=null)
	{
		msg+=localStorage[mark_date]+"<br>";
		
	}
}

console.log (" >> Готово! " + id_div_print+" >> "+msg);
//пихаем их на экран
var old_msg =  document.getElementById(id_div_print);
old_msg.innerHTML = msg;

}


console.log ("Выход из scripts.js");