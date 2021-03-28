import { useState } from 'react';
import Link from 'next/link';

function Sobre() {
    return (
        <div>
            <h1> Sobre </h1>
            <Link>
                <a href='/'>Home</a>
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

export default Sobre;