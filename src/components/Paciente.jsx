const Paciente = () => {
return (

<div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
    <p className="font-bold mb-3 text-gray-700 uppercase">Nombre : {''}
        <span className="font-normal normal-case">Hook</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Propetario : {''}
        <span className="font-normal normal-case">Sergio</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Email : {''}
        <span className="font-normal normal-case">sergio@gmail.com</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta : {''}
        <span className="font-normal normal-case">10 de diciembre</span>
    </p>
    <p className="font-bold mb-3 text-gray-700 uppercase">Síntomas : {''}
        <span className="font-normal normal-case">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos facere
            et laboriosam officiis quod impedit perspiciatis expedita eveniet fuga nemo pariatur, eos doloremque saepe
            dolorem vitae aliquid voluptatibus architecto itaque?</span>
    </p>
</div>
)
}

export default Paciente
