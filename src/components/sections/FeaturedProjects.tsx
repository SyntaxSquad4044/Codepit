
import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Featured <span className="text-[color:var(--accent-color)]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProjectCard
            logo={
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 20C42.7614 20 45 22.2386 45 25V55C45 57.7614 42.7614 60 40 60C37.2386 60 35 57.7614 35 55V25C35 22.2386 37.2386 20 40 20Z" fill="#22C55E"/>
                    <path d="M20 40C20 37.2386 22.2386 35 25 35H55C57.7614 35 60 37.2386 60 40C60 42.7614 57.7614 45 55 45H25C22.2386 45 20 42.7614 20 40Z" fill="#22C55E"/>
                  </svg>`
                }}
              />
            }
            title="RustDesk"
            repoUrl="https://github.com/rustdesk/rustdesk"
          />
          <ProjectCard
            logo={
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="156" height="81" viewBox="0 0 156 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 25H106V56H50V25Z" fill="#22C55E"/>
                    <path d="M30 40.5L45 25.5V55.5L30 40.5Z" fill="#22C55E"/>
                    <path d="M126 40.5L111 55.5V25.5L126 40.5Z" fill="#22C55E"/>
                  </svg>`
                }}
              />
            }
            title="log4js-node-appenders"
            repoUrl="https://github.com/log4js-node/log4js-node"
          />
          <ProjectCard
            logo={
              <div
                dangerouslySetInnerHTML={{
                  __html: `<svg width="156" height="81" viewBox="0 0 156 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.9393 24.0607C47.5251 23.4749 48.4749 23.4749 49.0607 24.0607L65.6777 40.6777C66.2635 41.2635 66.2635 42.2132 65.6777 42.799L49.0607 59.4161C48.4749 60.0018 47.5251 60.0018 46.9393 59.4161C46.3536 58.8303 46.3536 57.8805 46.9393 57.2947L62.2339 42L46.9393 26.7054C46.3536 26.1196 46.3536 25.1699 46.9393 24.5841V24.0607Z" fill="#22C55E"/>
                    <path d="M78 57C78 58.1046 77.1046 59 76 59H68C66.8954 59 66 58.1046 66 57C66 55.8954 66.8954 55 68 55H76C77.1046 55 78 55.8954 78 57Z" fill="#22C55E"/>
                    <path d="M94 57C94 58.1046 93.1046 59 92 59H84C82.8954 59 82 58.1046 82 57C82 55.8954 82.8954 55 84 55H92C93.1046 55 94 55.8954 94 57Z" fill="#22C55E"/>
                    <path d="M110 57C110 58.1046 109.105 59 108 59H100C98.8954 59 98 58.1046 98 57C98 55.8954 98.8954 55 100 55H108C109.105 55 110 55.8954 110 57Z" fill="#22C55E"/>
                  </svg>`
                }}
              />
            }
            title="aws-lambda-suppressor"
            repoUrl="https://github.com/awslabs/aws-lambda-powertools-typescript"
          />
        </div>
        <div className="flex justify-center">
          <button className="px-8 py-3 text-lg font-medium bg-white text-[color:var(--bg-black)] rounded-md hover:bg-transparent hover:text-white hover:border hover:border-white transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
