import svgPaths from "./svg-ukg4wfvdln";

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[36px] items-center relative rounded-[8px] shrink-0">
      <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Eye">
        <div className="absolute inset-[14.56%_0.54%_14.6%_0.56%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6923 19.8335">
            <path d={svgPaths.pec22000} fill="url(#paint0_linear_171_290)" id="Vector" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_171_290" x1="-1.90543" x2="28.9839" y1="-0.43119" y2="-0.111541">
                <stop offset="0.00652304" stopColor="#9B33EF" />
                <stop offset="1" stopColor="#646DF9" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px] whitespace-nowrap">Software Delivery</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[340px]">
      <Frame1 />
      <p className="font-['Noto_Sans:Regular',sans-serif] leading-[22.5px] min-w-full not-italic relative shrink-0 text-[15px] text-[rgba(28,43,52,0.68)] w-[min-content]">{`End-to-end, simplified visibility into your stack’s health & performance`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Frame">
          <path d={svgPaths.p1f07a580} fill="var(--fill-0, #1C2B34)" fillOpacity="0.5" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full">
      <Frame2 />
      <Frame />
    </div>
  );
}