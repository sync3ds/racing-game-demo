export class UserSelector {

	constructor(engine) {
		this.engine = engine;
		this.userSelection = {};
	}

	listen(){
		document.getElementById('form').addEventListener('submit', this.submitForm.bind(this));
	}

	submitForm(evt){
		evt.preventDefault();
		this.userSelection.username = document.getElementById('username').value;
		let arenaRadios = document.getElementsByName('arena');
		for (var i = 0; i < arenaRadios.length; i++) {
			if (arenaRadios[i].checked) {
				this.userSelection.place = arenaRadios[i].value;
				break;
			}
		}
		let vehicleRadios = document.getElementsByName('vehicle');
		for (var i = 0; i < vehicleRadios.length; i++) {
			if (vehicleRadios[i].checked) {
				this.userSelection.vehicle = vehicleRadios[i].value;
				break;
			}
		}

		if(this.userSelection.username && this.userSelection.place && this.userSelection.vehicle){
			this.initEngine();
		} else {
			alert("All fields are required.");
		}
	}

	initEngine(){
		//document.getElementById('loading-screen').style.display = 'flex';
		document.getElementById('user-selection').style.display = 'none';

		this.engine.init(this.userSelection);
	}

}
