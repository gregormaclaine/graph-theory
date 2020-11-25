class Vertex {
	constructor(index) {
		this.index = index;

		this.pos = random_position();
		this.size = 40;
	}

	contains(point) {
		const d = this.pos.copy();
		d.sub(point);
		return d.mag() < this.size / 2;
	}

	show({ selected }) {
		fill(selected ? '#F59F00' : 255)
		stroke(0);
		strokeWeight(2);
		ellipse(this.pos.x, this.pos.y, this.size);

		textAlign(CENTER, CENTER);
		textSize(18);
		fill(0);
		strokeWeight(1);
		text(this.index, this.pos.x, this.pos.y);
	}
}