import Image from "next/image";

const Header = () => {
    return (
        <header className="fixed left-0 top-0 z-50 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-6 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit">
            <nav className="flex gap-6 flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://github.com/dumitrucatalin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/github.svg"
                        alt="GitHub icon"
                        width={20}
                        height={20}
                    />
                    GitHub
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://linkedin.com/in/catalin-dumitru1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/linkedin.svg"
                        alt="LinkedIn icon"
                        width={20}
                        height={20}
                    />
                    LinkedIn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="mailto:icdumitru01@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/email.svg"
                        alt="Email icon"
                        width={20}
                        height={20}
                    />
                    Email
                </a>
            </nav>
        </header>
    );
};

export default Header;