import React from 'react';

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div className="event-card">
      <img src={`data:image/jpeg;base64,${event.imagem}`} alt="Event" className="event-image" />
      <div className="event-details">
        <h3>{event.name}</h3>
        <p>📅 {new Date(event.data).toLocaleDateString()}</p>
        <p>📍 {event.localizacao}</p>
        <div className="event-actions">
          <button onClick={() => onEdit(event)}>Editar</button>
          <button onClick={() => onDelete(event.id)}>Excluir</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
