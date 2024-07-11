import PropTypes from "prop-types";

const Navigation1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-others-white flex flex-row items-start justify-end pt-8 px-8 pb-[30px] gap-[30px] border-b-[1px] border-solid border-greyscale-300 mq450:flex-wrap ${className}`}
    >
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
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
