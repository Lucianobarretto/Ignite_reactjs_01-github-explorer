import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter(counter + 1); // conceito da imutabilidade => por esse motivo o setCounter, acrescenta um novo espaço na memória para armazenar cada nova informação, neste caso cada novo click, cada nova contagem...
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}