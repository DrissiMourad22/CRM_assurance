import React, { useState,useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Top1 from '../components/top1';
import Navigation1 from '../components/navigation1';

function TarificationAssure() {
  const [selectedOption, setSelectedOption] = useState(''); // Définir selectedOption à l'aide de useState

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleCalendarIconClick = () => {
    datePickerRef.current.setFocus();
  };
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
          <div className="flex-1 flex flex-row items-start justify-start gap-[24px] max-w-full mq950:flex-wrap">
            <div className="h-[392px] w-[313px] rounded-2xl bg-others-white flex flex-col items-start justify-center p-6 box-border gap-[16px] min-w-[313px] mq450:pt-5 mq450:pb-5 mq450:box-border mq950:flex-1">
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
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
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Informations conjoint
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
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Informations enfants
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
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright-1.svg"
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
              <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
                <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/chevronright-1.svg"
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
            <form className="m-0 flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-start pt-6 px-6 pb-[34px] box-border gap-[24px] min-w-[504px] max-w-full mq700:min-w-full mq925:pt-5 mq925:pb-[22px] mq925:box-border">
              <h3 className="m-0 self-stretch relative text-xl leading-[140%] font-bold font-body-large-bold text-greyscale-900 text-left mq450:text-base mq450:leading-[22px]">
                Informations Assuré
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
              <div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start pt-0 px-6 pb-[18px] box-border gap-[16px] max-w-full">
                <div className="w-[679px] overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[276.5px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[46px]">{`Civilité `}</div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <div className="flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left">
                      <select
                      
                     value={selectedOption}
                     onChange={handleOptionChange}
                     className="flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left"

 
        >
          <option value="Mr">Mr</option>
          <option value="Mme">Mme</option>
                               className="h-5 w-5 relative"

        </select>
                      </div>
                      
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[201.5px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[121px]">{`Date de naissance `}</div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
        <DatePicker
          ref={datePickerRef}
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left"
          popperPlacement="bottom-start"
          popperClassName="datepicker-popper"
        />
        <img
          className="h-5 w-5 relative cursor-pointer"
          alt="Calendar Icon"
          src="/calendar-1.svg"
          onClick={handleCalendarIconClick}
        />
      </div>
                  </div>
                  </div>

                </div>
                <div className="w-[679px] overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[291.5px] pl-0 gap-[1px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[32px]">
                        Nom
                      </div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-body-large-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[175px] whitespace-nowrap p-0"
                        placeholder="lincoln@gmail.com"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[268px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[54px]">
                        Prénom
                      </div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <div className="flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left">
                        089318298493
                      </div>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="w-[679px] overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[227px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[95px]">
                        Régime social
                      </div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                      <div className="flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left">
                        Retraité ancien salarié
                      </div>
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/chevrondown-91.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[275.5px] pl-0 gap-[1px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[48px]">
                        Capital
                      </div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-body-large-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[175px] p-0"
                        placeholder="400"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="w-[679px] overflow-x-auto flex flex-row items-start justify-start gap-[16px] max-w-full">
                    <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px]">
                      <div className="flex flex-row items-start justify-start py-0 pr-[239px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[48px]">
                        Code postal
                      </div>
                         
                      </div>
                      <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                        <div className="flex-1 relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left">
                          17000
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px]">
                      <div className="flex flex-row items-start justify-start py-0 pr-[229px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                        <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[93px]">
                          N° organisme
                        </div>
                        
                        <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                          *
                        </div>
                      </div>
                      <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-medium font-body-large-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[175px] p-0"
                        placeholder="input here"
                        type="text"
                      />
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full z-[1] mt-[-86px] mq700:flex-wrap">
                    <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border gap-[10px] min-w-[215px] min-h-[86px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[239px] pl-0 gap-[2px] mq450:pr-5 mq450:box-border">
                        <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[83px]">
                          Code postal
                        </div>
                        <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                          *
                        </div>
                      </div>
                      <div className="w-[315px] rounded-3xs box-border hidden flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                        <a
                          className="h-[22px] flex-1 relative text-sm [text-decoration:underline] leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block"
                          href="mailto:lincoln@gmail.com"
                          target="_blank"
                        >
                          17000
                        </a>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px] min-w-[215px] max-w-full">
                     
                      <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                         
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                  <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[612px] pl-0 gap-[2px] mq700:pr-[306px] mq700:box-border mq450:pr-5 mq450:box-border">
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-greyscale-900 text-left inline-block min-w-[58px]">
                        Adresse
                      </div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-large-bold text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300">
                      <input
                        className="w-full [border:none] [outline:none] font-body-large-bold text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-900 text-left flex items-center min-w-[250px] max-w-full p-0"
                        placeholder="17000 rue x Appartement Y"
                        type="text"
                      />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[25px]">
                <button className="cursor-pointer [border:none] py-4 px-6 bg-greyscale-900 rounded-3xs flex flex-row items-start justify-start gap-[6px]">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrownarrowright1.svg"
                    />
                  </div>
                  <a 
                    className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-large-bold text-others-white text-center min-w-[121px]"
                    href="./tarificationconjoint"
                    target="_blank"

>
                Etape suivante
                  </a>
                  
 
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default TarificationAssure;
