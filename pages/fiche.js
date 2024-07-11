import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";

const Fiche = () => {
  return (
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
       <Top1 />
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
    <Navigation1 />
 <section className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full text-left text-3xs text-greyscale-500 font-body-small-medium">  
<div className="flex-1 rounded-2xl bg-others-white overflow-hidden flex flex-col items-start justify-start py-6 pr-[21px] pl-6 box-border gap-[24px] max-w-full mq825:pt-5 mq825:pb-5 mq825:box-border">
   <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[20px] max-w-full text-5xl text-greyscale-900">
     <div className="flex-1 flex flex-col items-start justify-start gap-[8px] min-w-[425px] max-w-full mq675:min-w-full">
       <h1 className="m-0 self-stretch relative text-inherit leading-[130%] font-bold font-inherit mq450:text-lgi mq450:leading-[25px]">
         Fiches
       </h1>
       <div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">
         Liste des fiches
       </div>
     </div>
     <div className="flex flex-row items-start justify-start gap-[20px] max-w-full mq450:flex-wrap">
       <button className="cursor-pointer py-3.5 px-[37px] bg-[transparent] rounded-3xs flex flex-row items-center justify-center gap-[6px] border-[1px] border-solid border-greyscale-900">
         <img
           className="h-5 w-5 relative"
           alt=""
           src="/layoutlist.svg"
         />
         <b className="relative text-base tracking-[0.3px] leading-[150%] inline-block font-body-medium-medium text-greyscale-900 text-center min-w-[48px]">
           filtrer
         </b>
         <img
           className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
           alt=""
         />
       </button>
       <button className="cursor-pointer [border:none] py-4 px-6 bg-greyscale-900 rounded-3xs flex flex-row items-center justify-center gap-[6px]">
         <img
           className="h-5 w-5 relative overflow-hidden shrink-0"
           alt=""
           src="/plus.svg"
         />
         <b className="relative text-base tracking-[0.3px] leading-[150%] font-body-medium-medium text-others-white text-center">{`Ajouter une fiche `}</b>
         <img
           className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
           alt=""
         />
       </button>
     </div>
   </div>
   <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[16px] max-w-full text-sm">
     <div className="flex-1 rounded-3xs flex flex-col items-start justify-start gap-[10px] min-w-[357px] max-w-full mq675:min-w-full">
       <div className="w-[315px] hidden flex-row items-start justify-start gap-[1px]">
         <div className="h-[22px] relative leading-[160%] font-medium inline-block">
           Title Field
         </div>
         <div className="relative leading-[160%] font-medium text-alerts-error-base">
           *
         </div>
       </div>
       <div className="self-stretch rounded-3xs box-border flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] max-w-full border-[1px] border-solid border-greyscale-300">
         <input
           className="w-[calc(100%_-_58px)] [border:none] [outline:none] font-body-medium-medium text-sm bg-[transparent] h-[22px] flex-1 relative leading-[160%] text-greyscale-500 text-left flex items-center min-w-[150px] max-w-[calc(100%_-_30px)] p-0"
           placeholder="Search employee"
           type="text"
         />
         <img
           className="h-5 w-5 relative"
           loading="lazy"
           alt=""
           src="/search.svg"
         />
       </div>
     </div>
     <div className="w-[150px] flex flex-col items-start justify-start gap-[10px]">
       <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
         <div className="h-[22px] relative leading-[160%] font-medium inline-block">
           Title Field
         </div>
         <div className="relative leading-[160%] font-medium text-alerts-error-base">
           *
         </div>
       </div>
       <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
         <div className="flex-1 relative leading-[160%] font-medium">
           Numéro
         </div>
         <img
           className="h-5 w-5 relative overflow-hidden shrink-0"
           alt=""
           src="/chevrondown-8.svg"
         />
       </div>
     </div>
     <div className="w-[166px] flex flex-col items-start justify-start gap-[10px]">
       <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
         <div className="h-[22px] relative leading-[160%] font-medium inline-block">
           Title Field
         </div>
         <div className="relative leading-[160%] font-medium text-alerts-error-base">
           *
         </div>
       </div>
       <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
         <div className="flex-1 relative leading-[160%] font-medium">
           Ville
         </div>
         <img
           className="h-5 w-5 relative overflow-hidden shrink-0"
           alt=""
           src="/chevrondown-8.svg"
         />
       </div>
     </div>
     <div className="w-[150px] flex flex-col items-start justify-start gap-[10px]">
       <div className="self-stretch hidden flex-row items-start justify-start gap-[1px]">
         <div className="h-[22px] relative leading-[160%] font-medium inline-block">
           Title Field
         </div>
         <div className="relative leading-[160%] font-medium text-alerts-error-base">
           *
         </div>
       </div>
       <div className="self-stretch rounded-3xs flex flex-row items-start justify-start py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-greyscale-300">
         <div className="flex-1 relative leading-[160%] font-medium">
           Status
         </div>
         <img
           className="h-5 w-5 relative overflow-hidden shrink-0"
           alt=""
           src="/chevrondown-8.svg"
         />
       </div>
     </div>
   </div>
   <div className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px]">
     <div className="w-[210px] flex flex-col items-start justify-start">
       <button className="cursor-pointer [border:none] py-[18.5px] px-4 bg-greyscale-50 self-stretch rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs overflow-hidden flex flex-row items-start justify-start gap-[10px]">
         <input className="m-0 h-[17.5px] w-4" type="checkbox" />
         <b className="flex-1 relative text-xs tracking-[0.2px] leading-[160%] font-body-medium-medium text-greyscale-600 text-left">{`Source & Numéro`}</b>
         <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
           <img
             className="w-3.5 h-3.5 relative"
             alt=""
             src="/sort.svg"
           />
         </div>
       </button>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
           <input
             className="cursor-pointer m-0 h-4 w-4 relative"
             type="radio"
             name="radioGroup-1"
           />
           <img
             className="h-6 w-6 relative object-contain"
             loading="lazy"
             alt=""
             src="/avatarwoman2@2x.png"
           />
           <div className="flex-1 flex flex-col items-start justify-start">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
           <input
             className="cursor-pointer m-0 h-4 w-4 relative"
             type="radio"
             name="radioGroup-1"
           />
           <img
             className="h-6 w-6 relative object-contain"
             loading="lazy"
             alt=""
             src="/avatarwoman2@2x.png"
           />
           <div className="flex-1 flex flex-col items-start justify-start">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-start justify-start text-center text-3xs text-primary-base">
         <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-3.5 px-4 gap-[12px]">
           <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
             <input
               className="cursor-pointer m-0 w-4 h-4 relative"
               type="radio"
               name="radioGroup-1"
             />
           </div>
           <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
             <div className="w-6 h-6 rounded-981xl bg-primary-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[3px] pl-[5px] box-border">
               <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[16px]">
                 SA
               </div>
             </div>
           </div>
           <div className="flex-1 flex flex-col items-start justify-start text-left text-xs text-greyscale-900">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
           <input
             className="cursor-pointer m-0 h-4 w-4 relative"
             type="radio"
             name="radioGroup-1"
           />
           <img
             className="h-6 w-6 relative object-contain"
             loading="lazy"
             alt=""
             src="/avatarwoman2@2x.png"
           />
           <div className="flex-1 flex flex-col items-start justify-start">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
           <input
             className="cursor-pointer m-0 h-4 w-4 relative"
             type="radio"
             name="radioGroup-1"
           />
           <img
             className="h-6 w-6 relative object-contain"
             loading="lazy"
             alt=""
             src="/avatarwoman2@2x.png"
           />
           <div className="flex-1 flex flex-col items-start justify-start">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
           <input
             className="cursor-pointer m-0 h-4 w-4 relative"
             type="radio"
             name="radioGroup-1"
           />
           <img
             className="h-6 w-6 relative object-contain"
             loading="lazy"
             alt=""
             src="/avatarwoman2@2x.png"
           />
           <div className="flex-1 flex flex-col items-start justify-start">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-3.5 px-4 gap-[12px]">
           <input
             className="cursor-pointer m-0 h-4 w-4 relative"
             type="radio"
             name="radioGroup-1"
           />
           <img
             className="h-6 w-6 relative object-contain"
             loading="lazy"
             alt=""
             src="/avatarwoman2@2x.png"
           />
           <div className="flex-1 flex flex-col items-start justify-start">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-start justify-start text-center text-3xs text-primary-base">
         <div className="self-stretch overflow-hidden flex flex-row items-start justify-start py-3.5 px-4 gap-[12px]">
           <div className="flex flex-col items-start justify-start pt-[9.5px] px-0 pb-0">
             <input
               className="cursor-pointer m-0 w-4 h-4 relative"
               type="radio"
               name="radioGroup-1"
             />
           </div>
           <div className="flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0">
             <div className="w-6 h-6 rounded-981xl bg-primary-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[5px] pb-1 pr-[3px] pl-[5px] box-border">
               <div className="relative tracking-[0.4px] leading-[150%] uppercase font-extrabold inline-block min-w-[16px]">
                 SA
               </div>
             </div>
           </div>
           <div className="flex-1 flex flex-col items-start justify-start text-left text-xs text-greyscale-900">
             <div className="self-stretch relative leading-[160%] font-medium">
               Source Alpha
             </div>
             <div className="self-stretch relative text-3xs leading-[160%] text-greyscale-500">
               #70032
             </div>
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
     </div>
     <div className="flex-1 flex flex-col items-start justify-start min-w-[183px]">
       <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px] whitespace-nowrap text-greyscale-600">
         <b className="flex-1 relative tracking-[0.2px] leading-[160%]">{`Nom & prénom`}</b>
         <img
           className="h-3.5 w-3.5 relative"
           alt=""
           src="/sort.svg"
         />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <a
             className="flex-1 relative leading-[160%] text-[inherit] [text-decoration:none]"
             href="http://13.37.150.145/#/admin-courtier/fiche"
             target="_blank"
           >
             Olivia Wild
           </a>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Graphic Designer
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Finance
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Project Manager
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Creative Director
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Lead Designer
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             IT Support
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             3D Designer
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
     </div>
     <div className="w-[137px] flex flex-col items-start justify-start">
       <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px] text-greyscale-600">
         <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
           Ville
         </b>
         <img
           className="h-3.5 w-3.5 relative"
           alt=""
           src="/sort.svg"
         />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">Paris</div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             @Pristiacandra
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             @Pristiacandra
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             @Pristiacandra
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             @Pristiacandra
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             @Pristiacandra
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             @Pristiacandra
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             @Pristiacandra
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
     </div>
     <div className="w-[137px] flex flex-col items-start justify-start">
       <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[9px] px-4 gap-[10px] text-greyscale-600">
         <b className="h-[38px] flex-1 relative tracking-[-0.11px] leading-[160%] flex items-center">
           Date Création
         </b>
         <img
           className="h-3.5 w-3.5 relative"
           alt=""
           src="/sort.svg"
         />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             14 Dec 2023
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Team Product
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Team Product
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Team Product
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Team Product
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Team Product
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Team Product
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[22px] px-4 gap-[12px]">
           <div className="h-4 w-4 relative hidden">
             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
           </div>
           <div className="flex-1 relative leading-[160%]">
             Team Product
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
             alt=""
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
     </div>
     <div className="w-[155px] flex flex-col items-start justify-start text-greyscale-600">
       <div className="self-stretch bg-greyscale-50 overflow-hidden flex flex-row items-center justify-start py-[18.5px] px-4 gap-[10px]">
         <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
           Status
         </b>
         <img className="h-3.5 w-3.5 relative hidden" alt="" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <button className="cursor-pointer [border:none] py-1 px-7 bg-primary-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-200">
             <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-medium text-alerts-success-base text-right min-w-[38px]">
               TRAITE
             </b>
           </button>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <button className="cursor-pointer [border:none] py-1 px-7 bg-secondary-200 rounded-lg flex flex-row items-center justify-center hover:bg-wheat">
             <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-medium text-alerts-warning-dark text-right min-w-[39px]">
               VIERGE
             </b>
           </button>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center text-right text-3xs text-others-portage">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <div className="rounded-lg bg-lavender flex flex-row items-center justify-center py-1 px-[22px]">
             <b className="relative tracking-[0.2px] leading-[160%] inline-block min-w-[51px]">
               RECYCLEE
             </b>
           </div>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <button className="cursor-pointer [border:none] py-1 px-7 bg-primary-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-200">
             <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-medium text-alerts-success-base text-right min-w-[38px]">
               TRAITE
             </b>
           </button>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <button className="cursor-pointer [border:none] py-1 px-7 bg-alerts-error-light rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-100">
             <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-medium text-alerts-success-base text-right min-w-[38px]">
               TRAITE
             </b>
           </button>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <button className="cursor-pointer [border:none] py-1 px-7 bg-primary-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-200">
             <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-medium text-alerts-success-base text-right min-w-[38px]">
               TRAITE
             </b>
           </button>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <button className="cursor-pointer [border:none] py-1 px-7 bg-secondary-200 rounded-lg flex flex-row items-center justify-center hover:bg-wheat">
             <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-medium text-alerts-warning-dark text-right min-w-[39px]">
               VIERGE
             </b>
           </button>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-start py-[19.5px] px-4 gap-[12px]">
           <button className="cursor-pointer [border:none] py-1 px-7 bg-primary-100 rounded-lg flex flex-row items-center justify-center hover:bg-gainsboro-200">
             <b className="relative text-3xs tracking-[0.2px] leading-[160%] inline-block font-body-medium-medium text-alerts-success-base text-right min-w-[38px]">
               TRAITE
             </b>
           </button>
           <img
             className="h-4 w-4 relative overflow-hidden shrink-0"
             loading="lazy"
             alt=""
             src="/chevrondown-11.svg"
           />
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
     </div>
     <div className="w-[146px] flex flex-col items-start justify-start text-right text-greyscale-600">
       <div className="self-stretch rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-greyscale-50 overflow-hidden flex flex-row items-center justify-end py-[18.5px] px-4">
         <b className="flex-1 relative tracking-[0.2px] leading-[160%]">
           Action
         </b>
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               loading="lazy"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               loading="lazy"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               loading="lazy"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               loading="lazy"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               loading="lazy"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
       <div className="self-stretch flex flex-col items-center justify-center">
         <div className="overflow-hidden flex flex-row items-center justify-end py-[16.5px] pr-4 pl-5 gap-[10px]">
           <div className="rounded-lg bg-primary-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative overflow-hidden shrink-0"
               loading="lazy"
               alt=""
               src="/eye.svg"
             />
           </div>
           <div className="rounded-lg bg-others-blue flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/edit.svg"
             />
           </div>
           <div className="rounded-lg bg-alerts-error-base flex flex-row items-center justify-center p-[7px]">
             <img
               className="h-4 w-4 relative"
               alt=""
               src="/trash.svg"
             />
           </div>
         </div>
         <div className="self-stretch h-px bg-greyscale-200" />
       </div>
     </div>
   </div>
   <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq675:flex-wrap mq675:justify-center">
     <div className="flex flex-row items-start justify-start gap-[24px]">
       <div className="w-8 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-greyscale-200">
         <img
           className="h-4 w-4 relative overflow-hidden shrink-0"
           loading="lazy"
           alt=""
           src="/chevronleft-2.svg"
         />
       </div>
       <div className="flex flex-row items-start justify-start">
         <div className="rounded-3xs bg-greyscale-100 overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[13px]">
           <div className="relative leading-[160%] font-semibold inline-block min-w-[6px]">
             1
           </div>
         </div>
         <div className="flex flex-row items-start justify-start">
           <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-3">
             <div className="relative leading-[160%] font-semibold inline-block min-w-[8px]">
               2
             </div>
           </div>
           <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-3">
             <div className="relative leading-[160%] font-semibold inline-block min-w-[8px]">
               3
             </div>
           </div>
           <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[10.5px]">
             <div className="relative leading-[160%] font-semibold inline-block min-w-[11px]">
               ...
             </div>
           </div>
           <div className="overflow-hidden flex flex-col items-center justify-center py-[6.5px] px-[9.5px]">
             <div className="relative leading-[160%] font-semibold inline-block min-w-[13px]">
               10
             </div>
           </div>
         </div>
       </div>
       <div className="w-8 rounded-lg box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-1.5 px-[7px] border-[1px] border-solid border-greyscale-200">
         <img
           className="h-4 w-4 relative overflow-hidden shrink-0"
           loading="lazy"
           alt=""
           src="/chevronright.svg"
         />
       </div>
     </div>
     <div className="flex flex-row items-center justify-start gap-[15px] text-greyscale-600">
       <div className="relative leading-[160%] font-medium">
         Showing 1 to 8 of 50 entries
       </div>
       <div className="w-[87px] rounded-lg bg-others-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-center py-[5px] px-[9px] gap-[10px] whitespace-nowrap text-greyscale-900 border-[1px] border-solid border-greyscale-200">
         <div className="relative leading-[160%] font-medium inline-block min-w-[41px]">
           Show 8
         </div>
         <img
           className="h-4 w-4 relative overflow-hidden shrink-0"
           alt=""
           src="/chevronup.svg"
         />
       </div>
              <div className="flex flex-row items-center justify-start gap-[15px] text-greyscale-600">
                 
                 
              </div>
            </div>
          </div>
          </div>
         </section>
         </main>

        </div>

  );
};

export default Fiche;
