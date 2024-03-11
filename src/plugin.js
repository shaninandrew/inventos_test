console.log ("Вход в в plugin.js");

const сPlugin_Chat = videojs.getPlugin('plugin');

class Plugin_Chat extends сPlugin_Chat 
{

  constructor(player, options) 
  {
	console.log (" ** Создание плагина");
    super(player, options);

    if (options.customClass) {
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
		recive_message();
		
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