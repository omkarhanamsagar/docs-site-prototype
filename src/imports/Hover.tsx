import svgPaths from "./svg-lanf906ou0";

export default function Hover() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="hover">
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#3f4ca5] text-[16px]">Docs link</p>
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ArrowRight">
        <div className="absolute inset-[9.81%_2.44%_9.82%_2.6%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1925 12.8593">
            <path d={svgPaths.p149a3b80} fill="var(--fill-0, #3F4CA5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}