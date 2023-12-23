function status(request, response) {
  response.status(200).json({ chave: "Teste ok" });
}

export default status;
