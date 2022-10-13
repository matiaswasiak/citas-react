const Paciente = () => {
  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-70 uppercase">
        Nombre: <span className="font-normal  normal-case">Hook</span>
      </p>

      <p className="font-bold mb-3 text-gray-70 uppercase">
        Propietario: <span className="font-normal  normal-case">Matias</span>
      </p>

      <p className="font-bold mb-3 text-gray-70 uppercase">
        Email:{" "}
        <span className="font-normal  normal-case">matiaswasiak@gmail.com</span>
      </p>

      <p className="font-bold mb-3 text-gray-70 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal  normal-case">10 Diciembre de 2022</span>
      </p>

      <p className="font-bold mb-3 text-gray-70 uppercase">
        Sintomas:{" "}
        <span className="font-normal  normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          quasi sed, obcaecati dolore cumque odio temporibus? Quod, praesentium
          eum. Tempore tempora quidem quod aut! Fugit quidem ut recusandae quam
          earum!
        </span>
      </p>
    </div>
  );
};

export default Paciente;
