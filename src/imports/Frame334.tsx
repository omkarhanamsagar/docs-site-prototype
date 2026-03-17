import svgPaths from "./svg-6h9jifxlz2";

function Icon() {
  return (
    <div className="content-stretch flex items-center pt-[3px] relative shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Events">
        <div className="-translate-y-1/2 absolute aspect-[176/160] left-[4.17%] right-[4.17%] top-1/2" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 16.6667">
            <path d={svgPaths.pa9a7f00} fill="var(--fill-0, #1C2B34)" fillOpacity="0.98" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-start px-[20px] py-[12px] relative size-full">
      <Icon />
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[18px] text-[rgba(28,43,52,0.98)] whitespace-nowrap">Service Management</p>
    </div>
  );
}