const Message = () => {
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
        <div className="absolute top-[0px] left-[280px] bg-others-white box-border w-[1160px] flex flex-row flex-wrap items-start justify-start pt-6 px-8 pb-[22px] gap-[36px] max-w-full text-left text-greyscale-500 border-b-[1px] border-solid border-greyscale-300">
          <div className="rounded-3xs bg-greyscale-100 overflow-x-auto flex flex-row items-start justify-start py-2 pr-2 pl-4 gap-[10px]">
            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <img className="w-5 h-5 relative" alt="" src="/search.svg" />
            </div>
            <div className="w-[199px] shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
              <div className="self-stretch relative leading-[24px]">
                Search anything…
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-1 px-3 bg-others-white shadow-[0px_-1px_2px_rgba(0,_0,_0,_0.05)_inset,_0px_-1px_1px_rgba(0,_0,_0,_0.04)_inset] rounded-lg flex flex-row items-start justify-start gap-[4px]">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <img className="w-3 h-3 relative" alt="" src="/-1.svg" />
              </div>
              <div className="relative text-base tracking-[0.3px] leading-[150%] font-semibold font-body-small-medium text-greyscale-900 text-left inline-block min-w-[12px]">
                {" "}
                F
              </div>
            </button>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[331px] max-w-full">
            <nav className="m-0 self-stretch flex flex-row items-start justify-start gap-[36.7px] whitespace-nowrap text-left text-sm text-greyscale-900 font-body-small-medium mq925:flex-wrap">
              <div className="relative leading-[160%] font-medium inline-block min-w-[80px]">
                Documents
              </div>
              <div className="relative leading-[160%] font-medium inline-block min-w-[39px]">
                News
              </div>
              <div className="relative leading-[160%] font-medium inline-block min-w-[48px]">
                Payslip
              </div>
              <div className="relative leading-[160%] font-medium inline-block min-w-[48px]">
                Report
              </div>
            </nav>
          </div>
          <div className="w-[200px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between py-0 pr-0 pl-[34px] gap-[20px]">
              <div className="flex flex-row items-start justify-start p-1">
                <div className="flex flex-row items-start justify-start relative">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/mail.svg"
                  />
                  <div className="h-3 w-3 absolute !m-[0] top-[-2px] right-[-2px] rounded-xl bg-alerts-error-base box-border overflow-hidden shrink-0 z-[1] border-[2px] border-solid border-others-white" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start p-1">
                <div className="flex flex-row items-start justify-start relative">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/message.svg"
                  />
                  <div className="h-3 w-3 absolute !m-[0] top-[-2px] right-[-2px] rounded-xl bg-alerts-error-base box-border overflow-hidden shrink-0 z-[1] border-[2px] border-solid border-others-white" />
                </div>
              </div>
              <div className="w-[54px] flex flex-row items-start justify-start gap-[8px]">
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
            </div>
          </div>
        </div>
        <div className="absolute top-[128px] left-[280px] w-[1160px] flex flex-row items-center justify-between py-0 px-6 box-border gap-[0px] [row-gap:20px] max-w-full text-base">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/chevronleft-2.svg"
          />
          <div className="w-[1088px] flex flex-col items-start justify-start max-w-[calc(100%_-_24px)]">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 px-6 box-border gap-[20px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[387px] max-w-full text-left text-5xl text-greyscale-900 mq700:min-w-full">
                <h2 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq925:text-lgi mq925:leading-[25px]">
                  Detail Fiche
                </h2>
                <div className="self-stretch h-[22px] relative text-sm leading-[160%] font-medium text-greyscale-600 hidden">
                  Manage your Attendance
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-3xs bg-greyscale-900 flex flex-row items-center justify-center py-4 px-[25px] gap-[8px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/phone.svg"
                  />
                  <b className="relative tracking-[0.3px] leading-[150%] inline-block min-w-[63px]">
                    Appeler
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-3xs bg-greyscale-900 flex flex-row items-center justify-center py-4 px-6 gap-[8px]">
                  <img className="h-5 w-5 relative" alt="" src="/message23.svg" />
                  <b className="relative tracking-[0.3px] leading-[150%] inline-block min-w-[36px]">
                    SMS
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="rounded-3xs bg-greyscale-900 flex flex-row items-center justify-center py-4 px-6 gap-[6px]">
                  <img className="h-5 w-5 relative" alt="" src="/tag2.svg" />
                  <b className="relative tracking-[0.3px] leading-[150%] inline-block min-w-[58px]">
                    Tarifée
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[216px] left-[304px] rounded-2xl bg-others-white w-[300px] flex flex-col items-start justify-start p-6 box-border gap-[24px] text-greyscale-900">
          <div className="flex flex-row items-start justify-start py-0 px-[76px]">
            <button className="cursor-pointer [border:none] pt-[20.8px] pb-[16.2px] pr-[16.2px] pl-[21.8px] bg-primary-200 h-[100px] w-[100px] rounded-[4166.67px] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border hover:bg-powderblue">
              <div className="relative text-22xl-7 tracking-[1.67px] leading-[63px] uppercase font-extrabold font-body-small-medium text-primary-base text-center inline-block min-w-[62px] mq925:text-6xl mq925:leading-[38px] mq450:text-14xl mq450:leading-[50px]">
                PC
              </div>
            </button>
          </div>
          <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold font-inherit mq925:text-base mq925:leading-[22px]">
            Pristia Candra
          </h3>
          <div className="self-stretch h-[22px] relative leading-[160%] text-greyscale-600 hidden">
            3D Designer
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[60px] text-right text-3xs text-alerts-success-base">
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
                  src="/chevrondown-84.svg"
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
                  alt=""
                  src="/mail-13.svg"
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
                  src="/global4.svg"
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
              <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" />
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
              <img className="h-4 w-4 relative overflow-hidden shrink-0" alt="" />
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
                src="/chevronright-24.svg"
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
        <div className="absolute top-[216px] left-[628px] rounded-2xl bg-others-white w-[788px] flex flex-col items-center justify-start p-6 box-border gap-[24px] max-w-full text-greyscale-900">
          <div className="overflow-x-auto flex flex-row items-start justify-start py-0 pr-[250px] pl-0 border-b-[1px] border-solid border-greyscale-200">
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
          <div className="self-stretch rounded-2xl bg-others-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[16px] max-w-full text-left text-lg border-[1px] border-solid border-greyscale-200">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] max-w-full">
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
              <div className="self-stretch flex flex-row flex-wrap items-center justify-end max-w-full [row-gap:20px]">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[253px] max-w-full">
                  <button className="cursor-pointer [border:none] py-[18.5px] px-4 bg-greyscale-50 self-stretch rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs overflow-hidden flex flex-row items-center justify-start box-border gap-[10px] max-w-full">
                    <div className="h-4 w-4 relative hidden">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                    </div>
                    <b className="flex-1 relative text-xs tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-greyscale-600 text-left max-w-[calc(100%_-_24px)]">
                      Name
                    </b>
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/sort.svg"
                    />
                  </button>
                  <div className="self-stretch flex flex-col items-center justify-center max-w-full">
                    <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 box-border gap-[12px] max-w-full">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/filetext2.svg"
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
                        src="/filetext2.svg"
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
                        src="/filetext2.svg"
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
                        src="/filetext2.svg"
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
                        src="/filetext2.svg"
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
                      <div className="flex-1 relative leading-[160%]">1 mb</div>
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
                      <div className="flex-1 relative leading-[160%]">1,5 mb</div>
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
                      <div className="flex-1 relative leading-[160%]">2 mb</div>
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
                      <div className="flex-1 relative leading-[160%]">2 mb</div>
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
                      <div className="flex-1 relative leading-[160%]">2,5 mb</div>
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
                      src="/chevronleft-33.svg"
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
                      src="/chevronright-33.svg"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[15px] text-greyscale-600">
                  <div className="relative leading-[160%] font-medium">
                    Showing 1 to 10 of 4 entries
                  </div>
                  <div className="w-[92px] rounded-lg bg-others-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[5px] px-[9px] gap-[10px] whitespace-nowrap text-greyscale-900 border-[1px] border-solid border-greyscale-200">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[46px]">
                      Show 10
                    </div>
                    <img
                      className="h-4 w-4 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/chevronup2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="absolute top-[0px] left-[0px] bg-transparant-black-50 w-full overflow-hidden flex flex-row items-start justify-end max-w-full h-full z-[1] text-left text-sm text-greyscale-900 font-body-small-medium">
          <div className="w-[861px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[24px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[484px] px-0 pb-0">
              <button className="cursor-pointer [border:none] p-4 bg-others-white w-14 h-14 rounded-81xl overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevronright-4.svg"
                />
              </button>
            </div>
            <div className="flex-1 bg-others-white flex flex-col items-start justify-start p-9 box-border gap-[32px] max-w-[calc(100%_-_80px)] mq925:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[189px] box-border gap-[24px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start text-5xl">
                  <h2 className="m-0 relative text-inherit leading-[130%] font-bold font-inherit mq925:text-lgi mq925:leading-[25px]">
                    Envoyer un message a votre client
                  </h2>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-lg">
                  <b className="self-stretch relative leading-[140%]">
                    Type message
                  </b>
                  <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-sm">
                    <div className="flex-1 flex flex-row items-start justify-start min-w-[216px] max-w-full">
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start gap-[10px] max-w-full">
                        <div className="h-[22px] w-[315px] hidden flex-row items-start justify-start gap-[2px]">
                          <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                            Schedule Name
                          </div>
                          <div className="self-stretch relative leading-[160%] font-medium text-alerts-error-base">
                            *
                          </div>
                        </div>
                        <div className="flex-1 rounded-3xs bg-others-white box-border overflow-hidden flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300 mq925:flex-wrap">
                          <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[23px]">
                            SMS
                          </div>
                          <div className="h-5 w-5 relative rounded-81xl box-border border-[1px] border-solid border-greyscale-300" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[216px] max-w-full">
                      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[10px]">
                        <div className="w-[315px] hidden flex-row items-start justify-start gap-[2px]">
                          <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                            Schedule Name
                          </div>
                          <div className="relative leading-[160%] font-medium text-alerts-error-base">
                            *
                          </div>
                        </div>
                        <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-alerts-success-base mq925:flex-wrap">
                          <div className="flex-1 relative leading-[24px] font-medium inline-block min-w-[26px]">
                            Email
                          </div>
                          <div className="h-5 w-5 relative rounded-81xl bg-primary-base">
                            <div className="absolute h-3/6 w-6/12 top-[25%] right-[25%] bottom-[25%] left-[25%] shadow-[0px_2px_5px_rgba(0,_0,_0,_0.2)] rounded-[1000px] bg-others-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1px]">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[80px]">
                      Model Email
                    </div>
                    <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                      *
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300">
                    <div className="flex-1 relative leading-[160%] font-medium inline-block max-w-[calc(100%_-_30px)]">
                      model email 1
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/chevrondown-10.svg"
                    />
                  </div>
                </div>
                <div className="self-stretch rounded-2xl bg-others-white box-border flex flex-col items-center justify-start py-3.5 px-0 gap-[16px] max-w-full border-[1px] border-solid border-greyscale-200">
                  <div className="self-stretch flex flex-row items-center justify-start py-0 pr-[511px] pl-6 gap-[9px] mq700:pr-[255px] mq700:box-border mq925:pr-5 mq925:box-border">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[17px]">
                      To
                    </div>
                    <button className="cursor-pointer [border:none] py-1 pr-2.5 pl-1 bg-greyscale-50 rounded-81xl overflow-hidden flex flex-row items-center justify-start gap-[10px]">
                      <div className="h-4 w-4 relative hidden">
                        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                      </div>
                      <img
                        className="h-6 w-6 relative object-cover"
                        alt=""
                        src="/avatarwoman2@2x.png"
                      />
                      <div className="relative text-xs leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block min-w-[80px]">
                        Pristia Candra
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 px-6 box-border gap-[8px] max-w-full">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[46px]">
                      Objet :
                    </div>
                    <div className="flex-1 relative leading-[160%] font-medium inline-block min-w-[175px] max-w-full">
                      Suivi de notre appel téléphonique
                    </div>
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                  <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[369px] pl-6 gap-[20px] mq700:pr-[184px] mq700:box-border mq925:pr-5 mq925:box-border mq450:flex-wrap mq450:justify-center">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/textbold.svg"
                    />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/textitalic.svg"
                    />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/textunderline.svg"
                    />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                      alt=""
                      src="/textemoticon.svg"
                    />
                    <img
                      className="h-5 w-6 relative overflow-hidden shrink-0 min-h-[20px]"
                      loading="lazy"
                      alt=""
                      src="/textattachment.svg"
                    />
                    <img
                      className="h-5 w-6 relative overflow-hidden shrink-0 min-h-[20px]"
                      loading="lazy"
                      alt=""
                      src="/textbullets.svg"
                    />
                    <img
                      className="h-5 w-6 relative overflow-hidden shrink-0 min-h-[20px]"
                      loading="lazy"
                      alt=""
                      src="/textalign.svg"
                    />
                  </div>
                  <div className="self-stretch h-px bg-greyscale-200" />
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-6">
                    <div className="self-stretch h-44 relative leading-[160%] inline-block">
                      <p className="m-0">
                        <b className="tracking-[0.2px]">Bonjour Cecilia,</b>
                      </p>
                      <p className="m-0 font-medium">&nbsp;</p>
                      <p className="m-0 font-medium">
                        J'espère que ce message vous trouve bien. Je voulais
                        simplement faire suite à notre tentative d'appel récente.
                        Malheureusement, nous n'avons pas pu vous joindre par
                        téléphone, mais je tiens à vous assurer que nous sommes
                        toujours disponibles pour répondre à vos questions ou
                        discuter de vos besoins.
                      </p>
                      <p className="m-0 font-medium">&nbsp;</p>
                      <p className="m-0 font-medium">Cordialement,</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end gap-[20px] mq925:flex-wrap">
                <button className="cursor-pointer py-3.5 pr-[41px] pl-[42px] bg-[transparent] rounded-3xs flex flex-row items-start justify-start gap-[8px] border-[1px] border-solid border-greyscale-900">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-greyscale-900 text-center min-w-[65px]">
                    Annuler
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
                <button className="cursor-pointer [border:none] py-4 px-[42px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[66px]">
                    Envoyer
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
 
        </main>
        </main>

       </div>
    );
  };
  
  export default Message;
  