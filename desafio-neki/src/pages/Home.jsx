import { useEffect, useState } from "react";
import { getEvents, deleteEvent } from "../services/api";
import Modal from "../components/Modal";



 function Home() {
    const [events, setEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    

    useEffect(() => {
        async function fetchEvents() {
            const res = await getEvents();
            setEvents(res);
        }
        fetchEvents();
    }, [showModal]);

    const handleDelete = async (id) => {
        await deleteEvent(id);
        setEvents(events.filter(event => event.id !== id));
    };

    return (
    <div className="home-container">
      <h2>Eventos</h2>
      <button onClick={() => setShowModal(true)}>Adicionar Evento</button>
      <div className="event-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={`data:image/jpeg;base64,${btoa(String.fromCharCode(...event.imagem || []))}`} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.data}</p>
            <p>{event.localizacao}</p>
            <button onClick={() => handleDelete(event.id)}>Excluir</button>
          </div>
        ))}
      </div>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
    );
}   

export default Home;