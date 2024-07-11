 

import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const Modifier = () => {
    return (
        
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
       <Top1 />
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
    <Navigation1 />
                        
               
                      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
                            <div className="flex-1 rounded-2xl bg-others-white overflow-hidden flex flex-col items-start justify-center p-6 gap-[24px]">
                                  <div className="self-stretch flex flex-row items-center justify-start">
                                        <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                                              <b className="self-stretch relative leading-[130%]">Devis</b>
                                              <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">Gérez votre devis</div>
                                        </div>
                                  </div>
                                  <div className="self-stretch rounded-2xl bg-others-white box-border h-[122px] flex flex-col items-start justify-start p-6 gap-[16px] text-lg border-[1px] border-solid border-greyscale-200">
                                        <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                                              <div className="flex-1 flex flex-row items-center justify-start">
                                                    <div className="relative leading-[150%] font-semibold">Gestes Commerciaux</div>
                                              </div>
                                              <img className="w-6 relative h-6" alt="" src="edit.svg" />
                                              <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-down.svg" />
                                        </div>
                                        <div className="self-stretch bg-greyscale-200 h-px" />
                                        <div className="self-stretch h-8 flex flex-row items-start justify-start gap-[16px] text-sm text-greyscale-600">
                                              <div className="flex-1 relative h-8">
                                                    <div className="absolute top-[0px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
                                                          <div className="w-40 relative leading-[160%] inline-block shrink-0">Nom Geste Commercial</div>
                                                          <div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">{`Pristia `}</div>
                                                    </div>
                                                    <div className="absolute top-[38px] left-[0px] w-[500px] h-[22px]" />
                                                    <div className="absolute top-[76px] left-[0px] w-[500px] h-[22px]" />
                                              </div>
                                              <div className="flex-1 relative h-8">
                                                    <div className="absolute top-[0px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
                                                          <div className="w-[150px] relative leading-[160%] inline-block shrink-0">Montant du Geste</div>
                                                          <div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">50</div>
                                                    </div>
                                              </div>
                                        </div>
                                  </div>
                                  <div className="self-stretch relative rounded-2xl bg-others-white box-border h-[255px] text-xs border-[1px] border-solid border-greyscale-200">
                                        <div className="absolute top-[24px] left-[24px] w-[1016px] flex flex-row items-center justify-start gap-[10px] text-lg">
                                              <div className="flex-1 flex flex-row items-center justify-start">
                                                    <div className="relative leading-[150%] font-semibold">Document Attaché</div>
                                              </div>
                                              <img className="w-6 relative h-6" alt="" src="edit.svg" />
                                        </div>
                                        <div className="absolute top-[67px] left-[24px] bg-greyscale-200 w-[1016px] h-px" />
                                        <div className="absolute top-[84px] left-[24px] w-[393px] h-[46px] flex flex-col items-center justify-center">
                                              <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start p-4 gap-[12px]">
                                                    <div className="w-4 relative h-4">
                                                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-base" />
                                                          <img className="absolute h-[66.88%] w-[66.88%] top-[16.67%] right-[16.46%] bottom-[16.46%] left-[16.67%] max-w-full overflow-hidden max-h-full" alt="" src="check.svg" />
                                                    </div>
                                                    <div className="flex-1 relative leading-[160%]">Devoir de conseil</div>
                                              </div>
                                        </div>
                                        <div className="absolute top-[86px] left-[532px] w-[393px] h-[47px] flex flex-col items-center justify-center">
                                              <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start p-4 gap-[12px]">
                                                    <div className="w-4 relative h-4">
                                                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-base" />
                                                          <img className="absolute h-[66.88%] w-[66.88%] top-[16.67%] right-[16.46%] bottom-[16.46%] left-[16.67%] max-w-full overflow-hidden max-h-full" alt="" src="check.svg" />
                                                    </div>
                                                    <div className="flex-1 relative leading-[160%]">Lettre de résiliation</div>
                                              </div>
                                        </div>
                                        <div className="absolute top-[130px] left-[24px] w-[393px] h-[47px] flex flex-col items-center justify-center">
                                              <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start p-4 gap-[12px]">
                                                    <div className="w-4 relative h-4">
                                                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                                    </div>
                                                    <div className="flex-1 relative leading-[160%]">Attestation de droits</div>
                                              </div>
                                        </div>
                                        <div className="absolute top-[133px] left-[532px] w-[393px] h-[46px] flex flex-col items-center justify-center">
                                              <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start p-4 gap-[12px]">
                                                    <div className="w-4 relative h-4">
                                                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                                    </div>
                                                    <div className="flex-1 relative leading-[160%]">Certificat de radiation</div>
                                              </div>
                                        </div>
                                        <div className="absolute top-[184px] left-[24px] w-[393px] h-[47px] flex flex-col items-center justify-center">
                                              <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start p-4 gap-[12px]">
                                                    <div className="w-4 relative h-4">
                                                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                                    </div>
                                                    <div className="flex-1 relative leading-[160%]">RIB</div>
                                              </div>
                                        </div>
                                        <div className="absolute top-[184px] left-[532px] w-[393px] h-[46px] flex flex-col items-center justify-center">
                                              <div className="self-stretch flex-1 overflow-hidden flex flex-row items-center justify-start p-4 gap-[12px]">
                                                    <div className="w-4 relative h-4">
                                                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                                    </div>
                                                    <div className="flex-1 relative leading-[160%]">CNI recto / verso</div>
                                              </div>
                                        </div>
                                  </div>
                                  <div className="rounded-3xs bg-greyscale-900 h-14 flex flex-row items-center justify-start py-[21px] px-6 box-border gap-[8px] text-center text-base text-others-white">
                                        <img className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src="arrow-narrow-right.svg" />
                                        <b className="relative tracking-[0.3px] leading-[150%]">Etape suivante</b>
                                  </div>
                            </div>
                      </div>
                      </main>

                </div>

             
);
};

export default Modifier;
