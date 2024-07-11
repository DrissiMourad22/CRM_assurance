import PropTypes from "prop-types";

const Buttom = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[171px] flex flex-col items-start justify-start text-left text-sm text-greyscale-900 font-body-large-bold ${className}`}
    >
      <div className="self-stretch rounded-3xs flex flex-row items-center justify-start py-4 px-0">
        <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
          <img
            className="h-5 w-5 relative"
            loading="lazy"
            alt=""
            src="/questioncircleoutlined.svg"
          />
          <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
            Tutorial
          </b>
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
          <div className="h-6 w-6 rounded-81xl bg-alerts-error-base overflow-hidden shrink-0 flex flex-col items-center justify-center py-px px-[7px] box-border">
            <div className="relative leading-[160%] font-semibold inline-block min-w-[9px]">
              8
            </div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden min-h-[24px]"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex-[0.7143] rounded-3xs flex flex-row items-center justify-start py-4 px-0">
        <div className="flex-1 flex flex-row items-center justify-start gap-[10px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/settings.svg"
          />
          <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
            Paramètres
          </b>
        </div>
        <div className="self-stretch w-[60px] flex flex-row items-start justify-start gap-[12px] text-center text-others-white">
          <div className="w-6 rounded-81xl bg-alerts-error-base h-6 overflow-hidden shrink-0 hidden flex-col items-center justify-center py-px px-0 box-border">
            <div className="relative leading-[160%] font-semibold">8</div>
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
            alt=""
            src="/chevrondown.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 text-xs">
        <div className="self-stretch rounded-81xl bg-greyscale-100 hidden flex-row items-center justify-center p-1.5 gap-[4px]">
          <div className="h-[31px] flex-1 shadow-[0px_5px_10px_rgba(0,_0,_0,_0.1)] rounded-81xl bg-others-white overflow-hidden flex flex-row items-center justify-center py-1.5 px-4 box-border gap-[8px]">
            <img className="h-4 w-4 relative" alt="" src="/sun.svg" />
            <b className="self-stretch relative tracking-[0.2px] leading-[160%]">
              Light
            </b>
          </div>
          <div className="h-[31px] flex-1 rounded-81xl flex flex-row items-center justify-center py-1.5 px-4 box-border gap-[8px] text-greyscale-500">
            <img className="h-4 w-4 relative" alt="" src="/moon.svg" />
            <b className="self-stretch relative tracking-[0.2px] leading-[160%]">
              Dark
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};

Buttom.propTypes = {
  className: PropTypes.string,
};

export default Buttom;
