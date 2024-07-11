 const Login = () => {
  

  return (
    <div className="w-full relative bg-others-white overflow-hidden flex flex-row items-end justify-start gap-[60px] leading-[normal] tracking-[normal] text-left text-29xl text-others-white font-body-small-medium mq675:gap-[30px] mq450:flex-wrap">
      <div className="w-[720px] flex flex-col items-start justify-start min-w-[720px] max-w-full mq675:min-w-full mq450:flex-1">
        <div className="self-stretch bg-greyscale-900 flex flex-col items-start justify-end max-w-full">
          <img
            className="self-stretch h-[727px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/photo@2x.png"
          />
          <div className="self-stretch box-border flex flex-col items-start justify-center pt-11 pb-20 pr-5 pl-[50px] gap-[24px] max-w-full border-t-[5px] border-solid border-primary-base mq675:pl-[25px] mq675:box-border">
            <div className="hidden flex-row items-center justify-start gap-[10px]">
              <img className="h-6 w-[25.7px] relative" alt="" />
              <img className="h-[18.2px] w-[121.2px] relative" alt="" />
            </div>
            <h1 className="m-0 w-[620px] relative text-inherit tracking-[-0.5px] leading-[120%] font-bold font-inherit inline-block max-w-full mq675:text-[38px] mq675:leading-[46px] mq825:text-[29px] mq825:leading-[35px]">
              Gérez vos clients, développez votre succès
            </h1>
            <div className="w-[620px] relative text-lg leading-[150%] inline-block max-w-full">
              Notre CRM, votre assurance prospérité.
            </div>
          </div>
        </div>
      </div>
      <div className="w-[540px] flex flex-col items-start justify-end pt-0 px-0 pb-[23px] box-border min-w-[540px] max-w-full text-sm text-greyscale-900 mq675:min-w-full mq450:flex-1">
        <div className="self-stretch flex flex-col items-end justify-start gap-[227px] max-w-full mq675:gap-[113px] mq825:gap-[57px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[81px] max-w-full mq675:gap-[40px] mq825:gap-[20px]">
            <img
              className="w-[100px] h-[61px] relative"
              loading="lazy"
              alt=""
              src="/ornament.svg"
            />
            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
              <form className="m-0 w-[500px] rounded-2xl flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[32px] max-w-full mq675:gap-[16px]">
                <h2 className="m-0 self-stretch relative text-5xl leading-[130%] font-bold font-body-small-medium text-greyscale-900 text-center mq825:text-lgi mq825:leading-[25px]">
                  Se connecter au CRM
                </h2>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border gap-[10px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block min-w-[68px]">
                        Username
                      </div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                      
                    </div>
                    <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-alerts-error-base">
                    <input
            type="text"
              placeholder="ASK_admin23"
          />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                        alt=""
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[4px] max-w-full">
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/alertcircle.svg"
                      />
                      <div className="flex-1 relative text-xs leading-[160%] font-body-small-medium text-alerts-error-base text-left inline-block max-w-[calc(100%_-_22px)]">
                        L'e-mail que vous avez saisi n'est pas enregistré,
                        veuillez vérifier à nouveau
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border gap-[10px] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                      <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-900 text-left inline-block min-w-[88px]">
                        Mot de Passe
                      </div>
                      <div className="relative text-sm leading-[160%] font-medium font-body-small-medium text-alerts-error-base text-left inline-block min-w-[7px]">
                        *
                      </div>
                    </div>
                    <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300 mq825:flex-wrap">
                    <input
            type="password"
            />
                      <img
                        className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                        loading="lazy"
                        alt=""
                        src="/eyeoff.svg"
                      />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq825:flex-wrap">
                    <div className="w-[165.5px] flex flex-row items-start justify-start gap-[8px]">
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <div className="w-5 h-5 relative">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-primary-base" />
                         
                           
                        </div>
                      </div>
                      <div className="flex-1 relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-600 text-left">
                        Remember Me
                      </div>
                    </div>
                    <a
                      className="flex-1 relative text-sm leading-[160%] font-medium font-body-small-medium text-greyscale-600 text-right inline-block [text-decoration:none] min-w-[109px]"
                      href="http://13.37.150.145/#/password-reset"
                      target="_blank"
                    >
                      Mot de passe oublié?
                    </a>
                  </div>
                </div>
                <button className="cursor-pointer [border:none] py-4 px-5 bg-greyscale-900 self-stretch rounded-3xs flex flex-row items-start justify-center gap-[8px]">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                  <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-small-medium text-others-white text-center min-w-[45px]">
                Login

                  </b>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                  />
                </button>
                <div className="self-stretch relative text-sm leading-[160%] font-medium font-body-small-medium text-center">
                  <span className="text-greyscale-500">Nouveau ici?</span>
                  <span className="text-primary-base"> créer un compte</span>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-row items-start justify-end py-0 px-8 box-border max-w-full">
            <div className="flex flex-row items-start justify-start gap-[9px] max-w-full mq675:flex-wrap">
              <div className="relative leading-[160%] font-medium text-greyscale-500 whitespace-nowrap">
                © 2023 CRM . Alrights reserved.
              </div>
              <div className="relative leading-[160%] font-medium inline-block min-w-[128px] whitespace-nowrap">{`Terms & Conditions`}</div>
              <div className="relative leading-[160%] font-medium inline-block min-w-[92px]">
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
