let titluMelodie = document.getElementsByClassName('melodie')[0];
let titluArtist = document.getElementsByClassName('artist')[0];
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
	titluArtist.innerHTML=`Artist Name: ${data.artist}`;
	titluMelodie.innerHTML=`Song Name: ${data.songtitle}`;
	nextSong.innerHTML=`Next Song: ${data.nextsongs[0]}`;
	pastSong0.innerHTML = `${data.songs[9][0]} : ${data.songs[9][1]}`;
	pastSong1.innerHTML = `${data.songs[0][0]} : ${data.songs[0][1]}`;
	pastSong2.innerHTML = `${data.songs[1][0]} : ${data.songs[1][1]}`;
	pastSong3.innerHTML = `${data.songs[2][0]} : ${data.songs[2][1]}`;
	pastSong4.innerHTML = `${data.songs[3][0]} : ${data.songs[3][1]}`;
	pastSong5.innerHTML = `${data.songs[4][0]} : ${data.songs[4][1]}`;
	pastSong6.innerHTML = `${data.songs[5][0]} : ${data.songs[5][1]}`;
	pastSong7.innerHTML = `${data.songs[6][0]} : ${data.songs[6][1]}`;
	pastSong8.innerHTML = `${data.songs[7][0]} : ${data.songs[7][1]}`;
	pastSong9.innerHTML = `${data.songs[8][0]} : ${data.songs[8][1]}`;
	console.log(data);
}

setInterval(fetchStarship, 5000); 