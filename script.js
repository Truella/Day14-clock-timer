const hours = document.getElementById("hour");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("second");
const counter = document.getElementById("counter");
const icon = document.querySelector(".fa-hourglass");
const timerInput = document.getElementById("timer-input");
const btn = document.getElementById("start-counter");
const timeOutMessage = document.querySelector(".timeout-message")
setInterval(function () {
				let hour = new Date().getHours();
				let minute = new Date().getMinutes();
				let second = new Date().getSeconds()
				
				//Add time to paragraphs
				hours.innerHTML = hour;
				minutes.innerHTML = minute ;
				seconds.innerHTML = second ;
}, 1000)

btn.addEventListener("click", function () {
				if(timerInput.value > 0 ) {
				count = Number(timerInput.value) + 1 ;
let myInterval = setInterval(function () {
				count--
				if(count >= 0) {
							counter.innerHTML = count;
							if(count > "5") {
											icon.style.color = "white"
							}else {
											icon.style.color = "red"
											
							}
							icon.classList.add("fa-spin");
							timeOutMessage.classList.add("hidden")
				}else {
				    	timeOutMessage.classList.remove("hidden");
							timeOutMessage.innerHTML = "TIME UP!!! " 
							clearInterval(myInterval);
							icon.classList.remove("fa-spin");
							setTimeout(function () {
				timeOutMessage.classList.add("hidden")
},5000)
				}
}, 1000 )
timerInput.value="";
}else {
				alert("set time greater than 0 seconds")
}
})
