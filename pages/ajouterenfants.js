 

const Ajouterenfants = () => {
    return (
          <div className="w-full absolute !m-[0] top-[0px] left-[0px] bg-transparant-black-50 h-[1024px] overflow-hidden shrink-0 flex flex-row items-center justify-end text-left text-5xl text-greyscale-900 font-body-large-bold">
                <div className="w-[841px] h-[1024px] flex flex-row items-center justify-end gap-[24px]">
                      <div className="rounded-[100px] bg-others-white overflow-hidden flex flex-row items-start justify-start p-4">
                            <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-right.svg" />
                      </div>
                      <div className="self-stretch bg-others-white flex flex-col items-end justify-start p-9 relative gap-[32px]">
                            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[32px] z-[0]">
                                  <b className="w-80 relative leading-[130%] inline-block">Ajouter enfants</b>
                                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-sm">
                                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                                              <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                                                    <div className="relative leading-[160%] font-medium">Nom</div>
                                                    <div className="relative leading-[160%] font-medium text-alerts-error-base">*</div>
                                              </div>
                                              <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-4 px-5 border-[1px] border-solid border-alerts-error-base">
                                               </div>
                                               
                                        </div>
                                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                                              <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                                                    <div className="relative leading-[160%] font-medium">Prénom</div>
                                                    <div className="relative leading-[160%] font-medium text-alerts-error-base">*</div>
                                              </div>
                                              <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-4 px-5 border-[1px] border-solid border-greyscale-300">
                                               </div>
                                        </div>
                                        <div className="self-stretch h-[86px] overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[10px]">
                                              <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                                                    <div className="relative leading-[160%] font-medium">{`Régime social `}</div>
                                                    <div className="relative leading-[160%] font-medium text-alerts-error-base">*</div>
                                              </div>
                                              <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-greyscale-300">
                                                    <div className="flex-1 relative leading-[160%] font-medium">Assuré</div>
                                                    <img className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src="chevron-down.svg" />
                                              </div>
                                        </div>
                                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                                              <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                                                    <div className="relative leading-[160%] font-medium">Date de naissance</div>
                                                    <div className="relative leading-[160%] font-medium text-alerts-error-base">*</div>
                                              </div>
                                              <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-4 px-5 gap-[10px] border-[1px] border-solid border-greyscale-300">
                                                    <div className="flex-1 relative leading-[160%] font-medium">23 Mar 2023</div>
                                                    <img className="w-5 relative h-5" alt="" src="calendar.svg" />
                                              </div>
                                        </div>
                                  </div>
                            </div>
                            <div className="w-[392px] !m-[0] absolute bottom-[0px] left-[0px] bg-others-white flex flex-row items-center justify-end p-6 box-border z-[1] text-center text-base">
                                  <div className="flex-1 flex flex-row items-center justify-end gap-[20px]">
                                        <div className="flex-1 rounded-3xs box-border h-14 flex flex-row items-center justify-center py-[21px] px-6 border-[1px] border-solid border-greyscale-900">
                                              <b className="relative tracking-[0.3px] leading-[150%]">Annuler</b>
                                        </div>
                                        <div className="flex-1 rounded-3xs bg-greyscale-900 h-14 flex flex-row items-center justify-center py-[21px] px-6 box-border text-others-white">
                                              <b className="relative tracking-[0.3px] leading-[150%]">Enregister</b>
                                        </div>
                                  </div>
                            </div>
                      </div>
                </div>
          </div>);
};

export default Ajouterenfants;
