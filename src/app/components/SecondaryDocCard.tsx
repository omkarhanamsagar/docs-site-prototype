import React from "react";
import softwareDeliverySvg from "../../imports/svg-97pb5on3of";
import serviceManagementSvg from "../../imports/svg-6h9jifxlz2";
import aiSvg from "../../imports/svg-i0gohc99sa";
import securitySvg from "../../imports/svg-dnnhtunjky";
import arrowSvgPaths from "../../imports/svg-lanf906ou0";

const EASING = "cubic-bezier(0.25, 0.1, 0.25, 1)";
const EASING_OUT = "cubic-bezier(0.2, 0, 0, 1)";

/* ─── Icons at 28px with the same purple→indigo gradient as the main sections ─── */

function SoftwareDeliveryIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[4.69%_3.64%_3.64%_4.69%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3336 18.3336">
          <path d={softwareDeliverySvg.p1ca2a200} fill="url(#grad_sd)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="grad_sd" x1="-1.26" x2="19.14" y1="-0.4" y2="-0.1">
              <stop offset="0.00652304" stopColor="#9B33EF" />
              <stop offset="1" stopColor="#646DF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ServiceManagementIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[4.17%_4.17%_4.17%_4.17%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 16.6667">
          <path d={serviceManagementSvg.pa9a7f00} fill="url(#grad_sm)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="grad_sm" x1="-1.26" x2="19.14" y1="-0.36" y2="-0.1">
              <stop offset="0.00652304" stopColor="#9B33EF" />
              <stop offset="1" stopColor="#646DF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function AiIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[5.6%_5.6%_5.6%_5.6%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={aiSvg.p1f684780} fill="url(#grad_ai)" />
          <path d={aiSvg.p28bc3100} fill="url(#grad_ai)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="grad_ai" x1="-1.38" x2="20.88" y1="-0.43" y2="-0.11">
              <stop offset="0.00652304" stopColor="#9B33EF" />
              <stop offset="1" stopColor="#646DF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function SecurityIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[2.48%_12.5%_2.48%_12.5%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19.0084">
          <path d={securitySvg.pac96f00} fill="url(#grad_sec)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="grad_sec" x1="-1.03" x2="15.66" y1="-0.41" y2="-0.11">
              <stop offset="0.00652304" stopColor="#9B33EF" />
              <stop offset="1" stopColor="#646DF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function PlatformCapabilitiesIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[5.6%_5.6%_5.6%_5.6%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="url(#grad_pc)" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68 1.65 1.65 0 0 0 10 3.17V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" fill="url(#grad_pc)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="grad_pc" x1="-1.65" x2="25.06" y1="-0.52" y2="-0.13">
              <stop offset="0.00652304" stopColor="#9B33EF" />
              <stop offset="1" stopColor="#646DF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const iconComponents: Record<string, React.FC> = {
  "Software Delivery": SoftwareDeliveryIcon,
  "Service Management": ServiceManagementIcon,
  "AI": AiIcon,
  "Security": SecurityIcon,
  "Platform Capabilities": PlatformCapabilitiesIcon,
};

/* ─── Shared link component (same as DocsSection) ─── */

interface DocLink {
  text: string;
}

interface DocSubheader {
  title: string;
  links: DocLink[];
}

function LinkItem({ link }: { link: DocLink }) {
  const words = link.text.split(" ");
  const leadingWords = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];
  return (
    <a
      href="#"
      className="group/link font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[150%] text-[16px] text-[#5e6dd6] hover:text-[#3F4CA5] hover:no-underline break-words"
    >
      {leadingWords && <>{leadingWords} </>}
      <span className="whitespace-nowrap">
        {lastWord}
        <span className="inline-flex items-center align-middle ml-1.5 size-[16px] overflow-clip relative opacity-0 -translate-x-2 transition-all duration-200 ease-out group-hover/link:opacity-100 group-hover/link:translate-x-0">
          <svg
            className="absolute inset-[9.81%_2.44%_9.82%_2.6%] block size-[calc(100%-12.41%)] w-auto h-auto"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 15.1925 12.8593"
          >
            <path d={arrowSvgPaths.p149a3b80} fill="currentColor" />
          </svg>
        </span>
      </span>
    </a>
  );
}

function SubheaderColumn({ subheader }: { subheader: DocSubheader }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-['Noto_Sans:Bold',sans-serif] leading-[20px] text-[12px] text-[rgba(28,43,52,0.68)] tracking-[0.5px] uppercase">
        {subheader.title}
      </h3>
      <div className="flex flex-col gap-5">
        {subheader.links.map((link, linkIndex) => (
          <LinkItem key={linkIndex} link={link} />
        ))}
      </div>
    </div>
  );
}

/* ─── Expand icon (same as DocsSection badge) ─── */
const EXPAND_ICON_PATH =
  "M20.25 4.5V9C20.25 9.19891 20.171 9.38968 20.0303 9.53033C19.8897 9.67098 19.6989 9.75 19.5 9.75C19.3011 9.75 19.1103 9.67098 18.9697 9.53033C18.829 9.38968 18.75 9.19891 18.75 9V6.31031L14.7806 10.2806C14.6399 10.4214 14.449 10.5004 14.25 10.5004C14.051 10.5004 13.8601 10.4214 13.7194 10.2806C13.5786 10.1399 13.4996 9.94902 13.4996 9.75C13.4996 9.55098 13.5786 9.36011 13.7194 9.21937L17.6897 5.25H15C14.8011 5.25 14.6103 5.17098 14.4697 5.03033C14.329 4.88968 14.25 4.69891 14.25 4.5C14.25 4.30109 14.329 4.11032 14.4697 3.96967C14.6103 3.82902 14.8011 3.75 15 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5ZM9.21937 13.7194L5.25 17.6897V15C5.25 14.8011 5.17098 14.6103 5.03033 14.4697C4.88968 14.329 4.69891 14.25 4.5 14.25C4.30109 14.25 4.11032 14.329 3.96967 14.4697C3.82902 14.6103 3.75 14.8011 3.75 15V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H9C9.19891 20.25 9.38968 20.171 9.53033 20.0303C9.67098 19.8897 9.75 19.6989 9.75 19.5C9.75 19.3011 9.67098 19.1103 9.53033 18.9697C9.38968 18.829 9.19891 18.75 9 18.75H6.31031L10.2806 14.7806C10.4214 14.6399 10.5004 14.449 10.5004 14.25C10.5004 14.051 10.4214 13.8601 10.2806 13.7194C10.1399 13.5786 9.94902 13.4996 9.75 13.4996C9.55098 13.4996 9.36011 13.5786 9.21937 13.7194Z";

export interface SecondaryDocCardProps {
  title: string;
  subheaders: DocSubheader[];
}

export function SecondaryDocCard({
  title,
  subheaders,
}: SecondaryDocCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const IconComponent = iconComponents[title];
  const totalLinks = subheaders.reduce((sum, s) => sum + s.links.length, 0);

  return (
    <div
      className="flex flex-col min-w-0"
    >
      {/* Title row */}
      <div className="flex items-center gap-3 w-full">
        {IconComponent && <IconComponent />}
        <h2 className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[36px] text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px]">
          {title}
        </h2>
        <span className="font-['Noto_Sans:Regular',sans-serif] text-[14px] text-[rgba(28,43,52,0.38)] tabular-nums" style={{ marginLeft: '-4px' }}>
          ({totalLinks})
        </span>
      </div>

      {/* Links — always visible */}
      <div
        className="mt-5 p-[32px]"
        style={{
          background: isHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
          backdropFilter: 'blur(var(--card-blur))',
          WebkitBackdropFilter: 'blur(var(--card-blur))',
          border: 'var(--card-border)',
          borderRadius: 'var(--card-radius)',
          boxShadow: isHovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
          transition: `background 250ms ${EASING}, box-shadow 250ms ${EASING}`,
          alignSelf: 'flex-start',
          width: 'fit-content',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          style={{
            display: 'flex',
            gap: 48,
          }}
        >
          {subheaders.map((subheader, index) => (
            <SubheaderColumn key={subheader.title + "-" + index} subheader={subheader} />
          ))}
        </div>
      </div>
    </div>
  );
}