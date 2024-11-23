import Image from "next/image";

type ProjectCardProps = {
    title: string;
    description: string;
    highlights?: string[];
    technologies: string[];
    link?: string; // Optional for personal or live project links
    isLiveProject?: boolean; // Flag to differentiate live projects from GitHub projects
    isMobileApp?: boolean; // Flag to indicate if the project is a mobile app
    videoUrl?: string; // Optional for showcasing MP4 videos
    gifUrl?: string; // Optional for showcasing GIFs
};

const ProjectCard = ({
    title,
    description,
    highlights,
    technologies,
    link,
    isLiveProject,
    isMobileApp,
    videoUrl,
    gifUrl,
}: ProjectCardProps) => {
    return (
        <div
            className={`p-6 rounded-xl border border-gray-300 dark:border-zinc-700 shadow-md hover:scale-105 ${isMobileApp ? "flex flex-col sm:flex-row gap-6" : "transform transition-transform duration-300"
                }`}
        >
            {/* Conditional Layout for Mobile Apps */}
            {isMobileApp ? (
                <>
                    {/* Media Section (Video or GIF) on the Left */}
                    {(videoUrl || gifUrl) && (
                        <div className="w-full sm:w-1/3 h-auto flex items-start justify-start rounded-lg overflow-hidden shadow-lg">
                            {videoUrl ? (
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    className="w-full h-auto object-contain"
                                >
                                    <source src={videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : gifUrl ? (
                                <Image
                                    src={gifUrl}
                                    alt={`${title} demo`}
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-contain"
                                />
                            ) : null}
                        </div>
                    )}

                    {/* Content Section on the Right */}
                    <div className="flex-1 space-y-4">
                        <h4 className="font-bold text-xl">{title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
                        {highlights && (
                            <ul className="list-disc list-inside space-y-2">
                                {highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                {isLiveProject ? "View Live Project →" : "View on GitHub →"}
                            </a>
                        )}
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                            Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
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
                </>
            ) : (
                <>
                    {/* Default Layout */}
                    {/* Media Section (Video or GIF) */}
                    <div className="w-full mb-4 h-52 overflow-hidden rounded-lg shadow-lg">
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
                                alt={`${title} demo`}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover"
                            />
                        ) : null}
                    </div>

                    {/* Text Content */}
                    <div>
                        <h4 className="font-bold text-xl mb-2">{title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {description}
                        </p>
                        {highlights && (
                            <ul className="list-disc list-inside space-y-2 mb-4">
                                {highlights.map((highlight, idx) => (
                                    <li key={idx} className="text-gray-700 dark:text-gray-300">
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {link && (
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
                            >
                                {isLiveProject ? "View Live Project →" : "View on GitHub →"}
                            </a>
                        )}
                        <p className="font-medium text-gray-800 dark:text-gray-200">
                            Technologies:
                        </p>
                        <div className="flex flex-wrap gap-2">
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
                </>
            )}
        </div>
    );
};

export default ProjectCard;