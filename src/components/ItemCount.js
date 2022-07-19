import './ItemCount.css';
import { useState } from "react"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import { Button } from 'react-bootstrap';



function Contador({ onAdd }){
    const [num, setNum] = useState();

    const sumar = () => {
        if(num){
        setNum(num + 1)
        }
        else{
            Swal.fire({
                title: 'Error!',
                text: 'No hay stock disponible',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
}
    const resta = () => {
        if(num>0){
        setNum(num - 1)
    }
}
    const reiniciar = () =>{
    setNum(0)
}

return(

<div className='d-grid gap-4 d-md-block'>
    <Button className='btn btn-primary' onClick={sumar}>Sumar</Button>
    <Button className='btn btn-primary' onClick={resta}>Restar</Button>
    <Button className='btn btn-primary' onClick={reiniciar}>Reiniciar!</Button>
    <Button className='btn btn-primary' onClick={() => onAdd(sumar)}>{" "}Agregar al carrito{" "}</Button>
</div>

    )
}



export default Contador;