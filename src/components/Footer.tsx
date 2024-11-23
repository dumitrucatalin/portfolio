import Link from "next/link";

const Footer = () => {
    return (
        <div className="fixed left-0 bottom-0 flex w-full justify-center border-t border-gray-300 bg-gradient-to-t from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Made with ♡ by&nbsp;
            <Link href="https://www.linkedin.com/in/catalin-dumitru1">
                <code className="font-mono font-bold">Catalin D.</code>
            </Link>
        </div>
    );
};

export default Footer;