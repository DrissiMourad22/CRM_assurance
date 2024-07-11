 import { useState } from 'react';
 import { Switch } from '@headlessui/react';
 import Top1 from '../components/top1';
 import Navigation1 from '../components/navigation1';


const Compagnies = () => {
  const [enabled, setEnabled] = useState(false)

  const [checkIconChecked, setCheckIconChecked] = useState(true);
  const [checkIcon1Checked, setCheckIcon1Checked] = useState(true);
  return (
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
       <Top1 />
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
    <Navigation1 />
     
  <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
  <h2 className="m-0 flex-1 relative text-black leading-[130%] font-bold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[25px]">
    Tarification
  </h2>
</div>

        <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-sm text-greyscale-900 font-body-large-bold">
          <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full">
            <div className="w-[313px] rounded-2xl bg-others-white flex flex-col items-start justify-center p-6 box-border gap-[16px] min-w-[313px] mq750:pt-5 mq750:pb-5 mq750:box-border">
              <div className="h-14 rounded-3xs bg-greyscale-100 flex flex-row items-center justify-start p-4 box-border">
                <div className="flex flex-row items-center justify-start gap-[10px]">
                  <input
                    className="accent-greyscale-100 m-0 h-5 w-5 relative overflow-hidden shrink-0"
                    checked={checkIconChecked}
                    type="checkbox"
                    onChange={(event) =>
                      setCheckIconChecked(event.target.checked)
                    }
                  />
                  <b className="relative tracking-[0.07px] leading-[160%]">
                    Informations Assuré
                  </b>
                </div>
                <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-greyscale-100 flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/check-12.svg"
                  />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Informations conjoint
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-greyscale-100 flex flex-row items-center justify-start p-4">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/check-12.svg"
                  />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Informations enfants
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch h-14 rounded-3xs bg-greyscale-100 flex flex-row items-center justify-start p-4 box-border">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <input
                    className="accent-greyscale-100 m-0 h-5 w-5 relative overflow-hidden shrink-0"
                    checked={checkIcon1Checked}
                    type="checkbox"
                    onChange={(event) =>
                      setCheckIcon1Checked(event.target.checked)
                    }
                  />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Besoins
                  </b>
                </div>
                <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch h-14 rounded-3xs flex flex-row items-center justify-start py-4 px-0 box-border">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Compagnies
                  </b>
                </div>
                <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[252px] rounded-3xs hidden flex-row items-center justify-start py-4 px-0 box-border">
                <div className="h-[22px] flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <b className="self-stretch flex-1 relative tracking-[0.2px] leading-[160%]">
                    Permission
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[252px] rounded-3xs bg-greyscale-100 hidden flex-row items-center justify-start p-4 box-border">
                <div className="h-[22px] flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img className="h-5 w-5 relative" alt="" />
                  <b className="self-stretch flex-1 relative tracking-[0.2px] leading-[160%]">
                    Integration
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[252px] rounded-3xs hidden flex-row items-center justify-start py-4 px-0 box-border">
                <div className="h-[22px] flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img className="h-5 w-5 relative" alt="" />
                  <b className="self-stretch flex-1 relative tracking-[0.2px] leading-[160%]">
                    Subscription
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[252px] rounded-3xs hidden flex-row items-center justify-start py-4 px-0 box-border">
                <div className="h-[22px] flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <b className="self-stretch flex-1 relative tracking-[0.2px] leading-[160%]">
                    Password
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[252px] rounded-3xs hidden flex-row items-center justify-start py-4 px-0 box-border">
                <div className="h-[22px] flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                  />
                  <b className="self-stretch flex-1 relative tracking-[0.2px] leading-[160%]">
                    Notification
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative leading-[160%] font-semibold">
                      8
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-start pt-6 px-6 pb-[49px] box-border gap-[24px] min-w-[504px] max-w-full text-xl mq450:min-w-full mq675:pt-5 mq675:pb-8 mq675:box-border mq750:pb-[21px] mq750:box-border">
              <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq750:text-base mq750:leading-[22px]">
                Compagnies
              </h3>
              <div className="w-[259px] hidden flex-col items-start justify-start gap-[10px] text-sm">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                    Title Field
                  </div>
                  <div className="relative leading-[160%] font-medium text-alerts-error-base">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                  <div className="h-[22px] flex-1 relative leading-[160%] font-medium inline-block">
                    Applicant Tracking System
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch h-px bg-greyscale-200" />
              <div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start pt-0 px-0 pb-7 box-border gap-[15px] max-w-full text-lg">
                <div className="ml-[-6px] w-[740px] rounded-2xl bg-others-white box-border flex flex-row items-start justify-start py-[22px] px-[23px] gap-[24px] max-w-[102%] shrink-0 border-[1px] border-solid border-greyscale-200 mq450:flex-wrap mq675:overflow-x-auto">
                  <img
                    className="h-[50px] w-[50px] rounded-81xl object-cover min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/icon@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start py-[11px] px-0 box-border min-w-[606px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[10px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-row items-center justify-start min-w-[40px] max-w-full">
                        <div className="relative leading-[150%] font-semibold inline-block min-w-[40px]">
                          April
                        </div>
                      </div>
                          <Switch
                       checked={enabled}
                      onChange={setEnabled}
                      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                    >
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                     </Switch>
                     </div>
                  </div>
                </div>
                <div className="ml-[-6px] w-[740px] rounded-2xl bg-others-white box-border flex flex-row items-start justify-start py-[22px] px-[23px] gap-[24px] max-w-[102%] shrink-0 border-[1px] border-solid border-greyscale-200 mq450:flex-wrap">
                  <img
                    className="h-[50px] w-[50px] rounded-81xl object-cover min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/icon-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center py-[11px] px-0 box-border min-w-[402px] max-w-full mq450:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[10px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-row items-center justify-start min-w-[53px] max-w-full">
                        <div className="relative leading-[150%] font-semibold inline-block min-w-[53px]">
                          Apivia
                        </div>
                      </div>
                      <Switch
                       checked={enabled}
                      onChange={setEnabled}
                      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                    >
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                     </Switch>
                    </div>
                  </div>
                </div>
                <div className="ml-[-6px] w-[740px] rounded-2xl bg-others-white box-border flex flex-row items-start justify-start py-[22px] px-[23px] gap-[24px] max-w-[102%] shrink-0 border-[1px] border-solid border-greyscale-200 mq450:flex-wrap">
                  <img
                    className="h-[50px] w-[50px] rounded-81xl object-cover min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/icon-2@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center py-[11px] px-0 box-border min-w-[402px] max-w-full mq450:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[10px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-row items-center justify-start min-w-[156px] max-w-full">
                        <div className="relative leading-[150%] font-semibold">
                          Wazari Assurance
                        </div>
                      </div>
                      <Switch
                       checked={enabled}
                      onChange={setEnabled}
                      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                    >
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                     </Switch>
                    </div>
                  </div>
                </div>
                <div className="ml-[-6px] w-[740px] rounded-2xl bg-others-white box-border flex flex-row items-start justify-start py-[22px] px-[23px] gap-[24px] max-w-[102%] shrink-0 border-[1px] border-solid border-greyscale-200 mq450:flex-wrap">
                  <img
                    className="h-[50px] w-[50px] rounded-81xl object-cover min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/icon-3@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center py-[11px] px-0 box-border min-w-[402px] max-w-full mq450:min-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[10px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-row items-center justify-start min-w-[111px] max-w-full">
                        <div className="relative leading-[150%] font-semibold inline-block min-w-[111px]">{`ASAF & AFPS`}</div>
                      </div>
                      <Switch
                       checked={enabled}
                      onChange={setEnabled}
                      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                    >
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                     </Switch>
                    </div>
                  </div>
                </div>
                <div className="ml-[-6px] w-[740px] rounded-2xl bg-others-white box-border flex flex-row items-start justify-start py-[22px] px-[23px] gap-[24px] max-w-[102%] shrink-0 border-[1px] border-solid border-greyscale-200 mq450:flex-wrap mq675:overflow-x-auto">
                  <img
                    className="h-[50px] w-[50px] rounded-81xl object-cover min-h-[50px]"
                    loading="lazy"
                    alt=""
                    src="/icon-4@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center py-[11px] px-0 box-border min-w-[606px] max-w-full">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[10px] max-w-full mq450:flex-wrap">
                      <div className="flex-1 flex flex-row items-center justify-start min-w-[38px] max-w-full">
                        <div className="relative leading-[150%] font-semibold inline-block min-w-[38px]">
                          F.F.A
                        </div>
                      </div>
                      <Switch
                       checked={enabled}
                      onChange={setEnabled}
                      className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
                    >
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
                     </Switch>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[25px] box-border max-w-full">
                <div className="flex flex-row items-start justify-start gap-[11px] max-w-full mq450:flex-wrap">
                  <button className="cursor-pointer py-3.5 px-[23px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[6px] border-[1px] border-solid border-greyscale-900">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/arrownarrowleft1.svg"
                      />
                    </div>
                    <a className="relative text-base tracking-[0.3px] leading-[150%] font-body-large-bold text-greyscale-900 text-center"
                    href="./besoins"
                    >
                      Étapes précédente
                    </a>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </button>
                  <button className="cursor-pointer [border:none] py-4 px-6 bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/arrownarrowright1.svg"
                      />
                    </div>
                    <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-others-white text-center min-w-[121px]">
                      Etape suivante
                    </b>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </button>
                  
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>
      
      </div>

   );
};

export default Compagnies;
