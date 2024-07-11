 
import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const RightContent = () => {
    return (
      <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
      <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
         <Top1 />
      </div>
      <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
      <Navigation1 />
          <div className="w-full relative h-[1024px] text-left text-sm text-gray-900 font-body-large-bold">
                
                 <div className="absolute top-[128px] left-[0px] w-[1160px] flex flex-row items-center justify-start py-0 px-6 box-border gap-[20px] text-5xl">
                      <div className="flex-1 flex flex-col items-start justify-start">
                            <b className="self-stretch relative leading-[130%]">Tarification</b>
                      </div>
                      <div className="w-[400px] rounded-3xs h-14 hidden" />
                </div>
                <div className="absolute top-[115px] left-[913px] rounded-3xs bg-gray-900 w-[206px] h-12 flex flex-row items-center justify-center py-[21px] px-6 box-border gap-[8px] text-center text-others-white">
                      <img className="w-[18px] relative h-[18px]" alt="" src="tag-2.svg" />
                      <b className="relative tracking-[0.2px] leading-[160%]">Tarifée</b>
                </div>
                <div className="absolute top-[115px] left-[759px] rounded-3xs box-border h-12 flex flex-row items-center justify-center py-[21px] px-6 gap-[8px] text-center border-[1px] border-solid border-gray-900">
                      <img className="w-[18px] relative h-[18px]" alt="" src="tag-2.svg" />
                      <b className="relative tracking-[0.2px] leading-[160%]">Mes choix</b>
                </div>
                <div className="absolute top-[115px] left-[500px] rounded-3xs box-border h-12 flex flex-row items-center justify-center py-[21px] px-6 gap-[8px] text-center border-[1px] border-solid border-gray-900">
                      <img className="w-[18px] relative h-[18px]" alt="" src="file-text.svg" />
                      <b className="relative tracking-[0.2px] leading-[160%]">Modifier les informations</b>
                </div>
                <div className="absolute top-[191px] left-[0px] w-[1160px] h-[808px]">
                      <div className="absolute top-[0px] left-[24px] rounded-2xl bg-others-white w-[313px] h-[385px] text-xs">
                            <div className="absolute top-[80px] left-[117px] w-[186px] h-[27px]">
                                  <div className="absolute top-[0px] left-[-29px] w-[103px] h-[27px]" />
                            </div>
                            <div className="absolute top-[89px] left-[46px] w-[89px] h-[19px]">
                                  <div className="absolute top-[1.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[0px] left-[28px] leading-[160%] flex items-center w-[61px]">ASAF</div>
                            </div>
                            <div className="absolute top-[119px] left-[46px] w-[170px] h-[229px]">
                                  <div className="absolute top-[1.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-base" />
                                        <img className="absolute h-[66.88%] w-[66.88%] top-[16.67%] right-[16.46%] bottom-[16.46%] left-[16.67%] max-w-full overflow-hidden max-h-full" alt="" src="check.svg" />
                                  </div>
                                  <div className="absolute top-[0px] left-[28px] leading-[160%] flex items-center w-[142px]">ALPTIS ASSURANCES</div>
                                  <div className="absolute top-[31.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[30px] left-[28px] leading-[160%] flex items-center w-[142px]">AS SOLLITION</div>
                                  <div className="absolute top-[61.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[60px] left-[28px] leading-[160%] flex items-center w-[142px]">ASAF ASSTRANGES</div>
                                  <div className="absolute top-[91.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[90px] left-[28px] leading-[160%] flex items-center w-[142px]">COVERITY</div>
                                  <div className="absolute top-[121.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[120px] left-[28px] leading-[160%] flex items-center w-[142px]">FOA ASSTRANGES</div>
                                  <div className="absolute top-[151.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[150px] left-[28px] leading-[160%] flex items-center w-[142px]">INFOLIANF</div>
                                  <div className="absolute top-[121.5px] left-[0px] w-4 h-4" />
                                  <div className="absolute top-[181.5px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[180px] left-[28px] leading-[160%] flex items-center w-[142px]">WATARLASSURANCES</div>
                                  <div className="absolute top-[212px] left-[0px] w-4 h-4">
                                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                                  </div>
                                  <div className="absolute top-[210px] left-[28px] leading-[160%] flex items-center w-[142px]">ZENTOO</div>
                            </div>
                            <div className="absolute top-[14px] left-[24px] rounded-3xs w-[252px] flex flex-row items-center justify-start py-4 px-0 box-border text-sm">
                                  <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                                        <img className="w-5 relative h-5" alt="" src="layout-list.svg" />
                                        <b className="flex-1 relative tracking-[0.2px] leading-[160%]">Partenaires</b>
                                  </div>
                                  <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                                        <div className="w-6 rounded-[100px] bg-alerts-error-base h-6 overflow-hidden shrink-0 flex flex-col items-center justify-center py-px px-0 box-border">
                                              <div className="relative leading-[160%] font-semibold">1</div>
                                        </div>
                                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-up.svg" />
                                  </div>
                            </div>
                      </div>
                      <div className="absolute top-[600px] left-[24px] rounded-2xl bg-others-white w-[313px] h-20">
                            <div className="absolute top-[80px] left-[117px] w-[186px] h-[27px]">
                                  <div className="absolute top-[0px] left-[-29px] w-[103px] h-[27px]" />
                            </div>
                            <div className="absolute top-[14px] left-[24px] rounded-3xs w-[252px] flex flex-row items-center justify-start py-4 px-0 box-border">
                                  <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                                        <img className="w-5 relative h-5" alt="" src="layout-list.svg" />
                                        <b className="flex-1 relative tracking-[0.2px] leading-[160%]">Filter par les besoins</b>
                                  </div>
                                  <div className="flex flex-row items-start justify-start">
                                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-down.svg" />
                                  </div>
                            </div>
                      </div>
                      <div className="absolute top-[401px] left-[24px] rounded-2xl bg-others-white w-[313px] h-[183px]">
                            <div className="absolute top-[80px] left-[117px] w-[186px] h-[27px]">
                                  <div className="absolute top-[0px] left-[-29px] w-[103px] h-[27px]" />
                            </div>
                            <div className="absolute top-[14px] left-[24px] rounded-3xs w-[252px] flex flex-row items-center justify-start py-4 px-0 box-border">
                                  <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                                        <img className="w-5 relative h-5" alt="" src="money.svg" />
                                        <b className="flex-1 relative tracking-[0.2px] leading-[160%]">Budget</b>
                                  </div>
                                  <div className="flex flex-row items-start justify-start">
                                        <img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-up.svg" />
                                  </div>
                            </div>
                            <img className="absolute top-[102.42px] left-[25px] w-[257.4px] h-[27.4px]" alt="" src="Frame 1.svg" />
                      </div>
                      <div className="absolute top-[574px] left-[535px] w-[460px] h-16" />
                      <div className="absolute top-[707px] left-[506px] rounded-3xs bg-gray-900 w-[480px] h-14 flex flex-row items-center justify-center py-[21px] px-6 box-border gap-[8px] text-center text-base text-others-white">
                            <img className="w-5 relative h-5" alt="" src="Search.svg" />
                            <b className="relative tracking-[0.3px] leading-[150%]">Chargement</b>
                      </div>
                </div>
                <div className="absolute top-[436px] left-[356px] w-[773px] h-[130px] text-2xs-7 text-gray-700">
                      <div className="absolute top-[-242px] left-[0px] w-[773px] h-[131px] text-xs text-alerts-success-base">
                            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-others-white box-border w-[773px] h-[131px] border-[2px] border-solid border-alerts-success-base" />
                            <div className="absolute top-[14px] left-[570px] rounded-[4.25px] bg-others-orange h-[17px] flex flex-row items-center justify-center py-0 px-[7.1px] box-border text-right text-[7.08px] text-others-white">
                                  <b className="relative tracking-[0.14px] leading-[160%] uppercase">les garanties</b>
                            </div>
                            <div className="absolute top-[85px] left-[193px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                            <div className="absolute top-[85px] left-[331px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                            <div className="absolute top-[39px] left-[135px] text-2xs-7 leading-[15.28px] text-gray-700">Capital</div>
                            <div className="absolute top-[69px] left-[137px] leading-[15.28px] uppercase font-semibold">2000€</div>
                            <div className="absolute top-[39px] left-[219px] text-2xs-7 leading-[15.28px] text-gray-700">Type de garanties</div>
                            <div className="absolute top-[68px] left-[220px] leading-[15.28px] uppercase font-semibold">Indemnitaire</div>
                            <div className="absolute top-[39px] left-[355px] text-2xs-7 leading-[15.28px] text-gray-700">Seuil</div>
                            <div className="absolute top-[68px] left-[358px] leading-[15.28px] uppercase font-semibold">30%</div>
                            <img className="absolute top-[43px] left-[382px] w-2 h-2 overflow-hidden" alt="" src="Question mark circle.svg" />
                            <img className="absolute h-[58.4%] w-[9.9%] top-[18.41%] right-[85.8%] bottom-[23.19%] left-[4.3%] rounded-[7.62px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Thumb.png" />
                            <div className="absolute top-[33px] left-[564px] leading-[30.5px] font-extrabold text-center inline-block w-[116px] h-[30px] text-3xl-2 text-gray-900">
                                  <span>{`30.84 `}</span>
                                  <span className="text-[13.2px] [text-decoration:line-through] text-alerts-success-base">45.90</span>
                            </div>
                            <div className="absolute top-[40.23px] left-[679.84px] text-[11.04px] leading-[17.79px] font-medium text-gray-500 text-center inline-block w-[48.2px] h-[17.5px]">€/mois</div>
                            <div className="absolute top-[71px] left-[570px] leading-[15.7px] font-medium inline-block w-40 h-[13px]">Réduction couplage 10% proposer</div>
                      </div>
                      <div className="absolute top-[-97px] left-[0px] w-[773px] h-[130px]">
                            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-others-white w-[773px] h-[130px]" />
                            <div className="absolute top-[14px] left-[570px] rounded-[4.25px] bg-others-orange h-[17px] flex flex-row items-center justify-center py-0 px-[7.1px] box-border text-right text-[7.08px] text-others-white">
                                  <b className="relative tracking-[0.14px] leading-[160%] uppercase">les garanties</b>
                            </div>
                            <div className="absolute top-[85px] left-[193px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                            <div className="absolute top-[85px] left-[331px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                            <div className="absolute top-[39px] left-[135px] leading-[15.28px]">Capital</div>
                            <div className="absolute top-[69px] left-[137px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">2000€</div>
                            <div className="absolute top-[39px] left-[219px] leading-[15.28px]">Type de garanties</div>
                            <div className="absolute top-[68px] left-[220px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">Indemnitaire</div>
                            <div className="absolute top-[39px] left-[355px] leading-[15.28px]">Seuil</div>
                            <div className="absolute top-[68px] left-[358px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">30%</div>
                            <img className="absolute top-[43px] left-[382px] w-2 h-2 overflow-hidden" alt="" src="Question mark circle.svg" />
                            <img className="absolute h-[58.85%] w-[9.9%] top-[18.55%] right-[85.8%] bottom-[22.6%] left-[4.3%] rounded-[7.62px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Thumb.png" />
                            <div className="absolute top-[33px] left-[564px] text-[22.18px] leading-[30.5px] font-extrabold text-gray-900 text-center inline-block w-[76px] h-[30px]">30.84</div>
                            <div className="absolute top-[40.23px] left-[639.84px] text-[11.04px] leading-[17.79px] font-medium text-gray-500 text-center inline-block w-[48.2px] h-[17.5px]">€/mois</div>
                      </div>
                      <div className="absolute top-[48px] left-[0px] w-[773px] h-[131px]">
                            <div className="absolute top-[0px] left-[0px] rounded-2xl bg-others-white box-border w-[773px] h-[131px] border-[2px] border-solid border-alerts-success-base" />
                            <div className="absolute top-[85px] left-[193px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                            <div className="absolute top-[85px] left-[331px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                            <div className="absolute top-[39px] left-[135px] leading-[15.28px]">Capital</div>
                            <div className="absolute top-[69px] left-[137px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">2000€</div>
                            <div className="absolute top-[39px] left-[219px] leading-[15.28px]">Type de garanties</div>
                            <div className="absolute top-[68px] left-[220px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">Indemnitaire</div>
                            <div className="absolute top-[39px] left-[355px] leading-[15.28px]">Seuil</div>
                            <div className="absolute top-[68px] left-[358px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">30%</div>
                            <img className="absolute top-[43px] left-[382px] w-2 h-2 overflow-hidden" alt="" src="Question mark circle.svg" />
                            <img className="absolute h-[58.4%] w-[9.9%] top-[18.41%] right-[85.8%] bottom-[23.19%] left-[4.3%] rounded-[7.62px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Thumb.png" />
                            <div className="absolute top-[33px] left-[564px] text-[22.18px] leading-[30.5px] font-extrabold text-gray-900 text-center inline-block w-[76px] h-[30px]">30.84</div>
                            <div className="absolute top-[40.23px] left-[639.84px] text-[11.04px] leading-[17.79px] font-medium text-gray-500 text-center inline-block w-[48.2px] h-[17.5px]">€/mois</div>
                            <div className="absolute top-[14px] left-[570px] rounded-[4.25px] bg-others-orange h-[17px] flex flex-row items-center justify-center py-0 px-[7.1px] box-border text-right text-[7.08px] text-others-white">
                                  <b className="relative tracking-[0.14px] leading-[160%] uppercase">les garanties</b>
                            </div>
                      </div>
                </div>
                <div className="absolute top-[633px] left-[352px] w-[773px] h-[130px] text-2xs-7 text-gray-700">
                      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-others-white w-[773px] h-[130px]" />
                      <div className="absolute top-[85px] left-[193px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                      <div className="absolute top-[85px] left-[331px] bg-gray-200 w-[46px] h-0.5 [transform:_rotate(-90deg)] [transform-origin:0_0]" />
                      <div className="absolute top-[39px] left-[135px] leading-[15.28px]">Capital</div>
                      <div className="absolute top-[69px] left-[137px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">2000€</div>
                      <div className="absolute top-[39px] left-[219px] leading-[15.28px]">Type de garanties</div>
                      <div className="absolute top-[68px] left-[220px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">Indemnitaire</div>
                      <div className="absolute top-[39px] left-[355px] leading-[15.28px]">Seuil</div>
                      <div className="absolute top-[68px] left-[358px] text-xs leading-[15.28px] uppercase font-semibold text-alerts-success-base">30%</div>
                      <img className="absolute top-[43px] left-[382px] w-2 h-2 overflow-hidden" alt="" src="Question mark circle.svg" />
                      <img className="absolute h-[58.85%] w-[9.9%] top-[18.55%] right-[85.8%] bottom-[22.6%] left-[4.3%] rounded-[7.62px] max-w-full overflow-hidden max-h-full object-cover" alt="" src="Thumb.png" />
                      <div className="absolute top-[33px] left-[568px] text-[22.18px] leading-[30.5px] font-extrabold text-gray-900 text-center inline-block w-[76px] h-[30px]">30.84</div>
                      <div className="absolute top-[40.23px] left-[643.84px] text-[11.04px] leading-[17.79px] font-medium text-gray-500 text-center inline-block w-[48.2px] h-[17.5px]">€/mois</div>
                      <div className="absolute top-[14px] left-[570px] rounded-[4.25px] bg-others-orange h-[17px] flex flex-row items-center justify-center py-0 px-[7.1px] box-border text-right text-[7.08px] text-others-white">
                            <b className="relative tracking-[0.14px] leading-[160%] uppercase">les garanties</b>
                      </div>
                </div>
          </div>
          </main>

          </div>
 


          );
};

export default RightContent;
