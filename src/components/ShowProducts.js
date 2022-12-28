import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = 'http://api-products.run/index.php';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts();
    },[]);
    const getProducts = async() =>{
        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }
    const deleteProduct = async(id) =>{
        const params  = {headers: {'Content-Type':'application/json'},data:{'id':id}};
        await axios.delete(url,params);
        getProducts();
    }
  return (
    <div className="container-fluid">
        <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
                <div className="d-grid mx-auto">
                    <Link to='/create' className="btn btn-dark">Añadir</Link>
                </div>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr><th>#</th><th>Producto</th><th>Descripción</th><th>Precio</th><th></th></tr>
                        </thead>
                        <tbody className="table-group-divider">
                            { products.map( (product, i)=>(
                                <tr key={product.id}>
                                    <td>{(i+1)}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>$ { new Intl.NumberFormat('es-mx').format(product.price)}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} className='btn btn-warning'>Editar</Link>
                                        &nbsp;
                                        <button className="btn btn-danger" onClick={()=>deleteProduct(product.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowProducts