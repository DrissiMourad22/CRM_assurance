 import React, { useState } from 'react';

const NewClientForm = ({ addClient, closeModal }) => {
  const [client, setClient] = useState({
    sourceNumero: '',
    assurance: '',
    ville: '',
    dateCreation: '',
    conseiller: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addClient(client);
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Source & Numéro"
        value={client.sourceNumero}
        onChange={(e) => setClient({ ...client, sourceNumero: e.target.value })}
        required
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Assurance"
        value={client.assurance}
        onChange={(e) => setClient({ ...client, assurance: e.target.value })}
        required
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Ville"
        value={client.ville}
        onChange={(e) => setClient({ ...client, ville: e.target.value })}
        required
        className="p-2 border rounded"
      />
      <input
        type="date"
        placeholder="Date de création"
        value={client.dateCreation}
        onChange={(e) => setClient({ ...client, dateCreation: e.target.value })}
        required
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Conseiller"
        value={client.conseiller}
        onChange={(e) => setClient({ ...client, conseiller: e.target.value })}
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="py-2 px-4 bg-blue-600 text-white rounded">
        Ajouter
      </button>
    </form>
  );
};

export default NewClientForm;
