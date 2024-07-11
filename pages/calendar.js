import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const calendar = () => {
    return (
      <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
      <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
         <Top1 />
      </div>
      <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
      <Navigation1 />
          <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-sm text-greyscale-900 font-body-large-bold">
            <div className="flex-1 rounded-t-2xl rounded-b-none bg-others-white overflow-hidden flex flex-col items-start justify-start pt-6 px-6 pb-[104px] box-border gap-[24px] max-w-full mq450:pt-5 mq450:pb-[68px] mq450:box-border mq675:pb-11 mq675:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full text-5xl">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[331px] max-w-full">
                  <b className="self-stretch relative leading-[130%] font-bold mq675:text-lgi mq675:leading-[25px]">
                    Calendrier
                  </b>
                </div>
                <div className="w-[535px] flex flex-row items-center justify-start gap-[20px] max-w-full text-sm mq850:flex-wrap">
                  <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px] min-w-[195px]">
                    <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                      <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                        Title Field
                      </div>
                      <div className="relative leading-[160%] font-medium text-alerts-error-base">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-body-large-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-500 text-left flex items-center min-w-[138px] p-0"
                        placeholder="Search employee"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/search2.svg"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-4 px-6 bg-greyscale-900 rounded-3xs flex flex-row items-center justify-center gap-[7px]">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/textemoticon1.svg"
                    />
                    <b className="relative text-base tracking-[0.3px] leading-[150%] font-body-large-bold text-others-white text-center">
                      Ajouter un rappel
                    </b>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full">
                <div className="h-[22px] w-[315px] hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                    Title Field
                  </div>
                  <div className="self-stretch relative leading-[160%] font-medium text-alerts-error-base">
                    *
                  </div>
                </div>
                <div className="flex-1 rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300">
                  <div className="flex-1 relative leading-[160%] font-medium inline-block max-w-[calc(100%_-_30px)]">
                    April 2023
                  </div>
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/calendar-11.svg"
                  />
                </div>
              </div>
              <div className="w-[1064px] h-[610px] overflow-x-auto shrink-0 flex flex-row items-start justify-start max-w-full text-right">
                <div className="self-stretch w-[152px] shrink-0 flex flex-col items-start justify-start">
                  <div className="self-stretch rounded-tl-3xs rounded-tr-none rounded-b-none bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[17px] px-[15px] text-center text-xs text-greyscale-600 border-[1px] border-solid border-greyscale-200">
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold">
                      Sun
                    </b>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">26</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">2</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">9</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">16</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">23</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">30</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[152px] shrink-0 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[17px] px-[15px] text-center text-xs text-greyscale-600 border-[1px] border-solid border-greyscale-200">
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold">
                      Mon
                    </b>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">27</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">3</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">10</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">17</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">24</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">31</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[152px] shrink-0 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[17px] px-[15px] text-center text-xs text-greyscale-600 border-[1px] border-solid border-greyscale-200">
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold">
                      Tue
                    </b>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">28</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">4</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">11</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">18</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">25</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">1</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[152px] shrink-0 flex flex-col items-end justify-start">
                  <div className="self-stretch h-[610px] flex flex-col items-start justify-start">
                    <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[17px] px-[15px] text-center text-xs text-greyscale-600 border-[1px] border-solid border-greyscale-200">
                      <b className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold">
                        Wed
                      </b>
                    </div>
                    <div className="self-stretch flex-1 flex flex-col items-center justify-center text-greyscale-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                        <div className="flex-1 relative leading-[160%]">29</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                        <div className="flex-1 relative leading-[160%]">5</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                        <div className="flex-1 relative leading-[160%]">12</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                        <div className="flex-1 relative leading-[160%]">19</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                        <div className="flex-1 relative leading-[160%]">26</div>
                      </div>
                    </div>
                    <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center text-greyscale-500">
                      <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                        <div className="flex-1 relative leading-[160%]">2</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-[147px] h-[50px] overflow-hidden shrink-0 flex flex-row items-start justify-start gap-[10px] z-[1] mt-[-239px] text-left text-xs text-gray">
                    <div className="w-40 rounded-sm bg-aliceblue flex flex-row items-start justify-start pt-[7.1px] px-[3px] pb-1.5 box-border gap-[11px] shrink-0 [debug_commit:bf4bc93]">
                      <div className="h-14 w-40 relative rounded-sm bg-aliceblue hidden" />
                      <div className="h-[35.7px] w-[3px] relative rounded-sm bg-red z-[1]" />
                      <div className="flex flex-col items-start justify-start pt-[1.9px] px-0 pb-0">
                        <div className="flex flex-col items-start justify-start">
                          <div className="relative leading-[22px] font-medium inline-block min-w-[119px] shrink-0 [debug_commit:bf4bc93] z-[1]">
                            Relance Hugo karmel
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-px mt-[-3px] text-[10px] text-darkgray">
                            <div className="relative leading-[22px] font-medium inline-block min-w-[29px] shrink-0 [debug_commit:bf4bc93] z-[1]">
                              15h30
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[14.3px] w-[15px] relative overflow-hidden shrink-0 hidden" />
                  </div>
                </div>
                <div className="self-stretch w-[152px] shrink-0 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[17px] px-[15px] text-center text-xs text-greyscale-600 border-[1px] border-solid border-greyscale-200">
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold">
                      Thu
                    </b>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">30</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">6</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">13</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">20</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">27</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">3</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[152px] shrink-0 flex flex-col items-start justify-start">
                  <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[17px] px-[15px] text-center text-xs text-greyscale-600 border-[1px] border-solid border-greyscale-200">
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold">
                      Fri
                    </b>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">31</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center opacity-[0.7]">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">7</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">14</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">21</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">28</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">4</div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch w-[152px] shrink-0 flex flex-col items-start justify-start">
                  <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-b-none bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[17px] px-[15px] text-center text-xs text-greyscale-600 border-[1px] border-solid border-greyscale-200">
                    <b className="flex-1 relative tracking-[0.2px] leading-[160%] font-bold">
                      Sat
                    </b>
                  </div>
                  <div className="self-stretch flex-1 flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">1</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">8</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">15</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">22</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">29</div>
                    </div>
                  </div>
                  <div className="self-stretch h-[92.3px] flex flex-col items-center justify-center text-greyscale-500">
                    <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-end py-4 px-[15px] border-[1px] border-solid border-greyscale-200">
                      <div className="flex-1 relative leading-[160%]">5</div>
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
  
  export default calendar;
  