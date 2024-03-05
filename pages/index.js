import Image from 'next/image';
import HomepageGIF from '/assets/loading.gif'

function Home(){
    return <div>
        <h1>Remember why you started! 👨‍💻</h1>
        <Image src={HomepageGIF} alt="Página em construção" sizes="100%" style={{width: '70%',height: 'auto',}} />
    </div>
}

export default Home;

