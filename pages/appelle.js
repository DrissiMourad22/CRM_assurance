import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const Appelle = () => {
  return (
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
       <Top1 />
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
    <Navigation1 />
     
        <div className="self-stretch flex flex-row items-center justify-between py-0 px-6 box-border max-w-full gap-[0px] [row-gap:20px]">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevronleft-2.svg"
          />
          <div className="w-[1088px] flex flex-col items-start justify-start max-w-[calc(100%_-_24px)]">
            <nav className="m-0 self-stretch flex flex-row flex-wrap items-center justify-start py-0 px-6 box-border gap-[20px] max-w-full whitespace-nowrap text-left text-5xl text-greyscale-900 font-body-small-medium">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[355px] max-w-full mq700:min-w-full">
                <h2 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                  Detail Fiche
                </h2>
                <div className="self-stretch h-[22px] relative text-sm leading-[160%] font-medium text-greyscale-600 hidden">
                  Manage your Attendance
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                <div className="rounded-3xs bg-alerts-success-base flex flex-row items-center justify-center py-4 px-[22px] gap-[6px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/phone.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[120px]">
                    Appel en cours
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                <div className="rounded-3xs bg-greyscale-900 flex flex-row items-center justify-center py-4 px-6 gap-[8px]">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/message2.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[36px]">
                    SMS
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                <div className="rounded-3xs bg-greyscale-900 flex flex-row items-center justify-center py-4 px-6 gap-[6px]">
                  <img className="h-5 w-5 relative" alt="" src="/tag2.svg" />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[58px]">
                    Tarifée
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
            </nav>
          </div>
        </div>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-7 box-border max-w-full text-center text-5xl text-greyscale-900 font-body-small-medium">
          <div className="h-[104px] flex-1 rounded-2xl bg-others-white flex flex-row items-start justify-between pt-5 px-8 pb-7 box-border max-w-full gap-[20px] mq450:h-auto">
            <div className="w-[464px] flex flex-col items-start justify-start gap-[44px] max-w-[calc(100%_-_418px)] shrink-0 mq450:gap-[22px]">
              <div className="w-[315.5px] flex flex-col items-start justify-start gap-[10px]">
                <b className="relative leading-[130%] whitespace-nowrap mq450:text-lgi mq450:leading-[25px]">
                  Appel en cours 00:09:35
                </b>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[8px] text-left text-sm text-greyscale-600">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/infocircle.svg"
                    />
                  </div>
                  <div className="w-[140px] relative leading-[160%] font-medium inline-block">
                    temps total de l’appel
                  </div>
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%] inline-block text-greyscale-900 min-w-[71px]">
                    08h 00m 05s
                  </b>
                </div>
              </div>
              <div className="self-stretch h-[86px] rounded-3xs flex flex-col items-start justify-start gap-[10px] text-left text-sm">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[2px]">
                  <div className="w-[68px] relative leading-[160%] font-medium hidden">
                    Remarque
                  </div>
                  <div className="w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                    *
                  </div>
                </div>
                <div className="w-[315px] rounded-3xs box-border hidden flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap text-greyscale-500 border-[1px] border-solid border-greyscale-300">
                  <div className="h-[22px] flex-1 relative leading-[160%] inline-block">
                    Votre remarque ici
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border max-w-[calc(100%_-_484px)] shrink-0">
              <div className="flex flex-row flex-wrap items-start justify-start gap-[20.1px]">
                <button className="cursor-pointer py-[11px] pr-[21px] pl-[23px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-greyscale-900 text-center min-w-[73px]">
                    Remarque
                  </b>
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
                <button className="cursor-pointer py-[11px] pr-[29px] pl-[31px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-greyscale-900 text-center min-w-[58px]">
                    Relance
                  </b>
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
                <button className="cursor-pointer [border:none] py-[13px] pr-[18px] pl-[19px] bg-alerts-error-base rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-center min-w-[82px]">
                    Raccrocher
                  </b>
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-center text-sm text-greyscale-900 font-body-small-medium">
          <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full mq950:flex-wrap">
            <div className="w-[300px] rounded-2xl bg-others-white flex flex-col items-start justify-start p-6 box-border gap-[24px] min-w-[300px] mq700:pt-5 mq700:pb-5 mq700:box-border mq950:flex-1">
              <div className="flex flex-row items-start justify-start py-0 px-[76px] mq450:pl-5 mq450:pr-5 mq450:box-border">
                <button className="cursor-pointer [border:none] pt-[20.8px] pb-[16.2px] pr-[16.2px] pl-[21.8px] bg-primary-200 h-[100px] w-[100px] rounded-[4166.67px] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border hover:bg-powderblue">
                  <div className="relative text-22xl-7 tracking-[1.67px] leading-[63px] uppercase font-extrabold font-body-small-medium text-primary-base text-center inline-block min-w-[62px] mq925:text-14xl mq925:leading-[50px] mq450:text-6xl mq450:leading-[38px]">
                    PC
                  </div>
                </button>
              </div>
              <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                Pristia Candra
              </h3>
              <div className="self-stretch h-[22px] relative leading-[160%] text-greyscale-600 hidden">
                3D Designer
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[60px] text-right text-3xs text-alerts-success-base mq450:pl-5 mq450:pr-5 mq450:box-border">
                <div className="flex flex-row items-start justify-start gap-[12px]">
                  <div className="rounded-lg bg-primary-100 flex flex-row items-start justify-start py-1 px-8">
                    <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[39px]">
                      ACTIVE
                    </b>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-4 h-4 relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevrondown-8.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px bg-greyscale-200" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left">
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/mail-1.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[160%] font-semibold whitespace-nowrap">
                    lincoln@gmail.com
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/phone-1.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[160%] font-semibold">
                    06 59 88 26 27
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                  <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                    <img
                      className="w-5 h-5 relative"
                      loading="lazy"
                      alt=""
                      src="/global.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[160%] font-semibold whitespace-nowrap">
                    24/10/2023 à 18:25:36
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px bg-greyscale-200" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-left text-xs text-greyscale-600">
                <div className="self-stretch hidden flex-row items-center justify-start gap-[10px]">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch h-[19px] relative leading-[160%] inline-block">
                      Departement
                    </div>
                    <div className="self-stretch h-[22px] relative text-sm leading-[160%] font-semibold text-greyscale-900 inline-block">
                      Designer
                    </div>
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                  />
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[10px]">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch h-[19px] relative leading-[160%] inline-block">
                      Office
                    </div>
                    <div className="self-stretch h-[22px] relative text-sm leading-[160%] font-semibold text-greyscale-900 inline-block">
                      Unpixel Studio
                    </div>
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <div className="flex-1 flex flex-col items-start justify-center gap-[4px]">
                    <div className="self-stretch relative leading-[160%]">
                      Nom Conseiller
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[12px] text-sm text-greyscale-900">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                      <img
                        className="h-8 w-8 relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/avatarwoman4@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-center py-[9.5px] pr-5 pl-0">
                        <div className="relative leading-[160%] font-semibold inline-block min-w-[100px]">
                          Myriam Fleury
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright-2.svg"
                  />
                </div>
              </div>
              <div className="self-stretch h-12 rounded-3xs bg-greyscale-900 hidden flex-row items-center justify-center py-[21px] px-6 box-border gap-[7px] text-others-white">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                  alt=""
                />
                <b className="h-[22px] relative tracking-[0.2px] leading-[160%] inline-block">
                  Action
                </b>
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
            </div>
            <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-center justify-start p-6 box-border gap-[24px] min-w-[512px] max-w-full mq700:pt-5 mq700:pb-5 mq700:box-border mq700:min-w-full">
              <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start py-0 pr-[250px] pl-0 border-b-[1px] border-solid border-greyscale-200 mq925:pr-[125px] mq925:box-border mq450:pr-5 mq450:box-border">
                <div className="w-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                  <div className="self-stretch h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                    General
                  </div>
                </div>
                <div className="w-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                  <div className="self-stretch h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                    Tarifier
                  </div>
                </div>
                <div className="w-[113px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-[6.5px] box-border min-h-[40px]">
                  <div className="self-stretch h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                    Remarque
                  </div>
                </div>
                <div className="w-[100px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-between pt-[9px] px-0 pb-1.5 min-h-[40px] text-primary-base border-b-[2px] border-solid border-primary-base">
                  <b className="self-stretch h-[22px] relative tracking-[0.2px] leading-[160%] inline-block overflow-hidden text-ellipsis shrink-0">
                    Docs
                  </b>
                </div>
                <div className="w-[77px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                  <div className="w-[100px] h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                    Logs
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-2xl bg-others-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[16px] max-w-full text-left text-lg border-[1px] border-solid border-greyscale-200 mq700:pt-5 mq700:pb-5 mq700:box-border">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full mq700:flex-wrap">
                  <div className="flex-1 flex flex-row items-center justify-start min-w-[44px] max-w-full">
                    <div className="relative leading-[150%] font-semibold inline-block min-w-[44px]">
                      Docs
                    </div>
                  </div>
                  <img
                    className="h-6 w-6 relative"
                    loading="lazy"
                    alt=""
                    src="/fileupload.svg"
                  />
                </div>
                <div className="self-stretch h-px bg-greyscale-200" />
                <div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start gap-[16px] max-w-full text-xs">
                  <div className="self-stretch flex flex-row items-center justify-end max-w-full [row-gap:20px] mq700:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[253px] max-w-full">
                      <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 box-border gap-[10px] max-w-full text-greyscale-600">
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <b className="flex-1 relative tracking-[0.2px] leading-[160%] inline-block max-w-[calc(100%_-_24px)]">
                          Name
                        </b>
                        <img
                          className="h-3.5 w-3.5 relative"
                          alt=""
                          src="/sort.svg"
                        />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 box-border gap-[12px] max-w-full">
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/filetext.svg"
                          />
                          <div className="flex-1 relative leading-[160%] inline-block max-w-[calc(100%_-_28px)]">
                            Esential Tax 01.pdf
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 box-border gap-[12px] max-w-full">
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/filetext.svg"
                          />
                          <div className="flex-1 relative leading-[160%] inline-block max-w-[calc(100%_-_28px)]">
                            Esential Tax 02.pdf
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 box-border gap-[12px] max-w-full">
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/filetext.svg"
                          />
                          <div className="flex-1 relative leading-[160%] inline-block max-w-[calc(100%_-_28px)]">
                            Esential Tax 03.pdf
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 box-border gap-[12px] max-w-full">
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/filetext.svg"
                          />
                          <div className="flex-1 relative leading-[160%] inline-block max-w-[calc(100%_-_28px)]">
                            Esential Tax 05.pdf
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 box-border gap-[12px] max-w-full">
                          <img
                            className="h-4 w-4 relative"
                            alt=""
                            src="/filetext.svg"
                          />
                          <div className="flex-1 relative leading-[160%] inline-block max-w-[calc(100%_-_28px)]">
                            Esential Tax 01.pdf
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                    </div>
                    <div className="w-[155px] flex flex-col items-start justify-start">
                      <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px] text-greyscale-600">
                        <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                          Size
                        </b>
                        <img className="h-3.5 w-3.5 relative hidden" alt="" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                          <div className="flex-1 relative leading-[160%]">
                            1 mb
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                          <div className="flex-1 relative leading-[160%]">
                            1,5 mb
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                          <div className="flex-1 relative leading-[160%]">
                            2 mb
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                          <div className="flex-1 relative leading-[160%]">
                            2 mb
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                          <div className="flex-1 relative leading-[160%]">
                            2,5 mb
                          </div>
                          <img
                            className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                            alt=""
                          />
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                    </div>
                    <div className="w-[148px] flex flex-col items-start justify-start text-right text-greyscale-600">
                      <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-greyscale-50 overflow-hidden flex flex-row items-center justify-end py-[18.5px] px-4">
                        <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                          Action
                        </b>
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[22px] gap-[10px]">
                          <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/eye.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/filedownload.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/trash.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[22px] gap-[10px]">
                          <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/eye.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/filedownload.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/trash.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[22px] gap-[10px]">
                          <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0"
                              loading="lazy"
                              alt=""
                              src="/eye.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/filedownload.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/trash.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[22px] gap-[10px]">
                          <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0"
                              alt=""
                              src="/eye.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/filedownload.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/trash.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                      <div className="self-stretch flex flex-col items-center justify-center">
                        <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-[22px] gap-[10px]">
                          <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0"
                              alt=""
                              src="/eye.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/filedownload.svg"
                            />
                          </div>
                          <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                            <img
                              className="h-4 w-4 relative"
                              alt=""
                              src="/trash.svg"
                            />
                          </div>
                        </div>
                        <div className="self-stretch h-px bg-greyscale-200" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-between py-[9.5px] px-0 gap-[20px] mq700:flex-wrap">
                    <div className="flex flex-row items-start justify-start gap-[24px]">
                      <div className="w-8 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-greyscale-200">
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/chevronleft-3.svg"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <div className="rounded-3xs bg-greyscale-100 overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[13px]">
                          <div className="relative leading-[160%] font-semibold inline-block min-w-[6px]">
                            1
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-start justify-start">
                          <div className="self-stretch w-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[5px] px-3 box-border">
                            <div className="self-stretch h-[19px] relative leading-[160%] font-semibold inline-block">
                              2
                            </div>
                          </div>
                          <div className="self-stretch w-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[5px] px-3 box-border">
                            <div className="self-stretch h-[19px] relative leading-[160%] font-semibold inline-block">
                              3
                            </div>
                          </div>
                          <div className="self-stretch w-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[5px] px-2.5 box-border">
                            <div className="h-[19px] relative leading-[160%] font-semibold inline-block">
                              ...
                            </div>
                          </div>
                          <div className="self-stretch w-8 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[5px] px-[9px] box-border">
                            <div className="h-[19px] relative leading-[160%] font-semibold inline-block">
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
                          src="/chevronright-3.svg"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[15px] text-greyscale-600 mq450:flex-wrap">
                      <div className="relative leading-[160%] font-medium">
                        Showing 1 to 10 of 4 entries
                      </div>
                      <div className="w-[92px] rounded-lg bg-others-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[5px] px-[9px] gap-[10px] whitespace-nowrap text-greyscale-900 border-[1px] border-solid border-greyscale-200">
                        <div className="relative leading-[160%] font-medium inline-block min-w-[46px]">
                          Show 10
                        </div>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          alt=""
                          src="/chevronup.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Appelle;
