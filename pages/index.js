import Image from "next/image";
import Construction from "../assets/images/loading.gif";

function Home() {
  return (
    <>
      <Image
        src={Construction}
        alt="Imagem informando que a página está em construção"
        title="Página em construção"
      />
    </>
  );
}

export default Home;
