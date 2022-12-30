import {useState, useEffect} from 'react'
const Formulario = () => {

  const [nombre, setNombre] = useState('')
  const [propetario, setPropetario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([ nombre, propetario, email, fecha, sintomas].includes('')){
      
      console.log('Hay al menos un campo vacio');
      setError(true);
      return
    }
    setError(false);
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h1 className="font-black text-3xl text-center">Seguimiento Pacientes</h1>
      <p className="text-lg mt-5 text-center mb-10">
        Agrega Pacientes y {''} <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} 
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">

          {error && 
           (
              <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md'>
                <p>Si hay un error</p>
              </div>
           )
          }

        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre Mascota</label>
          <input id="mascota" type="text" className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            placeholder="Nombre de la mascota" value={nombre} 
            onChange={(e)=> setNombre(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="propetario" className="block text-gray-700 uppercase font-bold">Nombre Propetario</label>
          <input id="propetario" type="text" className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            placeholder="Nombre del propetario"  value={propetario} 
            onChange={(e)=> setPropetario(e.target.value)}/>
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold"> Email</label>
          <input id="email" type="text" className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
            placeholder="Email Contacto Propetario"  value={email} 
            onChange={(e)=> setEmail(e.target.value)}/>
        </div>
        
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input id="alta" type="date" className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"  value={fecha} 
            onChange={(e)=> setFecha(e.target.value)}
             />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold"> Síntomas</label>
          <textarea  className="border-2 w-full p-2 mt-2  placeholder-gray-400 rounded-md"
          placeholder="Describe los Síntomas"  value={sintomas} 
          onChange={(e)=> setSintomas(e.target.value)}/>
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer" value="Agregar Paciente" />
      </form>
    </div>
  );
}

export default Formulario;
