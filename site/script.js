function getAgent() {
	fetch('https://valorant-api.com/v1/agents')
		.then(response => response.json())
		.then(data => {
			const agentContainer = document.querySelector('.agent-container');
			agentContainer.innerHTML = '';

			const randomIndex = Math.floor(Math.random() * data.data.length);
			const agent = data.data[randomIndex];

			const agentCard = document.createElement('div');
			agentCard.classList.add('agent-card');

			const agentName = document.createElement('h2');
			agentName.textContent = agent.displayName;

			const agentImage = document.createElement('img');
			agentImage.src = agent.fullPortrait;

			agentCard.appendChild(agentName);
			agentCard.appendChild(agentImage);

			agentContainer.appendChild(agentCard);
		});
}

const btn = document.querySelector('#btn');
const armaDiv = document.querySelector('#arma');

btn.addEventListener('click', () => {
	fetch('https://valorant-api.com/v1/weapons')
		.then(response => response.json())
		.then(data => {
			const randomIndex = Math.floor(Math.random() * data.data.length);
			const weapon = data.data[randomIndex];

			const img = document.createElement('img');
			img.src = weapon.displayIcon;
			img.alt = weapon.displayName;

			const name = document.createElement('p');
			name.textContent = weapon.displayName;

			armaDiv.innerHTML = '';
			armaDiv.appendChild(name);
			armaDiv.appendChild(img);
		});
});
