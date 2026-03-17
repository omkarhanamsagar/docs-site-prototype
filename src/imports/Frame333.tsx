import svgPaths from "./svg-97pb5on3of";

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-end px-[20px] py-[12px] relative size-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Ci">
        <div className="absolute inset-[4.69%_3.64%_3.64%_4.69%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3336 18.3336">
            <path d={svgPaths.p1ca2a200} fill="var(--fill-0, #1C2B34)" fillOpacity="0.98" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(28,43,52,0.98)] whitespace-nowrap">Software Delivery</p>
    </div>
  );
}