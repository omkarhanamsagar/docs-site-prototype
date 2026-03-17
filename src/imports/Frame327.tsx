import svgPaths from "./svg-64nu9567k0";

function Frame() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Eye">
        <div className="absolute inset-[14.56%_0.54%_14.6%_0.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6923 19.8335">
            <path d={svgPaths.pec22000} fill="url(#paint0_linear_1_91)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_91" x1="-1.90543" x2="28.9839" y1="-0.43119" y2="-0.111541">
                <stop offset="0.00652304" stopColor="#9B33EF" />
                <stop offset="1" stopColor="#646DF9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px]">Observability</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[34.5px] not-italic relative shrink-0 text-[23px] text-black w-[511px] whitespace-pre-wrap">Some description? Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
    </div>
  );
}

function Frame5() {
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

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame5 />
    </div>
  );
}

function Frame8() {
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame8 />
    </div>
  );
}

function Frame12() {
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

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame12 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[70px] items-start not-italic p-[48px] relative w-full">
          <Frame6 />
          <Frame7 />
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[36px] items-start min-h-px min-w-px relative">
      <Frame3 />
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Eye">
        <div className="absolute inset-[14.56%_0.54%_14.6%_0.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6923 19.8335">
            <path d={svgPaths.pec22000} fill="url(#paint0_linear_1_91)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_91" x1="-1.90543" x2="28.9839" y1="-0.43119" y2="-0.111541">
                <stop offset="0.00652304" stopColor="#9B33EF" />
                <stop offset="1" stopColor="#646DF9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px]">Digital Experience</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame1 />
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[34.5px] not-italic relative shrink-0 text-[23px] text-black w-[290px] whitespace-pre-wrap">Some description? Lorem ipsum dolor sit amet,</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Noto_Sans_SemiBold:Regular',sans-serif] gap-[20px] items-start leading-[1.5] relative shrink-0 text-[#5e6dd6] text-[16px] whitespace-pre-wrap">
      <p className="min-w-full relative shrink-0 w-[min-content]">Docs link</p>
      <p className="relative shrink-0 w-[260px]">{`This is what a  long docs link name looks like`}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">{`This is what a  long docs link name looks like`}</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">Docs link</p>
      <p className="min-w-full relative shrink-0 w-[min-content]">Docs link</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0">
      <p className="font-['Noto_Sans:Bold',sans-serif] leading-[24px] relative shrink-0 text-[14px] text-[rgba(28,43,52,0.68)] tracking-[0.4px]">SUBHEADER</p>
      <Frame17 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-full items-start p-[48px] relative">
          <Frame16 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative self-stretch shrink-0">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame13 />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start px-[49px] py-[120px] relative size-full">
      <Frame11 />
    </div>
  );
}