import { cn } from "@/lib/utils";
import {
    IconDeviceIpadCog,
    IconCurrencyDollar,
    IconHelp,
    IconBoxMultiple9,
    IconTerminal2,
    IconPolaroidFilled
} from "@tabler/icons-react";
import { track } from '@vercel/analytics';

export function SkillsGrid() {
    const features = [
        {
            title: "Frontend Development",
            description: "Creating visually appealing and user-friendly web interfaces using the latest frontend technologies.",
            icon: <IconPolaroidFilled aria-hidden="true" />,
        },
        {
            title: "Backend Development",
            description: "Building robust and scalable server-side applications with a focus on performance and security.",
            icon: <IconTerminal2 aria-hidden="true" />,
        },
        {
            title: "eCommerce",
            description: "Developing customized eCommerce solutions that drive sales and enhance user experience.",
            icon: <IconCurrencyDollar aria-hidden="true" />,
        },
        {
            title: "SaaS",
            description: "Creating Software as a Service (SaaS) applications that are efficient, reliable, and easy to use.",
            icon: <IconBoxMultiple9 aria-hidden="true" />,
        },
        {
            title: "Hosting Services",
            description: "Providing reliable and secure hosting solutions to keep your websites and applications running smoothly.",
            icon: <IconHelp aria-hidden="true" />,
        },
        {
            title: "Electronics Repair",
            description: "Offering expert repair services for a wide range of electronic devices, from smartphones to laptops.",
            icon: <IconDeviceIpadCog aria-hidden="true" />,
        },
    ];
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 w-full max-w-5xl mx-auto gap-6">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col items-center text-center lg:text-left lg:items-start lg:border-r py-10 relative group/feature",
                (index === 0 || index === 3 || index === 6) && "lg:border-l",
                index < 6 && "lg:border-b"
            )}
            onClick={() => track('Feature Clicked', { feature: title })}
        >
            {index < 6 && (
                <div className="hidden lg:block opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-700 to-transparent pointer-events-none" />
            )}
            {index >= 6 && (
                <div className="hidden lg:block opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-700 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-100">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center hidden lg:block" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-300">
                    {title}
                </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs relative z-10 px-10">
                {description}
            </p>
        </div>
    );
};
