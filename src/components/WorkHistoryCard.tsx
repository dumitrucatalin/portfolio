import Image from "next/image";

type WorkHistoryProps = {
    role: string;
    company: string;
    companyLink?: string; // Optional link to the company's website
    timeline: string; // Example: "2024 — PRESENT"
    description: string;
    highlights?: string[]; // Highlights added
    technologies: string[];
    videoUrl?: string; // Optional for showcasing MP4 videos
    gifUrl?: string; // Optional for showcasing GIFs
};

const WorkHistoryCard = ({
    role,
    company,
    companyLink,
    timeline,
    description,
    highlights,
    technologies,
    videoUrl,
    gifUrl,
}: WorkHistoryProps) => {
    return (
        <div className="p-6 border border-gray-300 dark:border-zinc-700 rounded-lg shadow-md flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Media Section (Video or GIF) */}
            {(videoUrl || gifUrl) && (
                <div className="w-full sm:w-64 h-48 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden shadow-lg bg-black">
                    {videoUrl ? (
                        <video
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ) : gifUrl ? (
                        <Image
                            src={gifUrl}
                            alt={`${company} demo`}
                            width={256}
                            height={192}
                            className="w-full h-full object-cover"
                        />
                    ) : null}
                </div>
            )}

            {/* Content Section */}
            <div className="flex-1 space-y-4">
                <div className="flex justify-between items-center">
                    {/* Timeline */}
                    <p className="text-sm text-gray-500 dark:text-gray-400">{timeline}</p>
                    {/* Company Link */}
                    {companyLink && (
                        <a
                            href={companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 text-sm hover:underline flex items-center gap-1"
                        >
                            {company} <span>↗</span>
                        </a>
                    )}
                </div>

                {/* Role and Company */}
                <h4 className="font-bold text-xl mb-2">
                    {role} · <span className="font-medium">{company}</span>
                </h4>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

                {/* Highlights (if available) */}
                {highlights && highlights.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2">
                        {highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                        ))}
                    </ul>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-2 py-1 text-xs bg-gray-300 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WorkHistoryCard;