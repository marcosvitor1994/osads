class PartiturasService {
  getAll() {
    const partituras = localStorage.getItem("partituras");
    return partituras ? JSON.parse(partituras) : [];
  }

  get(id) {
    const partituras = this.getAll();
    return partituras[id];
  }

  create(dados) {
    const partituras = this.getAll();
    partituras.push(dados);

    localStorage.setItem("partituras", JSON.stringify(partituras));
  }

  update(dados, id) {
    const partituras = this.getAll();
    partituras.splice(id, 1, dados);
    localStorage.setItem("partituras", JSON.stringify(partituras));
  }

  delete(id) {
    const partituras = this.getAll();
    partituras.splice(id, 1);
    localStorage.setItem("partituras", JSON.stringify(partituras));
    
  }
}

export default new PartiturasService();
