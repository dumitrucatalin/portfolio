import ProjectCard from "@/components/ProjectCard";
import WorkHistoryCard from "@/components/WorkHistoryCard";

export default function Home() {

  const workHistory = [
    {
      role: "Senior Full Stack Engineer",
      company: "Omnia Protocol",
      companyLink: "https://www.omniatech.io",
      timeline: "August 2021 — Present",
      description:
        "Omnia Protocol is a Web3 SaaS/IaaS startup specializing in secure, compliant blockchain infrastructure, offering custom RPC nodes across over 40 networks and supporting over 3 million monthly active users, ensuring robust and decentralized service availability.",
      highlights: [
        "Developed and led the creation of decentralized applications (DApps) using Angular, React, TypeScript, and Node.js, integrating with the Ethereum Blockchain through web3.js and ethers.js.",
        "Collaborated on architecting and maintaining a scalable, event-driven microservices infrastructure, supporting over 3 million monthly active users.",
        "Created a Telegram Tap Mini-app used by over 25k monthly active users using React and Next.js.",
        // "Participated in major worldwide cryptocurrency events such as ETH Toronto and ETH Privacy in Istanbul.",
      ],
      technologies: ["Angular", "React", "TypeScript", "Node.js", "Web3", "Ethers.js", "Wagmi", "Hardhat", "Elasticsearch", "Redis"],
      videoUrl: "/videos/omnia.mp4",
    },
    {
      role: "Full Stack Engineer",
      company: "Thales Alenia Space",
      companyLink: "https://www.thalesaleniaspace.com/en",
      timeline: "June 2022 — June 2023",
      description:
        "Thales Alenia Space specializes in satellite systems for communication, Earth observation, and space exploration, developing payloads and orbital infrastructures.",
      highlights: [
        "Contributed to the development of Engix, a critical satellite workflow management application used by the European Space Agency, using Angular, Node.js, and Azure.",
        "Enhanced team productivity by over 35% by resolving a longstanding debugging tool issue.",
        "Mentored new interns and delivered tutorials to the JavaScript/TypeScript community.",
        "Collaborated with multiple space agencies, implementing and integrating new functionalities.",
        // "Adapted quickly to the team’s environment, contributing impactful solutions to challenging tasks.",
      ],
      technologies: ["Angular", "Node.js", "Azure", "JavaScript", "TypeScript"],
      videoUrl: "/videos/thales.mp4",
    },
    {
      role: "Software Developer",
      company: "Advanced Technologies Institute",
      // companyLink: null, // State agency with no public website link
      timeline: "June 2019 — June 2022",
      description:
        "Advanced Technologies Institute is a state agency focused on national security, developing high-tech solutions to protect and enhance state-operated systems.",
      highlights: [
        "Engineered responsive web interfaces and dashboards using Angular, TypeScript, and Node.js, enhancing hardware device management through socket communication.",
        "Developed and maintained critical national security applications, including a hardware encryption management network used nationwide.",
        "Created a real-time vehicle monitoring system for over 200 cars using GPS data.",
      ],
      technologies: ["Angular", "TypeScript", "Node.js", "Hardware Encryption", "GPS", "OpenStreetMap", "WebSockets"],
      videoUrl: "/videos/ati.mp4",
    },
  ];

  const workProjects = [
    {
      company: "Omnia Protocol Dashboard",
      description:
        "The main application that enables Endpoints generation, node deployments, and payments using Fiat and Crypto. It also facilitates OMNIA token staking and resource usage analytics.",
      highlights: [
        "Developed using Angular, React, TypeScript, and Node.js with integration of ethers.js, wallet-connect, and elasticSearch.",
        "Built scalable backend systems leveraging Redis, PostgreSQL, and ElasticSearch for efficient data handling.",
        "Implemented token staking functionality and robust analytics dashboards to track resource usage.",
      ],
      technologies: [
        "Angular",
        "React",
        "TypeScript",
        "Node.js",
        "ethers.js",
        "wallet-connect",
        "ElasticSearch",
        "Redis",
        "PSQL",
      ],
      videoUrl: "/videos/omnia-logo.mp4", // Example video URL
      isLiveProject: true,
      link: "https://app.omniatech.io/dashboard",
    },
    {
      company: "Omnia TAP Mini-APP",
      description:
        "A Telegram Mini-App designed to boost user engagement and increase airdrop earnings probability.",
      highlights: [
        "Developed with React, Next.JS, and TypeScript, leveraging wagmi for wallet integration.",
        "Integrated TRPC for efficient client-server communication and PSQL for database operations.",
        "Expanded Omnia ecosystem engagement with over 25k active monthly users.",
      ],
      technologies: ["React", "Next.JS", "TypeScript", "wagmi", "TRPC", "PSQL"],
      videoUrl: "/videos/tap-app.mp4", // Example video URL
      isLiveProject: true,
      link: "https://t.me/Tap_OMNIA_bot",
      isMobileApp: true,
    },
    {
      company: "Thales Alenia Space",
      description:
        "Engix is a critical satellite workflow management application used by the European Space Agency, developed using Angular, Node.js, and Azure.",
      highlights: [
        "Enhanced team productivity by 35% through resolving debugging tool issues and streamlining workflows.",
        "Mentored interns, providing guidance on best practices and delivering tutorials to the JavaScript/TypeScript community.",
        "Collaborated with multiple space agencies to implement and integrate new functionalities, ensuring continuous innovation and usability.",
      ],
      technologies: ["Angular", "Node.js", "Azure", "JavaScript", "TypeScript"],
      videoUrl: "/videos/thales.mp4", // Example video URL
      isLiveProject: true,
      link: "https://engix.thalesdigital.io/app",
    },
    // {
    //   company: "Advanced Technologies Institute",
    //   description: "State agency focused on national security and high-tech solutions.",
    //   highlights: [
    //     "Developed dashboards using Angular, TypeScript, and Node.js for hardware device management.",
    //     "Optimized front-end and back-end systems for national security applications.",
    //     "Created real-time vehicle monitoring for 200+ cars using GPS data.",
    //   ],
    //   technologies: [
    //     "Angular",
    //     "TypeScript",
    //     "Node.js",
    //     "GPS Monitoring",
    //     "Hardware Encryption Management",
    //   ],
    //   videoUrl: "/videos/ati.mp4",
    // },
  ];

  const personalProjects = [
    {
      title: "NFT Platform",
      description: "A decentralized application (DApp) that allows users to mint and view their NFTs.",
      link: "https://github.com/dumitrucatalin/nft-sea",
      technologies: ["React", "TypeScript", "Web3", "Solidity"],
      videoUrl: "/videos/nftsea.mp4",
    },
    {
      title: "Token Staking Platform (Staking Hub)",
      description:
        "This platform enables users to mint tokens and lock them inside a smart contract. Users can claim their tokens back after the locking period ends.",
      link: "https://github.com/dumitrucatalin/staking-hub",
      technologies: ["React", "TypeScript", "Solidity", "Wagmi", "Viem"],
      videoUrl: "/videos/staking-hub.mp4", // Example video URL
    },
    {
      title: "Token Staking Contract",
      description:
        "An ERC-20 token contract featuring staking and claiming functionalities.",
      link: "https://github.com/dumitrucatalin/staking-token-contract",
      technologies: ["Solidity", "ERC-20", "Hardhat", "EVM"],
      videoUrl: "/videos/solodity.mp4",
    },
    {
      title: "ERC-20 Token Balance Monitoring Service",
      description:
        "Built with Node.js and TypeScript, this service allows users to monitor a list of ERC-20 tokens and listen for transfer events, keeping them updated on token balances for a given wallet.",
      link: "https://github.com/dumitrucatalin/erc20-monitor",
      technologies: ["TypeScript", "ERC-20", "Ethers.js", "EVM"],
      videoUrl: "/videos/solodity.mp4",
    },
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <h1 className="font-bold text-4xl sm:text-6xl">Catalin Dumitru</h1>
        <h2 className="text-2xl sm:text-4xl">Full Stack Engineer | Web3 Engineer</h2>

        <section className="w-full">
          <h3 className="text-4xl font-bold mb-6">About Me</h3>
          <div className="p-6 border border-[#1e1e2e] dark:from-zinc-800 dark:to-zinc-700 rounded-xl shadow-md space-y-4">
            <p>
              <strong>Senior Full Stack Engineer and Web3 Developer</strong> with 5+ years of
              experience, including 3+ years in Web3 startups, specializing in secure, scalable applications using Angular, React, Node.js, and Web3 frameworks.
            </p>
            {/* <h4 className="font-bold text-lg">💼 Key Achievements:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Omnia Protocol:</strong> Core developer for a Web3 SaaS/IaaS startup,
                building secure blockchain infrastructure for over 3 million users with high-availability architecture and decentralized applications.
              </li>
              <li>
                <strong>Thales Alenia Space:</strong> Boosted team development productivity by 35% on Engix, a critical application for the European Space Agency, through strategic feature development, improved debugging processes, and mentorship.
              </li>
              <li>
                <strong>Advanced Technologies Institute:</strong> Developed national security applications, including an encrypted management network and a vehicle tracking system, which improved real-time monitoring and security.
              </li>
            </ul>
            <h4 className="font-bold text-lg">🔐 Security & Cryptography:</h4>
            <p>
              Authored a published article on remote signature generation. Proficient in TLS authentication, multi-factor authentication, and implementing security best practices for building resilient applications.
            </p> */}
            <h4 className="font-bold text-lg">Core Skills:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Frontend:</strong> Angular, React, Next.js</li>
              <li><strong>Backend:</strong> Node.js, REST APIs</li>
              <li><strong>Blockchain:</strong> web3.js, ethers.js, Solidity</li>
              <li><strong>DevOps:</strong> Docker, Microservices, CI/CD</li>
            </ul>
            <p>
              <strong>Collaborative and Committed:</strong> Recognized for strong problem-solving abilities, adaptability, and continuous learning, with a dedicated focus on delivering impactful and innovative solutions.
            </p>
          </div>
        </section>

        {/* Work History Section */}
        <section className="w-full mt-12">
          <h3 className="text-4xl font-bold mb-6">Work History</h3>
          <div className="space-y-8">
            {workHistory.map((job, index) => (
              <WorkHistoryCard
                key={index}
                role={job.role}
                company={job.company}
                companyLink={job.companyLink}
                highlights={job.highlights}
                timeline={job.timeline}
                description={job.description}
                technologies={job.technologies}
                videoUrl={job.videoUrl}
              // gifUrl={job?.gifUrl}
              />
            ))}
          </div>
        </section>


        {/* Work Projects Section */}
        <section className="w-full">
          <h3 className="text-3xl font-bold mb-6">Work Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.company}
                description={project.description}
                highlights={project.highlights}
                technologies={project.technologies}
                videoUrl={project.videoUrl}
                link={project.link}
                isLiveProject={project.isLiveProject}
                isMobileApp={project.isMobileApp}
              />
            ))}
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="w-full mt-12">
          <h3 className="text-3xl font-bold mb-6">Personal Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                technologies={project.technologies}
                videoUrl={project.videoUrl}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}