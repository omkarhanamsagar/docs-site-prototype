import svgPaths from "./svg-1k74dulfe2";

function H() {
  return (
    <div className="absolute content-stretch flex h-[36.001px] items-start left-[40px] top-0 w-[165.082px]" data-name="h2">
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px]">Observability</p>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[19.843px] overflow-clip relative shrink-0 w-full" data-name="svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6966 19.843">
        <path d={svgPaths.p351fb2f0} fill="url(#paint0_linear_1_1030)" id="Vector" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_1030" x1="-1.90573" x2="28.9884" y1="-0.431396" y2="-0.1118">
            <stop offset="0.00652304" stopColor="#9B33EF" />
            <stop offset="1" stopColor="#646DF9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[19.843px] items-start relative shrink-0 w-full" data-name="Container">
      <Svg />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pl-[0.156px] pr-[0.147px] pt-[4.07px] size-[28px] top-[4px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36.001px] relative shrink-0 w-[205.079px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <H />
        <Container3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Container2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[696.264px]" data-name="Container">
      <Container1 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_SemiBold:Regular',sans-serif] gap-[20px] items-start leading-[1.5] relative shrink-0 text-[#5e6dd6] text-[16px] w-full whitespace-pre-wrap">
      <p className="relative shrink-0 w-full">Docs link</p>
      <p className="relative shrink-0 w-full">{`This is what a  long docs link name looks like`}</p>
      <p className="relative shrink-0 w-full">Docs link</p>
      <p className="relative shrink-0 w-full">Docs link</p>
      <p className="relative shrink-0 w-full">Docs link</p>
      <p className="relative shrink-0 w-full">Docs link</p>
      <p className="relative shrink-0 w-full">{`This is what a  long docs link name looks like`}</p>
      <p className="relative shrink-0 w-full">Docs link</p>
      <p className="relative shrink-0 w-full">Docs link</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_SemiBold:Regular',sans-serif] gap-[20px] items-start leading-[1.5] relative shrink-0 text-[#5e6dd6] text-[16px] w-full">
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`This is what a  long docs link name looks like`}</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame4 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[56px] items-start relative shrink-0 w-full">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_SemiBold:Regular',sans-serif] gap-[20px] items-start leading-[1.5] relative shrink-0 text-[#5e6dd6] text-[16px] w-full">
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`This is what a  long docs link name looks like`}</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`This is what a  long docs link name looks like`}</p>
      <p className="relative shrink-0">Docs link</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_SemiBold:Regular',sans-serif] gap-[20px] items-start leading-[1.5] relative shrink-0 text-[#5e6dd6] text-[16px] w-full">
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`This is what a  long docs link name looks like`}</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="relative shrink-0">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content] whitespace-pre-wrap">{`This is what a  long docs link name looks like`}</p>
      <p className="relative shrink-0">Docs link</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px opacity-0 relative">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame7 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[56px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame11 />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[56px] items-start not-italic px-[52px] py-[48px] relative w-full">
          <Frame10 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start relative w-full">
        <Frame8 />
        <Frame />
      </div>
    </div>
  );
}

export default function Div() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start pl-[23.995px] pr-[23.99px] pt-[79.994px] relative size-full" data-name="div">
      <Frame9 />
    </div>
  );
}