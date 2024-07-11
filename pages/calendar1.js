const calendar1 = () => {
  return (
    <div className="flex-1 bg-others-white flex flex-col items-end justify-start pt-9 px-6 pb-6 box-border relative gap-[32px] min-w-[255px] min-h-[1024px] max-w-full mq450:gap-[16px]">
            <div className="w-80 flex flex-col items-start justify-start gap-[32px] mq450:gap-[16px]">
              <h2 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                Ajouter un rappel
              </h2>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-sm">
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[220px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[91px]">
                      Date et Heure
                    </div>
                    <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                      *
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                    <div className="flex-1 relative leading-[160%] font-medium">
                      23 Mar 2023
                    </div>
                    <img
                      className="h-5 w-5 relative"
                      alt=""
                      src="/calendar.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch hidden flex-row items-end justify-start gap-[16px] mq450:flex-wrap">
                  <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px] min-w-[99px]">
                    <div className="self-stretch hidden flex-row items-start justify-start gap-[2px]">
                      <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                        Type Days
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base">
                        *
                      </div>
                    </div>
                    <div className="self-stretch h-14 rounded-3xs bg-others-white box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <div className="self-stretch flex-1 relative leading-[160%] font-medium flex items-center">
                        Single Day
                      </div>
                      <div className="h-5 w-5 relative rounded-81xl box-border border-[1px] border-solid border-greyscale-300" />
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px] min-w-[99px]">
                    <div className="self-stretch hidden flex-row items-start justify-start gap-[2px]">
                      <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                        Select Type
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base">
                        *
                      </div>
                    </div>
                    <div className="self-stretch h-14 rounded-3xs box-border flex flex-row items-start justify-start py-4 px-[19px] gap-[10px] border-[1px] border-solid border-alerts-success-base">
                      <div className="self-stretch flex-1 relative leading-[160%] font-medium flex items-center">
                        Multiple Day
                      </div>
                      <div className="h-5 w-5 relative rounded-81xl bg-seagreen">
                        <div className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.2)] rounded-981xl bg-others-white" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-end justify-start gap-[16px]">
                  <div className="w-[152px] overflow-hidden hidden flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch hidden flex-row items-start justify-start gap-[2px]">
                      <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                        Date Range
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                      <div className="h-[22px] flex-1 relative leading-[160%] font-medium inline-block">
                        01 Déc 2023
                      </div>
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/calendar-3.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch hidden flex-row items-start justify-start gap-[2px]">
                      <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                        Select Type
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <div className="flex-1 relative leading-[160%] font-medium">
                        14h30
                      </div>
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/timer-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-[88px] overflow-hidden shrink-0 hidden flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="relative leading-[160%] font-medium">
                      Note
                    </div>
                    <div className="w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                      *
                    </div>
                  </div>
                  <div className="self-stretch flex-1 rounded-3xs flex flex-row items-start justify-start py-4 px-[19px] gap-[10px] border-[1px] border-solid border-alerts-success-base">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start">
                      <div className="relative leading-[160%] font-medium">
                        I will
                      </div>
                      <div className="relative leading-[160%] text-alerts-success-base">
                        |
                      </div>
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/eyeoff.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[40px]">
                      Client
                    </div>
                    <div className="self-stretch w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                      *
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                    <input
                      className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-medium font-body-medium-regular text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[150px] p-0"
                      placeholder="Oli"
                      type="text"
                    />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/user.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch h-[19px] relative text-xs leading-[160%] font-medium text-greyscale-600 hidden">
                  Max file size : 5MB. File format : pdf, docx, png, and jpeg
                </div>
                <div className="self-stretch rounded-3xs overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[34px]">
                      Note
                    </div>
                    <div className="self-stretch w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                      *
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                    <input
                      className="w-full [border:none] [outline:none] font-body-medium-regular text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-500 text-left flex items-center min-w-[168px] p-0"
                      placeholder="Note ici"
                      type="text"
                    />
                    <img
                      className="h-5 w-5 relative hidden"
                      alt=""
                      src="/search.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="!m-[0] absolute bottom-[24px] left-[24px] bg-others-white flex flex-row items-center justify-end max-w-full">
              <div className="flex flex-row items-center justify-end gap-[20px] max-w-full mq450:flex-wrap">
                <button className="cursor-pointer py-3.5 px-[47px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-greyscale-900">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/plus.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-medium-regular text-greyscale-900 text-center min-w-[65px]">
                    Annuler
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/plus.svg"
                  />
                </button>
                <button className="cursor-pointer [border:none] py-4 px-[38px] bg-greyscale-900 rounded-3xs flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/plus.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-medium-regular text-others-white text-center min-w-[85px]">
                    Enregister
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/plus.svg"
                  />
                </button>
              </div>
            </div>
          </div>
        
  );
};

export default calendar1;
