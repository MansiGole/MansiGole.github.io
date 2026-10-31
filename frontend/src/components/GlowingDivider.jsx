import { Reveal } from "./Reveal";

export const GlowingDivider = () => {
    return (
        <section
            className="relative w-full overflow-hidden bg-[#171624] py-3 sm:py-5 lg:py-6"
            aria-label="Portfolio typography divider"
        >
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <Reveal>
                    <div className="relative flex w-full min-h-[160px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] items-center justify-center overflow-hidden rounded-b-2xl sm:rounded-b-[28px] border-b border-x border-[#494052]/40 bg-gradient-to-b from-[#1C1A2B] via-[#171524] to-[#12111D] px-4 py-8 shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-300 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
                        {/* Subtle dusty-rose glow behind text, concentrated around lower edge */}
                        <div
                            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[75%] w-[85%] max-w-4xl bg-[radial-gradient(ellipse_80%_60%_at_50%_95%,rgba(233,166,166,0.22),rgba(134,72,121,0.08)_50%,transparent_80%)]"
                            aria-hidden="true"
                        />

                        {/* Soft illuminated lower edge line */}
                        <div
                            className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[1.5px] w-2/3 max-w-2xl bg-gradient-to-r from-transparent via-[#E9A6A6]/60 to-transparent shadow-[0_0_16px_rgba(233,166,166,0.6)]"
                            aria-hidden="true"
                        />

                        {/* Oversized Bold Solid White Typography */}
                        <div className="relative z-10 flex w-full items-center justify-center text-center">
                            <h2 className="select-none font-sans font-black tracking-[-0.035em] text-white leading-none text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[128px] 2xl:text-[138px]">
                                Mansi Gole
                            </h2>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
