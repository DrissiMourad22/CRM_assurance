const Remarque = () => {
    return (
      <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-base text-others-white font-body-small-medium mq925:pl-5 mq925:pr-5 mq925:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq925:hidden mq925:pt-5 mq925:pb-5 mq925:box-border">
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[373px] gap-[24px] mq925:pb-[242px] mq925:box-border mq450:pb-[157px] mq450:box-border">
        <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-3 px-0 gap-[20px]">
          <div className="flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-6 w-[25.7px] relative"
              loading="lazy"
              alt=""
              src="/boolean-operator.svg"
            />
            <img className="h-[18.2px] w-[121.2px] relative hidden" alt="" />
          </div>
          <div className="flex flex-row items-start justify-start">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
              alt=""
              src="/chevronleft.svg"
            />
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1] ml-[-5px]"
              alt=""
              src="/chevronleft.svg"
            />
          </div>
        </div>
        <div className="self-stretch shadow-[0px_10px_30px_rgba(12,_175,_96,_0.2)] rounded-3xs bg-alerts-success-base flex flex-row items-start justify-start py-4 px-5">
          <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
            
            <b className="flex-1 relative tracking-[0.3px] leading-[150%]">
              Dashboard
            </b>
            <img
              className="h-6 w-6 relative min-h-[24px]"
              alt=""
              src="/layoutgrid.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-sm text-greyscale-900">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/users.svg"
                />
                <a
                  className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold text-[inherit] [text-decoration:none]"
                  href="./"
                  target="_blank"
                >
                  Clients
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                  <div className="relative leading-[160%] font-semibold">
                    8
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
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/clipboardlist.svg"
                />
                <a
                  className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold text-[inherit] [text-decoration:none]"
                  href="./fiche"
                  target="_blank"
                >
                  Fiches
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                  <div className="relative leading-[160%] font-semibold">
                    8
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
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img className="h-5 w-5 relative" alt="" src="/timer.svg" />
                <a
                  className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold text-[inherit] [text-decoration:none]"
                  href="./devis"
                  target="_blank"
                >
                  Devis
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                  <div className="relative leading-[160%] font-semibold">
                    8
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
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/calendar.svg"
                />
                <a
                  className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold text-[inherit] [text-decoration:none]"
                  href="./contrat"
                  target="_blank"
                >
                  Contrat
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                  <div className="relative leading-[160%] font-semibold">
                    8
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
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-5 w-5 relative"
                  alt=""
                  src="/cardsend.svg"
                />
                <a
                  className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold text-[inherit] [text-decoration:none]"
                  href="./calendar"
                  target="_blank"
                >
                  Calendar
                </a>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                  <div className="relative leading-[160%] font-semibold">
                    8
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
          <div className="self-stretch hidden flex-col items-start justify-start">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="h-[22px] flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img className="h-5 w-5 relative" alt="" />
                <b className="self-stretch flex-1 relative tracking-[0.2px] leading-[160%]">
                  Performance
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                  <div className="relative leading-[160%] font-semibold">
                    8
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="self-stretch hidden flex-col items-start justify-start">
            <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
              <div className="h-[22px] flex-1 flex flex-row items-center justify-start gap-[10px]">
                <img className="h-5 w-5 relative" alt="" />
                <b className="self-stretch flex-1 relative tracking-[0.2px] leading-[160%]">
                  Recruitment
                </b>
              </div>
              <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
                <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
                  <div className="relative leading-[160%] font-semibold">
                    8
                  </div>
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[171px] flex flex-col items-start justify-start text-sm text-greyscale-900">
        <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
          <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/questioncircleoutlined.svg"
            />
            <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
              Help Center
            </b>
          </div>
          <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
            <div className="h-6 w-6 rounded-81xl bg-alerts-error-base overflow-hidden shrink-0 flex flex-col items-center justify-center py-px px-[7.5px] box-border">
              <div className="relative leading-[160%] font-semibold inline-block min-w-[9px]">
                8
              </div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
              alt=""
            />
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
          <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/settings.svg"
            />
            <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
              Setting
            </b>
          </div>
          <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
            <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
              <div className="relative leading-[160%] font-semibold">8</div>
            </div>
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-4 px-0 pb-0 text-xs text-greyscale-500">
          <div className="rounded-81xl bg-greyscale-100 flex flex-row items-center justify-center p-1.5 gap-[4px]">
            <button className="cursor-pointer [border:none] py-1.5 px-[22.5px] bg-others-white shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] rounded-81xl overflow-hidden flex flex-row items-center justify-center gap-[8px] hover:bg-gainsboro-100">
              <img className="h-4 w-4 relative" alt="" src="/sun.svg" />
              <b className="relative text-xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-greyscale-900 text-left min-w-[31px]">
                Light
              </b>
            </button>
            <div className="rounded-81xl flex flex-row items-center justify-center py-1.5 px-6 gap-[8px]">
              <img
                className="h-4 w-4 relative"
                loading="lazy"
                alt=""
                src="/moon.svg"
              />
              <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[28px]">
                Dark
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-[calc(100%_-_280px)] mq700:gap-[16px] mq925:max-w-full">
      <section className="self-stretch bg-others-white flex flex-row items-start justify-end pt-8 px-8 pb-[30px] gap-[30px] border-b-[1px] border-solid border-greyscale-300 mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="w-6 h-6 relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              loading="lazy"
              alt=""
              src="/mail.svg"
            />
            <div className="absolute top-[0px] left-[16px] rounded-xl bg-alerts-error-base box-border w-3 h-3 overflow-hidden z-[1] border-[2px] border-solid border-others-white" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="w-6 h-6 relative">
            <img
              className="absolute top-[0px] left-[0px] w-full h-full overflow-hidden"
              loading="lazy"
              alt=""
              src="/message.svg"
            />
            <div className="absolute top-[0px] left-[16px] rounded-xl bg-alerts-error-base box-border w-3 h-3 overflow-hidden z-[1] border-[2px] border-solid border-others-white" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img
            className="h-8 w-8 relative object-cover"
            loading="lazy"
            alt=""
            src="/avatarwoman1@2x.png"
          />
          <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
            <img
              className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/chevrondown-7.svg"
            />
          </div>
        </div>
      </section>
          <div className="self-stretch flex flex-row items-center justify-between py-px px-6 box-border gap-[0px] [row-gap:20px] max-w-full">
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/chevronleft-2.svg"
            />
            <div className="flex flex-col items-start justify-start max-w-[calc(100%_-_24px)]">
              <nav className="m-0 w-[1088px] overflow-x-auto flex flex-row items-center justify-start py-0 px-6 box-border gap-[20px] max-w-full text-left text-5xl text-greyscale-900 font-body-small-medium">
                <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
                  <h2 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                    Detail Fiche
                  </h2>
                  <div className="self-stretch h-[22px] relative text-sm leading-[160%] font-medium text-greyscale-600 hidden">
                    Manage your Attendance
                  </div>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                  <div className="rounded-3xs bg-greyscale-900 flex flex-row items-center justify-center py-4 px-[25px] gap-[8px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/phone.svg"
                    />
                    <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[63px]">
                      Appeler
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
                      src="/message21.svg"
                    />
                    <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[72px]">
                      Message
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
          <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-center text-sm text-others-white font-body-small-medium">
            <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full mq950:flex-wrap">
              <div className="w-[300px] rounded-2xl bg-others-white flex flex-col items-end justify-start pt-1 pb-[30px] pr-6 pl-2.5 box-border gap-[24px] min-w-[300px] mq950:flex-1">
                <div className="self-stretch flex flex-row items-start justify-start text-right text-3xs">
                  <div className="w-[190px] flex flex-col items-start justify-start gap-[4px]">
                    <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[52px]">
                      OBSÈQUS
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-end">
                      <button className="cursor-pointer [border:none] pt-[20.8px] pb-[16.2px] pr-[16.2px] pl-[21.8px] bg-primary-200 h-[100px] w-[100px] rounded-[4166.67px] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border hover:bg-powderblue">
                        <div className="relative text-22xl-7 tracking-[1.67px] leading-[63px] uppercase font-extrabold font-body-small-medium text-primary-base text-center inline-block min-w-[62px] mq925:text-14xl mq925:leading-[50px] mq450:text-6xl mq450:leading-[38px]">
                          PC
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[252px] relative leading-[160%] text-greyscale-600 hidden">
                  3D Designer
                </div>
                <h3 className="m-0 w-[252px] relative text-xl leading-[140%] font-bold font-inherit text-greyscale-900 inline-block mq450:text-base mq450:leading-[22px]">
                  Pristia Candra
                </h3>
                <div className="flex flex-row items-start justify-end py-0 px-[60px] text-right text-3xs text-alerts-success-base mq450:pl-5 mq450:pr-5 mq450:box-border">
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
                        src="/chevrondown-81.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[252px] h-px bg-greyscale-200" />
                <div className="w-[252px] flex flex-col items-start justify-start gap-[16px] text-left text-greyscale-900">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                    <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                      <img
                        className="w-5 h-5 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/mail-11.svg"
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
                        src="/phone-11.svg"
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
                        src="/global1.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[160%] font-semibold whitespace-nowrap">
                      24/10/2023 à 18:25:36
                    </div>
                  </div>
                </div>
                <div className="w-[252px] h-12 rounded-3xs bg-greyscale-900 hidden flex-row items-center justify-center py-[21px] px-6 box-border gap-[7px]">
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
                <div className="w-[255px] flex flex-col items-end justify-start pt-0 px-0 pb-[9px] box-border gap-[16px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                      <div className="h-px flex-1 bg-greyscale-200" />
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[12px]">
                      <button className="cursor-pointer [border:none] py-1 px-[9px] bg-primary-100 rounded-md flex flex-row items-start justify-start hover:bg-gainsboro-200">
                        <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-greyscale-900 text-right min-w-[30px]">
                          AUTO
                        </b>
                      </button>
                      <button className="cursor-pointer [border:none] py-1 px-[9px] bg-primary-base rounded-md flex flex-row items-start justify-start hover:bg-mediumaquamarine-100">
                        <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-right min-w-[36px]">
                          SANTÈ
                        </b>
                      </button>
                      <div className="flex flex-row items-start justify-start gap-[6px]">
                        <button className="cursor-pointer [border:none] py-1 px-2 bg-primary-100 rounded-md flex flex-row items-start justify-start hover:bg-gainsboro-200">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-greyscale-900 text-right min-w-[59px]">
                            OBSÈQUES
                          </b>
                        </button>
                        <button className="cursor-pointer [border:none] py-1 px-[9px] bg-primary-100 rounded-md flex flex-row items-start justify-start hover:bg-gainsboro-200">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-greyscale-900 text-right min-w-[22px]">
                            GAV
                          </b>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                </div>
                <div className="w-[252px] flex flex-col items-start justify-start gap-[16px] text-left text-xs text-greyscale-600">
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
                        <div className="flex-1 flex flex-col items-start justify-center py-[5px] pr-5 pl-0">
                          <div className="w-[154px] h-[31px] relative leading-[160%] font-semibold inline-block">
                            <p className="m-0 whitespace-pre-wrap">{`Myriam Fleury  `}</p>
                            <p className="m-0 text-6xs text-mediumseagreen">
                              Santé
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/chevronright-21.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-center justify-start p-6 box-border gap-[24px] min-w-[512px] max-w-full text-greyscale-900 mq700:min-w-full">
                <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start py-0 pr-[150px] pl-0 border-b-[1px] border-solid border-greyscale-200 mq925:pr-[75px] mq925:box-border mq450:pr-5 mq450:box-border">
                  <div className="w-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                    <div className="self-stretch h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                      General
                    </div>
                  </div>
                  <div className="w-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                    <div className="self-stretch h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                      Devis
                    </div>
                  </div>
                  <div className="w-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                    <div className="self-stretch h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                      Contrat
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] pt-[9px] px-[6.5px] pb-1.5 bg-[transparent] w-[113px] box-border overflow-hidden shrink-0 flex flex-col items-center justify-between min-h-[40px] border-b-[2px] border-solid border-primary-base hover:bg-mediumaquamarine-200">
                    <b className="self-stretch h-[22px] relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-primary-base text-center overflow-hidden text-ellipsis shrink-0">
                      Remarque
                    </b>
                  </button>
                  <div className="w-[100px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                    <div className="self-stretch h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                      Docs
                    </div>
                  </div>
                  <div className="w-[77px] overflow-hidden shrink-0 flex flex-col items-center justify-between py-[9px] px-0 box-border min-h-[40px]">
                    <div className="w-[100px] h-[22px] relative leading-[160%] font-semibold inline-block overflow-hidden text-ellipsis shrink-0">
                      Logs
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-others-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[16px] max-w-full text-left text-lg border-[1px] border-solid border-greyscale-200">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] max-w-full mq700:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start min-w-[91px] max-w-full">
                      <div className="relative leading-[150%] font-semibold inline-block min-w-[91px]">
                        Remarque
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative"
                      loading="lazy"
                      alt=""
                      src="/edit.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                  <div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start max-w-full text-sm">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[12px] max-w-full mq700:flex-wrap">
                      <img
                        className="h-10 w-10 relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/avatarwoman1-1@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[416px] max-w-full mq700:min-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[432px] pl-0 gap-[2px] mq700:pr-[216px] mq700:box-border mq925:flex-wrap mq450:pr-5 mq450:box-border">
                          <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[83px]">
                            Pixel Office
                          </b>
                          <div className="relative leading-[160%] inline-block min-w-[123px] whitespace-nowrap">
                            Refus de Repondre
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-xs text-greyscale-500">
                          <div className="relative leading-[160%] font-medium inline-block min-w-[107px] whitespace-nowrap">
                            18/02/2020 à 18:25
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start max-w-full text-xs">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start gap-[12px] max-w-full mq700:flex-wrap">
                      <img
                        className="h-10 w-10 relative object-cover"
                        loading="lazy"
                        alt=""
                        src="/avatarwoman2@2x.png"
                      />
                      <div className="flex-1 flex flex-col items-start justify-start min-w-[416px] max-w-full mq700:min-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[411px] pl-0 gap-[2px] text-sm mq700:pr-[205px] mq700:box-border mq925:flex-wrap mq450:pr-5 mq450:box-border">
                          <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[104px]">
                            Zoe Alexander
                          </b>
                          <div className="relative leading-[160%] inline-block min-w-[123px] whitespace-nowrap">
                            Refus de Repondre
                          </div>
                        </div>
                        <div className="self-stretch hidden flex-row items-start justify-start text-greyscale-600">
                          <div className="relative leading-[160%] font-medium">
                            Reason
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-greyscale-500">
                          <div className="relative leading-[160%] font-medium inline-block min-w-[107px] whitespace-nowrap">
                            18/02/2020 à 18:25
                          </div>
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
  
  export default Remarque;
  