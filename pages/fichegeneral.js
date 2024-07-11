const Fichegeneral = () => {
    return (
      <div className="w-full relative bg-greyscale-50 flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-base text-others-white font-body-medium-bold">
        <div className="w-[280px] bg-others-white box-border overflow-hidden flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:pt-5 mq825:pb-5 mq825:box-border">
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[373px] gap-[24px] mq450:pb-[157px] mq450:box-border mq825:pb-[242px] mq825:box-border">
            <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-3 px-0 gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[10px]">
                <img
                  className="h-6 w-[25.7px] relative"
                  loading="lazy"
                  alt=""
                  src="/loop.svg"
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
            <nav className="m-0 self-stretch flex flex-col items-start justify-start text-left text-sm text-greyscale-900 font-body-medium-bold">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/users.svg"
                    />
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                      Clients
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
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                      Fiches
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
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
                  <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                    <img className="h-5 w-5 relative" alt="" src="/timer.svg" />
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                      Devis
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
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                      Contrat
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
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                      Calendar
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
            </nav>
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
                  <b className="relative text-xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-greyscale-900 text-left min-w-[31px]">
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
        <main className="self-stretch flex flex-row items-start justify-end max-w-full mt-[-1024px]">
          <section className="w-[1180px] flex flex-col items-start justify-start pt-0 pb-[61px] pr-0 pl-5 box-border gap-[32px] max-w-full text-left text-xs text-greyscale-900 font-body-medium-bold mq675:gap-[16px] mq450:pb-[26px] mq450:box-border mq825:pb-10 mq825:box-border">
            <div className="self-stretch bg-others-white flex flex-row items-start justify-end pt-8 px-8 pb-[30px] border-b-[1px] border-solid border-greyscale-300 mq450:gap-[18px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[34px] gap-[24px]">
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
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
              <div className="flex-1 rounded-2xl bg-others-white overflow-hidden flex flex-col items-start justify-start py-6 pr-[21px] pl-6 box-border gap-[24px] max-w-full mq825:pt-[1044px] mq825:pb-5 mq825:box-border">
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full text-5xl">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[428px] max-w-full mq675:min-w-full">
                    <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                      Fiches
                    </h1>
                    <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                      Liste des fiches
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[20px] max-w-full text-center text-base mq675:flex-wrap">
                    <div className="rounded-3xs flex flex-row items-center justify-center py-3.5 px-[37px] gap-[6px] border-[1px] border-solid border-greyscale-900">
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/layoutlist.svg"
                      />
                      <b className="relative tracking-[0.3px] leading-[150%] inline-block min-w-[48px]">
                        filtrer
                      </b>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                    <div className="rounded-3xs bg-greyscale-900 flex flex-row items-center justify-center py-4 px-6 gap-[6px] text-others-white">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/plus.svg"
                      />
                      <b className="relative tracking-[0.3px] leading-[150%]">{`Ajouter une fiche `}</b>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[16px] max-w-full text-sm">
                  <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px] min-w-[357px] max-w-full mq675:min-w-full">
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
                        className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-500 text-left flex items-center min-w-[150px] max-w-[calc(100%_-_30px)] p-0"
                        placeholder="Search employee"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/search.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[150px] flex flex-col items-start justify-start gap-[10px]">
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
                        Numéro
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
                        Ville
                      </div>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/chevrondown-8.svg"
                      />
                    </div>
                  </div>
                  <div className="w-[150px] flex flex-col items-start justify-start gap-[10px]">
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
                        Status
                      </div>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/chevrondown-8.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px]">
                  <div className="w-[210px] flex flex-col items-start justify-start">
                    <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs bg-greyscale-50 overflow-x-auto flex flex-row items-start justify-start py-[18.5px] px-4 gap-[10px] text-greyscale-600">
                      <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                        <div className="w-4 h-4 relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                      </div>
                      <b className="flex-1 relative tracking-[0.2px] leading-[160%]">{`Source & Numéro`}</b>
                      <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                        <img
                          className="w-3.5 h-3.5 relative"
                          alt=""
                          src="/sort.svg"
                        />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
                        <input
                          className="cursor-pointer m-0 h-4 w-4 relative"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <img
                          className="h-6 w-6 relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatarwoman2@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
                        <input
                          className="cursor-pointer m-0 h-4 w-4 relative"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <img
                          className="h-6 w-6 relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatarwoman2@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-center text-3xs text-primary-base">
                      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-3.5 px-4 gap-[12px]">
                        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                          <input
                            className="cursor-pointer m-0 w-4 h-4 relative"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                          <div className="w-6 h-6 rounded-981xl bg-primary-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[3px] pl-[5px] box-border">
                            <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[16px]">
                              SA
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start text-left text-xs text-greyscale-900">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
                        <input
                          className="cursor-pointer m-0 h-4 w-4 relative"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <img
                          className="h-6 w-6 relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatarwoman2@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
                        <input
                          className="cursor-pointer m-0 h-4 w-4 relative"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <img
                          className="h-6 w-6 relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatarwoman2@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
                        <input
                          className="cursor-pointer m-0 h-4 w-4 relative"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <img
                          className="h-6 w-6 relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatarwoman2@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
                        <input
                          className="cursor-pointer m-0 h-4 w-4 relative"
                          type="radio"
                          name="radioGroup-1"
                        />
                        <img
                          className="h-6 w-6 relative object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatarwoman2@2x.png"
                        />
                        <div className="flex-1 flex flex-col items-start justify-start">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-center text-3xs text-primary-base">
                      <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-3.5 px-4 gap-[12px]">
                        <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
                          <input
                            className="cursor-pointer m-0 w-4 h-4 relative"
                            type="radio"
                            name="radioGroup-1"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
                          <div className="w-6 h-6 rounded-981xl bg-primary-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[3px] pl-[5px] box-border">
                            <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[16px]">
                              SA
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col items-start justify-start text-left text-xs text-greyscale-900">
                          <div className="self-stretch relative leading-[160%] font-medium">
                            Source Alpha
                          </div>
                          <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
                            #70032
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[183px]">
                    <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px] whitespace-nowrap text-greyscale-600">
                      <b className="flex-1 relative tracking-[0.2px] leading-[160%]">{`Nom & prénom`}</b>
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/sort.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <a
                          className="flex-1 relative leading-[160%] text-[inherit] [text-decoration:none]"
                          href="http://13.37.150.145/#/admin-courtier/fiche"
                          target="_blank"
                        >
                          Olivia Wild
                        </a>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                          alt=""
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
                          Graphic Designer
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Finance
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Project Manager
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Creative Director
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Lead Designer
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          IT Support
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          3D Designer
                        </div>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                  </div>
                  <div className="w-[137px] flex flex-col items-start justify-start">
                    <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px] text-greyscale-600">
                      <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                        Ville
                      </b>
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/sort.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Paris
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          @Pristiacandra
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          @Pristiacandra
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          @Pristiacandra
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          @Pristiacandra
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          @Pristiacandra
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          @Pristiacandra
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          @Pristiacandra
                        </div>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                  </div>
                  <div className="w-[137px] flex flex-col items-start justify-start">
                    <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[9px] px-4 gap-[10px] text-greyscale-600">
                      <b className="h-[38px] flex-1 relative tracking-[-0.11px] leading-[160%] flex items-center">
                        Date Création
                      </b>
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/sort.svg"
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
                          Team Product
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Team Product
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Team Product
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Team Product
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Team Product
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Team Product
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
                        <div className="h-4 w-4 relative hidden">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
                        </div>
                        <div className="flex-1 relative leading-[160%]">
                          Team Product
                        </div>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                  </div>
                  <div className="w-[155px] flex flex-col items-start justify-start text-greyscale-600">
                    <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px]">
                      <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                        Status
                      </b>
                      <img className="h-3.5 w-3.5 relative hidden" alt="" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <button className="cursor-pointer [border:none] py-1 px-7 bg-primary-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-400">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-alerts-success-base text-right min-w-[38px]">
                            TRAITE
                          </b>
                        </button>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <button className="cursor-pointer [border:none] py-1 px-7 bg-secondary-200 rounded-lg flex flex-row items-center justify-center hover:bg-wheat">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-alerts-warning-dark text-right min-w-[39px]">
                            VIERGE
                          </b>
                        </button>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <button className="cursor-pointer [border:none] py-1 px-[22px] bg-lavender-100 rounded-lg flex flex-row items-center justify-center hover:bg-lavender-200">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-others-portage text-right min-w-[51px]">
                            RECYCLEE
                          </b>
                        </button>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <button className="cursor-pointer [border:none] py-1 px-7 bg-primary-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-400">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-alerts-success-base text-right min-w-[38px]">
                            TRAITE
                          </b>
                        </button>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <button className="cursor-pointer [border:none] py-1 px-7 bg-alerts-error-light rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-300">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-alerts-success-base text-right min-w-[38px]">
                            TRAITE
                          </b>
                        </button>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center text-right text-3xs text-alerts-success-base">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <div className="rounded-lg bg-primary-100 flex flex-row items-center justify-center py-1 px-7">
                          <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[38px]">
                            TRAITE
                          </b>
                        </div>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <button className="cursor-pointer [border:none] py-1 px-7 bg-secondary-200 rounded-lg flex flex-row items-center justify-center hover:bg-wheat">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-alerts-warning-dark text-right min-w-[39px]">
                            VIERGE
                          </b>
                        </button>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
                        <button className="cursor-pointer [border:none] py-1 px-7 bg-primary-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-400">
                          <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-alerts-success-base text-right min-w-[38px]">
                            TRAITE
                          </b>
                        </button>
                        <img
                          className="h-4 w-4 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/chevrondown-11.svg"
                        />
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                  </div>
                  <div className="w-[146px] flex flex-col items-start justify-start text-right text-greyscale-600">
                    <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-greyscale-50 overflow-hidden flex flex-row items-center justify-end py-[18.5px] px-4">
                      <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                        Action
                      </b>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
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
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
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
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
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
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
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
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
                          />
                        </div>
                        <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
                          <input
                            className="m-0 h-4 w-4 relative"
                            type="checkbox"
                          />
                        </div>
                      </div>
                      <div className="self-stretch h-px bg-greyscale-200" />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-center">
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
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
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
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
                      <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
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
                            src="/edit.svg"
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
                <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq675:flex-wrap mq675:justify-center">
                  <div className="flex flex-row items-start justify-center gap-[24px] mq450:flex-wrap">
                    <div className="w-8 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-greyscale-200">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/chevronleft-2.svg"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="rounded-3xs bg-greyscale-100 overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[13px]">
                        <div className="relative leading-[160%] font-semibold inline-block min-w-[6px]">
                          1
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-start">
                        <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-3">
                          <div className="relative leading-[160%] font-semibold inline-block min-w-[8px]">
                            2
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-3">
                          <div className="relative leading-[160%] font-semibold inline-block min-w-[8px]">
                            3
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[10.5px]">
                          <div className="relative leading-[160%] font-semibold inline-block min-w-[11px]">
                            ...
                          </div>
                        </div>
                        <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[9.5px]">
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
                        alt=""
                        src="/chevronup.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-transparant-black-50 overflow-hidden flex flex-row items-start justify-end max-w-full z-[1] text-sm text-greyscale-900">
          <div className="w-[861px] flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border gap-[24px] max-w-full">
            <div className="flex flex-col items-start justify-start pt-[484px] px-0 pb-0">
              <button className="cursor-pointer [border:none] p-4 bg-others-white w-14 h-14 rounded-81xl overflow-hidden shrink-0 flex flex-row items-start justify-start box-border">
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevronright-1.svg"
                />
              </button>
            </div>
            <div className="flex-1 bg-others-white flex flex-col items-start justify-start p-9 box-border gap-[32px] max-w-[calc(100%_-_80px)] mq450:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[113px] box-border gap-[24px] max-w-full">
                <div className="self-stretch hidden flex-row items-center justify-start gap-[10px] max-w-full text-5xl">
                  <b className="relative leading-[130%] mq450:text-lgi mq450:leading-[25px]">
                    Pristia Candra
                  </b>
                  <b className="w-[500px] relative text-base tracking-[0.3px] leading-[150%] hidden text-greyscale-500 text-right items-center shrink-0 max-w-full">
                    STEP 1 OF 2
                  </b>
                </div>
                <div className="self-stretch hidden flex-row items-center justify-start gap-[30px] text-base text-primary-base">
                  <div className="hidden flex-row items-center justify-start gap-[8px]">
                    <div className="w-9 rounded-981xl bg-primary-100 h-9 flex flex-row items-center justify-center p-2.5 box-border">
                      <b className="relative tracking-[0.3px] leading-[150%]">
                        1
                      </b>
                    </div>
                    <div className="h-[27px] relative text-lg leading-[150%] font-semibold text-greyscale-900 inline-block">
                      Job Info
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-start gap-[10px] text-greyscale-600">
                    <div className="w-9 rounded-981xl bg-others-white box-border h-9 flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-greyscale-300">
                      <b className="relative tracking-[0.3px] leading-[150%]">
                        2
                      </b>
                    </div>
                    <div className="h-[27px] relative text-lg leading-[150%] font-semibold text-greyscale-900 inline-block">{`Hiring Team & Workflow`}</div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch hidden flex-row items-center justify-end text-center">
                    <div className="h-12 w-[150px] rounded-3xs box-border flex flex-row items-center justify-center py-[21px] px-6 gap-[6px] border-[1px] border-solid border-greyscale-900">
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                      <b className="h-[22px] relative tracking-[0.2px] leading-[160%] inline-block">
                        Move To
                      </b>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] pt-[20.8px] pb-[16.2px] pr-[16.2px] pl-[21.8px] bg-primary-200 w-[100px] h-[100px] rounded-[4166.67px] overflow-hidden shrink-0 flex flex-row items-start justify-start box-border hover:bg-powderblue">
                    <div className="relative text-[41.7px] tracking-[1.67px] leading-[63px] uppercase font-extrabold font-body-medium-bold text-primary-base text-center inline-block min-w-[62px] mq450:text-[25px] mq450:leading-[38px] mq825:text-[33px] mq825:leading-[50px]">
                      PC
                    </div>
                  </button>
                  <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                    <div className="self-stretch flex flex-row items-center justify-center py-0 pr-[440px] pl-0 gap-[10px] mq450:pr-5 mq450:box-border mq825:flex-wrap mq825:pr-[220px] mq825:box-border">
                      <h1 className="m-0 relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                        Pristia Candra
                      </h1>
                      <button className="cursor-pointer [border:none] py-1 px-[15px] bg-greyscale-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-200">
                        <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-greyscale-600 text-right min-w-[44px]">
                          APPLIED
                        </b>
                      </button>
                    </div>
                  </div>
                  <div className="w-[411px] flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[130px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/mail-1.svg"
                        />
                      </div>
                      <div className="flex-1 relative leading-[160%] font-medium whitespace-nowrap">
                        email@gmail.com
                      </div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[10px] min-w-[130px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-5 h-5 relative overflow-hidden shrink-0"
                          alt=""
                          src="/phone.svg"
                        />
                      </div>
                      <div className="flex-1 relative leading-[160%] font-medium">
                        06.59.88.26.27
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="relative leading-[160%] font-medium inline-block min-w-[92px]">
                      Date Creation
                    </div>
                    <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                      *
                    </div>
                  </div>
                  <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300">
                    <input
                      className="w-full [border:none] [outline:none] font-medium font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[250px] whitespace-nowrap max-w-full p-0"
                      placeholder="24/10/2023 à 18:25:36"
                      type="text"
                    />
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[24px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[160px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[124px] pl-0 gap-[2px]">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[81px]">
                        Tél Portable
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[104px] p-0"
                        placeholder="06.59.88.26.27"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[160px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[125.7px] pl-0">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[81px]">
                        Tél Domicile
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[104px] p-0"
                        placeholder="06.59.88.26.27"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[160px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[133px] pl-0 gap-[2px]">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[72px]">
                        Tel Bureau
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[104px] p-0"
                        placeholder="06.59.88.26.27"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[24px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[216px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[291.5px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[32px]">
                        Emai
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-medium font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[150px] whitespace-nowrap p-0"
                        placeholder="Email@gmail.com"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/mail-2.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[216px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[107px]">
                        Date Naissance
                      </div>
                      <div className="self-stretch w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <div className="flex-1 relative leading-[160%] font-medium">
                        24/10/1956
                      </div>
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/calendar-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[24px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[216px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[245.5px] pl-0 mq450:pr-5 mq450:box-border">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[80px]">
                        Date D'effet
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                      <div className="flex-1 relative leading-[160%] font-medium">{`24/10/2022 `}</div>
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/calendar-2.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[216px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <div className="relative leading-[160%] font-medium">
                        Date Naissance Conjoint
                      </div>
                      <div className="self-stretch w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                      <div className="flex-1 relative leading-[160%] font-medium">{`24/10/2022 `}</div>
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/calendar-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-end justify-center gap-[24px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[216px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[219px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[104px]">
                        Nombre Entant
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[175px] p-0"
                        placeholder="2"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[216px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <div className="relative leading-[160%] font-medium inline-block min-w-[104px]">
                        Nom Conseiller
                      </div>
                      <div className="self-stretch w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-medium font-body-medium-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[150px] p-0"
                        placeholder="Myriam Fleury"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/calendar-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch overflow-hidden hidden flex-col items-start justify-start gap-[10px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="relative leading-[160%] font-medium">
                      Description
                    </div>
                    <div className="w-[7px] relative leading-[160%] font-medium text-alerts-error-base hidden">
                      *
                    </div>
                  </div>
                  <div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start py-3.5 px-0 gap-[16px] border-[1px] border-solid border-greyscale-200">
                    <div className="self-stretch flex flex-row items-center justify-start py-0 px-6 gap-[24px] mq450:flex-wrap mq450:justify-center">
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                      />
                      <img
                        className="h-5 w-6 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                      />
                      <img
                        className="h-5 w-6 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                      />
                      <img
                        className="h-5 w-6 relative overflow-hidden shrink-0 min-h-[20px]"
                        alt=""
                      />
                    </div>
                    <div className="self-stretch h-px bg-greyscale-200" />
                    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-5 pl-6 gap-[16px]">
                      <div className="self-stretch h-[66px] relative leading-[66px] font-medium inline-block">
                        A Senior Product Designer is responsible for designing and
                        developing the user experience and user interface of a
                        company's products. They are typically experienced
                        professionals with a deep understanding of design
                        principles, human-computer interaction, and user-centered
                        design.
                      </div>
                      <div className="self-stretch h-[88px] relative leading-[160%] font-medium inline-block">
                        The main duties of a Senior Product Designer include
                        conducting user research and testing, creating wireframes
                        and prototypes, developing design systems, collaborating
                        with cross-functional teams (such as developers, product
                        managers, and other designers), and presenting design
                        solutions to stakeholders.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-end gap-[20px] text-center text-base">
                <div className="h-14 w-[150px] rounded-3xs box-border hidden flex-row items-center justify-center py-[21px] px-[23px] gap-[8px] border-[1px] border-solid border-greyscale-900">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="h-6 relative tracking-[0.3px] leading-[150%] inline-block">
                    Back
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
                <button className="cursor-pointer [border:none] p-[17px] bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-medium-bold text-others-white text-center min-w-[116px]">
                    Afficher le profil
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
      </div>
    );
  };
  
  export default Fichegeneral;
  