import Imagem from "../assets/images/loading.gif";
function Home() {
  return (
    <>
      <img
        src={Imagem}
        alt="Imagem informando que a página está em construção"
        title="Página em construção"
      />
    </>
  );
}

export default Home;
