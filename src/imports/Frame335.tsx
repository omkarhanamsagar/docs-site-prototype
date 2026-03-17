import svgPaths from "./svg-i0gohc99sa";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative size-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Ai">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g id="Vector">
            <path d={svgPaths.p1f684780} fill="var(--fill-0, #1C2B34)" fillOpacity="0.98" />
            <path d={svgPaths.p28bc3100} fill="var(--fill-0, #1C2B34)" fillOpacity="0.98" />
          </g>
        </svg>
      </div>
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(28,43,52,0.98)] whitespace-nowrap">AI</p>
    </div>
  );
}