import React, { useState, useEffect } from 'react';

const SourceForm = ({ addSource, updateSource, editingSource, setEditingSource, viewSource, deleteSource }) => {
  const [source, setSource] = useState({
    sourceNumero: '',
    assurance: '',
    ville: '',
    dateCreation: '',
    conseiller: ''
  });

  useEffect(() => {
    if (editingSource) {
      setSource(editingSource);
    } else {
      setSource({
        sourceNumero: '',
        assurance: '',
        ville: '',
        dateCreation: '',
        conseiller: ''
      });
    }
  }, [editingSource]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingSource) {
      updateSource(source);
    } else {
      addSource(source);
    }
    setSource({
      sourceNumero: '',
      assurance: '',
      ville: '',
      dateCreation: '',
      conseiller: ''
    });
    setEditingSource(null);
  };

  const handleView = () => {
    if (onView) {
      onView(source);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(source);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Source & Numéro"
        value={source.sourceNumero}
        onChange={(e) => setSource({ ...source, sourceNumero: e.target.value })}
        required
      />
      <label>
        Assurance:
        <select
          name="assurance"
          value={source.assurance}
          onChange={(e) => setSource({ ...source, assurance: e.target.value })}
          required
        >
          <option value="">Select Assurance</option>
          <option value="AUTO">AUTO</option>
          <option value="SANTÉ">SANTÉ</option>
        </select>
      </label>
      <input
        type="text"
        placeholder="Ville"
        value={source.ville}
        onChange={(e) => setSource({ ...source, ville: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Date de création"
        value={source.dateCreation}
        onChange={(e) => setSource({ ...source, dateCreation: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Conseiller"
        value={source.conseiller}
        onChange={(e) => setSource({ ...source, conseiller: e.target.value })}
        required
      />
      <button type="submit">{editingSource ? 'Update' : 'Add'}</button>
      {editingSource && (
        <>
          <button type="button" onClick={viewSource}>View</button>
          <button type="button" onClick={DeleteSource}>Delete</button>
        </>
      )}
    </form>
  );
};

export default SourceForm;
