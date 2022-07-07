const EventEmitter = require('events');

class PlayerHandler extends EventEmitter {
	constructor() {
		super();
	}
}

const playerHandler = new PlayerHandler();

playerHandler.on('newPlayer', (name) => {
	console.log(`New player ${name} has joined the game`);
});

playerHandler.emit('newPlayer', 'Greyworm');
