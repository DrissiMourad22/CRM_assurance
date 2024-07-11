import { useState } from "react";
import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const Besoins = () => {
  const [checkIconChecked, setCheckIconChecked] = useState(true);
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

        <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
          <form className="m-0 flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full">
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
                  <b className="relative text-sm tracking-[0.07px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Informations Assuré
                  </b>
                </div>
                <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                    src="/check-11.svg"
                  />
                  <b className="flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Informations conjoint
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                    src="/check-11.svg"
                  />
                  <b className="flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Informations enfants
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                    src="/chevronright.svg"
                  />
                  <b className="flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Besoins
                  </b>
                </div>
                <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                    src="/chevronright.svg"
                  />
                  <b className="flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Compagnies
                  </b>
                </div>
                <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                  <b className="self-stretch flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Permission
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                  <b className="self-stretch flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Integration
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                  <b className="self-stretch flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Subscription
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                  <b className="self-stretch flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Password
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
                  <b className="self-stretch flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-left">
                    Notification
                  </b>
                </div>
                <div className="h-6 w-[60px] flex flex-row items-start justify-start gap-[12px]">
                  <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                    <div className="relative text-sm leading-[160%] font-semibold font-body-large-bold text-others-white text-center">
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
            <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-start pt-6 px-6 pb-[29px] box-border gap-[24px] min-w-[504px] max-w-full mq450:min-w-full mq675:pt-5 mq675:pb-5 mq675:box-border">
              <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold font-body-large-bold text-greyscale-900 text-left mq750:text-base mq750:leading-[22px]">
                Besoins
              </h3>
              <div className="w-[259px] hidden flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block">
                    Title Field
                  </div>
                  <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                  <div className="h-[22px] flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block">
                    Applicant Tracking System
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                  />
                </div>
              </div>
              <div className="self-stretch h-px bg-greyscale-200" />
              <div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start pt-5 px-6 pb-[31px] box-border gap-[45px] max-w-full mq450:pb-5 mq450:box-border mq675:gap-[22px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left">
                      date d'effet du contrat
                    </div>
                    <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                      *
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300">
                    <div className="flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block max-w-[calc(100%_-_30px)]">
                      12/12/2023
                    </div>
                    <img
                      className="h-5 w-5 relative"
                      alt=""
                      src="/calendar-1.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                    <b className="w-[153px] relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-greyscale-9001 text-left">
                      Soins médicaux
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq675:flex-wrap">
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[37px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[52px]">
                          Minime
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-9 bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[54px]">
                          Modéré
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[39px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[48px]">
                          Moyen
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 px-12 bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[29px]">
                          Fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 pr-[31px] pl-8 bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[62px]">
                          Très fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                    <b className="w-[153px] relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-greyscale-9001 text-left">
                      Hospitalisation
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq675:flex-wrap">
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[37px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[52px]">
                          Minime
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-9 bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[54px]">
                          Modéré
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 pr-[38px] pl-[39px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[48px]">
                          Moyen
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 px-12 bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[29px]">
                          Fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 pr-[31px] pl-8 bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[62px]">
                          Très fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                    <b className="w-[153px] relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-greyscale-9001 text-left">
                      Dentaire
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq675:flex-wrap">
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[37px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[52px]">
                          Minime
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-9 bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[54px]">
                          Modéré
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[39px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[48px]">
                          Moyen
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[49px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[29px]">
                          Fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 pr-[31px] pl-8 bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[62px]">
                          Très fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                    <b className="w-[153px] relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-greyscale-9001 text-left">
                      Optique
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq675:flex-wrap">
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[37px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[52px]">
                          Minime
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-9 bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[54px]">
                          Modéré
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer [border:none] py-[11.5px] px-[39px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[48px]">
                          Moyen
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 px-12 bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[29px]">
                          Fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
                      <button className="cursor-pointer py-2.5 pr-[31px] pl-8 bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[62px]">
                          Très fort
                        </b>
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </button>
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
                        src="/arrownarrowleft.svg"
                      />
                    </div>
                    <a className="relative text-base tracking-[0.3px] leading-[150%] font-body-large-bold text-greyscale-900 text-center"
                    href="./informations-enfants"
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
                        src="/arrownarrowright.svg"
                      />
                    </div>
                    <a className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-others-white text-center min-w-[121px]"
                    href="./compagnies"
                    >
                      Etape suivante
                    </a>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
};

export default Besoins;
