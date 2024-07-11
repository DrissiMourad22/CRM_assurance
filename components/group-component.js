import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "", propBorder }) => {
  const groupDivStyle = useMemo(() => {
    return {
      border: propBorder,
    };
  }, [propBorder]);

  return (
    <div
      className={`self-stretch rounded-2xl bg-others-white flex flex-row items-start justify-between pt-3.5 pb-[29.4px] pr-[85px] pl-[33px] box-border max-w-full gap-[20px] text-left text-2xs-7 text-gray-700 font-body-large-bold mq825:pr-[42px] mq825:box-border mq450:pr-5 mq450:box-border mq675:flex-wrap ${className}`}
      style={groupDivStyle}
    >
      <div className="h-[130px] w-[773px] relative rounded-2xl bg-others-white hidden max-w-full" />
      <div className="w-[356.7px] flex flex-col items-start justify-start pt-[10.1px] px-0 pb-0 box-border max-w-full">
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
                      loading="lazy"
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
      <div className="w-[124px] flex flex-row items-start justify-start text-right text-5xs-1 text-others-white">
        <div className="flex-1 flex flex-col items-end justify-start gap-[2px] shrink-0">
          <div className="rounded-[4.25px] bg-others-orange flex flex-row items-start justify-start py-[3px] px-1.5 whitespace-nowrap z-[1]">
            <b className="relative tracking-[0.14px] leading-[160%] uppercase inline-block min-w-[57px]">
              les garanties
            </b>
          </div>
          <div className="self-stretch relative text-3xl-2 leading-[30.5px] font-extrabold text-greyscale-900 text-center z-[1] mq450:text-lg mq450:leading-[24px]">
            30.84
          </div>
        </div>
        <div className="w-[48.2px] flex flex-col items-start justify-start pt-[26.2px] px-0 pb-0 box-border ml-[-0.2px] text-center text-2xs text-gray-500">
          <div className="self-stretch relative leading-[17.79px] font-medium shrink-0 z-[2]">
            €/mois
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorder: PropTypes.any,
};

export default GroupComponent;
