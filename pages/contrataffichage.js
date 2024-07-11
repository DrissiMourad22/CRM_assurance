import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const ContratAffichage = () => {
    return (
    
      <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
      <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
         <Top1 />
      </div>
      <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
      <Navigation1 />
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-8 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
              <b className="self-stretch relative leading-[130%] mq450:text-lgi mq450:leading-[25px]">
                Contrat #526272
              </b>
              <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                Contrat / #526272
              </div>
            </div>
          </div>
          <section className="self-stretch flex flex-col items-start justify-start pt-0 px-8 pb-[209px] box-border gap-[24px] min-h-[803px] max-w-full text-left text-xl text-greyscale-900 font-body-medium-medium mq825:pb-[136px] mq825:box-border mq450:pb-[88px] mq450:box-border">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
              <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-center py-6 pr-5 pl-6 box-border gap-[16px] min-w-[402px] max-w-full mq675:min-w-full">
                <button className="cursor-pointer py-4 px-3.5 bg-others-white w-[52px] h-[52px] rounded-29xl box-border flex flex-row items-start justify-start border-[2px] border-solid border-primary-100">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/users-1.svg"
                  />
                </button>
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                  Client
                </h3>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-center py-6 pr-5 pl-6 box-border gap-[16px] min-w-[402px] max-w-full mq675:min-w-full">
                <button className="cursor-pointer py-4 px-3.5 bg-others-white w-[52px] h-[52px] rounded-29xl box-border flex flex-row items-start justify-start border-[2px] border-solid border-primary-100">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/user.svg"
                  />
                </button>
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                  Info Contrat
                </h3>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
              <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-center py-6 pr-5 pl-6 box-border gap-[16px] min-w-[402px] max-w-full mq675:min-w-full">
                <div className="w-[52px] h-[52px] rounded-29xl bg-others-white box-border flex flex-row items-start justify-start py-4 px-3.5 border-[2px] border-solid border-primary-100">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/phone.svg"
                  />
                </div>
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                  Relance
                </h3>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-center py-6 pr-5 pl-6 box-border gap-[16px] min-w-[402px] max-w-full mq675:min-w-full">
                <button className="cursor-pointer py-4 px-3.5 bg-others-white w-[52px] h-[52px] rounded-29xl box-border flex flex-row items-start justify-start border-[2px] border-solid border-primary-100">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/receipttax.svg"
                  />
                </button>
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                  Proposition
                </h3>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
              <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-center py-6 pr-5 pl-6 box-border gap-[16px] min-w-[402px] max-w-full mq675:min-w-full">
                <button className="cursor-pointer py-4 px-3.5 bg-others-white w-[52px] h-[52px] rounded-29xl box-border flex flex-row items-start justify-start border-[2px] border-solid border-primary-100">
                  <img className="h-5 w-5 relative" alt="" src="/flash.svg" />
                </button>
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                  Demande
                </h3>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-others-white flex flex-col items-start justify-center py-6 pr-5 pl-6 box-border gap-[16px] min-w-[402px] max-w-full mq675:min-w-full">
                <button className="cursor-pointer py-4 px-3.5 bg-others-white w-[52px] h-[52px] rounded-29xl box-border flex flex-row items-start justify-start border-[2px] border-solid border-primary-100">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/ikeoutlined.svg"
                  />
                </button>
                <h3 className="m-0 self-stretch relative text-inherit leading-[140%] font-bold font-inherit mq450:text-base mq450:leading-[22px]">
                  Réclamation et Satisfaction
                </h3>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default ContratAffichage;
  