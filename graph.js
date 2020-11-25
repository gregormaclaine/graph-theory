class Graph {
	constructor() {
		this.verticies = [];
		this.edges = [];
		this.selected = null;
	}

	randomise(order, size) {
		order = parseInt(order);
		size = parseInt(size)
		if (isNaN(order) || isNaN(size)) return console.log('Caught Error: Graph.randomise(...) took non-number arguments');

		this.verticies = Array(order).fill(0).map((x, i) => new Vertex(i));

		const edges = [];

		for (let i = 1; i < order; i++) {
			const r = floor(random() * 2) // 0 or 1
			const e = new Edge(this.verticies[i - r], this.verticies[i - (1 - r)]);
			edges.push(e);
		}

		const possible_edges = [];
		for (const u of this.verticies) {
			for (const v of this.verticies) {
				if (u !== v) possible_edges.push(new Edge(u, v));
			}
		}
		const other_edges = possible_edges.filter(edge => edges.every(e => !e.equals(edge)));

		for (let i = 0; i < size - order + 1 && other_edges.length > 0; i++) {
			const index = floor(other_edges.length * random());
			edges.push(...other_edges.splice(index, 1));
		}

		this.edges = edges;
		return this;
	}

	handle_click(point) {
		for (const u of this.verticies) {
			if (u.contains(point)) this.selected = this.selected === u ? null : u;
		}
	}

	show() {
		for (const u of this.verticies) u.show({ selected: u === this.selected });
	}

	format_verticies_in_circle() {
		for (let i = 0, u = this.verticies[i]; i < this.verticies.length; u = this.verticies[++i]) {
			const x = cos(TAU / this.verticies.length * i - HALF_PI) * 300;
			const y = sin(TAU / this.verticies.length * i - HALF_PI) * 300;
			u.pos = createVector(x, y);
		}
	}
}