let titluMelodie = document.getElementsByClassName('melodie')[0];
let titluArtist = document.getElementsByClassName('artist')[0];
let titluMelodie2 = document.getElementsByClassName('melodie1')[0];
let titluArtist2 = document.getElementsByClassName('artist1')[0];
let nextSong = document.getElementsByClassName('nsong')[0];
let pastSong1 = document.getElementsByClassName('ps1')[0]
let pastSong2 = document.getElementsByClassName('ps2')[0]
let pastSong3 = document.getElementsByClassName('ps3')[0]
let pastSong4 = document.getElementsByClassName('ps4')[0]
let pastSong5 = document.getElementsByClassName('ps5')[0]
let pastSong6 = document.getElementsByClassName('ps6')[0]
let pastSong7 = document.getElementsByClassName('ps7')[0]
let pastSong8 = document.getElementsByClassName('ps8')[0]
let pastSong9 = document.getElementsByClassName('ps9')[0]
let pastSong0 = document.getElementsByClassName('ps0')[0]

async function fetchStarship() {
	let response = await fetch('https://myradio24.com/users/78810/status.json')
	let data = await response.json();
	titluArtist.innerHTML = `Artist Name: ${data.artist}`;
	titluMelodie.innerHTML = `Song Name: ${data.songtitle}`;
	nextSong.innerHTML = `Next Song: ${data.nextsongs[0]}`;
	pastSong0.innerHTML = `1. ${data.songs[9][1]}`;
	pastSong1.innerHTML = `10. ${data.songs[0][1]}`;
	pastSong2.innerHTML = `9. ${data.songs[1][1]}`;
	pastSong3.innerHTML = `8. ${data.songs[2][1]}`;
	pastSong4.innerHTML = `7. ${data.songs[3][1]}`;
	pastSong5.innerHTML = `6. ${data.songs[4][1]}`;
	pastSong6.innerHTML = `5. ${data.songs[5][1]}`;
	pastSong7.innerHTML = `4. ${data.songs[6][1]}`;
	pastSong8.innerHTML = `3. ${data.songs[7][1]}`;
	pastSong9.innerHTML = `2. ${data.songs[8][1]}`;
}

setInterval(fetchStarship, 5000);

//custom Particles

particlesJS.load('particles-js', './particlesjs-config.json', function () {
	console.log('Particles Loaded');
});