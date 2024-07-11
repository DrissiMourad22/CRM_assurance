import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const Contrat = () => {
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
                <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-[19px] mq450:leading-[25px]">
                  Contrat
                </h1>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Liste des contrats
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
                    src="/plus.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] py-4 px-6 bg-greyscale-900 rounded-3xs flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/plus.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] font-body-small-medium text-others-white text-center">{`Ajouter une client `}</b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/plus.svg"
                  />
                </button>
              </div>
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
                    placeholder="Nom et Prénom ou Numéro Contrat"
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
              <div className="flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                    Title Field
                  </div>
                  <div className="relative leading-[160%] font-medium text-alerts-error-base">
                    *
                  </div>
                </div>
                <div className="rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                  <div className="relative leading-[160%] font-medium inline-block min-w-[80px]">
                    Assurance
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
                    src="/chevrondown-9.svg"
                  />
                </div>
              </div>
            </div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="w-px hidden flex-col items-start justify-start">
              <div className="self-stretch h-4 relative leading-[160%] hidden">
                Dec
              </div>
            </div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="w-px hidden flex-col items-start justify-start">
              <div className="self-stretch h-4 relative leading-[160%] hidden">
                Dec
              </div>
            </div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <img
              className="w-4 h-4 relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/chevrondown.svg"
            />
            <div className="w-[36.1px] relative leading-[160%] hidden">Dec</div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px] text-xs text-greyscale-600">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[226px] max-w-full text-center text-3xs">
                <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start py-[18.5px] px-4 gap-[10px] text-left text-xs mq450:flex-wrap">
                  <input className="m-0 h-[17.5px] w-4" type="checkbox" />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%] inline-block min-w-[76px]">
                    Numéro Contrat
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 relative"
                      alt=""
                      src="/sort.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-alerts-error-base">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-alerts-error-light overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #52173
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-greyscale-200 overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #70032
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-primary-base">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-primary-200 overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #70032
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-secondary-base">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-secondary-200 overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #70032
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-alerts-error-base">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-alerts-error-light overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #70032
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-greyscale-200 overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #70032
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-secondary-base">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-secondary-200 overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #70032
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-primary-base">
                  <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-[19.5px] px-4 gap-[12px] mq450:flex-wrap">
                    <input
                      className="cursor-pointer m-0 h-5 w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border"
                      type="radio"
                      name="radioGroup-1"
                    />
                    <div className="h-6 w-6 relative rounded-981xl bg-primary-200 overflow-hidden shrink-0">
                      <div className="absolute top-[5px] left-[5px] tracking-[0.4px] leading-[150%] uppercase font-extrabold hidden">
                        ES
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[164px] text-left text-xs text-greyscale-900">
                      <div className="self-stretch flex flex-row items-start justify-start">
                        <div className="flex-1 relative leading-[160%] font-medium">
                          #526272
                        </div>
                        <div className="self-stretch w-[36.1px] relative text-3xs leading-[160%] text-greyscale-500 hidden items-center">
                          #70032
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
              </div>
              <div className="w-36 flex flex-col items-start justify-start z-[1]">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px]">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Situation
                  </b>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/sort-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4">
                    <button className="cursor-pointer [border:none] py-1 px-2 bg-others-orange rounded-md flex flex-row items-center justify-center hover:bg-chocolate">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[37px]">
                        Résilié
                      </b>
                    </button>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4">
                    <button className="cursor-pointer [border:none] py-1 px-[9px] bg-alerts-error-base rounded-md flex flex-row items-center justify-center hover:bg-crimson">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[58px]">
                        Annulation
                      </b>
                    </button>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4">
                    <button className="cursor-pointer [border:none] py-1 px-[9px] bg-alerts-success-base rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumseagreen">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[45px]">
                        En cours
                      </b>
                    </button>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4">
                    <button className="cursor-pointer [border:none] py-1 px-2 bg-alerts-success-base rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumseagreen">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[48px]">
                        En Cours
                      </b>
                    </button>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <button className="cursor-pointer [border:none] py-1 px-2 bg-alerts-success-base rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumseagreen">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[48px]">
                        En Cours
                      </b>
                    </button>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <button className="cursor-pointer [border:none] py-1 px-2 bg-alerts-success-base rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumseagreen">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[48px]">
                        En Cours
                      </b>
                    </button>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <button className="cursor-pointer [border:none] py-1 px-2 bg-alerts-success-base rounded-md flex flex-row items-center justify-center whitespace-nowrap hover:bg-mediumseagreen">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[48px]">
                        En Cours
                      </b>
                    </button>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <button className="cursor-pointer [border:none] py-1 px-2 bg-others-orange rounded-md flex flex-row items-center justify-center hover:bg-chocolate">
                      <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[37px]">
                        Résilié
                      </b>
                    </button>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
              </div>
              <div className="w-[137px] flex flex-col items-start justify-start z-[2] text-greyscale-900">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px] whitespace-nowrap text-greyscale-600">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Nom client
                  </b>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/sort-2.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      Emma Smith
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
              </div>
              <div className="w-[137px] flex flex-col items-start justify-start z-[3] text-greyscale-900">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[9px] px-4 gap-[10px] text-greyscale-600">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Date Production
                  </b>
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/sort-3.svg"
                  />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <div className="flex-1 relative leading-[160%]">
                      14 Dec 2023
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
              </div>
              <div className="w-[155px] flex flex-col items-start justify-start gap-[18.9px] text-center text-3xs">
                <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start py-[18.5px] px-4 gap-[10px] z-[4] text-left text-xs">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Conseiller
                  </b>
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <img
                      className="w-3.5 h-3.5 relative"
                      alt=""
                      src="/sort-4.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="h-6 w-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                      <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                        JL
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-left text-xs text-greyscale-900">
                      <div className="self-stretch relative leading-[160%] font-medium">
                        Jennifer Law
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <div className="w-6 h-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                        <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                          JL
                        </div>
                      </div>
                    </div>
                    <div className="h-[27px] flex-1 relative text-xs leading-[160%] font-medium text-greyscale-900 text-left flex items-center">
                      Jennifer Law
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <div className="w-6 h-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                        <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                          JL
                        </div>
                      </div>
                    </div>
                    <div className="h-[27px] flex-1 relative text-xs leading-[160%] font-medium text-greyscale-900 text-left flex items-center">
                      Jennifer Law
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                      <div className="w-6 h-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                        <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                          JL
                        </div>
                      </div>
                    </div>
                    <div className="h-[27px] flex-1 relative text-xs leading-[160%] font-medium text-greyscale-900 text-left flex items-center">
                      Jennifer Law
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="h-6 w-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                      <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                        JL
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-left text-xs text-greyscale-900">
                      <div className="self-stretch relative leading-[160%] font-medium">
                        Jennifer Law
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="h-6 w-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                      <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                        JL
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-left text-xs text-greyscale-900">
                      <div className="self-stretch relative leading-[160%] font-medium">
                        Jennifer Law
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="h-6 w-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                      <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                        JL
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-left text-xs text-greyscale-900">
                      <div className="self-stretch relative leading-[160%] font-medium">
                        Jennifer Law
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-4">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
                    <div className="h-6 w-6 rounded-981xl bg-greyscale-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[5px] pl-[7px] box-border">
                      <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[12px]">
                        JL
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 text-left text-xs text-greyscale-900">
                      <div className="self-stretch relative leading-[160%] font-medium">
                        Jennifer Law
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-px bg-greyscale-200 z-[4]" />
              </div>
              <div className="w-[146px] flex flex-col items-start justify-start z-[5] text-right">
                <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-greyscale-50 overflow-hidden flex flex-row items-center justify-end py-[18.5px] px-4">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Action
                  </b>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="self-stretch flex flex-col items-center justify-center">
                  <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[60px] gap-[10px]">
                    <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/eye.svg"
                      />
                    </div>
                    <div className="h-[30px] rounded-lg bg-others-blue hidden flex-row items-center justify-center py-2.5 px-[7px] box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/edit.svg"
                      />
                    </div>
                    <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                      <img
                        className="h-4 w-4 relative"
                        loading="lazy"
                        alt=""
                        src="/trash.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px] text-xs text-greyscale-900 mq675:flex-wrap mq675:justify-center">
              <div className="w-[272px] flex flex-row items-start justify-start gap-[24px]">
                <div className="w-8 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-greyscale-200">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronleft-2.svg"
                  />
                </div>
                <div className="flex-1 flex flex-row items-start justify-start">
                  <div className="rounded-3xs bg-greyscale-100 overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[13px]">
                    <div className="relative leading-[160%] font-semibold inline-block min-w-[6px]">
                      1
                    </div>
                  </div>
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-3">
                      <div className="relative leading-[160%] font-semibold inline-block min-w-[8px]">
                        2
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[11px]">
                      <div className="relative leading-[160%] font-semibold inline-block min-w-[8px]">
                        3
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-2.5">
                      <div className="relative leading-[160%] font-semibold inline-block min-w-[11px]">
                        ...
                      </div>
                    </div>
                    <div className="flex-1 overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[9px]">
                      <div className="relative leading-[160%] font-semibold inline-block min-w-[13px]">
                        10
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-8 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-greyscale-200">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-[15px] text-greyscale-600">
                <div className="relative leading-[160%] font-medium">
                  Showing 1 to 8 of 50 entries
                </div>
                <div className="w-[87px] rounded-lg bg-others-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[5px] px-[9px] gap-[10px] whitespace-nowrap text-greyscale-900 border-[1px] border-solid border-greyscale-200">
                  <div className="relative leading-[160%] font-medium inline-block min-w-[41px]">
                    Show 8
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronup.svg"
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

export default Contrat;
