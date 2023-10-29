import { useState } from 'react';

function MyButton3() {
    
    // ejemplo de use state normal
    const [incremet,setIncrement] = useState(1);

    // ejemplo de use state con tyscript

    const [enabled, setEnabled] = useState<number>(1);

    // uso de type para definir el tipo de dato que se va a usar en el useState

    type Status = "idle" | "loading" | "success" | "error";

     const [status, setStatus] = useState<Status>("idle");

    // uso de type para definir el tipo de dato que se va a usar en el useState
     type RequestState =
     | { status: 'idle' }
     | { status: 'loading' }
     | { status: 'success', data: any }
     | { status: 'error', error: Error };
   
   const [requestState, setRequestState] = useState<RequestState>({ status: 'idle' });


    return ( <>
    <h4>increment {incremet}</h4>

        <button onClick={() => setIncrement(incremet + 1)}>Increment</button>
        <h4> decremet {enabled}</h4>
        <button onClick={() => setEnabled(enabled - 1)}>decrement</button>

        
    </> );
}

export default MyButton3;
