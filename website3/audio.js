const audioPlayer = document.getElementById("audioPlayer")
const toggleButton = document.getElementById("toggleButton")
const toggleText = document.getElementById("toggleText")
const volumeControl = document.getElementById("volumeControl")

toggleText.addEventListener("click", function () {
    audioPlayer.paused ? audioPlayer.play() : audioPlayer.pause()
    toggleButton.classList.toggle("play")
    toggleButton.classList.toggle("pause")
})

volumeControl.addEventListener("mousedown", function (e) {
    e.stopPropagation()
});

toggleButton.removeEventListener("click", function () {})

volumeControl.addEventListener("input", function() {
    audioPlayer.volume = parseFloat(volumeControl.value)
})

audioPlayer.addEventListener("play", function() {
    toggleButton.classList.replace("play", "pause")
})

audioPlayer.addEventListener("pause", function () {
    toggleButton.classList.replace("pause", "play")
})

let isDragging = false;
let offsetX, offsetY;

audioControls.addEventListener("mousedown", (e) => {
    isDragging = true
    offsetX = e.clientX - audioControls.getBoundingClientRect().left
    offsetY = e.clientY - audioControls.getBoundingClientRect().top
    audioControls.style.cursor = "grabbing"
    audioControls.style.userSelect = "none"
})

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return

    const newX = e.clientX - offsetX
    const newY = e.clientY - offsetY

    audioControls.style.left = `${newX}px`
    audioControls.style.top = `${newY}px`
})

document.addEventListener("mouseup", () => {
    isDragging = false;
    audioControls.style.cursor = "pointer"
    audioControls.style.userSelect = "auto"
})