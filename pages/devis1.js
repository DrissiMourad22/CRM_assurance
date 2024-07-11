import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const Devis1 = () => {
  return (
 
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
      <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
         <Top1 />
      </div>
      <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
      <Navigation1 />
    
        <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-sm text-greyscale-900 font-body-small-medium">
          <div className="flex-1 rounded-2xl bg-others-white overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-[24px] max-w-full mq825:pt-5 mq825:pb-5 mq825:box-border">
            <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full text-5xl">
              <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[475px] max-w-full mq675:min-w-full">
                <h2 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
                  Devis
                </h2>
                <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
                  Gérez votre devis
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
                <button className="cursor-pointer py-3.5 px-7 bg-[transparent] rounded-3xs flex flex-row items-center justify-center gap-[6px] border-[1px] border-solid border-greyscale-900">
                  <img
                    className="h-5 w-5 relative"
                    alt=""
                    src="/attachcircle.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-greyscale-900 text-center min-w-[66px]">
                    Envoyer
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
                <button className="cursor-pointer [border:none] py-4 px-6 bg-greyscale-900 rounded-3xs flex flex-row items-center justify-center gap-[7px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/textitalic.svg"
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[68px]">
                    Modifier
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 px-0 gap-[16px]">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block">
                    Title Field
                  </div>
                  <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-alerts-error-base text-left">
                    *
                  </div>
                </div>
                <div className="rounded-3xs bg-alerts-success-base flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                  <b className="relative text-sm tracking-[0.2px] leading-[160%] inline-block font-body-small-medium text-others-white text-left min-w-[95px]">
                    Relevé d’info
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[131px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block">
                    Title Field
                  </div>
                  <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-alerts-error-base text-left">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                  <b className="relative text-sm tracking-[0.01px] leading-[160%] font-body-small-medium text-greyscale-900 text-left">
                    Télecharger des piéces
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[129px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block">
                    Title Field
                  </div>
                  <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-alerts-error-base text-left">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                  <b className="flex-1 relative text-sm tracking-[0.2px] leading-[160%] font-body-small-medium text-greyscale-900 text-left">
                    Mandat de résiliation
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block">
                    Title Field
                  </div>
                  <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-alerts-error-base text-left">
                    *
                  </div>
                </div>
                <div className="rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                  <b className="relative text-sm tracking-[-0.11px] leading-[160%] inline-block font-body-small-medium text-greyscale-900 text-left min-w-[85px]">
                    Lettre résile
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block">
                    Title Field
                  </div>
                  <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-alerts-error-base text-left">
                    *
                  </div>
                </div>
                <div className="rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] whitespace-nowrap border-[1px] border-solid border-greyscale-300">
                  <b className="relative text-sm tracking-[0.2px] leading-[160%] font-body-small-medium text-greyscale-900 text-left">
                    Bulletin d’adhésion
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </button>
              <div className="w-[143px] flex flex-col items-start justify-start gap-[10px]">
                <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
                  <div className="h-[22px] relative leading-[160%] font-medium inline-block">
                    Title Field
                  </div>
                  <div className="relative leading-[160%] font-medium text-alerts-error-base">
                    *
                  </div>
                </div>
                <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
                  <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
                    Signassur
                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[663px] bg-darkslategray overflow-y-auto shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[591px] box-border max-w-full text-others-white font-open-sans lg:pb-96 lg:box-border mq825:h-auto mq825:pb-[250px] mq825:box-border mq450:pb-[162px] mq450:box-border">
              <div className="self-stretch shadow-[0px_4px_10px_rgba(0,_0,_0,_0.24)] bg-darkslategray flex flex-row flex-wrap items-start justify-center p-6 box-border gap-[32px] shrink-0 [debug_commit:1de1738] max-w-full mq675:gap-[16px]">
                <div className="flex-1 flex flex-row items-start justify-start gap-[24px] min-w-[197px] mq450:flex-wrap">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/icons.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0 box-border min-w-[166px]">
                    <div className="self-stretch h-[19px] relative font-semibold flex items-center overflow-hidden text-ellipsis whitespace-nowrap shrink-0">
                      Banana Bread Recipe
                    </div>
                  </div>
                </div>
                <div className="w-[346px] flex flex-row items-start justify-between max-w-full gap-[20px] mq675:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                    <div className="flex flex-row items-start justify-start gap-[4px]">
                      <div className="rounded-12xs bg-gray flex flex-row items-start justify-start py-0 px-[7px]">
                        <div className="relative font-semibold inline-block min-w-[9px]">
                          1
                        </div>
                      </div>
                      <div className="relative font-semibold inline-block min-w-[18px]">
                        / 2
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-px h-4 relative bg-dimgray" />
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[16px]">
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/icons-1.svg"
                    />
                    <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                      <div className="rounded-12xs bg-gray flex flex-row items-start justify-start py-0 px-[7px]">
                        <div className="relative font-semibold inline-block min-w-[37px]">
                          100%
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                      loading="lazy"
                      alt=""
                      src="/icons-2.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <div className="w-px h-4 relative bg-dimgray" />
                  </div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/icons-3.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/icons-4.svg"
                  />
                </div>
                <div className="flex-1 flex flex-row items-start justify-end gap-[24px] min-w-[197px] mq450:flex-wrap mq450:justify-center">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icons-5.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icons-6.svg"
                  />
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                    alt=""
                    src="/icons-7.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 px-14 box-border max-w-full shrink-0 text-lg text-grey-scale-independence mq825:pl-7 mq825:pr-7 mq825:box-border">
                <div className="h-[1347px] flex-1 overflow-y-auto flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border gap-[12px] shrink-0 [debug_commit:1de1738] max-w-full mq450:h-auto">
                  <div className="self-stretch bg-others-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-10 px-20 pb-[50px] box-border gap-[201px] [debug_commit:1de1738] max-w-full lg:pt-[26px] lg:pb-8 lg:box-border mq675:gap-[50px] mq675:pt-5 mq675:pb-[21px] mq675:box-border mq825:gap-[100px] mq825:pl-10 mq825:pr-10 mq825:box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                        <div className="flex flex-row items-start justify-start gap-[6px]">
                          <img
                            className="h-[30px] w-[30px] relative min-h-[30px]"
                            loading="lazy"
                            alt=""
                            src="/logo.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                            <div className="relative font-semibold inline-block min-w-[85px]">
                              Your logo
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 text-sm">
                          <div className="relative leading-[19.2px] font-semibold inline-block min-w-[59px]">
                            Page 1/2
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[527px] flex flex-row items-start justify-start pt-0 px-0 pb-[46px] box-border gap-[33px] max-w-full text-sm text-grey-scale-cool-grey font-martel-sans mq675:pb-[30px] mq675:box-border mq450:gap-[16px]">
                        <img
                          className="h-[688px] flex-1 relative max-w-[calc(100%_-_333px)] overflow-hidden object-cover mq675:max-w-full"
                          loading="lazy"
                          alt=""
                          src="/codychana0fbbs8rzaounsplash-1@2x.png"
                        />
                        <div className="w-[300px] flex flex-col items-start justify-start gap-[24px] mq675:hidden">
                          <h1 className="m-0 relative text-[40px] font-extrabold font-martel text-grey-scale-independence mq825:text-13xl mq450:text-5xl">
                            Banana Bread
                          </h1>
                          <div className="w-[220px] flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start">
                              <b className="relative inline-block min-w-[72px]">
                                Prep time
                              </b>
                              <div className="relative text-lg font-semibold text-grey-scale-independence inline-block min-w-[70px]">
                                10 mins
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start">
                              <b className="relative inline-block min-w-[76px]">
                                Cook time
                              </b>
                              <div className="relative text-lg font-semibold text-grey-scale-independence inline-block min-w-[70px] z-[1]">
                                60 mins
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <b className="relative inline-block min-w-[63px]">
                              Servings
                            </b>
                            <div className="relative text-lg font-semibold text-grey-scale-independence">
                              8 to 10 servings
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start">
                            <b className="relative inline-block min-w-[36px]">
                              Note
                            </b>
                            <div className="self-stretch relative text-lg font-semibold text-grey-scale-independence z-[1]">
                              The best bananas to use for banana bread are those
                              that are over-ripe. The yellow peels should be at
                              least half browned, and the bananas inside squishy
                              and browning.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[54px] text-13xl font-martel mq450:gap-[27px]">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                        <h1 className="m-0 w-[198px] h-[54px] relative text-inherit font-extrabold font-inherit flex items-center mq825:text-7xl mq450:text-lgi">
                          Ingredients
                        </h1>
                        <div className="self-stretch h-[297px] relative text-lg font-semibold font-martel-sans inline-block">
                          <ul className="m-0 font-inherit text-inherit pl-6">
                            <li className="mb-0">
                              2 to 3 medium (7" to 7-7/8" long) very ripe
                              bananas, peeled (about 1 1/4 to 1 1/2 cups mashed)
                            </li>
                            <li className="mb-0">
                              1/3 cup (76g) butter, unsalted or salted, melted
                            </li>
                            <li className="mb-0">
                              1/2 teaspoon baking soda (not baking powder)
                            </li>
                            <li className="mb-0">1 pinch salt</li>
                            <li className="mb-0">
                              3/4 cup (150g) sugar (1/2 cup if you would like it
                              less sweet, 1 cup if more sweet)
                            </li>
                            <li className="mb-0">1 large egg, beaten</li>
                            <li className="mb-0">1 teaspoon vanilla extract</li>
                            <li>1 1/2 cups (205g) all-purpose flour</li>
                          </ul>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-end text-lg font-open-sans">
                        <div className="w-[121px] flex flex-row items-start justify-start gap-[6px]">
                          <img
                            className="h-[30px] w-[30px] relative min-h-[30px]"
                            alt=""
                          />
                          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                            <div className="self-stretch h-[25px] relative font-semibold flex items-center">
                              Your logo
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-others-white overflow-hidden shrink-0 flex flex-col items-start justify-start pt-10 px-20 pb-[50px] box-border gap-[94px] [debug_commit:1de1738] max-w-full text-13xl font-martel lg:pt-[26px] lg:pb-8 lg:box-border mq675:gap-[23px] mq675:pt-5 mq675:pb-[21px] mq675:box-border mq825:gap-[47px] mq825:pl-10 mq825:pr-10 mq825:box-border">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
                      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-lg font-open-sans mq450:flex-wrap">
                        <div className="w-[121px] flex flex-row items-start justify-start gap-[6px]">
                          <img
                            className="h-[30px] w-[30px] relative min-h-[30px]"
                            alt=""
                          />
                          <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                            <div className="self-stretch h-[25px] relative font-semibold flex items-center">
                              Your logo
                            </div>
                          </div>
                        </div>
                        <div className="w-[59px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border text-sm">
                          <div className="self-stretch h-[19px] relative font-semibold flex items-center">
                            Page 2/2
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-5 gap-[24px]">
                        <h1 className="m-0 w-[131px] h-[54px] relative text-inherit font-extrabold font-inherit flex items-center mq825:text-7xl mq450:text-lgi">
                          Method
                        </h1>
                        <div className="self-stretch relative text-lg font-martel-sans">
                          <p className="m-0 font-extrabold">
                            Preheat the oven and prepare the pan:
                          </p>
                          <p className="m-0 font-semibold">
                            Preheat the oven to 350°F (175°C), and butter an 8 x
                            4-inch loaf pan.
                          </p>
                          <p className="m-0 font-semibold">&nbsp;</p>
                          <p className="m-0 font-extrabold">
                            Mash the bananas and add the butter:
                          </p>
                          <p className="m-0 font-semibold">
                            In a mixing bowl, mash the ripe bananas with a fork
                            until completely smooth. Stir the melted butter into
                            the mashed bananas.
                          </p>
                          <p className="m-0 font-semibold">&nbsp;</p>
                          <p className="m-0 font-extrabold">
                            Mix in the remaining ingredients:
                          </p>
                          <p className="m-0 font-semibold">
                            Mix in the baking soda and salt. Stir in the sugar,
                            beaten egg, and vanilla extract. Mix in the flour.
                          </p>
                          <p className="m-0 font-semibold">&nbsp;</p>
                          <p className="m-0 font-extrabold">Bake the bread:</p>
                          <p className="m-0 font-semibold">
                            Pour the batter into your prepared loaf pan. Bake
                            for 55 to 65 minutes at 350°F (175°C), or until a
                            toothpick or wooden skewer inserted into the center
                            comes out clean. A few dry crumbs are okay; streaks
                            of wet batter are not. If the outside of the loaf is
                            browned but the center is still wet, loosely tent
                            the loaf with foil and continue baking until the
                            loaf is fully baked.
                          </p>
                          <p className="m-0 font-semibold">&nbsp;</p>
                          <p className="m-0 font-extrabold">Cool and serve:</p>
                          <p className="m-0 font-semibold">
                            Remove from oven and let cool in the pan for a few
                            minutes. Then remove the banana bread from the pan
                            and let cool completely before serving. Slice and
                            serve. (A bread knife helps to make slices that
                            aren't crumbly.)
                          </p>
                          <p className="m-0 font-semibold">
                            Wrapped well, the banana bread will keep at room
                            temperature for 4 days. For longer storage,
                            refrigerate the loaf up to 5 days, or freeze it.
                          </p>
                        </div>
                      </div>
                      <div className="w-[470px] flex flex-col items-start justify-start gap-[24px] max-w-full">
                        <div className="w-[343px] flex flex-row flex-wrap items-start justify-start gap-[12px] max-w-full">
                          <h1 className="m-0 h-[54px] flex-1 relative text-inherit font-extrabold font-inherit flex items-center min-w-[162px] mq825:text-7xl mq450:text-lgi">
                            Nutrition facts
                          </h1>
                          <div className="w-[82px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border text-sm text-grey-scale-cool-grey font-martel-sans">
                            <b className="self-stretch h-[26px] relative inline-block">
                              per serving
                            </b>
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-sm text-grey-scale-cool-grey font-martel-sans mq675:flex-wrap">
                          <div className="w-[60px] flex flex-col items-start justify-start">
                            <b className="self-stretch relative">Calories</b>
                            <div className="w-8 h-[33px] relative text-lg font-semibold text-grey-scale-independence inline-block">
                              220
                            </div>
                          </div>
                          <div className="w-[60px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                            <b className="w-6 relative inline-block">Fat</b>
                            <div className="w-[21px] h-[33px] relative text-lg font-semibold text-grey-scale-independence inline-block z-[1]">
                              7g
                            </div>
                          </div>
                          <div className="w-[60px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                            <b className="self-stretch relative">Carbs</b>
                            <div className="w-8 h-[33px] relative text-lg font-semibold text-grey-scale-independence inline-block z-[1]">
                              37g
                            </div>
                          </div>
                          <div className="w-14 flex flex-col items-start justify-start">
                            <b className="self-stretch relative">Protein</b>
                            <div className="w-[21px] h-[33px] relative text-lg font-semibold text-grey-scale-independence inline-block z-[1]">
                              3g
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end text-lg font-open-sans">
                      <div className="w-[121px] flex flex-row items-start justify-start gap-[6px]">
                        <img
                          className="h-[30px] w-[30px] relative min-h-[30px]"
                          alt=""
                        />
                        <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                          <div className="self-stretch h-[25px] relative font-semibold flex items-center">
                            Your logo
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Devis1;
