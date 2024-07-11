import { useState } from "react";
import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";

const MesChoix2Flicitation = () => {
  const [checklist1Checked, setChecklist1Checked] = useState(true);
  return (
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
       <Top1 />
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
    <Navigation1 />

      <h1 className="m-0 absolute top-[128px] left-[304px] text-5xl leading-[130%] font-bold font-inherit inline-block w-[476px] mq450:text-lgi mq450:leading-[25px]">
        Tarification
      </h1>
      <div className="absolute top-[128px] left-[1016px] rounded-3xs w-[400px] hidden flex-col items-start justify-start gap-[10px] min-h-[56px] max-w-full">
        <div className="w-[315px] hidden flex-row items-start justify-start gap-[1px]">
          <div className="h-[22px] relative leading-[160%] font-medium inline-block">
            Title Field
          </div>
          <div className="relative leading-[160%] font-medium text-alerts-error-base">
            *
          </div>
        </div>
        <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap max-w-full text-greyscale-500 border-[1px] border-solid border-greyscale-300">
          <div className="h-[22px] flex-1 relative leading-[160%] inline-block max-w-[calc(100%_-_30px)]">
            Search what you need
          </div>
          <img className="h-5 w-5 relative" alt="" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[13px] px-[47px] bg-greyscale-900 absolute top-[115px] left-[1051px] rounded-3xs flex flex-row items-start justify-start gap-[6px]">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img className="w-[18px] h-[18px] relative" alt="" src="/tag2.svg" />
        </div>
        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-others-white text-center min-w-[51px]">
          Tarifée
        </b>
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
          alt=""
        />
      </button>
      <button className="cursor-pointer py-[11px] px-[23px] bg-[transparent] absolute top-[115px] left-[1255px] rounded-3xs flex flex-row items-start justify-start gap-[6px] border-[1px] border-solid border-greyscale-900">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-[18px] h-[18px] relative"
            alt=""
            src="/tag2-1.svg"
          />
        </div>
        <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-large-bold text-greyscale-900 text-center min-w-[72px]">
          Mes choix
        </b>
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
          alt=""
        />
      </button>
      <button className="cursor-pointer py-[11px] px-[23px] bg-[transparent] absolute top-[115px] left-[780px] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-[18px] h-[18px] relative"
            alt=""
            src="/filetext.svg"
          />
        </div>
        <b className="relative text-sm tracking-[0.2px] leading-[160%] font-body-large-bold text-greyscale-900 text-center">
          Modifier les informations
        </b>
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
          alt=""
        />
      </button>
      <div className="absolute top-[191px] left-[304px] rounded-2xl bg-others-white w-[313px] flex flex-col items-start justify-start pt-3.5 px-6 pb-[37px] box-border gap-[11px] text-xs">
        <div className="w-[103px] h-[27px] hidden" />
        <div className="w-[252px] flex flex-col items-start justify-start gap-[11px]">
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2 text-sm">
            <div className="flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/layoutlist.svg"
                />
                <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                  Partenaires
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="h-6 w-6 rounded-81xl bg-alerts-error-base overflow-hidden shrink-0 flex flex-col items-center justify-center py-px px-2 box-border">
                  <div className="relative leading-[160%] font-semibold inline-block min-w-[7px]">
                    1
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/chevronup.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[214px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[11px]">
              <div className="flex flex-row items-start justify-start gap-[9.9px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-4 h-4 relative shrink-0 [debug_commit:bf4bc93]"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="relative leading-[160%] inline-block min-w-[30px] shrink-0 [debug_commit:bf4bc93] z-[1]">
                  ASAF
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <input
                    className="accent-darkslategray m-0 w-4 h-4 relative"
                    checked={checklist1Checked}
                    type="checkbox"
                    onChange={(event) =>
                      setChecklist1Checked(event.target.checked)
                    }
                  />
                </div>
                <div className="flex-1 relative leading-[160%]">
                  ALPTIS ASSURANCES
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-4 h-4 relative"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="flex-1 relative leading-[160%]">
                  AS SOLLITION
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-4 h-4 relative"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="flex-1 relative leading-[160%]">
                  ASAF ASSTRANGES
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-4 h-4 relative"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="flex-1 relative leading-[160%]">COVERITY</div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-4 h-4 flex flex-row items-start justify-start"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="flex-1 relative leading-[160%]">
                  FOA ASSTRANGES
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <input
                    className="cursor-pointer m-0 w-4 h-4 relative"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="flex-1 relative leading-[160%]">INFOLIANF</div>
              </div>
            </div>
          </div>
          <div className="w-[214px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
            <div className="flex-1 flex flex-row items-start justify-start gap-[12px]">
              <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                <input
                  className="cursor-pointer m-0 w-4 h-4 relative"
                  type="radio"
                  name="radioGroup-1"
                />
              </div>
              <div className="flex-1 relative leading-[160%]">
                WATARLASSURANCES
              </div>
            </div>
          </div>
        </div>
        <div className="w-[214px] flex flex-row items-start justify-start py-0 px-[22px] box-border">
          <div className="flex-1 flex flex-row items-end justify-start gap-[12px]">
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-px">
              <input
                className="cursor-pointer m-0 w-4 h-4 relative"
                type="radio"
                name="radioGroup-1"
              />
            </div>
            <div className="flex-1 relative leading-[160%]">ZENTOO</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[791px] left-[304px] rounded-2xl bg-others-white w-[313px] flex flex-row items-start justify-start pt-3.5 px-6 pb-2.5 box-border gap-[16px]">
        <div className="h-[27px] w-[103px] !m-[0] absolute bottom-[-27px] left-[88px]" />
        <div className="w-[252px] rounded-3xs flex flex-row items-start justify-start py-4 px-0 box-border">
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-5 h-5 relative"
                  alt=""
                  src="/layoutlist-1.svg"
                />
              </div>
              <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                Filter par les besoins
              </b>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
            <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
              <div className="h-[22px] relative leading-[160%] font-semibold inline-block">
                1
              </div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              alt=""
              src="/chevrondown.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[592px] left-[304px] rounded-2xl bg-others-white h-[183px] flex flex-col items-start justify-start pt-3.5 px-6 pb-[53.2px] box-border gap-[32.4px]">
        <div className="w-[103px] h-[27px] hidden" />
        <div className="w-[252px] flex-1 rounded-3xs flex flex-row items-start justify-start py-4 px-0 box-border">
          <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
            <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-5 h-5 relative"
                  loading="lazy"
                  alt=""
                  src="/money.svg"
                />
              </div>
              <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                Budget
              </b>
            </div>
          </div>
          <input className="m-0 self-stretch w-6" type="checkbox" />
        </div>
        <div className="flex flex-row items-start justify-start py-0 pr-[7px] pl-px">
          <img
            className="h-[27.4px] w-[257.4px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/frame-1.svg"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-4 px-5 bg-greyscale-900 absolute top-[898px] left-[786px] rounded-3xs w-[480px] flex flex-row items-start justify-center box-border gap-[5px] max-w-full">
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img className="w-5 h-5 relative" alt="" src="/search-1.svg" />
        </div>
        <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-others-white text-center min-w-[103px]">
          Chargement
        </b>
        <img
          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
          alt=""
        />
      </button>
      <div className="absolute top-[188px] left-[636px] rounded-2xl bg-others-white box-border w-[773px] flex flex-col items-start justify-start pt-[22px] pb-3.5 pr-[7px] pl-[33px] gap-[20.4px] max-w-full text-4xs-9 text-gray-500 border-[2px] border-solid border-alerts-success-base">
        <div className="w-[773px] h-[226px] relative rounded-2xl bg-others-white box-border hidden max-w-full border-[2px] border-solid border-alerts-success-base" />
        <div className="self-stretch flex flex-row items-end justify-between gap-[20px] mq675:flex-wrap">
          <div className="w-[287.7px] flex flex-row items-start justify-start gap-[9.1px]">
            <button className="cursor-pointer [border:none] py-0 pr-[18px] pl-0 bg-[transparent] flex flex-col items-start justify-start">
              <img
                className="w-[76.5px] h-[76.5px] relative rounded-[7.62px] object-cover z-[1]"
                alt=""
                src="/thumb@2x.png"
              />
            </button>
            <div className="flex flex-col items-start justify-start gap-[7.5px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
                  Soins courants
                </div>
              </div>
              <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
                Hospitalisation
              </div>
              <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
                Dentaire
              </div>
              <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
                Optique
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <div className="self-stretch h-[67.5px] relative">
                <div className="absolute top-[7.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[47.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[27.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[67.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[7.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[47.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[27.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[67.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[7.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[47.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[27.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[67.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[7.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[47.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[27.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[67.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[7.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[47.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[27.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
                <div className="absolute top-[67.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              </div>
            </div>
          </div>
          <div className="w-[163.4px] flex flex-col items-start justify-end pt-0 px-0 pb-[3.9px] box-border text-center text-3xl-2 text-greyscale-900">
            <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
              <div className="w-[148.8px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="flex-1 relative leading-[30.5px] font-extrabold shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-lg mq450:leading-[24px]">
                  30.84
                </div>
                <div className="w-[48.2px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border ml-[-10.9px] text-2xs text-gray-500">
                  <div className="self-stretch relative leading-[17.79px] font-medium shrink-0 [debug_commit:bf4bc93] z-[2]">
                    €/mois
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3 text-left text-xs text-alerts-success-base">
                <div className="flex-1 relative leading-[12.71px] font-medium z-[1]">
                  Extrait des garanties
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[694.7px] flex flex-row items-start justify-start py-0 px-px box-border max-w-full text-2xs-9 text-black">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full">
              <div className="w-64 relative tracking-[0.05em] leading-[12.71px] uppercase font-semibold inline-block shrink-0 z-[1]">
                <p className="m-0">{`Sélectionnez un renfort de garanties `}</p>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[273px] max-w-full">
                <div className="self-stretch h-1 relative bg-whitesmoke z-[1]" />
              </div>
            </div>
            <div className="w-[589px] flex flex-row items-start justify-start py-0 px-[7px] box-border max-w-full text-xs text-greyscale-900">
              <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[1px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[187px]">
                  <div className="self-stretch flex flex-col items-start justify-start z-[1]">
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-1.5 px-4 gap-[12px]">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                        <div className="w-4 h-4 relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                      </div>
                      <div className="flex-1 relative leading-[160%]">
                        Pack Confort et Bien-Être Avantage
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                    <div className="self-stretch h-px bg-greyscale-200" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start z-[1]">
                    <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[6.5px] px-4 gap-[12px]">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                        <div className="w-4 h-4 relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-base" />
                          <img
                            className="absolute h-[66.88%] w-[66.88%] top-[16.88%] right-[16.25%] bottom-[16.25%] left-[16.88%] max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="/check-1.svg"
                          />
                        </div>
                      </div>
                      <div className="flex-1 relative leading-[160%]">
                        Pack Confort et Bien-Être Equilibre
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                    <div className="h-px w-[132px] bg-greyscale-200 hidden" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[187px]">
                  <div className="self-stretch flex flex-col items-start justify-start z-[1]">
                    <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-1.5 px-4 gap-[12px]">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                        <input
                          className="cursor-pointer m-0 w-4 h-4 relative"
                          type="radio"
                          name="radioGroup-2"
                        />
                      </div>
                      <div className="flex-1 relative leading-[160%]">
                        IJHospitalisation
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                    <div className="self-stretch h-px bg-greyscale-200" />
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start z-[1]">
                    <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-[6.5px] px-4 gap-[12px]">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                        <input
                          className="cursor-pointer m-0 w-4 h-4 relative"
                          type="radio"
                          name="radioGroup-2"
                        />
                      </div>
                      <div className="flex-1 relative leading-[160%]">
                        Pack Confort et Bien-Être Privilège
                      </div>
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                    <div className="h-px w-[132px] bg-greyscale-200 hidden" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[436px] left-[636px] rounded-2xl bg-others-white w-[773px] flex flex-row items-start justify-between pt-[24.1px] pb-[29.4px] pr-2 pl-[33px] box-border gap-[20px] max-w-full text-4xs-9 text-gray-500 mq675:flex-wrap">
        <div className="h-[130px] w-[773px] relative rounded-2xl bg-others-white hidden max-w-full" />
        <div className="w-[287.7px] flex flex-row items-start justify-start gap-[9.1px]">
          <div className="flex flex-col items-start justify-start py-0 pr-[18px] pl-0">
            <img
              className="w-[76.5px] h-[76.5px] relative rounded-[7.62px] object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/thumb@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-[7.5px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
                Soins courants
              </div>
            </div>
            <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
              Hospitalisation
            </div>
            <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
              Dentaire
            </div>
            <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
              Optique
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="self-stretch h-[67.5px] relative">
              <div className="absolute top-[7.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
        </div>
        <div className="w-[165.6px] flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0 box-border text-center text-3xl-2 text-greyscale-900">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
            <div className="w-[148.8px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
              <div className="flex-1 relative leading-[30.5px] font-extrabold shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-lg mq450:leading-[24px]">
                30.84
              </div>
              <div className="w-[48.2px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border ml-[-10.9px] text-2xs text-gray-500">
                <div className="self-stretch relative leading-[17.79px] font-medium shrink-0 [debug_commit:bf4bc93] z-[2]">
                  €/mois
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] text-left text-xs text-alerts-success-base">
              <div className="flex-1 relative leading-[12.71px] font-medium z-[1]">
                Extrait des garanties
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[588px] left-[635px] rounded-2xl bg-others-white w-[773px] flex flex-row items-start justify-between pt-[24.1px] pb-[29.4px] pr-2 pl-[33px] box-border gap-[20px] max-w-full text-4xs-9 text-gray-500 mq675:flex-wrap">
        <div className="h-[130px] w-[773px] relative rounded-2xl bg-others-white hidden max-w-full" />
        <div className="w-[287.7px] flex flex-row items-start justify-start gap-[9.1px]">
          <button className="cursor-pointer [border:none] py-0 pr-[18px] pl-0 bg-[transparent] flex flex-col items-start justify-start">
            <img
              className="w-[76.5px] h-[76.5px] relative rounded-[7.62px] object-cover z-[1]"
              alt=""
              src="/thumb@2x.png"
            />
          </button>
          <div className="flex flex-col items-start justify-start gap-[7.5px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
                Soins courants
              </div>
            </div>
            <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
              Hospitalisation
            </div>
            <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
              Dentaire
            </div>
            <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
              Optique
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="self-stretch h-[67.5px] relative">
              <div className="absolute top-[7.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
        </div>
        <div className="w-[165.6px] flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0 box-border text-center text-3xl-2 text-greyscale-900">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
            <div className="w-[148.8px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
              <div className="flex-1 relative leading-[30.5px] font-extrabold shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-lg mq450:leading-[24px]">
                30.84
              </div>
              <div className="w-[48.2px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border ml-[-10.9px] text-2xs text-gray-500">
                <div className="self-stretch relative leading-[17.79px] font-medium shrink-0 [debug_commit:bf4bc93] z-[2]">
                  €/mois
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] text-left text-xs text-alerts-success-base">
              <div className="flex-1 relative leading-[12.71px] font-medium z-[1]">
                Extrait des garanties
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[740px] left-[635px] rounded-2xl bg-others-white w-[773px] flex flex-row items-start justify-between pt-[24.1px] pb-[29.4px] pr-2 pl-[33px] box-border gap-[20px] max-w-full z-[1] text-xs mq675:flex-wrap">
        <div className="h-16 w-[460px] hidden flex-col items-center justify-center max-w-full">
          <div className="w-[132px] h-[59px] overflow-hidden shrink-0 hidden flex-row items-center justify-start p-4 box-border gap-[12px]">
            <div className="h-4 w-4 relative">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-base" />
              <img
                className="absolute h-[66.88%] w-[66.88%] top-[16.88%] right-[16.25%] bottom-[16.25%] left-[16.88%] max-w-full overflow-hidden max-h-full"
                alt=""
              />
            </div>
            <div className="flex-1 relative [text-decoration:line-through] leading-[160%]">
              Welcome and introduce new employee to the team
            </div>
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
          <div className="self-stretch h-px bg-greyscale-200" />
        </div>
        <div className="h-[130px] w-[773px] relative rounded-2xl bg-others-white hidden max-w-full" />
        <div className="w-[287.7px] flex flex-row items-start justify-start gap-[9.1px] text-4xs-9 text-gray-500">
          <button className="cursor-pointer [border:none] py-0 pr-[18px] pl-0 bg-[transparent] flex flex-col items-start justify-start">
            <img
              className="w-[76.5px] h-[76.5px] relative rounded-[7.62px] object-cover z-[1]"
              alt=""
              src="/thumb@2x.png"
            />
          </button>
          <div className="flex flex-col items-start justify-start gap-[7.5px]">
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
              <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
                Soins courants
              </div>
            </div>
            <div className="relative leading-[12.71px] font-medium inline-block min-w-[68.2px] z-[1]">
              Hospitalisation
            </div>
            <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
              Dentaire
            </div>
            <div className="w-[68.2px] relative leading-[12.71px] font-medium inline-block z-[1]">
              Optique
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
            <div className="self-stretch h-[67.5px] relative">
              <div className="absolute top-[7.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[0px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[22.2px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[44.5px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[44.5px] rounded-[13.15px] bg-black w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[66.7px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[7.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[47.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[27.4px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
              <div className="absolute top-[67.3px] left-[88.9px] rounded-[13.15px] bg-gainsboro w-[7.4px] h-[15.8px] [transform:_rotate(-89.4deg)] [transform-origin:0_0] z-[1]" />
            </div>
          </div>
        </div>
        <div className="w-[165.6px] flex flex-col items-start justify-start pt-[8.6px] px-0 pb-0 box-border text-center text-3xl-2">
          <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
            <div className="w-[148.8px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border">
              <div className="flex-1 relative leading-[30.5px] font-extrabold shrink-0 [debug_commit:bf4bc93] z-[1] mq450:text-lg mq450:leading-[24px]">
                30.84
              </div>
              <div className="w-[48.2px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border ml-[-10.9px] text-2xs text-gray-500">
                <div className="self-stretch relative leading-[17.79px] font-medium shrink-0 [debug_commit:bf4bc93] z-[2]">
                  €/mois
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px] text-left text-xs text-alerts-success-base">
              <div className="flex-1 relative leading-[12.71px] font-medium z-[1]">
                Extrait des garanties
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="absolute top-[0px] left-[0px] bg-transparant-black-50 w-full overflow-hidden flex flex-row items-start justify-center py-[299.5px] px-5 box-border max-w-full h-full z-[3] text-center text-13xl text-greyscale-900 font-body-large-bold">
        <div className="w-[500px] rounded-2xl bg-others-white flex flex-col items-start justify-start pt-[50px] px-8 pb-8 box-border gap-[32px] max-w-full mq675:gap-[16px]">
          <div className="self-stretch flex flex-row items-start justify-center">
            <div className="h-[140px] flex flex-col items-end justify-start pt-[19.8px] px-[30px] pb-[9.4px] box-border gap-[3.9px]">
              <div className="mt-[-23.700000000000045px] w-[179.4px] flex flex-row items-start justify-end py-0 px-[30px] box-border">
                <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
                  <div className="flex flex-col items-start justify-end pt-0 pb-[4.7px] pr-[27px] pl-0">
                    <img
                      className="w-[10.1px] h-[15.1px] relative"
                      alt=""
                      src="/ornament.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[5.8px]">
                    <img
                      className="w-[10.1px] h-[10.1px] relative"
                      alt=""
                      src="/ornament-1.svg"
                    />
                  </div>
                  <img
                    className="h-[10.1px] w-[11.8px] relative"
                    alt=""
                    src="/ornament-2.svg"
                  />
                </div>
              </div>
              <div className="w-[200.7px] flex flex-row items-start justify-start relative">
                <img
                  className="h-[11.5px] w-[16.1px] absolute !m-[0] right-[24.3px] bottom-[3.9px] object-contain"
                  alt=""
                  src="/ornament-3@2x.png"
                />
                <div className="flex-1 flex flex-row items-start justify-start gap-[17.9px]">
                  <div className="flex-1 flex flex-row items-start justify-start relative">
                    <img
                      className="h-12 w-[50.1px] absolute !m-[0] top-[-25.5px] left-[-13.9px] object-contain"
                      loading="lazy"
                      alt=""
                      src="/ornament-4@2x.png"
                    />
                    <div className="flex-1 flex flex-row items-end justify-start gap-[10.1px]">
                      <div className="flex flex-col items-end justify-start gap-[35.8px]">
                        <div className="flex flex-row items-start justify-end py-0 pr-[18px] pl-0">
                          <img
                            className="h-[19.2px] w-[20.2px] relative shrink-0 [debug_commit:bf4bc93]"
                            loading="lazy"
                            alt=""
                            src="/ornament-5.svg"
                          />
                        </div>
                        <img
                          className="w-[19.5px] h-[14.6px] relative shrink-0 [debug_commit:bf4bc93]"
                          alt=""
                          src="/ornament-6.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[10.8px]">
                        <div className="w-[100px] h-[100px] rounded-81xl bg-primary-base flex flex-row items-start justify-start p-5 box-border">
                          <button className="cursor-pointer [border:none] p-2.5 bg-others-white h-[60px] w-[60px] shadow-[0px_20px_40px_rgba(0,_0,_0,_0.3)] rounded-81xl flex flex-row items-center justify-center box-border">
                            <img
                              className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                              alt=""
                              src="/check-3.svg"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[13.2px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[4.3px]">
                      <img
                        className="h-[16.8px] w-[16.8px] relative shrink-0 [debug_commit:bf4bc93]"
                        alt=""
                        src="/ornament-7.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-[29.4px] px-0 pb-0">
                        <div className="w-[13.3px] h-[28.4px] relative shrink-0 [debug_commit:bf4bc93]">
                          <img
                            className="absolute top-[0px] left-[1.5px] w-[11.8px] h-[11.8px]"
                            alt=""
                            src="/ornament-8.svg"
                          />
                          <img
                            className="absolute top-[23.4px] left-[0px] w-[5px] h-[5px]"
                            alt=""
                            src="/ornament-9.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <h1 className="m-0 self-stretch relative text-inherit leading-[125%] font-bold font-inherit mq450:text-lgi mq450:leading-[24px] mq750:text-[26px] mq750:leading-[32px]">
              Devis envoyer
            </h1>
            <h3 className="m-0 self-stretch relative text-lg leading-[150%] font-normal font-inherit">
              Votre devis a bien ete envoyé
            </h3>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-5 bg-greyscale-900 self-stretch rounded-3xs flex flex-row items-start justify-center gap-[8px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
            <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-others-white text-center min-w-[119px]">
              Page d’accueil
            </b>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
          </button>
        </div>
        
     
    
    </main>
    </main>

    </div>

     
  );
};

export default MesChoix2Flicitation;
