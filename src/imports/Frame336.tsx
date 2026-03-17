import svgPaths from "./svg-dnnhtunjky";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[20px] py-[12px] relative size-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="SecurityPlatform">
        <div className="absolute inset-[2.48%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19.0084">
            <path d={svgPaths.pac96f00} fill="var(--fill-0, #1C2B34)" fillOpacity="0.98" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(28,43,52,0.98)] whitespace-nowrap">Security</p>
    </div>
  );
}