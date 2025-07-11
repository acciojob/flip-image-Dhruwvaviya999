// write js code if required

const image = document.querySelector(".flip");

image.addEventListener("mouseover", (e) => {
	e.target.src = "https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg";
})

image.addEventListener("mouseout", (e) => {
	e.target.src = "https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg";
})