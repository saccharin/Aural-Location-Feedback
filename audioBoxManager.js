class audioBoxManager {
	constructor(boxes) {
		this.boxes = boxes;


		this.interval = setInterval(() => {
	    	if(this.boxes[0].currentTime >= this.boxes[0].start + this.boxes[0].duration) {
	    		this.boxes.forEach((b) => {
	    			b.element.currentTime = b.start;
	    		});
	    	}
	    }, 1)
	}

	play() {
		this.boxes.forEach((b) => {
			b.play();
		})
	}

	stop() {
		this.boxes.forEach((b) => {
			b.pause();
			b.element.currentTime = b.start;
		})
	}
}