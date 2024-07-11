 
import Top1 from "../components/top1";
import Navigation1 from "../components/navigation1";
const Modifier = () => {
    return (
        
    <div className="w-full relative bg-greyscale-50 overflow-hidden flex flex-row items-start justify-start leading-[normal] tracking-[normal] text-left text-sm text-greyscale-900 font-body-large-bold mq825:pl-5 mq825:pr-5 mq825:box-border">
    <div className="w-[280px] bg-others-white box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-6 px-[31px] border-r-[1px] border-solid border-greyscale-300 mq825:hidden mq825:pt-5 mq825:pb-5 mq825:box-border">
       <Top1 />
    </div>
    <main className="flex-1 flex flex-col items-start justify-start gap-[19px] max-w-[calc(100%_-_280px)] mq825:max-w-full">
    <Navigation1 />
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-6">
<div className="flex-1 rounded-2xl bg-others-white overflow-hidden flex flex-col items-start justify-center p-6 gap-[24px]">
<div className="self-stretch flex flex-row items-center justify-start text-5xl">
<div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
<b className="self-stretch relative leading-[130%]">Devis</b>
<div className="self-stretch relative text-sm leading-[160%] font-medium text-greyscale-600">Gérez votre devis</div>
</div>
</div>
<div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start p-6 border-[1px] border-solid border-greyscale-200">
<div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
<div className="flex-1 flex flex-row items-center justify-start">
<div className="relative leading-[150%] font-semibold">Informations Client</div>
</div>
<img className="w-6 relative h-6" alt="" src="edit.svg" />
<img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-down.svg" />
</div>
</div>
<div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start p-6 border-[1px] border-solid border-greyscale-200">
<div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
<div className="flex-1 flex flex-row items-center justify-start">
<div className="relative leading-[150%] font-semibold">Informations conjoint</div>
</div>
<img className="w-6 relative h-6" alt="" src="edit.svg" />
<img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-down.svg" />
</div>
</div>
<div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start p-6 border-[1px] border-solid border-greyscale-200">
<div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
<div className="flex-1 flex flex-row items-center justify-start">
<div className="relative leading-[150%] font-semibold">Informations enfants</div>
</div>
<img className="w-6 relative h-6" alt="" src="edit.svg" />
<img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="users-plus.svg" />
<img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-down.svg" />
</div>
</div>
<div className="self-stretch rounded-2xl bg-others-white flex flex-col items-start justify-start p-6 gap-[16px] border-[1px] border-solid border-greyscale-200">
<div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
<div className="flex-1 flex flex-row items-center justify-start">
<div className="relative leading-[150%] font-semibold">Informations Client</div>
</div>
<img className="w-6 relative h-6" alt="" src="edit.svg" />
<img className="w-6 relative h-6 overflow-hidden shrink-0" alt="" src="chevron-down.svg" />
</div>
<div className="self-stretch bg-greyscale-200 h-px" />
<div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-sm text-greyscale-600">
<div className="flex-1 relative h-[262px]">
<div className="absolute top-[0px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Date d’effet</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">{`Pristia `}</div>
</div>
<div className="absolute top-[38px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Ventes couplées</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">Offre cabinet (-10%)</div>
</div>
<div className="absolute top-[76px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Prélevement auto</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">Non</div>
</div>
<div className="absolute top-[114px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Observations</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sagittis nisi ac feugiat congue.</div>
</div>
<div className="absolute top-[196px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Avez vous une complémentaire actuellement ?</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">Non</div>
</div>
</div>
<div className="flex-1 relative h-[196px]">
<div className="absolute top-[0px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Formule Choisie</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900 whitespace-pre-wrap">Niveau 2</div>
</div>
<div className="absolute top-[38px] left-[0px] w-[500px] h-[22px] text-greyscale-900">
<div className="absolute top-[0px] left-[0px] leading-[160%] text-greyscale-600 inline-block w-[150px]">Renfort choisie</div>
<div className="absolute top-[0px] left-[183px] leading-[160%] font-semibold inline-block w-[233px]">Pack confort (Niveau Avantage)</div>
<div className="absolute top-[3px] left-[159px] w-4 h-4">
<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
</div>
<div className="absolute top-[29px] left-[183px] leading-[160%] font-semibold inline-block w-[238px]">Pack confort (Niveau Equilibre)</div>
<div className="absolute top-[60px] left-[183px] leading-[160%] font-semibold inline-block w-[238px]">Pack confort (Niveau Privilege)</div>
</div>
<div className="absolute top-[70px] left-[159px] w-4 h-4">
<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-seagreen" />
<img className="absolute h-[66.88%] w-[66.88%] top-[16.67%] right-[16.46%] bottom-[16.46%] left-[16.67%] max-w-full overflow-hidden max-h-full" alt="" src="check.svg" />
</div>
<div className="absolute top-[101px] left-[159px] w-4 h-4">
<div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md box-border border-[1px] border-solid border-greyscale-400" />
</div>
<div className="absolute top-[136px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Fractionnement</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">Mensuel</div>
</div>
<div className="absolute top-[174px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Mode de paiement</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">Prelevement</div>
</div>
<div className="absolute top-[212px] left-[0px] w-[500px] flex flex-row items-center justify-start gap-[10px]">
<div className="w-[150px] relative leading-[160%] inline-block shrink-0">Résiliation infra-annuelle</div>
<div className="flex-1 relative leading-[160%] font-semibold text-greyscale-900">Non</div>
</div>
</div>
</div>
</div>
<div className="rounded-3xs bg-greyscale-900 h-14 flex flex-row items-center justify-start py-[21px] px-6 box-border gap-[8px] text-center text-base text-others-white">
<img className="w-5 relative h-5 overflow-hidden shrink-0" alt="" src="arrow-narrow-right.svg" />
<b className="relative tracking-[0.3px] leading-[150%]">Etape suivante</b>
</div>
</div>
</div>
</main>
</div>

 );
};
export default Modifier;