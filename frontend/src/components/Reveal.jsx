import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({
    children,
    delay = 0,
    duration = 0.7,
    y = 22,
    className = "",
    as = "div",
    viewportMargin = "-40px",
    ...rest
}) => {
    const shouldReduceMotion = useReducedMotion();
    const Tag = motion[as] || motion.div;

    return (
        <Tag
            className={className}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: viewportMargin }}
            transition={
                shouldReduceMotion
                    ? { duration: 0 }
                    : {
                          duration,
                          delay,
                          ease: [0.22, 1, 0.36, 1],
                      }
            }
            {...rest}
        >
            {children}
        </Tag>
    );
};
