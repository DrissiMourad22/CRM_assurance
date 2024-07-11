import PropTypes from "prop-types";

const Top1 = ({ className = "" }) => {
  return (
    <><div
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[373px] gap-[24px] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pb-[242px] mq825:box-border mq450:pb-[157px] mq450:box-border ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-row items-center justify-between py-3 px-0 gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[10px]">
          <img
            className="h-6 w-[25.7px] relative"
            loading="lazy"
            alt=""
            src="/boolean-operator.svg" />
          <img
            className="h-[18.2px] w-[121.2px] relative hidden"
            alt=""
            src="/humanline.svg" />
        </div>
        <div className="flex flex-row items-start justify-start">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/chevronleft.svg" />
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px] z-[1] ml-[-5px]"
            alt=""
            src="/chevronleft.svg" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-4 px-5 bg-alerts-success-base self-stretch shadow-[0px_10px_30px_rgba(12,_175,_96,_0.2)] rounded-3xs flex flex-row items-start justify-start">
        <div className="flex-1 flex flex-row items-start justify-start gap-[10px]">
          <b className="flex-1 relative text-base tracking-[0.3px] leading-[150%] font-body-large-bold text-others-white text-left">
            Dashboard
          </b>
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/layoutgrid.svg" />
        </div>
      </button>
      <div className="self-stretch flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0"
                alt=""
                src="/users.svg" />
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
                <div className="relative leading-[160%] font-semibold">8</div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <img
                className="h-5 w-5 relative"
                alt=""
                src="/clipboardlist.svg" />
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
                <div className="relative leading-[160%] font-semibold">8</div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg" />
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
                <div className="relative leading-[160%] font-semibold">8</div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <img className="h-5 w-5 relative" alt="" src="/calendar.svg" />
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
                <div className="relative leading-[160%] font-semibold">8</div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
            <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
              <img className="h-5 w-5 relative" alt="" src="/cardsend.svg" />
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
                <div className="relative leading-[160%] font-semibold">8</div>
              </div>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/chevrondown.svg" />
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
                alt="" />
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
                alt="" />
            </div>
          </div>
        </div>
      </div>
    </div><div className="self-stretch h-[171px] flex flex-col items-start justify-start text-sm text-greyscale-900">
        <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
          <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-5 w-5 relative"
              loading="lazy"
              alt=""
              src="/questioncircleoutlined.svg" />
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
              alt="" />
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-3xs flex flex-row items-center justify-start py-4 px-0">
          <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/settings.svg" />
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
              alt="" />
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
                src="/moon.svg" />
              <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[28px]">
                Dark
              </b>
            </div>
          </div>
        </div>


      </div></>

   );
};

Top1.propTypes = {
  className: PropTypes.string,
};

export default Top1;
