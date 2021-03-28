import { useState } from 'react';
import Link from 'next/link'

function Home() {
    return (
        <div>
            <h1> Home </h1>
            <Link href='/sobre'>
                <a>Sobre</a>
            </Link>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1)

    function adicionarContador(){
        setContador(contador + 1);
    }
    
    return (
        <div>
            <button onClick={adicionarContador}>
                CLICA EM MIM
            </button>
            <div>{contador}</div>
        </div>
    )
}

export default Home;