import React from 'react';

const Modal = ({ isOpen, onClose, onSubmit, formData, setFormData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Adicionar Evento</h2>
        <input
          type="text"
          placeholder="Nome do Evento"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="date"
          value={formData.data}
          onChange={(e) => setFormData({ ...formData, data: e.target.value })}
        />
        <input
          type="text"
          placeholder="Localização"
          value={formData.localizacao}
          onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFormData({ ...formData, imagem: e.target.files[0] })}
        />
        <div className="modal-buttons">
          <button onClick={onSubmit}>Salvar</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
