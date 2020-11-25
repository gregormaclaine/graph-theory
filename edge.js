class Edge {
	constructor(v1, v2) {
		this.v1 = v1;
		this.v2 = v2;
	}

	equals(edge) {
		return this.v1 === edge.v1 && this.v2 === edge.v2;
	}
}