import Formulario from '../Formulario';

const NuevaReserva = ({ onAgregarCita }) => {
  return (
    <div>
      <Formulario onAgregarCita={onAgregarCita} />
    </div>
  );
};

export default NuevaReserva;
