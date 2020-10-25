let titluMelodie = document.querySelector('.melodie');
let titluArtist = document.querySelector('.artist');
let titluMelodie2 = document.querySelector('.melodie1');
let titluArtist2 = document.querySelector('.artist1');
let pastSong1 = document.querySelector('.ps1');
let pastSong2 = document.querySelector('.ps2');
let pastSong3 = document.querySelector('.ps3');
let pastSong4 = document.querySelector('.ps4');
let pastSong5 = document.querySelector('.ps5');
let pastSong6 = document.querySelector('.ps6');
let pastSong7 = document.querySelector('.ps7');
let pastSong8 = document.querySelector('.ps8');
let pastSong9 = document.querySelector('.ps9');
let pastSong0 = document.querySelector('.ps0');

async function fetchStarship() {
	let response = await fetch('https://myradio24.com/users/2288/status.json');
	let data = await response.json();
	titluArtist.innerHTML = `Artist Name: ${data.artist}`;
	titluMelodie.innerHTML = `Song Name: ${data.songtitle}`;
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

setInterval(fetchStarship, 6000);

//custom Particles

particlesJS.load('particles-js', './particlesjs-config.json', function () {
});