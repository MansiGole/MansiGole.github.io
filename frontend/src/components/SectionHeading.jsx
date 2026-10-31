import { Reveal } from "./Reveal";

export const SectionHeading = ({ eyebrow, title, description }) => {
    return (
        <Reveal className="mb-12 sm:mb-16">
            <div>
                <p className="eyebrow mb-4">{eyebrow}</p>
                <h2 className="font-display text-2xl font-bold tracking-tight text-txt sm:text-3xl lg:text-4xl">
                    {title}
                </h2>
                {description && (
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-txt2 sm:text-base">{description}</p>
                )}
            </div>
        </Reveal>
    );
};
