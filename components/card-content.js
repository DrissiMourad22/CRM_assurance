import PropTypes from "prop-types";

const CardContent = ({ className = "" }) => {
  return (
    <div
      className={`w-[356.7px] flex flex-col items-start justify-start pt-[10.1px] px-0 pb-0 box-border max-w-full text-left text-2xs-7 text-gray-700 font-body-large-bold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[25.2px] mq450:flex-wrap">
        <img
          className="h-[76.5px] w-[76.5px] relative rounded-[7.62px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/thumb@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start pt-[14.9px] px-0 pb-0 box-border min-w-[166px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[14px]">
              <div className="relative leading-[16px] inline-block min-w-[36px] z-[1]">
                Capital
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5 text-xs text-alerts-success-base">
                <div className="relative leading-[16px] uppercase font-semibold inline-block min-w-[40px] whitespace-nowrap z-[1]">
                  2000€
                </div>
              </div>
            </div>
            <div className="h-[46px] w-2.5 flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
              <div className="w-[46px] h-0.5 relative bg-gray-200 [transform:_rotate(-90deg)] z-[1]" />
            </div>
            <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0 gap-[13px]">
              <div className="relative leading-[16px] inline-block min-w-[88px] z-[1]">
                Type de garanties
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-px text-xs text-alerts-success-base">
                <div className="relative leading-[16px] uppercase font-semibold inline-block min-w-[84px] z-[1]">
                  Indemnitaire
                </div>
              </div>
            </div>
            <div className="h-[46px] w-2 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
              <div className="w-[46px] h-0.5 relative bg-gray-200 [transform:_rotate(-90deg)] z-[1]" />
            </div>
            <div className="flex flex-col items-start justify-start gap-[13px]">
              <div className="flex flex-row items-start justify-start gap-[2px]">
                <div className="relative leading-[16px] inline-block min-w-[25px] z-[1]">
                  Seuil
                </div>
                <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                  <img
                    className="w-2 h-2 relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/question-mark-circle.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 pr-[5px] pl-[3px] text-xs text-alerts-success-base">
                <div className="relative leading-[16px] uppercase font-semibold inline-block min-w-[27px] z-[1]">
                  30%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardContent.propTypes = {
  className: PropTypes.string,
};

export default CardContent;
