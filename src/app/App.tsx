import React from "react";
import { createPortal } from "react-dom";
import rumSvgPaths from "../imports/svg-y2betfcnxe";
import arrowSvgPaths from "../imports/svg-lanf906ou0";
import softwareDeliverySvg from "../imports/svg-97pb5on3of";
import serviceManagementSvg from "../imports/svg-6h9jifxlz2";
import aiSvg from "../imports/svg-i0gohc99sa";
import securitySvg from "../imports/svg-dnnhtunjky";
import svgPaths from "../imports/svg-64nu9567k0";

// ─── Shared components ───

interface DocLink { text: string }
interface DocSubheader { title: string; links: DocLink[] }

function LinkItem({ link }: { link: DocLink }) {
  const words = link.text.split(" ");
  const leadingWords = words.slice(0, -1).join(" ");
  const lastWord = words[words.length - 1];
  return (
    <a href="#" className="group/link font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[150%] text-[16px] text-[#5e6dd6] hover:text-[#3F4CA5] hover:no-underline break-words">
      {leadingWords && <>{leadingWords} </>}
      <span className="whitespace-nowrap">
        {lastWord}
        <span className="inline-flex items-center align-middle ml-1.5 size-[16px] overflow-clip relative opacity-0 -translate-x-2 transition-all duration-200 ease-out group-hover/link:opacity-100 group-hover/link:translate-x-0">
          <svg className="absolute inset-[9.81%_2.44%_9.82%_2.6%] block size-[calc(100%-12.41%)] w-auto h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1925 12.8593">
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
        {subheader.links.map((link, i) => <LinkItem key={i} link={link} />)}
      </div>
    </div>
  );
}

function HoverCard({ cols, gridGapH, children }: { cols: number; gridGapH: number; children: React.ReactNode }) {
  const [hovered, setHovered] = React.useState(false);
  const cardPadding = 32;
  // To align internal columns with the outer 4-column grid, the internal gap
  // must bridge: cardPadding (right of col N) + outerGap + cardPadding (left
  // of col N+1) — but since we're inside one card, the internal gap needs to
  // equal outerGap + 2*cardPadding to keep column widths identical to the
  // outer grid's column widths.
  const internalGap = gridGapH + 2 * cardPadding;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: internalGap,
        padding: cardPadding,
        background: hovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
        backdropFilter: 'blur(var(--card-blur))',
        WebkitBackdropFilter: 'blur(var(--card-blur))',
        border: 'var(--card-border)',
        borderRadius: 'var(--card-radius)',
        boxShadow: hovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
        transition: 'background 200ms ease, box-shadow 200ms ease',
      }}
    >
      {children}
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
  'Platform Capabilities': <PlatformCapabilitiesIcon />,
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

const DEFAULT_BLOBS: GradientBlob[] = [
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

let nextBlobId = 100;
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
    '--card-bg-hover': `rgb(255 255 255 / 1)`,
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
                  <SliderRow label="Width" value={selectedBlob.width} min={10} max={80} unit="%"
                    onChange={(v) => updateBlob(selectedBlob.id, { width: v })} />
                  <SliderRow label="Height" value={selectedBlob.height} min={10} max={60} unit="%"
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
  "ANALYTICS", "SECURITY", "COMPLIANCE", "NETWORKING", "AUTOMATION",
  "WORKFLOWS", "INTEGRATIONS", "PIPELINES", "GOVERNANCE", "ALERTING",
  "COST OPS", "SERVICE MESH", "EDGE COMPUTE", "DATA LAKE", "ML OPS",
];

// Placeholder link names for scaling tests
const placeholderLinkNames = [
  "Performance Dashboard", "Threat Detection", "Audit Compliance Manager",
  "Traffic Analysis", "Workflow Orchestrator", "Pipeline Manager",
  "Data Governance Suite", "Alert Configuration", "Cost Optimization",
  "Service Discovery", "Edge Routing", "Data Lake Explorer",
  "Model Registry", "Incident Response", "Capacity Planning",
  "Resource Allocation", "Dependency Mapping", "Change Management",
  "SLA Monitoring", "Access Control Manager",
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
        { text: "Infrastructure" },
        { text: "Metrics" },
        { text: "Container Monitoring" },
        { text: "Serverless" },
        { text: "Network Monitoring" },
        { text: "Cloud Cost Management" },
        { text: "Cloudcraft" },
        { text: "Storage Management" },
      ],
    },
    {
      title: "APPLICATIONS",
      links: [
        { text: "APM" },
        { text: "Universal Service Monitoring" },
        { text: "Continuous Profiler" },
        { text: "Database Monitoring" },
        { text: "Data Streams Monitoring" },
        { text: "Data Observability" },
      ],
    },
    {
      title: "LOGS",
      links: [
        { text: "Log Management" },
        { text: "Sensitive Data Scanner" },
        { text: "Observability Pipelines" },
        { text: "Error Tracking" },
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
        { text: "Synthetic Monitoring" },
        { text: "Mobile App Testing" },
      ],
    },
    {
      title: "REAL USER MONITORING",
      links: [
        { text: "Real User Monitoring" },
        { text: "Session Replay" },
      ],
    },
    {
      title: "PRODUCT ANALYTICS",
      links: [
        { text: "Product Analytics" },
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
          { text: "Bits AI Agents" },
          { text: "Watchdog" },
          { text: "LLM Observability" },
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
          { text: "Code Security" },
        ],
      },
      {
        title: "CLOUD SECURITY",
        links: [
          { text: "Cloud Security" },
          { text: "Workload Protection" },
        ],
      },
      {
        title: "CLOUD SIEM",
        links: [
          { text: "Cloud SIEM" },
          { text: "App and API Protection" },
          { text: "Sensitive Data Scanner" },
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
          { text: "CI Visibility" },
          { text: "Test Optimization" },
          { text: "Continuous Testing" },
          { text: "Code Coverage" },
        ],
      },
      {
        title: "DEVELOPER EFFICIENCY",
        links: [
          { text: "Internal Developer Portal" },
          { text: "DORA Metrics" },
          { text: "IDE Plugins" },
          { text: "Feature Flags" },
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
          { text: "Incident Management" },
          { text: "On-Call" },
          { text: "Status Pages" },
        ],
      },
      {
        title: "ACTIONS",
        links: [
          { text: "Workflow Automation" },
          { text: "App Builder" },
          { text: "Case Management" },
          { text: "Service Level Objectives" },
        ],
      },
    ],
  },
  {
    title: "Platform Capabilities",
    description: "Extend, customize, and manage Datadog across your organization",
    descriptionHighlight: "Extend, customize, and manage",
    subheaders: [
      {
        title: "GETTING STARTED",
        links: [
          { text: "Integrations" },
          { text: "OpenTelemetry" },
          { text: "API" },
          { text: "Extend Datadog" },
          { text: "Partners" },
        ],
      },
      {
        title: "COLLABORATE",
        links: [
          { text: "Dashboards" },
          { text: "Notebooks" },
          { text: "Monitors and Alerting" },
          { text: "Mobile App" },
          { text: "CoScreen" },
          { text: "Event Management" },
        ],
      },
      {
        title: "GOVERN",
        links: [
          { text: "Account Management" },
          { text: "Data Security" },
          { text: "Fleet Automation" },
        ],
      },
    ],
  },
];

// ─── Grid row definitions ───
// Each row defines: section headers (with title + column span) and the 4 columns of subsections
interface GridRowDef {
  headers: { title: string; cols: number }[];
  columns: DocSubheader[][];  // 4 entries, each is an array of subsections stacked vertically
}

const GRID_ROWS: GridRowDef[] = [
  {
    headers: [{ title: 'Observability', cols: 3 }, { title: 'Digital Experience', cols: 1 }],
    columns: [
      observabilityData.subheaders.filter(s => s.title === 'INFRASTRUCTURE'),
      observabilityData.subheaders.filter(s => s.title === 'APPLICATIONS'),
      observabilityData.subheaders.filter(s => s.title === 'LOGS'),
      digitalExperienceData.subheaders,
    ],
  },
  {
    headers: [{ title: 'AI', cols: 1 }, { title: 'Security', cols: 3 }],
    columns: [
      secondarySections[0].subheaders, // AI
      secondarySections[1].subheaders.filter(s => s.title === 'CODE SECURITY'),
      secondarySections[1].subheaders.filter(s => s.title === 'CLOUD SECURITY'),
      secondarySections[1].subheaders.filter(s => s.title === 'CLOUD SIEM'),
    ],
  },
  {
    headers: [{ title: 'Software Delivery', cols: 2 }, { title: 'Service Management', cols: 2 }],
    columns: [
      secondarySections[2].subheaders.filter(s => s.title === 'CI/CD'),
      secondarySections[2].subheaders.filter(s => s.title === 'DEVELOPER EFFICIENCY'),
      secondarySections[3].subheaders.filter(s => s.title === 'INCIDENT RESPONSE'),
      secondarySections[3].subheaders.filter(s => s.title === 'ACTIONS'),
    ],
  },
  {
    headers: [{ title: 'Platform Capabilities', cols: 3 }],
    columns: [
      secondarySections[4].subheaders.filter(s => s.title === 'GETTING STARTED'),
      secondarySections[4].subheaders.filter(s => s.title === 'COLLABORATE'),
      secondarySections[4].subheaders.filter(s => s.title === 'GOVERN'),
      [],
    ],
  },
];

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
};

const isEmbedded = window.parent !== window;

export default function App() {
  const [toolbarOpen, setToolbarOpen] = React.useState(true);

  // Design variables
  const [designVars, setDesignVars] = React.useState<DesignVars>(DEFAULT_DESIGN);
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

  // When embedded in an iframe, receive toolbar state from the parent page
  React.useEffect(() => {
    if (!isEmbedded) return;
    const handler = (e: MessageEvent) => {
      if (e.data?.type !== 'toolbar-state') return;
      const s = e.data;
      if (s.extraLinksPerSub !== undefined) setExtraLinksPerSub(s.extraLinksPerSub);
      if (s.extraSubs !== undefined) setExtraSubs(s.extraSubs);
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);




  return (
    <>
      {!isEmbedded && createPortal(
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
            {/* Header — always visible, click to toggle */}
            <div
              onClick={() => setToolbarOpen(!toolbarOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 16px',
                height: 36,
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)' }}>
                Variables
              </span>
              <span style={{
                color: 'rgba(255,255,255,0.35)',
                fontSize: 18,
                lineHeight: 1,
                transform: toolbarOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: 'transform 200ms',
              }}>
                ›
              </span>
            </div>

            {/* Expandable body */}
            <div style={{
              maxHeight: toolbarOpen ? 300 : 0,
              overflow: 'hidden',
              transition: 'max-height 250ms cubic-bezier(0.25, 0.1, 0.25, 1)',
            }}>
              <div style={{ padding: '0 16px 12px', fontSize: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {/* Row 1 */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                  {/* Links per sub */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>Links per subsection</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '2px 4px' }}>
                      <button onClick={() => setExtraLinksPerSub(v => Math.max(1, v - 1))} style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: 3, fontSize: 14 }}>−</button>
                      <span style={{ width: 16, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: 'rgba(255,255,255,0.9)' }}>{extraLinksPerSub}</span>
                      <button onClick={() => setExtraLinksPerSub(v => Math.min(20, v + 1))} style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: 3, fontSize: 14 }}>+</button>
                    </div>
                  </div>
                </div>

                {/* Row 2 — per-section scalers */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 10 }}>
                  <span style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.35)', flexShrink: 0 }}>Extra subsections</span>
                  {ALL_SECTION_KEYS.map((key) => (
                    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                      <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.6)', maxWidth: 90, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{SECTION_LABELS[key]}</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 2, background: 'rgba(255,255,255,0.05)', borderRadius: 4, padding: '2px 4px' }}>
                        <button onClick={() => setExtraSubsFor(key, Math.max(0, (extraSubs[key] || 0) - 1))} style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: 3, fontSize: 14 }}>−</button>
                        <span style={{ width: 14, textAlign: 'center', fontVariantNumeric: 'tabular-nums', color: 'rgba(255,255,255,0.9)' }}>{extraSubs[key] || 0}</span>
                        <button onClick={() => setExtraSubsFor(key, Math.min(15, (extraSubs[key] || 0) + 1))} style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', background: 'transparent', color: 'rgba(255,255,255,0.4)', cursor: 'pointer', borderRadius: 3, fontSize: 14 }}>+</button>
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

      {!isEmbedded && (
        <DesignToolbar
          vars={designVars}
          onChange={setDesignVars}
          onReset={() => setDesignVars(DEFAULT_DESIGN)}
          blobs={blobs}
          onBlobsChange={setBlobs}
        />
      )}

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
                  background: `radial-gradient(ellipse at center, ${b.color} 0%, transparent 70%)`,
                  opacity: (b.opacity / 100) * (designVars.blobOpacity / 100),
                }}
              />
            );
          })}
        </div>
        <div className="mx-auto p-6 md:p-12 relative" style={{ maxWidth: 1336 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: designVars.gridGapV }}>
            {GRID_ROWS.map((row, rowIndex) => {
              let colOffset = 0;
              return (
                <div
                  key={rowIndex}
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', columnGap: designVars.gridGapH, rowGap: designVars.gridGapV }}
                >
                  {row.headers.map((header) => {
                    const startCol = colOffset;
                    colOffset += header.cols;
                    const headerColumns = row.columns.slice(startCol, startCol + header.cols);
                    const linkCount = headerColumns.flat().reduce((s, sub) => s + sub.links.length, 0);

                    return (
                      <div key={header.title} style={{ gridColumn: `span ${header.cols}`, display: 'flex', flexDirection: 'column' }}>
                        {/* Section header */}
                        <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
                          {SECTION_ICONS[header.title]}
                          <h2 className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[36px] text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px]">
                            {header.title}
                          </h2>
                          <span className="font-['Noto_Sans:Regular',sans-serif] text-[14px] text-[rgba(28,43,52,0.38)] tabular-nums" style={{ marginLeft: -4 }}>
                            ({linkCount})
                          </span>
                        </div>

                        {/* Card panel */}
                        <HoverCard cols={header.cols} gridGapH={designVars.gridGapH}>
                          {headerColumns.map((colSubheaders, colIndex) => (
                            <div key={colIndex} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                              {colSubheaders.map((subheader, subIdx) => (
                                <SubheaderColumn key={subheader.title + subIdx} subheader={subheader} />
                              ))}
                            </div>
                          ))}
                        </HoverCard>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}