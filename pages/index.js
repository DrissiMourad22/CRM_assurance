import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import SourceForm from '../components/SourceForm';
import SourceList from '../components/SourceList';
Modal.setAppElement('#__next'); // Important for accessibility

const Clients = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [sources, setSources] = useState([]);
  const [editingSource, setEditingSource] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingSource(null);
  };

  const addSource = (newSource) => {
    setSources([...sources, newSource]);
    closeModal();
  };

  const updateSource = (updatedSource) => {
    const updatedSources = sources.map((source) =>
      source.sourceNumero === updatedSource.sourceNumero ? updatedSource : source
    );
    setSources(updatedSources);
    closeModal();
  };

  const editSource = (source) => {
    setEditingSource(source);
    openModal();
  };
  const viewSource = (source) => {
    setViewingSource(source);
    setModalIsOpen(true);
  };

  const deleteSource = (sourceNumero) => {
    const updatedSources = sources.filter(source => source.sourceNumero !== sourceNumero);
    setSources(updatedSources);
  };

   return (
<div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
       <Top1 />
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
    <Navigation1 />
 
         <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-3xs text-greyscale-500 font-body-small-medium">
          <div className="flex-1 rounded-2xl bg-others-white overflow-hidden flex flex-col items-start justify-start py-6 pr-[21px] pl-6 box-border gap-[24px] max-w-full mq825:pt-5 mq825:pb-5 mq825:box-border">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full text-5xl text-greyscale-900">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[425px] max-w-full mq675:min-w-full">
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                  Clients
                </h1>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Liste clients
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
                <button className="cursor-pointer py-3.5 px-[37px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center gap-[6px] border-[1px] border-solid border-greyscale-900">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/layoutlist.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-greyscale-900 text-center min-w-[48px]">
                    filtrer
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
                </div>
                <button
        className="cursor-pointer [border:none] py-4 px-6 bg-greyscale-900 rounded-3xs flex flex-row items-center justify-center gap-[5px]"
        onClick={openModal}
      >
        <img className="h-5 w-5 relative overflow-hidden shrink-0" alt="" src="/plus.svg" />
        <b className="relative text-base tracking-[0.3px] leading-[150%] font-body-small-medium text-others-white text-center">
          Ajouter une client
        </b>
        <img className="h-5 w-5 relative overflow-hidden shrink-0 hidden" alt="" />
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ajouter ou Modifier un Client"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <h2>{editingSource ? 'Modifier le Client' : 'Ajouter un Nouveau Client'}</h2>
        <SourceForm
          addSource={addSource}
          deleteSource={deleteSource}
          viewSource={viewSource}

          updateSource={updateSource}
          editSource={editSource}
          setEditingSource={setEditingSource}
        />
        <button onClick={closeModal} className="py-2 px-4 bg-red-600 text-white rounded">
          Fermer
        </button>
         
      </Modal>

       

            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-sm text-greyscale-900">
              <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px] min-w-[465px] max-w-full mq675:min-w-full">
                <div className="w-[315px] hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                    Title Field
                  </div>
                  <div className="relative leading-[160%] font-medium text-alerts-error-base">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300">
                  <input
                    className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-body-small-medium text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-500 text-left flex items-center min-w-[150px] max-w-[calc(100%_-_30px)] p-0"
                    placeholder="Nom et Prénom"
                    type="text"
                  />
                  <img
                    className="h-5 w-5 relative"
                    loading="lazy"
                    alt=""
                    src="/search.svg"
                  />
                </div>
              </div>
              <div className="w-[150px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                    Title Field
                  </div>
                  <div className="relative leading-[160%] font-medium text-alerts-error-base">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                  <div className="flex-1 relative leading-[160%] font-medium">
                    Numéro
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevrondown-8.svg"
                  />
                </div>
              </div>
              <div className="w-[166px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                    Title Field
                  </div>
                  <div className="relative leading-[160%] font-medium text-alerts-error-base">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                  <div className="flex-1 relative leading-[160%] font-medium">
                    Conseillier
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevrondown-8.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="w-[15px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-4 relative leading-[160%] hidden">
                Dec
              </div>
            </div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="w-[15px] hidden flex-col items-start justify-start">
              <div className="self-stretch h-4 relative leading-[160%] hidden">
                Dec
              </div>
            </div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px] text-xs text-greyscale-600">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[175px] text-center text-3xs text-alerts-error-base">
                <button className="cursor-pointer [border:none] py-[18.5px] px-4 bg-greyscale-50 self-stretch rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs overflow-hidden flex flex-row items-start justify-start gap-[10px]">
                  <input className="m-0 h-[17.5px] w-4" type="checkbox" />
                  <b className="flex-1 relative text-xs tracking-[0.2px] leading-[160%] font-body-small-medium text-greyscale-600 text-left">{`Source & Numéro`}</b>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 relative"
                      alt=""
                      src="/sort.svg"
                    />
                  </div>
                </button>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-3.5 px-4 gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                      <input
                        className="cursor-pointer m-0 w-4 h-4 relative"
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className="self-stretch h-px bg-greyscale-200" />
                  <div>
        {sources.map((source, index) => (
          <div key={index}>
            <p>{source.sourceNumero}</p>
             
             
              </div>
                ))}
                      </div>
                  </div>
                   
                </div>
                 
                 
                 
                
              </div>
              <div className="w-[223px] flex flex-col items-start justify-start z-[1]">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px]">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Assurance
                  </b>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/sort.svg"
                  />
                </div>
                {sources.map((source, index) => (
          <div key={index}>
            <p>{source.assurance}</p>
             
             
              </div>
                ))}
                <div className="self-stretch flex flex-col items-center justify-center">
                  
                  <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] pr-[93px] pl-4 gap-[12px]">
                    <button className="cursor-pointer [border:none] py-1 px-[9px] bg-others-blue rounded-md flex flex-row items-center justify-center hover:bg-dodgerblue">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[30px]">
                        AUTO
                      </b>
                    </button>
                    <button className="cursor-pointer [border:none] py-1 px-[9px] bg-primary-base rounded-md flex flex-row items-center justify-center hover:bg-mediumaquamarine">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[36px]">
                        SANTÈ
                      </b>
                    </button>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                
                
                
                
                 
                 
                
              </div>
              <div className="w-[137px] flex flex-col items-start justify-start z-[2] text-greyscale-900">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px] text-greyscale-600">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Ville
                  </b>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/sort.svg"
                  />
                </div>
                {sources.map((source, index) => (
          <div key={index}>
            <p>{source.ville}</p>
             
             
              </div>
                ))}
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                     <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                 
                 
                 
                 
                 
                 
                 
              </div>
              <div className="w-[137px] flex flex-col items-start justify-start z-[3] text-greyscale-900">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[9px] px-4 gap-[10px] text-greyscale-600">
                  <b className="h-[38px] flex-1 relative tracking-[-0.11px] leading-[160%] flex items-center">
                    Date Création
                  </b>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/sort.svg"
                  />
                </div>
                {sources.map((source, index) => (
          <div key={index}>
            <p>{source.dateCreation}</p>
             
             
              </div>
                ))}
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
      
              </div>
              <div className="w-[137px] flex flex-col items-start justify-start z-[3] text-greyscale-900">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[9px] px-4 gap-[10px] text-greyscale-600">
                  <b className="h-[38px] flex-1 relative tracking-[-0.11px] leading-[160%] flex items-center">
                         Conseiller                  </b>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/sort.svg"
                  />
                </div>
                {sources.map((source, index) => (
          <div key={index}>
            <p>{source.conseiller}</p>
             
             
              </div>
                ))}
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                 
              </div>
              <div className="w-[146px] flex flex-col items-start justify-start z-[5] text-right">
                <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-greyscale-50 overflow-hidden flex flex-row items-center justify-end py-[18.5px] px-4">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Action
                  </b>
                  {sources.map((source, index) => (
          <div key={index}>
            <p>{source.Action}</p>
             
             
              </div>
                ))}
                   
                </div>
                 
                <div className="self-stretch flex flex-col items-center justify-center">
                <SourceList
        sources={sources}
        editSource={openModal}
        deleteSource={closeModal}
        viewSource={openModal}
      />
                  
                
                 
                </div>
                </div>
                </div>
                </div>

           
        </section>
        </main>
        </div>
        

   );
};

export default Clients;
