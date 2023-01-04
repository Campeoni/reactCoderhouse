import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import './detalle-factura.css'

const DetalleFactura = () => {
  const [id, setId] = useState();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitHandler = (ev) => {
    ev.preventDefault();

    const db = getFirestore();
    const formsCollection = collection(db, 'forms');

    addDoc(formsCollection, form).then((snapshot) => {
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setId(snapshot.id);
    });
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {typeof id !== 'undefined' ? (
        <div>
          <p>Su mensaje se ha enviado correctamente</p>
          <p>{id}</p>
        </div>
      ) : (
        <div className='containerDetalleFactura'>        
          <div className='titulo'>
          Detalle de facturacion
          </div>
          <div className='formulario'>           
            <form onSubmit={submitHandler}>
              <div className='nombreFlex'>
                <label htmlFor="name">Nombre</label>
                <input className='nombre'
                  name="name"
                  id="name"
                  value={form.name}
                  onChange={changeHandler}
                />
              </div>
              <div className='emailFlex'>
                <label htmlFor="email">Email</label>
                <input className='email'
                  type="email"
                  name="email"
                  id="email"
                  value={form.email}
                  onChange={changeHandler}
                />
              </div>
              <div className='mensaje'>
                <label htmlFor="message">Mensaje</label>
                <textarea 
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={changeHandler}
                ></textarea>
              </div>          
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetalleFactura;
