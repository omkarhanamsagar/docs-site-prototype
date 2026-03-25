import React from "react";
import { createPortal } from "react-dom";
import rumSvgPaths from "../imports/svg-y2betfcnxe";
import arrowSvgPaths from "../imports/svg-lanf906ou0";
import softwareDeliverySvg from "../imports/svg-97pb5on3of";
import serviceManagementSvg from "../imports/svg-6h9jifxlz2";
import aiSvg from "../imports/svg-i0gohc99sa";
import securitySvg from "../imports/svg-dnnhtunjky";
import svgPaths from "../imports/svg-64nu9567k0";

const isEngHandoff = import.meta.env.VITE_ENG_HANDOFF === '1';

// ─── Shared components ───

interface DocLink { text: string; desc?: string; shortDesc?: string }
interface DocSubheader { title: string; links: DocLink[] }

function LinkItem({ link, noHover = false, descLength = 'short', disclosure = 'off', sectionHovered = false }: {
  link: DocLink; noHover?: boolean; descLength?: DescLength; disclosure?: DisclosureMode; sectionHovered?: boolean;
}) {
  const [hovered, setHovered] = React.useState(false);
  const words = link.text.split(" ");
  const leadingWords = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];

  const descText = descLength === 'short' ? link.shortDesc : link.desc;
  const showInline = disclosure === 'always' || (disclosure === 'hover-section' && sectionHovered);
  const showTooltip = disclosure === 'hover-link' && hovered;

  return (
    <div
      data-inspect="link"
      style={{ display: 'flex', flexDirection: 'column', gap: 2, position: 'relative' }}
      onMouseEnter={disclosure === 'hover-link' ? () => setHovered(true) : undefined}
      onMouseLeave={disclosure === 'hover-link' ? () => setHovered(false) : undefined}
    >
      <a
        href="#"
        className={noHover
          ? "leading-[150%] text-[16px] text-[#5e6dd6] no-underline break-words"
          : "group/link leading-[150%] text-[16px] text-[#5e6dd6] hover:text-[#3F4CA5] hover:no-underline break-words"
        }
        style={{ fontFamily: linkFont }}
      >
        {leadingWords && <>{leadingWords} </>}
        <span className="whitespace-nowrap">
          {lastWord}
          {!noHover && (
            <span className="inline-flex items-center align-middle ml-1.5 size-[16px] overflow-clip relative opacity-0 -translate-x-2 transition-all duration-200 ease-out group-hover/link:opacity-100 group-hover/link:translate-x-0">
              <svg className="absolute inset-[9.81%_2.44%_9.82%_2.6%] block size-[calc(100%-12.41%)] w-auto h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1925 12.8593">
                <path d={arrowSvgPaths.p149a3b80} fill="currentColor" />
              </svg>
            </span>
          )}
        </span>
      </a>
      {disclosure === 'always' && descText && (
        <span data-inspect="description" style={{ fontFamily: linkFont, fontSize: 16, fontWeight: 400, lineHeight: '150%', color: 'rgba(28,43,52,0.68)' }}>
          {descText}
        </span>
      )}
      {disclosure === 'hover-section' && descText && (
        <div style={{
          opacity: sectionHovered ? 1 : 0,
          transform: sectionHovered ? 'translateY(0)' : 'translateY(-4px)',
          transition: 'opacity 250ms ease-out, transform 250ms ease-out',
        }}>
          <span style={{ fontFamily: linkFont, fontSize: 16, fontWeight: 400, lineHeight: '150%', color: 'rgba(28,43,52,0.68)' }}>
            {descText}
          </span>
        </div>
      )}
      {disclosure === 'hover-link' && descText && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: -12,
          marginTop: 4,
          padding: '8px 12px',
          background: '#fff',
          borderRadius: 6,
          boxShadow: '0 4px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.08)',
          border: '1px solid rgba(0,0,0,0.08)',
          zIndex: 100,
          maxWidth: 280,
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateY(0)' : 'translateY(-8px)',
          transition: 'opacity 200ms ease-out, transform 200ms ease-out',
        }}>
          <span style={{ fontFamily: linkFont, fontSize: 14, fontWeight: 400, lineHeight: '150%', color: 'rgba(28,43,52,0.85)' }}>
            {descText}
          </span>
        </div>
      )}
    </div>
  );
}

function SubheaderColumn({ subheader, noHover = false, descLength = 'short', disclosure = 'off', sectionHovered = false }: {
  subheader: DocSubheader; noHover?: boolean; descLength?: DescLength; disclosure?: DisclosureMode; sectionHovered?: boolean;
}) {
  return (
    <div className="flex flex-col gap-5">
      {subheader.title && (
        <h3 data-inspect="subsection-header" className="leading-[20px] text-[12px] text-[rgba(28,43,52,0.68)] tracking-[0.5px] uppercase" style={{ fontFamily: subheaderFont, fontWeight: isHelvetica ? 700 : undefined }}>
          {subheader.title}
        </h3>
      )}
      <div className="flex flex-col gap-5">
        {subheader.links.map((link, i) => <LinkItem key={i} link={link} noHover={noHover} descLength={descLength} disclosure={disclosure} sectionHovered={sectionHovered} />)}
      </div>
    </div>
  );
}

function HoverCard({ cols, gridGapH, children, hoverEnabled = true, onSectionHover }: { cols: number; gridGapH: number; children: React.ReactNode; hoverEnabled?: boolean; onSectionHover?: (h: boolean) => void }) {
  const [hovered, setHovered] = React.useState(false);
  const isHovered = hoverEnabled && hovered;
  const cardPadding = 32;
  const internalGap = gridGapH + 2 * cardPadding;
  const growX = 1.008;
  const growY = 1.02;
  const shrinkX = 1 / growX;
  const shrinkY = 1 / growY;
  const enterEase = 'cubic-bezier(0.25, 1.4, 0.55, 1)';
  const leaveEase = 'cubic-bezier(0.4, 0.06, 0.2, 1)';
  return (
    <div
      data-inspect="card"
      onMouseEnter={hoverEnabled ? () => { setHovered(true); onSectionHover?.(true); } : undefined}
      onMouseLeave={hoverEnabled ? () => { setHovered(false); onSectionHover?.(false); } : undefined}
      style={{
        height: '100%',
        background: isHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
        backdropFilter: 'blur(var(--card-blur))',
        WebkitBackdropFilter: 'blur(var(--card-blur))',
        border: 'var(--card-border)',
        borderRadius: 'var(--card-radius)',
        boxShadow: isHovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
        transform: isHovered ? `scale(${growX}, ${growY})` : 'scale(1)',
        transition: hoverEnabled
          ? (isHovered
            ? `background 300ms ${enterEase}, box-shadow 300ms ${enterEase}, transform 800ms ${enterEase}`
            : `background 300ms ${leaveEase}, box-shadow 300ms ${leaveEase}, transform 450ms ${leaveEase}`)
          : 'none',
      }}
    >
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        columnGap: internalGap,
        rowGap: 48,
        padding: cardPadding,
        transform: isHovered ? `scale(${shrinkX}, ${shrinkY})` : 'scale(1)',
        transition: hoverEnabled
          ? (isHovered ? `transform 800ms ${enterEase}` : `transform 450ms ${leaveEase}`)
          : 'none',
      }}>
        {children}
      </div>
    </div>
  );
}

function SectionCardWrapper({ disclosure, style, children }: {
  disclosure: DisclosureMode;
  style?: React.CSSProperties;
  children: (secHovered: { value: boolean; set: (h: boolean) => void }) => React.ReactNode;
}) {
  const [sectionHovered, setSectionHovered] = React.useState(false);
  return (
    <div style={style}>
      {children({ value: sectionHovered, set: setSectionHovered })}
    </div>
  );
}

// ─── Section icons ───

function EyeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[14.56%_0.54%_14.6%_0.56%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6923 19.8335">
          <path d={svgPaths.pec22000} fill="url(#grad_eye)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="grad_eye" x1="-1.90543" x2="28.9839" y1="-0.43119" y2="-0.111541"><stop offset="0.00652304" stopColor="#9B33EF" /><stop offset="1" stopColor="#646DF9" /></linearGradient></defs>
        </svg>
      </div>
    </div>
  );
}

function RumIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[4.69%_3.13%_3.64%_3.13%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.25 25.667">
          <path d={rumSvgPaths.p14ced440} fill="url(#paint0_linear_rum)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_rum" x1="-1.80619" x2="27.4758" y1="-0.558013" y2="-0.33606"><stop offset="0.00652304" stopColor="#9B33EF" /><stop offset="1" stopColor="#646DF9" /></linearGradient></defs>
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
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="grad_ai" x1="-1.38" x2="20.88" y1="-0.43" y2="-0.11"><stop offset="0.00652304" stopColor="#9B33EF" /><stop offset="1" stopColor="#646DF9" /></linearGradient></defs>
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
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="grad_sec" x1="-1.03" x2="15.66" y1="-0.41" y2="-0.11"><stop offset="0.00652304" stopColor="#9B33EF" /><stop offset="1" stopColor="#646DF9" /></linearGradient></defs>
        </svg>
      </div>
    </div>
  );
}

function SoftwareDeliveryIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[4.69%_3.64%_3.64%_4.69%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3336 18.3336">
          <path d={softwareDeliverySvg.p1ca2a200} fill="url(#grad_sd)" />
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="grad_sd" x1="-1.26" x2="19.14" y1="-0.4" y2="-0.1"><stop offset="0.00652304" stopColor="#9B33EF" /><stop offset="1" stopColor="#646DF9" /></linearGradient></defs>
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
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="grad_sm" x1="-1.26" x2="19.14" y1="-0.36" y2="-0.1"><stop offset="0.00652304" stopColor="#9B33EF" /><stop offset="1" stopColor="#646DF9" /></linearGradient></defs>
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
          <defs><linearGradient gradientUnits="userSpaceOnUse" id="grad_pc" x1="-1.65" x2="25.06" y1="-0.52" y2="-0.13"><stop offset="0.00652304" stopColor="#9B33EF" /><stop offset="1" stopColor="#646DF9" /></linearGradient></defs>
        </svg>
      </div>
    </div>
  );
}

const SECTION_ICONS: Record<string, React.ReactNode> = {
  'Observability': <EyeIcon />,
  'Digital Experience': <RumIcon />,
  'AI': <AiIcon />,
  'Security': <SecurityIcon />,
  'Software Delivery': <SoftwareDeliveryIcon />,
  'Service Management': <ServiceManagementIcon />,
  'Platform & Administration': <PlatformCapabilitiesIcon />,
};

// ─── Design variables ───

interface DesignVars {
  bgWarmth: number;
  bgSaturation: number;
  bgBrightness: number;
  blobScale: number;
  blobOpacity: number;
  cardOpacity: number;
  cardBlur: number;
  cardBorder: number;
  shadowY: number;
  shadowBlur: number;
  shadowSpread: number;
  shadowOpacity: number;
  cardRadius: number;
  expandedBoost: number;
  gridGapH: number;
  gridGapV: number;
  cardPadding: number;
  subsectionGap: number;
  hoverTopOpacity: number;
  hoverBottomOpacity: number;
  hoverFadeStart: number;
}

const DEFAULT_DESIGN: DesignVars = {
  bgWarmth: 0,
  bgSaturation: 100,
  bgBrightness: 99,
  blobScale: 100,
  blobOpacity: 100,
  cardOpacity: 55,
  cardBlur: 24,
  cardBorder: 85,
  shadowY: 4,
  shadowBlur: 8,
  shadowSpread: -4,
  shadowOpacity: 5,
  cardRadius: 8,
  expandedBoost: 37,
  gridGapH: 28,
  gridGapV: 40,
  cardPadding: 32,
  subsectionGap: 40,
  hoverTopOpacity: 90,
  hoverBottomOpacity: 70,
  hoverFadeStart: 30,
};

// ─── Gradient Blobs ───

interface GradientBlob {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  opacity: number;
}

const BLOB_COLORS = ['#632CA6', '#646DF9', '#9B33EF', '#8B5CF6', '#4F46E5'];

const CONCEPT_1_BLOBS: GradientBlob[] = [
  { id: 1,  x: 12, y: 4,  width: 55, height: 35, color: '#632CA6', opacity: 8  },
  { id: 2,  x: 82, y: 2,  width: 45, height: 30, color: '#646DF9', opacity: 7  },
  { id: 3,  x: 50, y: 12, width: 60, height: 25, color: '#9B33EF', opacity: 4  },
  { id: 4,  x: 78, y: 25, width: 40, height: 28, color: '#646DF9', opacity: 6  },
  { id: 5,  x: 18, y: 35, width: 50, height: 30, color: '#632CA6', opacity: 5  },
  { id: 6,  x: 60, y: 48, width: 55, height: 32, color: '#9B33EF', opacity: 5  },
  { id: 7,  x: 8,  y: 58, width: 45, height: 28, color: '#646DF9', opacity: 6  },
  { id: 8,  x: 75, y: 68, width: 50, height: 30, color: '#8B5CF6', opacity: 5  },
  { id: 9,  x: 35, y: 78, width: 55, height: 35, color: '#632CA6', opacity: 7  },
  { id: 10, x: 85, y: 88, width: 40, height: 25, color: '#9B33EF', opacity: 4  },
  { id: 11, x: 20, y: 92, width: 50, height: 30, color: '#646DF9', opacity: 6  },
];

// Concept 2: bottom-center glow — warm peach-pink left, soft lavender right,
// colors hug the edges as they climb, fading toward center-top.
const CONCEPT_2_BLOBS: GradientBlob[] = [
  { id: 1, x: 50, y: 82, width: 161, height: 90, color: '#F5D0E0', opacity: 22 },
  { id: 3, x: 26, y: 79, width: 153, height: 75, color: '#FBCFE8', opacity: 20 },
  { id: 4, x: 75, y: 80, width: 149, height: 75, color: '#DDD6FE', opacity: 16 },
  { id: 5, x: 8,  y: 60, width: 60,  height: 200, color: '#FB923C', opacity: 14 },
  { id: 6, x: 92, y: 60, width: 60,  height: 200, color: '#A78BFA', opacity: 13 },
];

const CONCEPT_2_DESIGN: DesignVars = {
  bgWarmth: 0,
  bgSaturation: 100,
  bgBrightness: 100,
  blobScale: 120,
  blobOpacity: 100,
  cardOpacity: 55,
  cardBlur: 24,
  cardBorder: 85,
  shadowY: 4,
  shadowBlur: 8,
  shadowSpread: -4,
  shadowOpacity: 5,
  cardRadius: 8,
  expandedBoost: 37,
  gridGapH: 28,
  gridGapV: 40,
  cardPadding: 32,
  subsectionGap: 40,
  hoverTopOpacity: 100,
  hoverBottomOpacity: 70,
  hoverFadeStart: 50,
};

// Concept 3: same color story as concept 2 but radiating from the top, trailing down
const CONCEPT_3_BLOBS: GradientBlob[] = [
  // Core glow — huge overlapping washes anchored at the top center
  { id: 1,  x: 50,  y: 15,  width: 120, height: 90, color: '#F5D0E0', opacity: 22 },
  { id: 2,  x: 50,  y: 20,  width: 100, height: 80, color: '#E9D5FF', opacity: 18 },
  { id: 3,  x: 35,  y: 18,  width: 90,  height: 75, color: '#FBCFE8', opacity: 20 },
  { id: 4,  x: 65,  y: 18,  width: 90,  height: 75, color: '#DDD6FE', opacity: 18 },

  // Color identity — warm left, cool right
  { id: 5,  x: 20,  y: 28,  width: 70,  height: 60, color: '#FED7AA', opacity: 14 },
  { id: 6,  x: 80,  y: 28,  width: 70,  height: 60, color: '#C4B5FD', opacity: 15 },

  // Downward reach — carry color into the mid-page
  { id: 7,  x: 25,  y: 50,  width: 85,  height: 55, color: '#FBCFE8', opacity: 10 },
  { id: 8,  x: 75,  y: 50,  width: 85,  height: 55, color: '#E9D5FF', opacity: 10 },
  { id: 9,  x: 50,  y: 55,  width: 100, height: 50, color: '#F5D0E0', opacity: 7  },

  // Lower whisper — barely there, gentle fade out
  { id: 10, x: 40,  y: 75,  width: 90,  height: 40, color: '#E9D5FF', opacity: 4  },
  { id: 11, x: 60,  y: 80,  width: 80,  height: 35, color: '#FBCFE8', opacity: 3  },
];

const conceptParam = new URLSearchParams(window.location.search).get('concept');
const fontParam = new URLSearchParams(window.location.search).get('font');
const showHeader = new URLSearchParams(window.location.search).get('header') !== 'false';
type DescLength = 'short' | 'full';
type DisclosureMode = 'off' | 'hover-link' | 'hover-section' | 'always';
const descLengthParam = new URLSearchParams(window.location.search).get('desclen');
const initialDescLength: DescLength = descLengthParam === 'full' ? 'full' : 'short';
const disclosureParam = new URLSearchParams(window.location.search).get('disclosure');
const initialDisclosure: DisclosureMode = disclosureParam === 'hover-link' ? 'hover-link' : disclosureParam === 'hover-section' ? 'hover-section' : disclosureParam === 'always' ? 'always' : 'off';
const DEFAULT_BLOBS = conceptParam === '3' ? CONCEPT_3_BLOBS : (conceptParam === '2' || conceptParam === '4') ? CONCEPT_2_BLOBS : CONCEPT_1_BLOBS;
const INITIAL_DESIGN = conceptParam === '2' || conceptParam === '3' || conceptParam === '4' ? CONCEPT_2_DESIGN : DEFAULT_DESIGN;

const FONT_NOTO = "'Noto_Sans_SemiBold:Regular',sans-serif";
const FONT_NOTO_BOLD = "'Noto_Sans:Bold',sans-serif";
const FONT_NOTO_REGULAR = "'Noto_Sans:Regular',sans-serif";
const FONT_HELVETICA = "'Helvetica Neue',Helvetica,Arial,sans-serif";

const isHelvetica = fontParam !== 'noto';
const linkFont = isHelvetica ? FONT_HELVETICA : FONT_NOTO;
const headerFont = isHelvetica ? FONT_HELVETICA : FONT_NOTO;
const subheaderFont = isHelvetica ? FONT_HELVETICA : FONT_NOTO_BOLD;
const countFont = isHelvetica ? FONT_HELVETICA : FONT_NOTO_REGULAR;

let nextBlobId = 200;
function shuffleBlobs(blobs: GradientBlob[]): GradientBlob[] {
  return blobs.map(b => ({
    ...b,
    x: Math.round(Math.random() * 80 + 5),
    y: Math.round(b.y + (Math.random() - 0.5) * 16),
    width: Math.round(30 + Math.random() * 35),
    height: Math.round(20 + Math.random() * 25),
    color: BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)],
    opacity: Math.round(3 + Math.random() * 7),
  }));
}

function computeBaseColor(brightness: number): string {
  const b = Math.round(brightness * 2.55);
  return `rgb(${Math.min(255, b + 2)}, ${Math.min(255, b + 1)}, ${Math.min(255, b + 4)})`;
}

function computeCssVars(vars: DesignVars): Record<string, string> {
  const o = vars.shadowOpacity / 100;
  const shadow = `0 ${vars.shadowY}px ${vars.shadowBlur}px ${vars.shadowSpread}px rgba(0,0,0,${o.toFixed(4)})`;
  const shadowExpanded = `0 ${vars.shadowY * 2}px ${vars.shadowBlur * 2}px ${vars.shadowSpread}px rgba(0,0,0,${(o * 1.5).toFixed(4)})`;
  const hoverO = Math.min(1, o * 1.35);
  const shadowHover = `0 ${vars.shadowY + 2}px ${Math.round(vars.shadowBlur * 1.4)}px ${vars.shadowSpread + 1}px rgba(0,0,0,${hoverO.toFixed(4)})`;
  return {
    '--card-bg': `rgb(255 255 255 / ${(vars.cardOpacity / 100).toFixed(3)})`,
    '--card-bg-hover': `linear-gradient(to bottom, rgb(255 255 255 / ${(vars.hoverTopOpacity / 100).toFixed(2)}) 0%, rgb(255 255 255 / ${(vars.hoverTopOpacity / 100).toFixed(2)}) ${vars.hoverFadeStart}%, rgb(255 255 255 / ${(vars.hoverBottomOpacity / 100).toFixed(2)}) 100%)`,
    '--card-bg-expanded': `rgb(255 255 255 / ${Math.min(1, vars.cardOpacity / 100 + vars.expandedBoost / 100).toFixed(3)})`,
    '--card-blur': `${vars.cardBlur}px`,
    '--card-border': `1px solid rgba(0, 0, 0, ${(0.08 * vars.cardBorder / 100).toFixed(4)})`,
    '--card-radius': `${vars.cardRadius}px`,
    '--card-shadow': shadow,
    '--card-shadow-hover': shadowHover,
    '--card-shadow-expanded': shadowExpanded,
    '--grid-gap-h': `${vars.gridGapH}px`,
    '--grid-gap-v': `${vars.gridGapV}px`,
    '--card-padding': `${vars.cardPadding}px`,
    '--subsection-gap': `${vars.subsectionGap}px`,
  };
}

// ─── Design Toolbar ───

const SLIDER_DEFS: { section: string; label: string; prop: keyof DesignVars; min: number; max: number; step?: number; unit?: string }[] = [
  { section: 'BACKGROUND', label: 'Warmth', prop: 'bgWarmth', min: -60, max: 60, unit: '°' },
  { section: 'BACKGROUND', label: 'Saturation', prop: 'bgSaturation', min: 0, max: 200, unit: '%' },
  { section: 'BACKGROUND', label: 'Brightness', prop: 'bgBrightness', min: 88, max: 100, unit: '%' },
  { section: 'BACKGROUND', label: 'Blob scale', prop: 'blobScale', min: 30, max: 250, unit: '%' },
  { section: 'BACKGROUND', label: 'Blob opacity', prop: 'blobOpacity', min: 0, max: 100, unit: '%' },
  { section: 'GLASS CARDS', label: 'Opacity', prop: 'cardOpacity', min: 0, max: 100, unit: '%' },
  { section: 'GLASS CARDS', label: 'Blur', prop: 'cardBlur', min: 0, max: 60, unit: 'px' },
  { section: 'GLASS CARDS', label: 'Border', prop: 'cardBorder', min: 0, max: 100, unit: '%' },
  { section: 'SHADOW', label: 'Y offset', prop: 'shadowY', min: 0, max: 20, unit: 'px' },
  { section: 'SHADOW', label: 'Blur', prop: 'shadowBlur', min: 0, max: 40, unit: 'px' },
  { section: 'SHADOW', label: 'Spread', prop: 'shadowSpread', min: -10, max: 10, unit: 'px' },
  { section: 'SHADOW', label: 'Opacity', prop: 'shadowOpacity', min: 0, max: 25, unit: '%' },
  { section: 'GLASS CARDS', label: 'Radius', prop: 'cardRadius', min: 0, max: 32, unit: 'px' },
  { section: 'GLASS CARDS', label: 'Padding', prop: 'cardPadding', min: 12, max: 48, unit: 'px' },
  { section: 'GLASS CARDS', label: 'Expand boost', prop: 'expandedBoost', min: 0, max: 60, unit: '%' },
  { section: 'GLASS CARDS', label: 'Hover top α', prop: 'hoverTopOpacity', min: 50, max: 100, unit: '%' },
  { section: 'GLASS CARDS', label: 'Hover bottom α', prop: 'hoverBottomOpacity', min: 0, max: 100, unit: '%' },
  { section: 'GLASS CARDS', label: 'Fade start', prop: 'hoverFadeStart', min: 0, max: 80, unit: '%' },
  { section: 'GRID LAYOUT', label: 'H Gap', prop: 'gridGapH', min: 0, max: 64, unit: 'px' },
  { section: 'GRID LAYOUT', label: 'V Gap', prop: 'gridGapV', min: 0, max: 80, unit: 'px' },
  { section: 'GRID LAYOUT', label: 'Subsection gap', prop: 'subsectionGap', min: 16, max: 64, unit: 'px' },
];

function SliderRow({ label, value, onChange, min, max, step = 1, unit = '' }: {
  label: string; value: number; onChange: (v: number) => void; min: number; max: number; step?: number; unit?: string;
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', width: 72, flexShrink: 0 }}>{label}</span>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))} style={{ flex: 1 }} />
      <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.75)', width: 36, textAlign: 'right', fontVariantNumeric: 'tabular-nums', flexShrink: 0 }}>
        {value}{unit}
      </span>
    </div>
  );
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: 'rgba(155, 51, 239, 0.5)', paddingBottom: 2, borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      {children}
    </span>
  );
}

function SmallButton({ children, onClick, active }: { children: React.ReactNode; onClick: () => void; active?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '4px 8px', border: '1px solid rgba(155,51,239,0.2)', borderRadius: 4,
        background: active ? 'rgba(155,51,239,0.2)' : 'rgba(155,51,239,0.06)',
        color: active ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.5)',
        fontSize: 9, fontWeight: 600, cursor: 'pointer', transition: 'all 150ms',
      }}
    >
      {children}
    </button>
  );
}

function DesignToolbar({ vars, onChange, onReset, blobs, onBlobsChange }: {
  vars: DesignVars;
  onChange: (vars: DesignVars) => void;
  onReset: () => void;
  blobs: GradientBlob[];
  onBlobsChange: (blobs: GradientBlob[]) => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedBlobId, setSelectedBlobId] = React.useState<number | null>(null);
  const selectedBlob = blobs.find(b => b.id === selectedBlobId) ?? null;

  const sections = React.useMemo(() => {
    const map = new Map<string, typeof SLIDER_DEFS>();
    SLIDER_DEFS.forEach(s => {
      if (!map.has(s.section)) map.set(s.section, []);
      map.get(s.section)!.push(s);
    });
    return map;
  }, []);

  const updateBlob = (id: number, patch: Partial<GradientBlob>) => {
    onBlobsChange(blobs.map(b => b.id === id ? { ...b, ...patch } : b));
  };

  const addBlob = () => {
    const newId = nextBlobId++;
    const newBlob: GradientBlob = {
      id: newId,
      x: Math.round(20 + Math.random() * 60),
      y: Math.round(Math.random() * 90 + 5),
      width: Math.round(35 + Math.random() * 25),
      height: Math.round(20 + Math.random() * 20),
      color: BLOB_COLORS[Math.floor(Math.random() * BLOB_COLORS.length)],
      opacity: Math.round(4 + Math.random() * 5),
    };
    onBlobsChange([...blobs, newBlob]);
    setSelectedBlobId(newId);
  };

  const removeBlob = (id: number) => {
    onBlobsChange(blobs.filter(b => b.id !== id));
    if (selectedBlobId === id) setSelectedBlobId(null);
  };

  return createPortal(
    <div
      style={{
        position: 'fixed', bottom: 16, right: 16, zIndex: 2147483646, width: 300,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <style>{`
        .design-toolbar input[type=range] {
          -webkit-appearance: none; appearance: none;
          height: 3px; background: rgba(255,255,255,0.12); border-radius: 2px; outline: none;
        }
        .design-toolbar input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none; width: 12px; height: 12px; border-radius: 50%;
          background: #9B33EF; cursor: pointer; border: 2px solid rgba(255,255,255,0.2);
          box-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
        .design-toolbar input[type=range]::-webkit-slider-thumb:hover { background: #b44cff; transform: scale(1.15); }
      `}</style>
      <div className="design-toolbar" style={{
        background: '#1a2028', borderRadius: 12,
        boxShadow: '0 8px 40px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)', overflow: 'hidden',
      }}>
        {/* Toggle header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 14px', height: 36, cursor: 'pointer', userSelect: 'none',
            background: isOpen ? 'rgba(155, 51, 239, 0.08)' : 'transparent', transition: 'background 200ms',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.5 }}>
              <circle cx="12" cy="12" r="3" fill="rgba(155,51,239,0.8)" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68 1.65 1.65 0 0 0 10 3.17V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
            </svg>
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)' }}>
              Design
            </span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 16, lineHeight: 1,
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms',
          }}>▲</span>
        </div>

        {/* Body */}
        <div style={{
          maxHeight: isOpen ? 700 : 0, overflow: isOpen ? 'auto' : 'hidden',
          transition: 'max-height 300ms cubic-bezier(0.25, 0.1, 0.25, 1)',
        }}>
          <div style={{ padding: '6px 14px 14px', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {/* Standard slider sections */}
            {[...sections.entries()].map(([sectionName, sliders]) => (
              <div key={sectionName} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <SectionHeader>{sectionName}</SectionHeader>
                {sliders.map(({ label, prop, min, max, step = 1, unit = '' }) => (
                  <SliderRow key={prop} label={label} value={vars[prop]} min={min} max={max} step={step} unit={unit}
                    onChange={(v) => onChange({ ...vars, [prop]: v })} />
                ))}
              </div>
            ))}

            {/* ─── Gradient Blobs section ─── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <SectionHeader>GRADIENT BLOBS</SectionHeader>

              {/* Minimap */}
              <div
                style={{
                  position: 'relative', width: '100%', height: 100,
                  background: 'rgba(255,255,255,0.04)', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden', cursor: 'crosshair',
                }}
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width) * 100;
                  const y = ((e.clientY - rect.top) / rect.height) * 100;
                  const closest = blobs.reduce((best, b) => {
                    const d = Math.hypot(b.x - x, b.y - y);
                    return d < best.d ? { d, b } : best;
                  }, { d: Infinity, b: null as GradientBlob | null });
                  if (closest.b && closest.d < 15) setSelectedBlobId(closest.b.id);
                  else setSelectedBlobId(null);
                }}
              >
                {blobs.map(b => {
                  const s = vars.blobScale / 100;
                  return (
                    <div key={b.id} style={{
                      position: 'absolute',
                      left: `${b.x}%`, top: `${b.y}%`,
                      width: b.width * s * 0.5, height: b.height * s * 0.5,
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '50%',
                      background: `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
                      opacity: b.opacity / 10,
                    }} />
                  );
                })}
                {blobs.map(b => (
                  <div key={'dot-' + b.id}
                    onClick={(e) => { e.stopPropagation(); setSelectedBlobId(b.id); }}
                    style={{
                      position: 'absolute', left: `${b.x}%`, top: `${b.y}%`,
                      width: selectedBlobId === b.id ? 10 : 6, height: selectedBlobId === b.id ? 10 : 6,
                      transform: 'translate(-50%, -50%)', borderRadius: '50%',
                      background: b.color, cursor: 'pointer',
                      border: selectedBlobId === b.id ? '2px solid #fff' : '1px solid rgba(255,255,255,0.4)',
                      boxShadow: selectedBlobId === b.id ? '0 0 6px rgba(155,51,239,0.6)' : 'none',
                      transition: 'all 150ms', zIndex: 2,
                    }}
                  />
                ))}
              </div>

              {/* Blob actions */}
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <SmallButton onClick={() => onBlobsChange(shuffleBlobs(blobs))}>Shuffle</SmallButton>
                <SmallButton onClick={addBlob}>+ Add</SmallButton>
                {selectedBlob && (
                  <SmallButton onClick={() => removeBlob(selectedBlob.id)}>Remove #{blobs.indexOf(selectedBlob) + 1}</SmallButton>
                )}
                <SmallButton onClick={() => { onBlobsChange(DEFAULT_BLOBS); setSelectedBlobId(null); }}>Reset</SmallButton>
              </div>

              {/* Selected blob controls */}
              {selectedBlob && (
                <div style={{
                  display: 'flex', flexDirection: 'column', gap: 6,
                  padding: '8px 10px', background: 'rgba(155,51,239,0.06)', borderRadius: 6,
                  border: '1px solid rgba(155,51,239,0.12)',
                }}>
                  <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
                    BLOB {blobs.indexOf(selectedBlob) + 1}
                  </span>
                  <SliderRow label="X position" value={selectedBlob.x} min={0} max={100} unit="%"
                    onChange={(v) => updateBlob(selectedBlob.id, { x: v })} />
                  <SliderRow label="Y position" value={selectedBlob.y} min={0} max={100} unit="%"
                    onChange={(v) => updateBlob(selectedBlob.id, { y: v })} />
                  <SliderRow label="Width" value={selectedBlob.width} min={5} max={200} unit="%"
                    onChange={(v) => updateBlob(selectedBlob.id, { width: v })} />
                  <SliderRow label="Height" value={selectedBlob.height} min={5} max={200} unit="%"
                    onChange={(v) => updateBlob(selectedBlob.id, { height: v })} />
                  <SliderRow label="Opacity" value={selectedBlob.opacity} min={1} max={25} unit="%"
                    onChange={(v) => updateBlob(selectedBlob.id, { opacity: v })} />
                  {/* Color swatches */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', width: 72, flexShrink: 0 }}>Color</span>
                    {BLOB_COLORS.map(c => (
                      <div key={c} onClick={() => updateBlob(selectedBlob.id, { color: c })} style={{
                        width: 16, height: 16, borderRadius: 4, background: c, cursor: 'pointer',
                        border: selectedBlob.color === c ? '2px solid #fff' : '2px solid transparent',
                        transition: 'border 150ms',
                      }} />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Reset all button */}
            <button
              onClick={() => { onReset(); onBlobsChange(DEFAULT_BLOBS); setSelectedBlobId(null); }}
              style={{
                marginTop: 4, padding: '6px 0', border: '1px solid rgba(155,51,239,0.2)', borderRadius: 6,
                background: 'rgba(155,51,239,0.06)', color: 'rgba(255,255,255,0.5)',
                fontSize: 10, fontWeight: 600, letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 150ms',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(155,51,239,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(155,51,239,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
            >
              Reset everything
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

// Placeholder sub-section names for scaling tests
const placeholderSubNames = [
  "MONITORING", "ANALYTICS", "COMPLIANCE", "AUTOMATION", "INTEGRATIONS",
  "PIPELINES", "GOVERNANCE", "ALERTING", "NETWORKING", "DATA",
  "OPERATIONS", "TESTING", "DEPLOYMENT", "PERFORMANCE", "INTELLIGENCE",
];

const placeholderLinkNames = [
  "Resource Explorer", "Anomaly Detection", "Compliance Dashboard",
  "Workflow Builder", "Integration Hub", "Pipeline Orchestrator",
  "Policy Manager", "Alert Routing", "Network Analyzer",
  "Data Catalog", "Operations Center", "Test Runner",
  "Deployment Manager", "Performance Insights", "Threat Intelligence",
  "Usage Analytics", "Service Health", "Change Tracker",
  "SLA Dashboard", "Access Manager", "Cost Explorer",
  "Capacity Planner", "Dependency Graph", "Audit Logger",
];

function generateExtraSubheaders(count: number, linksPerSub: number, offset: number = 0) {
  const subs = [];
  for (let i = 0; i < count; i++) {
    const name = placeholderSubNames[(i + offset) % placeholderSubNames.length];
    const links = [];
    for (let j = 0; j < linksPerSub; j++) {
      links.push({ text: placeholderLinkNames[(i * linksPerSub + j) % placeholderLinkNames.length] });
    }
    subs.push({ title: name, links });
  }
  return subs;
}

// Short description variants for each section
const observabilityShortVariants = [
  { text: "Unified full-stack visibility", highlight: "Unified" },
  { text: "See everything, miss nothing", highlight: "See everything" },
  { text: "Total stack transparency", highlight: "Total stack" },
  { text: "Complete observability, unified", highlight: "Complete observability" },
  { text: "Blind-spot-free monitoring", highlight: "Blind-spot-free" },
  { text: "One view, all signals", highlight: "One view" },
];

const digitalExpShortVariants = [
  { text: "Flawless front-end insight", highlight: "Flawless" },
  { text: "User experience perfected", highlight: "User experience" },
  { text: "Performance meets impact", highlight: "Performance" },
  { text: "Front-end clarity, delivered", highlight: "Front-end clarity" },
  { text: "Seamless digital journeys", highlight: "Seamless" },
  { text: "Every click, optimized", highlight: "Every click" },
];

// Mock data - easy to modify for testing different amounts of content
const observabilityData = {
  title: "Observability",
  description: "Eliminate blind spots across your stack by unifying metrics, logs, and traces",
  descriptionHighlight: "Eliminate blind spots",
  subheaders: [
    {
      title: "INFRASTRUCTURE",
      links: [
        { text: "Infrastructure", desc: "View the health and performance of your hosts and infrastructure components", shortDesc: "Host and infra health" },
        { text: "Metrics", desc: "Explore, search, and create distributions for your metrics", shortDesc: "Explore and distribute metrics" },
        { text: "Container Monitoring", desc: "Monitor the health, performance, and security of your containerized environments", shortDesc: "Container health and security" },
        { text: "Serverless", desc: "Detect and resolve performance issues in your serverless applications", shortDesc: "Serverless performance" },
        { text: "Network Monitoring", desc: "Use tagged objects to collect and graph data about your network traffic", shortDesc: "Network traffic data" },
        { text: "Cloud Cost Management", desc: "Take control of your cloud spend with unified observability and cost data", shortDesc: "Cloud spend control" },
        { text: "Cloudcraft", desc: "Visualize and diagram your cloud infrastructure in real time", shortDesc: "Cloud infra diagrams" },
        { text: "Storage Management", desc: "Optimize and troubleshoot your cloud storage spend, usage, and data freshness", shortDesc: "Cloud storage optimization" },
      ],
    },
    {
      title: "APPLICATIONS",
      links: [
        { text: "APM", desc: "Explore out-of-the-box performance dashboards and distributed traces", shortDesc: "Distributed traces and dashboards" },
        { text: "Universal Service Monitoring", desc: "Discover, map, and monitor services without changing code", shortDesc: "Codeless service monitoring" },
        { text: "Continuous Profiler", desc: "Compare performance snapshots and investigate bottlenecks", shortDesc: "Performance bottlenecks" },
      ],
    },
    {
      title: "DATA",
      links: [
        { text: "Database Monitoring", desc: "Explore enriched dashboards, query metrics, and query samples", shortDesc: "Query metrics and samples" },
        { text: "Data Streams Monitoring", desc: "Track and improve performance of your data streaming pipelines", shortDesc: "Streaming pipeline performance" },
        { text: "Data Observability", desc: "Monitor data quality, performance, and cost to detect anomalies and prevent downstream issues", shortDesc: "Data quality monitoring" },
      ],
    },
    {
      title: "LOGS",
      links: [
        { text: "Log Management", desc: "Process, monitor, and archive your ingested logs", shortDesc: "Log processing and archival" },
        { text: "Sensitive Data Scanner", desc: "Detect and redact sensitive data like PII, API keys, and credit card numbers across your telemetry", shortDesc: "PII detection and redaction" },
        { text: "Observability Pipelines", desc: "Manage and monitor your telemetry pipelines", shortDesc: "Telemetry pipeline management" },
        { text: "Error Tracking", desc: "Identify critical errors and accelerate resolution across web, mobile, and backend", shortDesc: "Critical error resolution" },
      ],
    },
  ],
};

const digitalExperienceData = {
  title: "Digital Experience",
  description: "Deliver flawless user experiences by linking front-end performance to impact",
  descriptionHighlight: "Deliver flawless user experiences",
  subheaders: [
    {
      title: "SYNTHETIC TESTING",
      links: [
        { text: "Synthetic Monitoring", desc: "Ensure uptime, flag regional issues, and test application performance", shortDesc: "Uptime and performance tests" },
        { text: "Mobile App Testing", desc: "Monitor user journeys and business transactions in mobile applications", shortDesc: "Mobile user journey testing" },
      ],
    },
    {
      title: "REAL USER MONITORING",
      links: [
        { text: "Real User Monitoring", desc: "Capture, observe, and analyze the user experience of your applications", shortDesc: "Frontend user experience" },
        { text: "Session Replay", desc: "Capture and visually replay the user experience of your users", shortDesc: "Visual session playback" },
      ],
    },
    {
      title: "PRODUCT ANALYTICS",
      links: [
        { text: "Product Analytics", desc: "Gain insight into user behavior and make data-driven product decisions", shortDesc: "User behavior insights" },
      ],
    },
  ],
};

// Secondary sections data
const secondarySections = [
  {
    title: "AI",
    description: "Build, run, and secure AI-powered applications with full-stack visibility",
    descriptionHighlight: "Build, run, and secure",
    subheaders: [
      {
        title: "AI",
        links: [
          { text: "Bits AI Agents", desc: "Your agentic teammate that automates development, security, and operational workflows", shortDesc: "Automated AI workflows" },
          { text: "Watchdog", desc: "Detect and surface application and infrastructure anomalies", shortDesc: "Anomaly detection" },
          { text: "LLM Observability", desc: "Trace, monitor, and secure your LLM applications", shortDesc: "LLM monitoring and security" },
        ],
      },
    ],
  },
  {
    title: "Security",
    description: "Detect threats and vulnerabilities across your applications and infrastructure",
    descriptionHighlight: "Detect threats and vulnerabilities",
    subheaders: [
      {
        title: "CODE SECURITY",
        links: [
          { text: "Code Security", desc: "Detect and fix vulnerabilities in your code, dependencies, and infrastructure as code", shortDesc: "Code vulnerability detection" },
        ],
      },
      {
        title: "CLOUD SECURITY",
        links: [
          { text: "Cloud Security", desc: "Continuously audit configurations, assess identity risks, and detect threats across your cloud infrastructure", shortDesc: "Cloud posture and threats" },
          { text: "Workload Protection", desc: "Monitor file, network, and process activity to detect real-time threats to your infrastructure", shortDesc: "Runtime threat detection" },
        ],
      },
      {
        title: "CLOUD SIEM",
        links: [
          { text: "Cloud SIEM", desc: "Detect, investigate, and respond to security threats across your cloud and on-premises systems", shortDesc: "Threat detection and response" },
          { text: "App and API Protection", desc: "Detect and block threats targeting your production applications and APIs in real time", shortDesc: "App and API threat blocking" },
          { text: "Sensitive Data Scanner", desc: "Detect and redact sensitive data like PII, API keys, and credit card numbers across your telemetry", shortDesc: "PII detection and redaction" },
        ],
      },
    ],
  },
  {
    title: "Software Delivery",
    description: "End-to-end, simplified visibility into your stack's health & performance",
    descriptionHighlight: "End-to-end, simplified visibility",
    subheaders: [
      {
        title: "CI/CD",
        links: [
          { text: "CI Visibility", desc: "Monitor the health and performance of your CI pipelines", shortDesc: "CI pipeline health" },
          { text: "Test Optimization", desc: "Detect flaky tests and identify commits introducing flaky tests", shortDesc: "Flaky test detection" },
          { text: "Continuous Testing", desc: "Perform codeless integration and end-to-end testing with CI/CD providers", shortDesc: "Codeless E2E testing" },
          { text: "Code Coverage", desc: "Visualize coverage data trends and block PR merges based on coverage thresholds", shortDesc: "Coverage trends and gates" },
        ],
      },
      {
        title: "DEVELOPER EFFICIENCY",
        links: [
          { text: "Internal Developer Portal", desc: "Unify telemetry, metadata, and workflows to accelerate delivery", shortDesc: "Service catalog and ownership" },
          { text: "DORA Metrics", desc: "Measure and improve your organization's software delivery processes", shortDesc: "Delivery performance metrics" },
          { text: "IDE Plugins", desc: "Interact with Datadog services directly from your IDE as you code", shortDesc: "In-editor Datadog access" },
          { text: "Feature Flags", desc: "Toggle features, run A/B tests, and gradually roll out functionality without code deployments", shortDesc: "Feature rollouts and A/B tests" },
        ],
      },
    ],
  },
  {
    title: "Service Management",
    description: "Accelerate incident response and resolution across your entire stack",
    descriptionHighlight: "Accelerate incident response",
    subheaders: [
      {
        title: "INCIDENT RESPONSE",
        links: [
          { text: "Incident Management", desc: "Identify, analyze, and mitigate disruptive incidents in your organization", shortDesc: "Incident triage and mitigation" },
          { text: "On-Call", desc: "Route and escalate alerts to the right team members with on-call schedules and paging", shortDesc: "Scheduling and paging" },
          { text: "Status Pages", desc: "Communicate service availability and incident updates to your users and stakeholders", shortDesc: "Service status communication" },
          { text: "Event Management", desc: "Track notable changes and alerts in your applications and infrastructure", shortDesc: "Change and alert tracking" },
        ],
      },
      {
        title: "ACTIONS",
        links: [
          { text: "Workflow Automation", desc: "Automate and orchestrate processes across your tech stack", shortDesc: "Cross-stack orchestration" },
          { text: "App Builder", desc: "Create low-code applications to streamline your internal tools", shortDesc: "Low-code internal tools" },
          { text: "Case Management", desc: "Triage, track, and remediate issues with centralized ownership and team collaboration", shortDesc: "Issue tracking and triage" },
          { text: "Service Level Objectives", desc: "Define and track performance targets to deliver a consistent customer experience", shortDesc: "Performance target tracking" },
        ],
      },
    ],
  },
  {
    title: "Platform & Administration",
    description: "Extend, customize, and manage Datadog across your organization",
    descriptionHighlight: "Extend, customize, and manage",
    subheaders: [
      {
        title: "CORE PLATFORM",
        links: [
          { text: "Dashboards", desc: "Visualize, analyze, and generate insights about your data", shortDesc: "Data visualization" },
          { text: "Notebooks", desc: "Create rich-text documents with live graphs for investigations, postmortems, and runbooks", shortDesc: "Live investigation docs" },
          { text: "Monitors and Alerting", desc: "Create, edit, and manage your monitors and notifications", shortDesc: "Alert configuration" },
          { text: "Mobile App", desc: "View Datadog alerts, incidents, and more on your mobile device", shortDesc: "Mobile alerts and incidents" },
          { text: "CoScreen", desc: "Share and interact with application windows for pair programming and incident management", shortDesc: "Collaborative screen sharing" },
        ],
      },
      {
        title: "EXTEND",
        links: [
          { text: "Integrations", desc: "Gather data about your applications, services, and systems", shortDesc: "Connect your stack" },
          { text: "API", desc: "Try the Datadog API", shortDesc: "Programmatic access" },
          { text: "OpenTelemetry", desc: "Pipe your OpenTelemetry metrics, logs, and traces into Datadog", shortDesc: "OTel data ingestion" },
          { text: "Extend Datadog", desc: "Extend the Datadog platform", shortDesc: "Custom extensions" },
          { text: "Partners", desc: "Learn about best practices and get started monitoring your clients' environments", shortDesc: "Partner onboarding" },
        ],
      },
      {
        title: "GOVERN",
        links: [
          { text: "Fleet Automation", desc: "Remotely configure, upgrade, and manage your Agents at scale", shortDesc: "Agent management at scale" },
          { text: "Account Management", desc: "Manage org-based settings, billing, and data access controls", shortDesc: "Org settings and billing" },
          { text: "Data Security", desc: "Learn how Datadog protects your data", shortDesc: "Data protection practices" },
        ],
      },
    ],
  },
];

// ─── Grid row definitions ───
// Each column is an array of "layers". Each layer is an array of subsections.
// All columns render their Nth layer at the same vertical position (aligned row).
interface GridRowDef {
  headers: { title: string; cols: number }[];
  columns: DocSubheader[][][]; // columns[colIdx][layerIdx] = subsections in that layer
  subsectionLayout: 'horizontal' | 'vertical-2col' | 'vertical-1col';
}

// ─── Section metadata for dynamic layout ───
interface SectionMeta {
  key: string;
  title: string;
  baseCols: number;
  maxCols: number;
  baseGroups: DocSubheader[][];
  baseGroupsExpanded?: DocSubheader[][];
  seedOffset: number;
}

const SECTIONS: SectionMeta[] = [
  {
    key: 'obs', title: 'Observability', baseCols: 3, maxCols: 4,
    baseGroups: [
      observabilityData.subheaders.filter(s => s.title === 'INFRASTRUCTURE'),
      observabilityData.subheaders.filter(s => s.title === 'APPLICATIONS' || s.title === 'DATA'),
      observabilityData.subheaders.filter(s => s.title === 'LOGS'),
    ],
    baseGroupsExpanded: [
      observabilityData.subheaders.filter(s => s.title === 'INFRASTRUCTURE'),
      observabilityData.subheaders.filter(s => s.title === 'APPLICATIONS'),
      observabilityData.subheaders.filter(s => s.title === 'LOGS'),
      observabilityData.subheaders.filter(s => s.title === 'DATA'),
    ],
    seedOffset: 0,
  },
  {
    key: 'dx', title: 'Digital Experience', baseCols: 1, maxCols: 4,
    baseGroups: [
      digitalExperienceData.subheaders.filter(s => s.title === 'SYNTHETIC TESTING'),
      digitalExperienceData.subheaders.filter(s => s.title === 'REAL USER MONITORING'),
      digitalExperienceData.subheaders.filter(s => s.title === 'PRODUCT ANALYTICS'),
    ],
    seedOffset: 7,
  },
  {
    key: 'AI', title: 'AI', baseCols: 1, maxCols: 4,
    baseGroups: [
      secondarySections[0].subheaders,
    ],
    seedOffset: 14,
  },
  {
    key: 'Security', title: 'Security', baseCols: 3, maxCols: 4,
    baseGroups: [
      secondarySections[1].subheaders.filter(s => s.title === 'CODE SECURITY'),
      secondarySections[1].subheaders.filter(s => s.title === 'CLOUD SECURITY'),
      secondarySections[1].subheaders.filter(s => s.title === 'CLOUD SIEM'),
    ],
    seedOffset: 21,
  },
  {
    key: 'Software Delivery', title: 'Software Delivery', baseCols: 2, maxCols: 4,
    baseGroups: [
      secondarySections[2].subheaders.filter(s => s.title === 'CI/CD'),
      secondarySections[2].subheaders.filter(s => s.title === 'DEVELOPER EFFICIENCY'),
    ],
    seedOffset: 28,
  },
  {
    key: 'Service Management', title: 'Service Management', baseCols: 2, maxCols: 4,
    baseGroups: [
      secondarySections[3].subheaders.filter(s => s.title === 'INCIDENT RESPONSE'),
      secondarySections[3].subheaders.filter(s => s.title === 'ACTIONS'),
    ],
    seedOffset: 35,
  },
  {
    key: 'Platform & Administration', title: 'Platform & Administration', baseCols: 3, maxCols: 4,
    baseGroups: [
      secondarySections[4].subheaders.filter(s => s.title === 'CORE PLATFORM'),
      secondarySections[4].subheaders.filter(s => s.title === 'EXTEND'),
      secondarySections[4].subheaders.filter(s => s.title === 'GOVERN'),
    ],
    seedOffset: 42,
  },
];

function getLayeredColumns(
  section: SectionMeta,
  allocatedCols: number,
  extras: DocSubheader[],
): DocSubheader[][][] {
  const groups = section.baseGroups;
  const baseCols = section.baseCols;
  const baseLayer: DocSubheader[][] = Array.from({ length: allocatedCols }, () => []);

  if (allocatedCols >= groups.length) {
    groups.forEach((group, i) => {
      baseLayer[i].push(...group);
    });
  } else {
    groups.forEach((group, i) => {
      baseLayer[i % allocatedCols].push(...group);
    });
  }

  const usedBaseCols = Math.min(groups.length, allocatedCols);
  const newColSlots = Math.max(0, allocatedCols - usedBaseCols);
  const layer0Extras = extras.slice(0, newColSlots);
  const remaining = extras.slice(newColSlots);

  layer0Extras.forEach((sub, i) => {
    baseLayer[usedBaseCols + i].push(sub);
  });

  const layers: DocSubheader[][][] = [baseLayer];

  let overflow = [...remaining];
  while (overflow.length > 0) {
    const wave = overflow.slice(0, allocatedCols);
    overflow = overflow.slice(allocatedCols);
    const layer: DocSubheader[][] = Array.from({ length: allocatedCols }, () => []);
    wave.forEach((sub, i) => {
      layer[i] = [sub];
    });
    layers.push(layer);
  }

  const columns: DocSubheader[][][] = Array.from({ length: allocatedCols }, () => []);
  for (let layerIdx = 0; layerIdx < layers.length; layerIdx++) {
    for (let colIdx = 0; colIdx < allocatedCols; colIdx++) {
      columns[colIdx].push(layers[layerIdx][colIdx]);
    }
  }

  return columns;
}

function estimateSectionHeight(section: SectionMeta, extras: DocSubheader[], allocatedCols: number): number {
  const cols = getLayeredColumns(section, allocatedCols, extras);
  return Math.max(...cols.map(layers =>
    layers.flat().reduce((h, sub) => h + 1 + sub.links.length, 0)
  ));
}

function enumerateAllocations(n: number, total: number): number[][] {
  if (n === 1) return [[total]];
  const results: number[][] = [];
  for (let i = 1; i <= total - (n - 1); i++) {
    for (const rest of enumerateAllocations(n - 1, total - i)) {
      results.push([i, ...rest]);
    }
  }
  return results;
}

function computeLayout(extraSubs: Record<string, number>, extraLinksPerSub: number, heightThreshold: number, totalCols: number = 4, containerWidth: number = 1336): GridRowDef[] {
  type SectionItem = { section: SectionMeta; allocatedCols: number; extras: DocSubheader[] };

  const GRID_GAP = 28;
  const CARD_PADDING = 32;
  const OUTER_PADDING = containerWidth <= 480 ? 20 : 48;
  const MIN_COL_WIDTH = 140;

  // Calculate how wide each grid column is at this container width
  const contentWidth = containerWidth - 2 * OUTER_PADDING;
  const gridColWidth = (contentWidth - (totalCols - 1) * GRID_GAP) / totalCols;

  // For a section spanning `spanCols` grid columns containing `internalCols` content columns,
  // check if the internal columns are wide enough
  function fitsComfortably(spanCols: number, internalCols: number): boolean {
    const cardWidth = spanCols * gridColWidth + (spanCols - 1) * GRID_GAP;
    const availableForContent = cardWidth - 2 * CARD_PADDING;
    const perInternalCol = internalCols > 1
      ? (availableForContent - (internalCols - 1) * (GRID_GAP + 2 * CARD_PADDING)) / internalCols
      : availableForContent;
    return perInternalCol >= MIN_COL_WIDTH;
  }

  // 1. Prepare sections — when extras are added, expand merged groups back out
  const allItems: SectionItem[] = SECTIONS.map(section => {
    const extraCount = extraSubs[section.key] || 0;
    const extras = generateExtraSubheaders(extraCount, extraLinksPerSub, section.seedOffset);
    const effectiveSection = (extraCount > 0 && section.baseGroupsExpanded)
      ? { ...section, baseGroups: section.baseGroupsExpanded, baseCols: Math.max(section.baseCols, section.baseGroupsExpanded.length) }
      : section;
    const baseCols = Math.min(effectiveSection.baseCols, totalCols);
    return { section: effectiveSection, allocatedCols: baseCols, extras };
  });

  // 2. Sequential packing with height-threshold splitting
  const remaining = allItems.map(item => ({ ...item }));
  const packedRows: SectionItem[][] = [];

  while (remaining.length > 0) {
    const first = remaining.shift()!;
    const row: SectionItem[] = [first];
    let rowCols = first.allocatedCols;

    while (remaining.length > 0 && rowCols + remaining[0].allocatedCols <= totalCols) {
      const next = remaining.shift()!;
      row.push(next);
      rowCols += next.allocatedCols;
    }

    // Height-threshold check for multi-section rows (order-preserving)
    if (row.length > 1) {
      const heights = row.map(item =>
        estimateSectionHeight(item.section, item.extras, item.allocatedCols)
      );
      const minH = Math.min(...heights);
      const maxH = Math.max(...heights);
      const ratio = minH > 0 ? maxH / minH : Infinity;

      if (ratio > heightThreshold) {
        const allocations = enumerateAllocations(row.length, totalCols);
        let bestAlloc: number[] | null = null;
        let bestRatio = ratio;

        for (const alloc of allocations) {
          const wasteful = row.some((item, i) => {
            const maxUseful = item.section.baseGroups.length + item.extras.length;
            return alloc[i] > maxUseful;
          });
          if (wasteful) continue;

          const hs = row.map((item, i) =>
            estimateSectionHeight(item.section, item.extras, alloc[i])
          );
          const mn = Math.min(...hs);
          const mx = Math.max(...hs);
          const r = mn > 0 ? mx / mn : Infinity;
          if (r < bestRatio) {
            bestRatio = r;
            bestAlloc = alloc;
          }
        }

        if (bestAlloc && bestRatio <= heightThreshold) {
          row.forEach((item, i) => { item.allocatedCols = bestAlloc![i]; });
          packedRows.push(row);
          continue;
        }

        const tallestIdx = heights.indexOf(maxH);
        const beforeTallest = row.slice(0, tallestIdx);
        const tallest = row[tallestIdx];
        const afterTallest = row.slice(tallestIdx + 1);

        if (beforeTallest.length > 0) {
          packedRows.push(beforeTallest);
        }

        tallest.allocatedCols = totalCols;
        packedRows.push([tallest]);

        remaining.unshift(...afterTallest);
        continue;
      }
    }

    packedRows.push(row);
  }

  // 3. Width-overflow check: break apart multi-section rows where columns are too narrow
  const widthChecked: SectionItem[][] = [];
  for (const row of packedRows) {
    if (row.length <= 1) {
      widthChecked.push(row);
      continue;
    }
    // Check if any section in this row has columns too narrow for its content
    const overflows = row.some(item => {
      const internalCols = Math.min(item.section.baseGroups.length, item.allocatedCols);
      return !fitsComfortably(item.allocatedCols, Math.max(internalCols, 1));
    });

    if (overflows) {
      // Break each section onto its own row
      for (const item of row) {
        widthChecked.push([item]);
      }
    } else {
      widthChecked.push(row);
    }
  }

  // 4. Determine GLOBAL subsection layout based on viewport width.
  //    When the most column-heavy section can't fit its subsections horizontally,
  //    ALL sections switch to the same vertical mode for consistency.
  const LINK_COL_GAP = 24;
  const maxInternalCols = Math.max(...allItems.map(item =>
    Math.min(item.section.baseGroups.length, totalCols)
  ));

  let globalLayout: GridRowDef['subsectionLayout'] = 'horizontal';
  if (maxInternalCols > 1 && !fitsComfortably(totalCols, maxInternalCols)) {
    const fullCardWidth = totalCols * gridColWidth + (totalCols - 1) * GRID_GAP;
    const fullContent = fullCardWidth - 2 * CARD_PADDING;
    const twoColLinkWidth = (fullContent - LINK_COL_GAP) / 2;
    globalLayout = twoColLinkWidth >= MIN_COL_WIDTH ? 'vertical-2col' : 'vertical-1col';
  }

  // 5. Solo sections: at tablet (all solo) span totalCols for full-width positioning.
  //    At desktop, keep allocatedCols from packing/splitting (already correct).
  const allSolo = widthChecked.every(row => row.length === 1);
  const maxBaseCols = Math.max(...allItems.map(item => item.section.baseGroups.length));
  if (allSolo) {
    for (const row of widthChecked) {
      row[0].allocatedCols = totalCols;
    }
  }

  // 6. Build GridRowDef[] from width-checked rows
  return widthChecked.map(row => {
    const headers: GridRowDef['headers'] = [];
    const columns: DocSubheader[][][] = [];

    for (const item of row) {
      headers.push({ title: item.section.title, cols: item.allocatedCols });
      const sectionCols = getLayeredColumns(item.section, item.allocatedCols, item.extras);
      columns.push(...sectionCols);
    }

    while (columns.length < totalCols) columns.push([[]]);

    return { headers, columns, subsectionLayout: globalLayout };
  });
}

// Reusable stepper row for the toolbar
function StepperRow({ label, value, onChange, min = 0, max = 15 }: {
  label: string; value: number; onChange: (v: number) => void; min?: number; max?: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-[9px] text-gray-400 whitespace-nowrap truncate mr-2">{label}</span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="size-5 flex items-center justify-center rounded text-gray-400 hover:text-[#632CA6] hover:bg-gray-100 transition-colors text-[11px]"
        >−</button>
        <span className="text-[11px] text-gray-600 w-4 text-center tabular-nums">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="size-5 flex items-center justify-center rounded text-gray-400 hover:text-[#632CA6] hover:bg-gray-100 transition-colors text-[11px]"
        >+</button>
      </div>
    </div>
  );
}

const ALL_SECTION_KEYS = ['obs', 'dx', ...secondarySections.map(s => s.title)] as const;
const SECTION_LABELS: Record<string, string> = {
  obs: 'Observability',
  dx: 'Digital Exp',
  ...Object.fromEntries(secondarySections.map(s => [s.title, s.title])),
  'Platform & Administration': 'Platform',
};

const isEmbedded = window.parent !== window;

const BREAKPOINTS = [
  { label: 'Mobile', width: 375, icon: '📱' },
  { label: 'Tablet', width: 768, icon: '📋' },
  { label: 'Desktop', width: 1336, icon: '🖥' },
  { label: 'Full', width: 0, icon: '↔' },
] as const;

function ResponsiveResizer({ children, viewportWidth, setViewportWidth, visible = true }: { children: React.ReactNode; viewportWidth: number; setViewportWidth: (w: number) => void; visible?: boolean }) {
  const [dragging, setDragging] = React.useState<'left' | 'right' | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const startXRef = React.useRef(0);
  const startWidthRef = React.useRef(0);
  const dragSideRef = React.useRef<'left' | 'right' | null>(null);

  const isConstrained = viewportWidth > 0;
  const activeLabel = !isConstrained ? 'Full' : BREAKPOINTS.find(b => b.width === viewportWidth)?.label ?? `${viewportWidth}px`;

  React.useEffect(() => {
    if (!dragging) return;

    const onMove = (e: MouseEvent) => {
      const maxW = window.innerWidth - 48;
      const dx = e.clientX - startXRef.current;
      const delta = dragSideRef.current === 'right' ? dx * 2 : -dx * 2;
      const newWidth = Math.max(320, Math.min(maxW, startWidthRef.current + delta));
      setViewportWidth(Math.round(newWidth));
    };

    const onUp = () => {
      setDragging(null);
      dragSideRef.current = null;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    document.body.style.cursor = 'ew-resize';
    document.body.style.userSelect = 'none';
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [dragging]);

  const startDrag = (side: 'left' | 'right', e: React.MouseEvent) => {
    e.preventDefault();
    startXRef.current = e.clientX;
    startWidthRef.current = containerRef.current?.offsetWidth ?? viewportWidth;
    dragSideRef.current = side;
    setDragging(side);
  };

  const handleStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 12,
    cursor: 'ew-resize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 50,
  };

  const handleBarStyle: React.CSSProperties = {
    width: 4,
    height: 48,
    borderRadius: 4,
    background: 'rgba(94, 109, 214, 0.35)',
    transition: 'background 0.15s',
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
      {/* Resizable viewport */}
      <div style={{
        position: 'relative',
        width: isConstrained ? viewportWidth : '100%',
        maxWidth: '100%',
        transition: dragging ? 'none' : 'width 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
      }}>
        {visible && isConstrained && (
          <>
            {/* Left handle */}
            <div
              style={{ ...handleStyle, left: -16 }}
              onMouseDown={e => startDrag('left', e)}
            >
              <div style={{
                ...handleBarStyle,
                background: dragging === 'left' ? 'rgba(94, 109, 214, 0.7)' : handleBarStyle.background,
              }} />
            </div>
            {/* Right handle */}
            <div
              style={{ ...handleStyle, right: -16 }}
              onMouseDown={e => startDrag('right', e)}
            >
              <div style={{
                ...handleBarStyle,
                background: dragging === 'right' ? 'rgba(94, 109, 214, 0.7)' : handleBarStyle.background,
              }} />
            </div>
          </>
        )}
        <div ref={containerRef} style={{ overflow: 'hidden', borderRadius: isConstrained ? 12 : 0, boxShadow: isConstrained ? '0 0 0 1px rgba(94, 109, 214, 0.15), 0 8px 32px rgba(0,0,0,0.12)' : 'none' }}>
          {children}
        </div>
      </div>

      {/* Breakpoint bar — fixed to bottom (designer mode only) */}
      {visible && !isEngHandoff && createPortal(
        <div style={{
          position: 'fixed',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '8px 14px',
          background: '#1a1f24', borderRadius: 12,
          boxShadow: '0 4px 24px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.06)',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          zIndex: 2147483646,
        }}>
          {BREAKPOINTS.map(bp => (
            <button
              key={bp.label}
              onClick={() => setViewportWidth(bp.width)}
              style={{
                padding: '6px 14px',
                fontSize: 12,
                fontWeight: 600,
                border: 'none',
                borderRadius: 8,
                cursor: 'pointer',
                background: (bp.width === viewportWidth || (bp.width === 0 && !isConstrained))
                  ? 'rgba(94, 109, 214, 0.25)' : 'transparent',
                color: (bp.width === viewportWidth || (bp.width === 0 && !isConstrained))
                  ? '#8b9aff' : 'rgba(255,255,255,0.45)',
                transition: 'all 0.15s',
              }}
            >
              {bp.icon} {bp.label}{bp.width > 0 ? ` (${bp.width})` : ''}
            </button>
          ))}
          <div style={{
            marginLeft: 8,
            padding: '5px 12px',
            fontSize: 12,
            fontWeight: 600,
            color: '#8b9aff',
            background: 'rgba(94, 109, 214, 0.1)',
            borderRadius: 8,
            fontVariantNumeric: 'tabular-nums',
            whiteSpace: 'nowrap',
          }}>
            {isConstrained ? `${viewportWidth}px` : 'Full width'}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}

// ─── Inspect Mode (Dev Mode) ───

const INSPECT_SPECS: Record<string, { title: string; specs: [string, string][] }> = {
  'page-header': {
    title: 'Page Header',
    specs: [
      ['Font', 'Helvetica Neue'],
      ['Size / Weight', '32px / 200 (Thin)'],
      ['Line height', '38px'],
      ['Letter spacing', '-0.4px'],
      ['Color', 'rgba(28,43,52,0.98)'],
      ['DRUIDS token', 'ui-text'],
      ['Alignment', 'center'],
      ['Margin bottom', '40px'],
    ],
  },
  'product-header': {
    title: 'Product Header',
    specs: [
      ['Font', 'Helvetica Neue'],
      ['Size / Weight', '26px / 500 (Medium)'],
      ['Line height', '36px'],
      ['Letter spacing', '-0.3px'],
      ['Color', 'rgba(28,43,52,0.98)'],
      ['DRUIDS token', 'ui-text'],
      ['Icon gap', '8px'],
      ['Count gap', '8px'],
      ['Count alignment', 'baseline'],
    ],
  },
  'link-count': {
    title: 'Link Count',
    specs: [
      ['Size / Weight', '14px / 500 (Medium)'],
      ['Color', 'rgba(28,43,52,0.68)'],
      ['DRUIDS token', 'ui-text-secondary'],
      ['Variant', 'tabular-nums'],
      ['Alignment', 'baseline with header'],
    ],
  },
  'subsection-header': {
    title: 'Subsection Header',
    specs: [
      ['Font', 'Helvetica Neue'],
      ['Size / Weight', '12px / 700 (Bold)'],
      ['Line height', '20px'],
      ['Letter spacing', '0.5px'],
      ['Transform', 'uppercase'],
      ['Color', 'rgba(28,43,52,0.68)'],
      ['DRUIDS token', 'ui-text-secondary'],
      ['Gap to first link', '20px'],
    ],
  },
  'link': {
    title: 'Link',
    specs: [
      ['Font', 'Helvetica Neue'],
      ['Size / Weight', '16px / 400 (Regular)'],
      ['Line height', '150% (24px)'],
      ['Color (default)', '#5e6dd6 (indigo-500)'],
      ['Color (hover)', '#3F4CA5 (indigo-600)'],
      ['Link → link gap', '20px'],
      ['Link → description gap', '2px'],
      ['—', ''],
      ['Arrow', '16×16px, inline-flex'],
      ['Arrow default', 'opacity: 0, translateX: -8px'],
      ['Arrow hover', 'opacity: 1, translateX: 0'],
      ['Arrow timing', '200ms ease-out'],
    ],
  },
  'description': {
    title: 'Description Text',
    specs: [
      ['Font', 'Helvetica Neue'],
      ['Size (inline)', '16px'],
      ['Size (tooltip)', '14px'],
      ['Weight', '400 (Regular)'],
      ['Line height', '150%'],
      ['Color', 'rgba(28,43,52,0.68)'],
      ['DRUIDS token', 'ui-text-secondary'],
      ['—', ''],
      ['Tooltip bg', '#ffffff'],
      ['Tooltip radius', '6px'],
      ['Tooltip shadow', '0 4px 16px rgba(0,0,0,0.12)'],
      ['Tooltip padding', '8px 12px'],
      ['Tooltip offset', '4px top, -12px left'],
      ['Tooltip anim', '200ms ease-out, translateY -8→0'],
    ],
  },
  'card': {
    title: 'Section Card',
    specs: [
      ['Background', 'rgb(255 255 255 / 0.55)'],
      ['Backdrop blur', '24px'],
      ['Border', '1px solid rgba(0,0,0,0.068)'],
      ['Border radius', '8px'],
      ['Shadow', '0 4px 8px -4px rgba(0,0,0,0.05)'],
      ['Padding', '32px'],
      ['Column gap', '92px (28 + 2×32)'],
      ['Row gap (layers)', '48px'],
      ['Subsection gap', '40px'],
      ['—', ''],
      ['Hover bg', 'linear-gradient(↓)'],
      ['  Top opacity', '90%'],
      ['  Bottom opacity', '70%'],
      ['  Fade starts', '30%'],
      ['—', ''],
      ['Scale (hover)', '1.008x, 1.02y'],
      ['Enter easing', 'cubic-bezier(0.25, 1.4, 0.55, 1)'],
      ['Enter transform', '800ms'],
      ['Enter bg/shadow', '300ms'],
      ['Leave easing', 'cubic-bezier(0.4, 0.06, 0.2, 1)'],
      ['Leave transform', '450ms'],
      ['Leave bg/shadow', '300ms'],
    ],
  },
  'page-container': {
    title: 'Page Layout',
    specs: [
      ['Max width', '1336px'],
      ['Top padding', '200px'],
      ['Side padding', '48px (desktop), 20px (mobile)'],
      ['Bottom padding', '120px'],
      ['Grid gap (H)', '28px'],
      ['Grid gap (V)', '40px'],
      ['—', ''],
      ['Breakpoints', ''],
      ['  Mobile', '≤ 375px'],
      ['  Tablet', '≤ 768px'],
      ['  Desktop', '1336px'],
      ['Hover disabled', '< 768px'],
    ],
  },
  'section-icon': {
    title: 'Section Icon',
    specs: [
      ['Size', '28×28px'],
      ['Color', 'matches section theme'],
      ['Position', 'inline with product header'],
      ['Gap to title', '8px'],
    ],
  },
};

function InspectOverlay({ designVars, embedded = false, onSelect }: { designVars: DesignVars; embedded?: boolean; onSelect?: (spec: { title: string; specs: [string, string][] } | null, box: { top: number; left: number; width: number; height: number } | null) => void }) {
  const [selected, setSelected] = React.useState<string | null>(null);
  const [hoveredEl, setHoveredEl] = React.useState<HTMLElement | null>(null);
  const [selectedEl, setSelectedEl] = React.useState<HTMLElement | null>(null);
  const [highlight, setHighlight] = React.useState<{ top: number; left: number; width: number; height: number } | null>(null);
  const [selectionBox, setSelectionBox] = React.useState<{ top: number; left: number; width: number; height: number } | null>(null);

  React.useEffect(() => {
    document.body.style.cursor = 'crosshair';
    return () => { document.body.style.cursor = ''; };
  }, []);

  React.useEffect(() => {
    if (onSelect) {
      const spec = selected ? INSPECT_SPECS[selected] || null : null;
      onSelect(spec, selectionBox);
    }
  }, [selected, selectionBox, onSelect]);

  const updateHighlight = React.useCallback((el: HTMLElement | null, setter: (v: any) => void) => {
    if (!el) { setter(null); return; }
    const r = el.getBoundingClientRect();
    setter({ top: r.top, left: r.left, width: r.width, height: r.height });
  }, []);

  React.useEffect(() => {
    const findInspectable = (target: HTMLElement): HTMLElement | null => {
      let el: HTMLElement | null = target;
      while (el) {
        if (el.dataset.inspect) return el;
        el = el.parentElement;
      }
      return null;
    };

    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-inspect-panel]') || target.closest('[data-toolbar]') || target.closest('[data-mode-bar]')) {
        setHoveredEl(null);
        setHighlight(null);
        return;
      }
      const el = findInspectable(target);
      setHoveredEl(el);
      updateHighlight(el, setHighlight);
    };

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-inspect-panel]') || target.closest('[data-toolbar]') || target.closest('[data-mode-bar]')) return;
      e.preventDefault();
      e.stopPropagation();
      const el = findInspectable(target);
      if (el) {
        setSelected(el.dataset.inspect!);
        setSelectedEl(el);
        updateHighlight(el, setSelectionBox);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setSelected(null); setSelectedEl(null); setSelectionBox(null); }
    };

    document.addEventListener('mousemove', onMove, true);
    document.addEventListener('click', onClick, true);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousemove', onMove, true);
      document.removeEventListener('click', onClick, true);
      document.removeEventListener('keydown', onKey);
    };
  }, [updateHighlight]);

  React.useEffect(() => {
    if (!selectedEl) return;
    const update = () => updateHighlight(selectedEl, setSelectionBox);
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update, true); window.removeEventListener('resize', update); };
  }, [selectedEl, updateHighlight]);

  const spec = selected ? INSPECT_SPECS[selected] : null;
  const labelS: React.CSSProperties = { fontSize: 11, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' };
  const valueS: React.CSSProperties = { fontSize: 11, color: '#fff', fontFamily: 'SF Mono, Menlo, monospace', textAlign: 'right' };
  const headS: React.CSSProperties = { fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 2 };

  return createPortal(
    <>
      {/* Hover highlight */}
      {highlight && hoveredEl !== selectedEl && (
        <div style={{
          position: 'fixed', pointerEvents: 'none', zIndex: 99998,
          top: highlight.top, left: highlight.left, width: highlight.width, height: highlight.height,
          outline: '2px solid rgba(94,109,214,0.6)',
          background: 'rgba(94,109,214,0.06)',
          borderRadius: 4,
          transition: 'all 80ms ease-out',
        }} />
      )}
      {/* Selection highlight */}
      {selectionBox && (
        <div style={{
          position: 'fixed', pointerEvents: 'none', zIndex: 99998,
          top: selectionBox.top, left: selectionBox.left, width: selectionBox.width, height: selectionBox.height,
          outline: '2px solid #5e6dd6',
          background: 'rgba(94,109,214,0.08)',
          borderRadius: 4,
        }}>
          {/* Size label */}
          <div style={{
            position: 'absolute', bottom: -20, left: 0,
            background: '#5e6dd6', color: '#fff', fontSize: 10, fontWeight: 600,
            padding: '2px 6px', borderRadius: 3, whiteSpace: 'nowrap',
            fontFamily: 'SF Mono, Menlo, monospace',
          }}>
            {Math.round(selectionBox.width)} × {Math.round(selectionBox.height)}
          </div>
        </div>
      )}
      {/* Spec panel (standalone mode only — in embedded mode, specs go to the parent panel) */}
      {!embedded && (
        <div data-inspect-panel style={{
          position: 'fixed', top: 16, right: 16, width: 300,
          maxHeight: 'calc(100vh - 32px)',
          background: 'rgba(20, 20, 28, 0.95)',
          backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
          borderRadius: 12, border: '1px solid rgba(255,255,255,0.1)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.4)', zIndex: 99999,
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
        }}>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid rgba(255,255,255,0.08)', flexShrink: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#5e6dd6' }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>Inspect</span>
              <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', marginLeft: 'auto' }}>Click any element</span>
            </div>
          </div>
          <div style={{ padding: '12px 16px 16px', overflowY: 'auto', flex: 1 }}>
            {!spec ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '32px 16px', textAlign: 'center' }}>
                <div style={{ fontSize: 32, opacity: 0.3 }}>⊹</div>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                  Hover over elements to highlight them.<br />Click to see specs.
                </span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={headS}>{spec.title}</div>
                {spec.specs.map(([label, value], i) => {
                  if (label === '—') return <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '2px 0' }} />;
                  if (!value) return <div key={i} style={headS}>{label}</div>;
                  return (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                      <span style={labelS}>{label}</span>
                      <span style={valueS}>{value}</span>
                    </div>
                  );
                })}
                {selectionBox && (
                  <>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '2px 0' }} />
                    <div style={headS}>Computed</div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                      <span style={labelS}>Size</span>
                      <span style={valueS}>{Math.round(selectionBox.width)} × {Math.round(selectionBox.height)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                      <span style={labelS}>Position</span>
                      <span style={valueS}>{Math.round(selectionBox.left)}, {Math.round(selectionBox.top + window.scrollY)}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>,
    document.body
  );
}

export default function App() {
  const [toolbarOpen, setToolbarOpen] = React.useState(true);
  const [showTools, setShowTools] = React.useState(true);
  const [showRedline, setShowRedline] = React.useState(false);
  const [descLength, setDescLength] = React.useState<DescLength>(isEngHandoff ? 'full' : initialDescLength);
  const [disclosure, setDisclosure] = React.useState<DisclosureMode>(isEngHandoff ? 'hover-link' : initialDisclosure);

  // Eng handoff: Design vs Dev mode
  type ViewMode = 'design' | 'dev';
  const [viewMode, setViewMode] = React.useState<ViewMode>('design');
  const [showPanel, setShowPanel] = React.useState(true);
  const [inspectedSpec, setInspectedSpec] = React.useState<{ spec: { title: string; specs: [string, string][] } | null; box: { top: number; left: number; width: number; height: number } | null }>({ spec: null, box: null });
  const handleInspectSelect = React.useCallback((spec: { title: string; specs: [string, string][] } | null, box: { top: number; left: number; width: number; height: number } | null) => {
    setInspectedSpec({ spec, box });
  }, []);

  // Cmd+Shift+Period to toggle panel/tools
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key === '.') {
        e.preventDefault();
        if (isEngHandoff) {
          setShowPanel(prev => !prev);
        } else {
          setShowTools(prev => !prev);
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Design variables
  const [designVars, setDesignVars] = React.useState<DesignVars>(INITIAL_DESIGN);
  const [blobs, setBlobs] = React.useState<GradientBlob[]>(DEFAULT_BLOBS);
  const cssVars = React.useMemo(() => computeCssVars(designVars), [designVars]);
  const baseColor = React.useMemo(() => computeBaseColor(designVars.bgBrightness), [designVars.bgBrightness]);

  // Global links-per-extra-sub control
  const [extraLinksPerSub, setExtraLinksPerSub] = React.useState(4);

  // Per-section extra sub-section counts
  const [extraSubs, setExtraSubs] = React.useState<Record<string, number>>(
    () => Object.fromEntries(ALL_SECTION_KEYS.map(k => [k, 0]))
  );
  const setExtraSubsFor = (key: string, value: number) =>
    setExtraSubs(prev => ({ ...prev, [key]: value }));

  // Height-threshold for row splitting (tunable via toolbar)
  const [heightThreshold, setHeightThreshold] = React.useState(2.0);

  // Responsive viewport width (0 = full/unconstrained)
  const [viewportWidth, setViewportWidth] = React.useState(0);

  // Measure actual container width from the DOM so the layout responds to
  // real browser resizing / DevTools device emulation, not just our custom resizer.
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [measuredWidth, setMeasuredWidth] = React.useState(1336);
  React.useEffect(() => {
    if (!contentRef.current) return;
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        setMeasuredWidth(entry.contentBoxSize[0].inlineSize);
      }
    });
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  const containerWidth = viewportWidth > 0 ? viewportWidth : Math.min(measuredWidth, 1336);
  const totalCols = containerWidth <= 768 ? 3 : 4;
  const hoverEnabled = containerWidth > 768;

  const gridRows = React.useMemo(
    () => computeLayout(extraSubs, extraLinksPerSub, heightThreshold, totalCols, containerWidth),
    [extraSubs, extraLinksPerSub, heightThreshold, totalCols, containerWidth]
  );

  // When all sections are on own rows, use consistent column count for alignment
  const maxContentCols = Math.max(...SECTIONS.map(s => s.baseGroups.length));
  const allRowsSolo = gridRows.every(r => r.headers.length === 1);

  // When embedded in an iframe, receive toolbar state from the parent page
  React.useEffect(() => {
    if (!isEmbedded) return;
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== 'toolbar-state') return;
      const s = e.data;
      if (s.extraLinksPerSub !== undefined) setExtraLinksPerSub(s.extraLinksPerSub);
      if (s.extraSubs !== undefined) setExtraSubs(s.extraSubs);
      if (s.heightThreshold !== undefined) setHeightThreshold(s.heightThreshold);
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);




  const engStepperStyle: React.CSSProperties = { width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: 3, fontSize: 14 };

  return (
    <>
      {/* ─── DESIGNER MODE (local dev) ─── */}
      {!isEngHandoff && !isEmbedded && showTools && createPortal(
        <div
          data-toolbar="true"
          style={{
            position: 'fixed',
            zIndex: 2147483647,
            top: 0,
            left: 0,
            right: 0,
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          }}
        >
          <div style={{ background: '#242f36', color: '#fff', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }}>
            <div
              onClick={() => setToolbarOpen(!toolbarOpen)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px', height: 36, cursor: 'pointer', userSelect: 'none' }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>Variables</span>
              <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: 18, lineHeight: 1, transform: toolbarOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 200ms' }}>›</span>
            </div>
            <div style={{ maxHeight: toolbarOpen ? 300 : 0, overflow: 'hidden', transition: 'max-height 250ms cubic-bezier(0.25, 0.1, 0.25, 1)' }}>
              <div style={{ padding: '0 16px 12px', fontSize: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Links per subsection</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '2px 4px' }}>
                      <button onClick={() => setExtraLinksPerSub(v => Math.max(1, v - 1))} style={engStepperStyle}>−</button>
                      <span style={{ width: 16, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: 'rgba(255,255,255,0.9)' }}>{extraLinksPerSub}</span>
                      <button onClick={() => setExtraLinksPerSub(v => Math.min(20, v + 1))} style={engStepperStyle}>+</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Disclosure</span>
                    <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: 1, gap: 1 }}>
                      {([['off', 'OFF'], ['hover-link', 'LINK'], ['hover-section', 'SECTION'], ['always', 'ALWAYS']] as [DisclosureMode, string][]).map(([mode, label]) => (
                        <button key={mode} onClick={() => setDisclosure(mode)} style={{ padding: '3px 7px', fontSize: 10, fontWeight: 600, border: 'none', borderRadius: 3, cursor: 'pointer', background: disclosure === mode ? 'rgba(94, 109, 214, 0.25)' : 'transparent', color: disclosure === mode ? '#8b9aff' : 'rgba(255,255,255,0.4)', transition: 'all 0.15s' }}>{label}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, opacity: disclosure === 'off' ? 0.3 : 1, pointerEvents: disclosure === 'off' ? 'none' : 'auto' }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Length</span>
                    <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: 1, gap: 1 }}>
                      {(['short', 'full'] as DescLength[]).map(len => (
                        <button key={len} onClick={() => setDescLength(len)} style={{ padding: '3px 8px', fontSize: 10, fontWeight: 600, border: 'none', borderRadius: 3, cursor: 'pointer', textTransform: 'uppercase', background: descLength === len ? 'rgba(94, 109, 214, 0.25)' : 'transparent', color: descLength === len ? '#8b9aff' : 'rgba(255,255,255,0.4)', transition: 'all 0.15s' }}>{len}</button>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Height threshold</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '2px 4px' }}>
                      <button onClick={() => setHeightThreshold(v => Math.max(1.2, Math.round((v - 0.1) * 10) / 10))} style={engStepperStyle}>−</button>
                      <span style={{ width: 24, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: 'rgba(255,255,255,0.9)' }}>{heightThreshold.toFixed(1)}</span>
                      <button onClick={() => setHeightThreshold(v => Math.min(5.0, Math.round((v + 0.1) * 10) / 10))} style={engStepperStyle}>+</button>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <button onClick={() => setShowRedline(v => !v)} style={{ padding: '3px 10px', fontSize: 10, fontWeight: 600, border: 'none', borderRadius: 3, cursor: 'pointer', background: showRedline ? 'rgba(94,109,214,0.25)' : 'rgba(255,255,255,0.08)', color: showRedline ? '#7b8cff' : 'rgba(255,255,255,0.4)', transition: 'all 0.15s', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{showRedline ? '● Inspect' : 'Inspect'}</button>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 10 }}>
                  <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>Extra subsections</span>
                  {ALL_SECTION_KEYS.map((key) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', maxWidth: 90, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{SECTION_LABELS[key]}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '2px 4px' }}>
                        <button onClick={() => setExtraSubsFor(key, Math.max(0, (extraSubs[key] || 0) - 1))} style={engStepperStyle}>−</button>
                        <span style={{ width: 14, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: 'rgba(255,255,255,0.9)' }}>{extraSubs[key] || 0}</span>
                        <button onClick={() => setExtraSubsFor(key, Math.min(15, (extraSubs[key] || 0) + 1))} style={engStepperStyle}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {!isEngHandoff && !isEmbedded && showTools && (
        <DesignToolbar
          vars={designVars}
          onChange={setDesignVars}
          onReset={() => setDesignVars(INITIAL_DESIGN)}
          blobs={blobs}
          onBlobsChange={setBlobs}
        />
      )}

      {/* ─── ENG HANDOFF MODE ─── */}
      {isEngHandoff && createPortal(
        <>
          {/* Top breakpoint bar */}
          {showPanel && (
            <div data-toolbar="true" style={{
              position: 'fixed', top: 0, left: 0, right: showPanel ? 320 : 0, zIndex: 99990,
              display: 'flex', justifyContent: 'center', padding: '8px 16px',
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            }}>
              <div style={{ display: 'flex', gap: 2, background: 'rgba(20,20,28,0.85)', backdropFilter: 'blur(12px)', borderRadius: 8, padding: 3, border: '1px solid rgba(255,255,255,0.08)' }}>
                {BREAKPOINTS.map(bp => {
                  const isActive = bp.width === 0 ? viewportWidth === 0 : viewportWidth === bp.width;
                  return (
                    <button key={bp.label} onClick={() => setViewportWidth(bp.width)} style={{
                      padding: '4px 12px', fontSize: 11, fontWeight: 500, border: 'none', borderRadius: 5, cursor: 'pointer',
                      background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
                      color: isActive ? '#fff' : 'rgba(255,255,255,0.4)',
                      transition: 'all 0.15s',
                    }}>
                      {bp.icon} {bp.label} {bp.width > 0 ? `(${bp.width})` : ''}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Right panel */}
          {showPanel && (
            <div data-inspect-panel style={{
              position: 'fixed', top: 0, right: 0, bottom: 0, width: 320, zIndex: 99990,
              background: 'rgba(20, 20, 28, 0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', flexDirection: 'column',
              fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
            }}>
              {/* Panel header with mode context */}
              <div style={{ padding: '14px 16px 10px', borderBottom: '1px solid rgba(255,255,255,0.06)', flexShrink: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#fff' }}>
                    {viewMode === 'design' ? 'Controls' : 'Inspect'}
                  </span>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)' }}>⌘⇧. to hide</span>
                </div>
              </div>

              {/* Panel content */}
              <div style={{ padding: 16, overflowY: 'auto', flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {viewMode === 'design' ? (
                  <>
                    {/* Links per subsection */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>Links per subsection</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '4px 8px', width: 'fit-content' }}>
                        <button onClick={() => setExtraLinksPerSub(v => Math.max(1, v - 1))} style={engStepperStyle}>−</button>
                        <span style={{ width: 24, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: '#fff', fontSize: 13 }}>{extraLinksPerSub}</span>
                        <button onClick={() => setExtraLinksPerSub(v => Math.min(20, v + 1))} style={engStepperStyle}>+</button>
                      </div>
                    </div>
                    {/* Height threshold */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>Height threshold</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '4px 8px', width: 'fit-content' }}>
                        <button onClick={() => setHeightThreshold(v => Math.max(1.2, Math.round((v - 0.1) * 10) / 10))} style={engStepperStyle}>−</button>
                        <span style={{ width: 28, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: '#fff', fontSize: 13 }}>{heightThreshold.toFixed(1)}</span>
                        <button onClick={() => setHeightThreshold(v => Math.min(5.0, Math.round((v + 0.1) * 10) / 10))} style={engStepperStyle}>+</button>
                      </div>
                    </div>
                    {/* Extra subsections */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>Extra subsections</span>
                      {ALL_SECTION_KEYS.map((key) => (
                        <div key={key} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>{SECTION_LABELS[key]}</span>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '2px 6px' }}>
                            <button onClick={() => setExtraSubsFor(key, Math.max(0, (extraSubs[key] || 0) - 1))} style={engStepperStyle}>−</button>
                            <span style={{ width: 14, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: '#fff', fontSize: 12 }}>{extraSubs[key] || 0}</span>
                            <button onClick={() => setExtraSubsFor(key, Math.min(15, (extraSubs[key] || 0) + 1))} style={engStepperStyle}>+</button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  inspectedSpec.spec ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginBottom: 2 }}>{inspectedSpec.spec.title}</div>
                      {inspectedSpec.spec.specs.map(([label, value], i) => {
                        if (label === '—') return <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '2px 0' }} />;
                        if (!value) return <div key={i} style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)', marginTop: 4 }}>{label}</div>;
                        return (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12 }}>
                            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{label}</span>
                            <span style={{ fontSize: 11, color: '#fff', fontFamily: 'SF Mono, Menlo, monospace', textAlign: 'right' }}>{value}</span>
                          </div>
                        );
                      })}
                      {inspectedSpec.box && (
                        <>
                          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', margin: '2px 0' }} />
                          <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.35)' }}>Computed</div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Size</span>
                            <span style={{ fontSize: 11, color: '#fff', fontFamily: 'SF Mono, Menlo, monospace' }}>{Math.round(inspectedSpec.box.width)} × {Math.round(inspectedSpec.box.height)}</span>
                          </div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>Position</span>
                            <span style={{ fontSize: 11, color: '#fff', fontFamily: 'SF Mono, Menlo, monospace' }}>{Math.round(inspectedSpec.box.left)}, {Math.round(inspectedSpec.box.top + window.scrollY)}</span>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, padding: '32px 16px', textAlign: 'center' }}>
                      <div style={{ fontSize: 32, opacity: 0.3 }}>⊹</div>
                      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', lineHeight: 1.5 }}>
                        Hover over elements to highlight.<br />Click to see specs.
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {/* Bottom mode bar (like Figma) */}
          <div data-mode-bar style={{
            position: 'fixed', bottom: 16, left: '50%', transform: 'translateX(-50%)', zIndex: 99991,
            display: 'flex', gap: 2, background: 'rgba(20,20,28,0.9)', backdropFilter: 'blur(16px)',
            borderRadius: 10, padding: 4, border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
          }}>
            {(['design', 'dev'] as ViewMode[]).map(mode => (
              <button key={mode} onClick={() => { setViewMode(mode); setShowRedline(mode === 'dev'); }} style={{
                padding: '8px 24px', fontSize: 13, fontWeight: 600, border: 'none', borderRadius: 7, cursor: 'pointer',
                background: viewMode === mode ? (mode === 'dev' ? 'rgba(94,109,214,0.2)' : 'rgba(255,255,255,0.1)') : 'transparent',
                color: viewMode === mode ? (mode === 'dev' ? '#8b9aff' : '#fff') : 'rgba(255,255,255,0.35)',
                transition: 'all 0.2s',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                {mode === 'design' ? (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>Design</>
                ) : (
                  <><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>Dev</>
                )}
              </button>
            ))}
          </div>
        </>,
        document.body
      )}

      <ResponsiveResizer viewportWidth={viewportWidth} setViewportWidth={setViewportWidth} visible={showTools}>
      <div
        className="w-full relative overflow-hidden"
        style={{
          borderRadius: 0,
          ...Object.fromEntries(Object.entries(cssVars)),
        } as React.CSSProperties}
      >
        {/* Base background color */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundColor: baseColor }}
        />
        {/* Individual gradient blobs distributed throughout the full content height */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            filter: `hue-rotate(${designVars.bgWarmth}deg) saturate(${designVars.bgSaturation / 100})`,
          }}
        >
          {blobs.map(b => {
            const s = designVars.blobScale / 100;
            return (
              <div
                key={b.id}
                style={{
                  position: 'absolute',
                  left: `${b.x - (b.width * s) / 2}%`,
                  top: `${b.y - (b.height * s) / 2}%`,
                  width: `${b.width * s}%`,
                  height: `${b.height * s}%`,
                  borderRadius: '50%',
                  background: (conceptParam === '2' || conceptParam === '4')
                    ? `radial-gradient(ellipse at center, ${b.color} 0%, ${b.color}66 25%, ${b.color}22 55%, transparent 80%)`
                    : `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
                  opacity: (b.opacity / 100) * (designVars.blobOpacity / 100),
                }}
              />
            );
          })}
        </div>
        <div ref={contentRef} data-inspect="page-container" className="mx-auto relative" style={{ maxWidth: 1336, padding: `200px ${containerWidth <= 480 ? 20 : 48}px 120px` }}>
          {showHeader && (
            <h1 data-inspect="page-header" style={{
              fontFamily: headerFont,
              fontSize: 32,
              fontWeight: 200,
              lineHeight: '38px',
              letterSpacing: '-0.4px',
              color: 'rgba(28,43,52,0.98)',
              marginBottom: 40,
              textAlign: 'center',
            }}>
              Browse by product
            </h1>
          )}
          <div style={{ display: 'flex', flexDirection: 'column', gap: designVars.gridGapV }}>
            {gridRows.map((row, rowIndex) => {
              let colOffset = 0;
              const sectionData = row.headers.map((header) => {
                const startCol = colOffset;
                colOffset += header.cols;
                let headerColumns = row.columns.slice(startCol, startCol + header.cols);
                const allSubs = headerColumns.flat(2);
                const linkCount = allSubs.reduce((s, sub) => s + sub.links.length, 0);

                // Single-subsection solo sections: flag for horizontal link rendering
                const isSoloRow = row.headers.length === 1;
                const spreadLinks = isSoloRow && allSubs.length === 1 && allSubs[0].links.length > 1;

                const contentCols = spreadLinks
                  ? Math.min(allSubs[0].links.length, header.cols)
                  : headerColumns.filter(col => col.some(layer => layer.length > 0)).length;
                const layerCount = Math.max(...headerColumns.map(c => c.length));
                return { header, headerColumns, linkCount, layerCount, startCol, contentCols, spreadLinks };
              });

              return (
                <div
                  key={rowIndex}
                  style={{ display: 'grid', gridTemplateColumns: `repeat(${totalCols}, 1fr)`, gridTemplateRows: 'auto auto', columnGap: designVars.gridGapH, alignItems: 'start' }}
                >
                  {/* Row 1: all section headers */}
                  {sectionData.map(({ header, linkCount }) => (
                    <div key={`h-${header.title}`} data-inspect="product-header" className="flex items-center gap-3" style={{ gridColumn: `span ${header.cols}`, gridRow: 1, paddingBottom: 20, alignSelf: 'end' }}>
                      <span data-inspect="section-icon">{SECTION_ICONS[header.title]}</span>
                      <h2 className="leading-[36px] text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px] flex items-baseline gap-2" style={{ fontFamily: headerFont, fontWeight: 500 }}>
                        {header.title}
                        <span data-inspect="link-count" className="text-[14px] text-[rgba(28,43,52,0.68)] tabular-nums" style={{ fontFamily: countFont, fontWeight: 500 }}>
                          ({linkCount})
                        </span>
                      </h2>
                    </div>
                  ))}

                  {/* Row 2: all section cards (each hugs its own content) */}
                  {sectionData.map(({ header, headerColumns, layerCount, contentCols, spreadLinks }) => {
                    const filledColumns = headerColumns.filter(col => col.some(layer => layer.length > 0));
                    const allSubs = headerColumns.flat(2).filter(s => s.links?.length > 0);
                    const layout = row.subsectionLayout;
                    const linkColCount = layout === 'vertical-1col' ? 1 : layout === 'vertical-2col' ? 2 : 0;

                    const isSharedRow = row.headers.length > 1;

                    // Vertical layout: distribute subsections across N columns
                    if (linkColCount > 0) {
                      // Build columns by distributing subsections round-robin
                      const cols: typeof allSubs[] = Array.from({ length: linkColCount }, () => []);
                      allSubs.forEach((sub, i) => cols[i % linkColCount].push(sub));

                      return (
                        <SectionCardWrapper key={`c-${header.title}`} disclosure={disclosure} style={{ gridColumn: `span ${header.cols}`, gridRow: 2, alignSelf: isSharedRow ? 'stretch' : 'start' }}>
                          {(secHovered) => (
                            <HoverCard cols={linkColCount} gridGapH={designVars.gridGapH} hoverEnabled={hoverEnabled} onSectionHover={disclosure === 'hover-section' ? secHovered.set : undefined}>
                              {cols.map((colSubs, ci) => (
                                <div key={ci} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                                  {colSubs.map((sub, si) => (
                                    <SubheaderColumn key={si} subheader={sub} noHover={!hoverEnabled} descLength={descLength} disclosure={disclosure} sectionHovered={secHovered.value} />
                                  ))}
                                </div>
                              ))}
                            </HoverCard>
                          )}
                        </SectionCardWrapper>
                      );
                    }

                    const cardPadding = 32;
                    const internalGap = designVars.gridGapH + 2 * cardPadding;
                    const isSoloRow = row.headers.length === 1;

                    // Spread links horizontally for single-subsection solo sections (AI)
                    if (spreadLinks) {
                      const sub = allSubs[0];
                      const linkCols = Math.min(sub.links.length, contentCols);
                      return (
                        <SectionCardWrapper key={`c-${header.title}`} disclosure={disclosure} style={{ gridColumn: `span ${header.cols}`, gridRow: 2, alignSelf: isSharedRow ? 'stretch' : 'start' }}>
                          {(secHovered) => (
                            <HoverCard cols={isSoloRow ? linkCols : 1} gridGapH={designVars.gridGapH} hoverEnabled={hoverEnabled} onSectionHover={disclosure === 'hover-section' ? secHovered.set : undefined}>
                              {isSoloRow ? (
                                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 20 }}>
                                  {sub.title && (
                                    <h3
                                      className="leading-[20px] text-[12px] text-[rgba(28,43,52,0.68)] tracking-[0.5px] uppercase"
                                      style={{ fontFamily: subheaderFont, fontWeight: isHelvetica ? 700 : undefined }}
                                    >
                                      {sub.title}
                                    </h3>
                                  )}
                                  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${linkCols}, 1fr)`, columnGap: internalGap }}>
                                    {sub.links.map((link, i) => (
                                      <LinkItem key={i} link={link} noHover={!hoverEnabled} descLength={descLength} disclosure={disclosure} sectionHovered={secHovered.value} />
                                    ))}
                                  </div>
                                </div>
                              ) : (
                                <div className="flex flex-col gap-5">
                                  {sub.title && (
                                    <h3
                                      className="leading-[20px] text-[12px] text-[rgba(28,43,52,0.68)] tracking-[0.5px] uppercase"
                                      style={{ fontFamily: subheaderFont, fontWeight: isHelvetica ? 700 : undefined }}
                                    >
                                      {sub.title}
                                    </h3>
                                  )}
                                  <div style={{ display: 'grid', gridTemplateColumns: `repeat(${linkCols}, 1fr)`, columnGap: internalGap, rowGap: 20 }}>
                                    {sub.links.map((link, i) => (
                                      <LinkItem key={i} link={link} noHover={!hoverEnabled} descLength={descLength} disclosure={disclosure} sectionHovered={secHovered.value} />
                                    ))}
                                  </div>
                                </div>
                              )}
                            </HoverCard>
                          )}
                        </SectionCardWrapper>
                      );
                    }

                    // Default: horizontal subsection layout
                    // Solo sections: use maxContentCols so columns align vertically across sections
                    const effectiveCols = isSoloRow ? maxContentCols : contentCols;
                    return (
                      <SectionCardWrapper key={`c-${header.title}`} disclosure={disclosure} style={{ gridColumn: `span ${header.cols}`, gridRow: 2, alignSelf: isSharedRow ? 'stretch' : 'start' }}>
                        {(secHovered) => (
                          <HoverCard cols={effectiveCols} gridGapH={designVars.gridGapH} hoverEnabled={hoverEnabled} onSectionHover={disclosure === 'hover-section' ? secHovered.set : undefined}>
                            {Array.from({ length: layerCount }, (_, layerIdx) =>
                              filledColumns.map((colLayers, colIndex) => {
                                const subs = colLayers[layerIdx] || [];
                                return (
                                  <div key={`${colIndex}-${layerIdx}`} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 40,
                                    gridColumn: colIndex + 1,
                                  }}>
                                    {subs.map((subheader, subIdx) => (
                                      <SubheaderColumn key={subheader.title + subIdx} subheader={subheader} noHover={!hoverEnabled} descLength={descLength} disclosure={disclosure} sectionHovered={secHovered.value} />
                                    ))}
                                  </div>
                                );
                              })
                            )}
                          </HoverCard>
                        )}
                      </SectionCardWrapper>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </ResponsiveResizer>

      {showRedline && <InspectOverlay designVars={designVars} embedded={isEngHandoff} onSelect={isEngHandoff ? handleInspectSelect : undefined} />}
    </>
  );
}