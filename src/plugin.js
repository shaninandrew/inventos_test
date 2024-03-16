console.log ("Вход в в plugin.js");

const сPlugin_Chat = videojs.getPlugin('plugin');

//опиции где принимать и выводить соообщения
class MyOptionsForChat
{
	constructor(div_input, div_print_msg)
	{
		this.input_chat_msg_div = div_input;
		this.show_chat_msg_div = div_print_msg;

	}

}


class Plugin_Chat extends сPlugin_Chat 
{


  constructor(player, options, OptionsForChat) 
  {
	console.log (" ** Создание плагина");
	
	console.log("Переданный класс - "+options.customClass);
	console.log("Тип переданного класса - "+typeof(options.customClass));

	// вызываем родителя
    super(player, options);

	//расширенные опции рабочих элементов управления
	this.OptionsForChat = OptionsForChat;
	console.log("Параметры  вводилка "+this.OptionsForChat.input_chat_msg_div + " / показушка " +this.OptionsForChat.show_chat_msg_div);

	//если опция есть
    if (options.customClass) 
	{
	 //сюда вкладываем div с чатам
      player.addClass(options.customClass);
	  
    }

    player.on('playing', 
	function() 
	{
      videojs.log('playback began!');
	  console.log("Playing");
	  
    });
	
	player.on('stopping',
	function()
	{
		console.log("Stopping...");
		
	}
	);
	
	player.on('pause',
	function()
	{
		console.log("Paused");
		
	}
	);
	
	
	player.on('playing',
	function()
	{
		console.log("Play & scan chat new messages....");
		//v
		//console.log("This "+typeof(this) +" name='"+this.constructor.name+"' " +this.__proto__+ " "+info);

		// передаем ID - где будет чат
		// this.OptionsForChat.input_chat_msg_div  / показушка  this.OptionsForChat.show_chat_msg_div);
		recive_message(OptionsForChat.show_chat_msg_div);
		
	}
	);
	
	
	console.log (" ** Создание плагина завершено!");
	
  }//constructor
  
  
   dispose() 
   {
    super.dispose();
    videojs.log('the advanced plugin is being disposed');
  }
  
  
   logState(changed) {
    videojs.log(`the player is now ${this.state.playing ? 'playing' : 'paused'}`);
  }
  
}//class


console.log ("Выход в в plugin.js");