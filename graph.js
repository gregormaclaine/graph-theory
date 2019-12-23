function _findCyclesFromVertex(graph, visited, currentPath, v) {
  const cycles = [];
  for (const w of graph.getAdjacentNodes(v)) {
    const edge = graph.edges.find(e => e.has(v, w));
    if (visited[0] === w) {
      cycles.push(currentPath.concat([ edge ]));
    } else if (!visited.includes(w)) {
      cycles.push(..._findCyclesFromVertex(graph, visited.concat([ v ]), currentPath.concat([ edge ]), w));
    }
  }
  return cycles;
}

class Graph {
  constructor({ nodes, edges }) {
    this.nodes = nodes;
    this.edges = edges;
  }

  static fromRandom(order, size) {
    size = min(size, (order * (order - 1)) / 2);
    size = max(size, order - 1)

    const nodes = new Array(order).fill(0).map(() => new Node());
    const edges = nodes.map((n, i, arr) => i === 0 ? null : new Edge(n, arr[i - 1])).slice(1);
    const complete_edges = [];

    for (const baseNode of nodes) {
      const edgesFromBaseNode = nodes.map(secondaryNode => {
        return secondaryNode !== baseNode ? new Edge(baseNode, secondaryNode) : null;
      }).filter(e => e);

      const uniqueEdges = edgesFromBaseNode.filter(edge => !complete_edges.find(edge2 => edge.equals(edge2)));
      const newEdges = uniqueEdges.filter(edge => !edges.find(edge2 => edge.equals(edge2)));
      complete_edges.push(...newEdges);
    }

    for (let i = 0; i < size - order + 1; i++) 
      edges.push(complete_edges.splice(floor(random(complete_edges.length)), 1)[0]);

    return new Graph({ nodes, edges });
  }

  getAdjacentNodes(node) {
    if (!this.nodes.includes(node)) return [];
    const edges = this.edges.filter(e => e.node1 === node || e.node2 === node);
    return edges.map(e => e.node1 === node ? e.node2 : e.node1);
  }

  findLongestCycle() {
    const cycles = [];
    for (const v of this.nodes) cycles.push(..._findCyclesFromVertex(this, [], [], v));
    return cycles.reduce((max, current) => max.length > current.length ? max : current, []);
  }
}
