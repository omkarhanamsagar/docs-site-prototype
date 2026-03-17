import React from "react";
import svgPaths from "../../imports/svg-64nu9567k0";
import arrowSvgPaths from "../../imports/svg-lanf906ou0";

interface DocLink {
  text: string;
}

interface DocSubheader {
  title: string;
  links: DocLink[];
}

interface DocsSectionProps {
  icon?: React.ReactNode;
  title: string;
  subheaders: DocSubheader[];
  xlLinkColumns?: number;
  maxVisibleColumns?: number;
  onHoverChange?: (hovered: boolean) => void;
  xlStretch?: boolean;
  expandAnchor?: 'left' | 'right';
  onBoxHeight?: (height: number) => void;
  minBoxHeight?: number;
  onSectionOpenChange?: (isOpen: boolean) => void;
}

// Expand icon (arrows pointing outward)
const EXPAND_ICON_PATH = "M20.25 4.5V9C20.25 9.19891 20.171 9.38968 20.0303 9.53033C19.8897 9.67098 19.6989 9.75 19.5 9.75C19.3011 9.75 19.1103 9.67098 18.9697 9.53033C18.829 9.38968 18.75 9.19891 18.75 9V6.31031L14.7806 10.2806C14.6399 10.4214 14.449 10.5004 14.25 10.5004C14.051 10.5004 13.8601 10.4214 13.7194 10.2806C13.5786 10.1399 13.4996 9.94902 13.4996 9.75C13.4996 9.55098 13.5786 9.36011 13.7194 9.21937L17.6897 5.25H15C14.8011 5.25 14.6103 5.17098 14.4697 5.03033C14.329 4.88968 14.25 4.69891 14.25 4.5C14.25 4.30109 14.329 4.11032 14.4697 3.96967C14.6103 3.82902 14.8011 3.75 15 3.75H19.5C19.6989 3.75 19.8897 3.82902 20.0303 3.96967C20.171 4.11032 20.25 4.30109 20.25 4.5ZM9.21937 13.7194L5.25 17.6897V15C5.25 14.8011 5.17098 14.6103 5.03033 14.4697C4.88968 14.329 4.69891 14.25 4.5 14.25C4.30109 14.25 4.11032 14.329 3.96967 14.4697C3.82902 14.6103 3.75 14.8011 3.75 15V19.5C3.75 19.6989 3.82902 19.8897 3.96967 20.0303C4.11032 20.171 4.30109 20.25 4.5 20.25H9C9.19891 20.25 9.38968 20.171 9.53033 20.0303C9.67098 19.8897 9.75 19.6989 9.75 19.5C9.75 19.3011 9.67098 19.1103 9.53033 18.9697C9.38968 18.829 9.19891 18.75 9 18.75H6.31031L10.2806 14.7806C10.4214 14.6399 10.5004 14.449 10.5004 14.25C10.5004 14.051 10.4214 13.8601 10.2806 13.7194C10.1399 13.5786 9.94902 13.4996 9.75 13.4996C9.55098 13.4996 9.36011 13.5786 9.21937 13.7194Z";

// Productive motion easing (Uber Base-style) — quick acceleration, smooth deceleration
const EASING = "cubic-bezier(0.25, 0.1, 0.25, 1)";
const EASING_OUT = "cubic-bezier(0.2, 0, 0, 1)";

function EyeIcon() {
  return (
    <div className="overflow-clip relative shrink-0 size-[28px]">
      <div className="absolute inset-[14.56%_0.54%_14.6%_0.56%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.6923 19.8335">
          <path d={svgPaths.pec22000} fill="url(#paint0_linear_eye)" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_eye" x1="-1.90543" x2="28.9839" y1="-0.43119" y2="-0.111541">
              <stop offset="0.00652304" stopColor="#9B33EF" />
              <stop offset="1" stopColor="#646DF9" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function LinkItem({ link }: { link: DocLink }) {
  const words = link.text.split(' ');
  const leadingWords = words.slice(0, -1).join(' ');
  const lastWord = words[words.length - 1];
  return (
    <a
      href="#"
      className="group font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[150%] text-[16px] text-[#5e6dd6] hover:text-[#3F4CA5] hover:no-underline break-words"
    >
      {leadingWords && <>{leadingWords} </>}
      <span className="whitespace-nowrap">{lastWord}<span className="inline-flex items-center align-middle ml-1.5 size-[16px] overflow-clip relative opacity-0 -translate-x-2 transition-all duration-200 ease-out group-hover:opacity-100 group-hover:translate-x-0">
        <svg className="absolute inset-[9.81%_2.44%_9.82%_2.6%] block size-[calc(100%-12.41%)] w-auto h-auto" fill="none" preserveAspectRatio="none" viewBox="0 0 15.1925 12.8593">
          <path d={arrowSvgPaths.p149a3b80} fill="currentColor" />
        </svg>
      </span></span>
    </a>
  );
}

function BadgeDefault({ hiddenCount }: { hiddenCount: number }) {
  return (
    <div
      className="flex items-center gap-[6px] bg-[rgba(99,44,166,0.06)] rounded-[4px] px-[10px] py-[8px] whitespace-nowrap"
      style={{ transition: `all 250ms ${EASING}` }}
    >
      <p className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[22.5px] text-[15px] text-[rgba(28,43,52,0.68)]">
        +{hiddenCount}
      </p>
      <svg className="block shrink-0 size-[20px]" fill="none" viewBox="0 0 24 24">
        <path d={EXPAND_ICON_PATH} fill="rgba(28,43,52,0.68)" />
      </svg>
    </div>
  );
}

function BadgeExpanded() {
  return (
    <div
      className="absolute top-[16px] right-[16px] z-10 flex items-center justify-center bg-[rgba(94,109,214,0.08)] rounded-[4px] p-[8px]"
      style={{ animation: `docsBadgeIn 250ms ${EASING_OUT} both` }}
    >
      <svg className="block shrink-0 size-[24px]" fill="none" viewBox="0 0 24 24">
        <path d={EXPAND_ICON_PATH} fill="#5E6DD6" />
      </svg>
    </div>
  );
}

export function DocsSection({
  title,
  subheaders,
  xlLinkColumns,
  icon,
  maxVisibleColumns,
  onHoverChange,
  xlStretch,
  expandAnchor = 'right',
  onBoxHeight,
  minBoxHeight,
  onSectionOpenChange,
}: DocsSectionProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isCardHovered, setIsCardHovered] = React.useState(false);
  const leaveTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // Collapsible section state for tablet/mobile (open by default)
  const [isSectionOpen, setIsSectionOpen] = React.useState(true);

  // Only sync box heights at xl+ (desktop side-by-side)
  const [isXl, setIsXl] = React.useState(false);
  React.useEffect(() => {
    const mql = window.matchMedia('(min-width: 1280px)');
    setIsXl(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsXl(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const MAX_EXPANDED_COLS = 3;

  // Desktop (xl+): hide extra columns behind a +N badge, reveal on hover
  const hasHiddenColumns = maxVisibleColumns != null && subheaders.length > maxVisibleColumns;
  const hiddenCount = hasHiddenColumns ? subheaders.length - maxVisibleColumns! : 0;

  // Desktop visible subheaders: only show maxVisibleColumns when not hovered
  const desktopVisibleSubheaders = hasHiddenColumns && !isHovered
    ? subheaders.slice(0, maxVisibleColumns!)
    : subheaders;

  // Desktop columns: up to MAX_EXPANDED_COLS
  const desktopCols = isHovered && hasHiddenColumns
    ? Math.min(subheaders.length, MAX_EXPANDED_COLS)
    : Math.min(desktopVisibleSubheaders.length, MAX_EXPANDED_COLS);

  const handleMouseEnter = React.useCallback(() => {
    if (isXl && hasHiddenColumns) {
      if (leaveTimer.current) {
        clearTimeout(leaveTimer.current);
        leaveTimer.current = null;
      }
      setIsHovered(true);
      onHoverChange?.(true);
    }
  }, [isXl, hasHiddenColumns, onHoverChange]);

  const handleMouseLeave = React.useCallback(() => {
    if (isXl && hasHiddenColumns) {
      leaveTimer.current = setTimeout(() => {
        setIsHovered(false);
        onHoverChange?.(false);
        leaveTimer.current = null;
      }, 80);
    }
  }, [isXl, hasHiddenColumns, onHoverChange]);

  // Reset hover state when breakpoint changes away from xl
  const onHoverChangeRef = React.useRef(onHoverChange);
  React.useEffect(() => {
    onHoverChangeRef.current = onHoverChange;
  });

  React.useEffect(() => {
    if (!isXl && isHovered) {
      setIsHovered(false);
      // Defer parent update to avoid "Cannot update App while rendering DocsSection"
      queueMicrotask(() => {
        onHoverChangeRef.current?.(false);
      });
    }
  }, [isXl, isHovered]);

  // Cleanup timer on unmount
  React.useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  // Use expandable grid when there are hidden columns on desktop
  const useExpandableGrid = hasHiddenColumns;

  // Ref to measure collapsed white box dimensions for the spacer
  const boxRef = React.useRef<HTMLDivElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const gridRef = React.useRef<HTMLDivElement | null>(null);
  const [collapsedSize, setCollapsedSize] = React.useState<{ width: number; height: number } | null>(null);
  const [collapsedGridWidth, setCollapsedGridWidth] = React.useState<number | null>(null);

  // Measure collapsed dimensions whenever we're NOT hovered
  // Use contentRef for natural height (unaffected by minHeight)
  React.useEffect(() => {
    if (!isHovered && boxRef.current) {
      const naturalH = contentRef.current?.offsetHeight ?? boxRef.current.offsetHeight;
      setCollapsedSize({
        width: boxRef.current.offsetWidth,
        height: naturalH,
      });
    }
    if (!isHovered && gridRef.current) {
      setCollapsedGridWidth(gridRef.current.offsetWidth);
    }
  }, [isHovered, subheaders, desktopVisibleSubheaders.length]);

  // Report box height to parent — deferred to avoid
  // "Cannot update App while rendering DocsSection" warnings.
  // We use a stable ref for the callback and schedule via microtask
  // so the update happens outside React's render cycle.
  const onBoxHeightRef = React.useRef(onBoxHeight);
  React.useEffect(() => {
    onBoxHeightRef.current = onBoxHeight;
  });

  React.useEffect(() => {
    if (isHovered) return;
    const el = contentRef.current ?? boxRef.current;
    if (!el) return;
    // Use microtask to escape any in-progress React render batch
    let cancelled = false;
    queueMicrotask(() => {
      if (!cancelled) {
        onBoxHeightRef.current?.(el.offsetHeight);
      }
    });
    return () => { cancelled = true; };
  }, [isHovered, subheaders, desktopVisibleSubheaders.length]);

  const isExpanded = isHovered && hasHiddenColumns;

  return (
    <>
      {/* Keyframes for reveal animations */}
      <style>{`
        @keyframes docsColFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes docsBadgeIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div
        className={`flex flex-col xl:gap-5 items-start min-w-0 w-full ${xlStretch ? 'xl:items-stretch xl:w-0 xl:flex-1' : 'xl:w-auto xl:flex-none xl:max-w-[440px]'}`}
        style={{
          transition: `gap 300ms ${EASING}`,
          zIndex: isExpanded ? 20 : undefined,
          position: 'relative',
          gap: isXl
            ? undefined
            : isSectionOpen
              ? '20px'
              : '0px',
        }}
      >
        {/* Title row — always visible */}
        <div className="flex gap-3 items-center w-full">
          <div className="flex gap-3 items-center flex-1 min-w-0">
            {icon || <EyeIcon />}
            <h2 className="font-['Noto_Sans_SemiBold:Regular',sans-serif] leading-[36px] text-[26px] text-[rgba(28,43,52,0.98)] tracking-[-0.3px]">
              {title}
            </h2>
            <span className="font-['Noto_Sans:Regular',sans-serif] text-[14px] text-[rgba(28,43,52,0.38)] tabular-nums">
              ({subheaders.reduce((sum, s) => sum + s.links.length, 0)})
            </span>
          </div>
          {/* Caret toggle — tablet/mobile only */}
          <button
            className="xl:hidden flex-none flex items-center justify-center size-[40px] rounded-md hover:bg-[rgba(28,43,52,0.05)] active:bg-[rgba(28,43,52,0.08)] transition-colors duration-150"
            onClick={() => setIsSectionOpen((prev) => {
              const next = !prev;
              onSectionOpenChange?.(next);
              return next;
            })}
            aria-label={isSectionOpen ? 'Collapse section' : 'Expand section'}
          >
            <svg
              className="size-[28px]"
              style={{
                transform: isSectionOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                transition: `transform 300ms ${EASING}`,
              }}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 6l6 6-6 6"
                stroke="rgba(28,43,52,0.45)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Collapsible content — collapses on tablet/mobile, always open on xl+ */}
        <div
          className="w-full"
          style={{
            display: 'grid',
            gridTemplateRows: (isXl || isSectionOpen) ? '1fr' : '0fr',
            transition: `grid-template-rows 300ms ${EASING}`,
          }}
        >
          <div className="overflow-hidden xl:overflow-visible min-w-0">
            <div className="flex flex-col gap-5 max-[744px]:gap-3">
              {/* Content Area with Subheaders */}
              <div className="relative w-full">
                {/* Spacer to hold collapsed dimensions when box goes absolute */}
                {isExpanded && collapsedSize && (
                  <div style={{ width: collapsedSize.width, height: collapsedSize.height }} />
                )}
                <div
                  ref={boxRef}
                  className={`${isExpanded ? 'absolute' : 'relative w-full'}`}
                  style={{
                    background: isExpanded ? 'var(--card-bg-expanded)' : isCardHovered ? 'var(--card-bg-hover)' : 'var(--card-bg)',
                    backdropFilter: 'blur(var(--card-blur))',
                    WebkitBackdropFilter: 'blur(var(--card-blur))',
                    border: 'var(--card-border)',
                    borderRadius: 'var(--card-radius)',
                    boxShadow: isExpanded ? 'var(--card-shadow-expanded)' : isCardHovered ? 'var(--card-shadow-hover)' : 'var(--card-shadow)',
                    transition: `box-shadow 250ms ${EASING}, background 250ms ${EASING}`,
                    zIndex: isExpanded ? 10 : undefined,
                    minHeight: !isExpanded && isXl && minBoxHeight ? minBoxHeight : undefined,
                    ...(isExpanded
                      ? {
                          top: 0,
                          [expandAnchor]: 0,
                          width: 'max-content',
                          minWidth: collapsedSize?.width ?? '100%',
                          maxWidth: '90vw',
                        }
                      : {}),
                  }}
                  onMouseEnter={(e) => { setIsCardHovered(true); handleMouseEnter(); }}
                  onMouseLeave={(e) => { setIsCardHovered(false); handleMouseLeave(); }}
                >
                  {/* Badge – absolute when expanded */}
                  {hasHiddenColumns && isHovered && <BadgeExpanded />}

                  {/* Main content area — wrapped for natural height measurement */}
                  <div ref={contentRef}>
                  {useExpandableGrid ? (
                    <ExpandableGridLayout
                      subheaders={subheaders}
                      visibleSubheaders={desktopVisibleSubheaders}
                      desktopCols={desktopCols}
                      hasHiddenColumns={hasHiddenColumns}
                      isHovered={isHovered}
                      hiddenCount={hiddenCount}
                      maxVisibleColumns={maxVisibleColumns!}
                      expandAnchor={expandAnchor}
                      gridRef={gridRef}
                    />
                  ) : desktopVisibleSubheaders.length > 1 ? (
                    <StandardMultiColumnLayout subheaders={desktopVisibleSubheaders} />
                  ) : (
                    <StandardSingleColumnLayout
                      subheaders={desktopVisibleSubheaders}
                    />
                  )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Expandable grid — used when there are hidden columns ─── */
/* Always renders the same grid structure regardless of hover state */
function ExpandableGridLayout({
  subheaders,
  visibleSubheaders,
  desktopCols,
  hasHiddenColumns,
  isHovered,
  hiddenCount,
  maxVisibleColumns,
  expandAnchor,
  gridRef,
}: {
  subheaders: DocSubheader[];
  visibleSubheaders: DocSubheader[];
  desktopCols: number;
  hasHiddenColumns: boolean;
  isHovered: boolean;
  hiddenCount: number;
  maxVisibleColumns: number;
  expandAnchor: 'left' | 'right';
  gridRef: React.RefObject<HTMLDivElement | null>;
}) {
  // Always render all subheaders in the DOM for smooth transitions.
  // Hidden ones get opacity 0 + collapsed height when not hovered.
  return (
    <div className="p-[32px] flex flex-col gap-[40px] min-[745px]:block">
      {/* ≥1280px (xl+) desktop grid — expandable with badge */}
      <div className="hidden xl:flex items-baseline">
        <div
          ref={gridRef}
          className="flex-1 min-w-0 grid gap-y-[40px]"
          style={{
            gridTemplateColumns: isHovered && hasHiddenColumns
              ? `repeat(${desktopCols}, minmax(180px, 1fr))`
              : `repeat(${desktopCols}, minmax(0, 1fr))`,
            columnGap: '48px',
          }}
        >
          {visibleSubheaders.map((subheader, index) => {
            const isRevealed = index >= maxVisibleColumns;
            return (
              <div
                key={subheader.title + '-' + index}
                className="min-w-0"
                style={
                  isRevealed && isHovered
                    ? {
                        animation: `docsColFadeIn 280ms ${EASING_OUT} both`,
                        animationDelay: `${(index - maxVisibleColumns) * 50}ms`,
                      }
                    : undefined
                }
              >
                <SubheaderColumn subheader={subheader} />
              </div>
            );
          })}
        </div>

        {/* Badge as its own column — default (non-hovered) state only */}
        {hasHiddenColumns && !isHovered && (
          <div className="flex-none ml-[16px]">
            <BadgeDefault hiddenCount={hiddenCount} />
          </div>
        )}
      </div>

      {/* 745–1279px tablet grid — show ALL subheaders, no badge, 3-col max, flowing down */}
      <div
        className="hidden min-[745px]:grid xl:hidden gap-y-[40px]"
        style={{
          gridTemplateColumns: `repeat(${Math.min(subheaders.length, 3)}, minmax(0, 1fr))`,
          columnGap: '48px',
        }}
      >
        {subheaders.map((subheader, index) => (
          <div key={subheader.title + '-' + index} className="min-w-0">
            <SubheaderColumn subheader={subheader} />
          </div>
        ))}
      </div>

      {/* 541–744px: 2-col pairs — show ALL subheaders on tablet (no hover interaction) */}
      <div className="hidden min-[541px]:flex flex-col gap-[40px] min-[745px]:hidden">
        {(() => {
          const rows: DocSubheader[][] = [];
          for (let i = 0; i < subheaders.length; i += 2) {
            rows.push(subheaders.slice(i, i + 2));
          }
          return rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-[40px] items-start">
              {row.map((subheader, colIndex) => (
                <div key={colIndex} className="flex-1 min-w-0">
                  <SubheaderColumn subheader={subheader} />
                </div>
              ))}
            </div>
          ));
        })()}
      </div>

      {/* ≤540px: single column — show ALL subheaders on mobile (no hover interaction) */}
      <div className="flex flex-col gap-[40px] min-[541px]:hidden">
        {subheaders.map((subheader, index) => (
          <SubheaderColumn key={index} subheader={subheader} />
        ))}
      </div>
    </div>
  );
}

/* ─── Standard multi-column (no hidden columns, ≥2 subs) ─── */
function StandardMultiColumnLayout({ subheaders }: { subheaders: DocSubheader[] }) {
  const colCount = Math.min(subheaders.length, 3);
  return (
    <div className="p-[32px] flex flex-col gap-[40px] min-[745px]:block">
      <div
        className="hidden min-[745px]:grid"
        style={{
          gridTemplateColumns: `repeat(${colCount}, minmax(0, 1fr))`,
          columnGap: '48px',
          rowGap: '40px',
        }}
      >
        {subheaders.map((subheader, index) => (
          <SubheaderColumn key={index} subheader={subheader} />
        ))}
      </div>

      <div className="hidden min-[541px]:flex flex-col gap-[40px] min-[745px]:hidden">
        {(() => {
          const rows: DocSubheader[][] = [];
          for (let i = 0; i < subheaders.length; i += 2) {
            rows.push(subheaders.slice(i, i + 2));
          }
          return rows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-[40px] items-start">
              {row.map((subheader, colIndex) => (
                <div key={colIndex} className="flex-1 min-w-0">
                  <SubheaderColumn subheader={subheader} />
                </div>
              ))}
            </div>
          ));
        })()}
      </div>

      <div className="flex flex-col gap-[40px] min-[541px]:hidden">
        {subheaders.map((subheader, index) => (
          <SubheaderColumn key={index} subheader={subheader} />
        ))}
      </div>
    </div>
  );
}

/* ─── Standard single-column (no hidden columns, 1 sub) — links flow into 3 columns on tablet ─── */
function StandardSingleColumnLayout({
  subheaders,
}: {
  subheaders: DocSubheader[];
}) {
  return (
    <div className="p-[32px]">
      {subheaders.map((subheader, index) => {
        // Distribute links across 3 columns (used for tablet only)
        const colCount = 3;
        const linksPerCol = Math.ceil(subheader.links.length / colCount);
        const columns: DocLink[][] = [];
        for (let i = 0; i < colCount; i++) {
          const col = subheader.links.slice(i * linksPerCol, (i + 1) * linksPerCol);
          if (col.length > 0) columns.push(col);
        }

        return (
          <div key={index} className="flex flex-col gap-5 min-w-0">
            <h3 className="font-['Noto_Sans:Bold',sans-serif] leading-[20px] text-[12px] text-[rgba(28,43,52,0.68)] tracking-[0.5px] uppercase">
              {subheader.title}
            </h3>
            {/* ≥1280px (xl+) desktop: single column of links when side-by-side */}
            <div className="hidden xl:flex flex-col gap-5">
              {subheader.links.map((link, linkIndex) => (
                <LinkItem key={linkIndex} link={link} />
              ))}
            </div>
            {/* 745–1279px tablet: 3 columns of links (section has its own row) */}
            <div
              className="hidden min-[745px]:grid xl:hidden gap-y-5"
              style={{
                gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
                columnGap: '48px',
              }}
            >
              {columns.map((col, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-5 min-w-0">
                  {col.map((link, linkIndex) => (
                    <LinkItem key={linkIndex} link={link} />
                  ))}
                </div>
              ))}
            </div>
            {/* 541–744px: 2 columns */}
            <div className="hidden min-[541px]:grid grid-cols-2 gap-x-[40px] gap-y-5 min-[745px]:hidden">
              {subheader.links.map((link, linkIndex) => (
                <LinkItem key={linkIndex} link={link} />
              ))}
            </div>
            {/* ≤540px: single column */}
            <div className="flex flex-col gap-5 min-[541px]:hidden">
              {subheader.links.map((link, linkIndex) => (
                <LinkItem key={linkIndex} link={link} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function SubheaderColumn({ subheader }: { subheader: DocSubheader }) {
  return (
    <div className="flex flex-col gap-5 min-w-0">
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