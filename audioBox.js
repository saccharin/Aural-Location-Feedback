class audioBox {
	constructor(document, mp3, element, start, duration) {
		this.mp3 = mp3;
		this.element = element;
		this.start = start;
		this.duration = duration;

		var source = document.createElement('source');
	    source.src = mp3;
	    source.type = "audio/mpeg";

	    this.element.appendChild(source);

	    this.element.onloadedmetadata = () => {
	    	this.element.currentTime = start;
	    	this.element.volume = .5;
	    	this.element.playbackRate = 1;
	    }
	    // this.element.ontimeupdate = () => {
	    // 	if(this.element.currentTime >= this.start + this.duration) {
	    // 		this.element.currentTime = start;
	    // 	}
	    // }
	    var s = setInterval(() => {
	    	if(this.element.currentTime >= this.start + this.duration) {
	    		this.element.currentTime = start;
	    	}
	    }, 1)
	}

	play() {
		this.element.play();
	}
	stop() {
		this.element.pause();
	}

	setVolume(vol) {
		vol = vol > 1 ? 1 : vol < 0 ? 0 : vol;
		this.element.volume = vol;
	}
}