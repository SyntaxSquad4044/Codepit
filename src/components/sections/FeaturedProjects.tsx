import { ProjectCard } from "@/components/ui/ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="box-border text-center m-0 px-0 py-[100px]">
      <h2 className="box-border text-4xl text-[color:var(--text-white)] font-semibold mb-[60px] m-0 p-0">
        Featured Projects
      </h2>
      <div className="box-border grid grid-cols-[repeat(3,1fr)] gap-10 max-w-[1200px] mt-0 mb-10 mx-auto px-5 py-0 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        <ProjectCard
          logo={
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg id="54:58" layer-name="Frame" width="233" height="86" viewBox="0 0 233 86" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="project-logo" style="margin: 0; padding: 0; box-sizing: border-box; width: 156px; height: 81px; object-fit: contain; margin-bottom: 30px"> <g clip-path="url(#clip0_54_58)"> <mask id="mask0_54_58" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="233" height="86"> <path d="M233 0H0V86H233V0Z" fill="white"></path> </mask> <g mask="url(#mask0_54_58)"> <mask id="mask1_54_58" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="233" height="86"> <path d="M233 0H0V86H233V0Z" fill="white"></path> </mask> <g mask="url(#mask1_54_58)"> <mask id="mask2_54_58" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-21" width="233" height="86"> <path d="M233 -21H0V65H233V-21Z" fill="white"></path> </mask> <g mask="url(#mask2_54_58)"> <mask id="mask3_54_58" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-21" width="233" height="86"> <path d="M233 -21H0V65H233V-21Z" fill="white"></path> </mask> <g mask="url(#mask3_54_58)"> <path d="M233 -21H0V65H233V-21Z" fill="url(#pattern0_54_58)"></path> </g> </g> </g> </g> </g> <defs> <pattern id="pattern0_54_58" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_54_58" transform="scale(0.00214592 0.00581395)"></use> </pattern> <clipPath id="clip0_54_58"> <rect width="233" height="86" fill="white"></rect> </clipPath> </defs> </svg>`,
              }}
            />
          }
          title="rustdesk"
        />
        <ProjectCard
          logo={
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg id="54:76" layer-name="Frame" width="233" height="86" viewBox="0 0 233 86" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="project-logo" style="margin: 0; padding: 0; box-sizing: border-box; width: 156px; height: 81px; object-fit: contain; margin-bottom: 30px"> <g clip-path="url(#clip0_54_76)"> <mask id="mask0_54_76" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="233" height="86"> <path d="M233 0H0V86H233V0Z" fill="white"></path> </mask> <g mask="url(#mask0_54_76)"> <mask id="mask1_54_76" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="233" height="86"> <path d="M233 0H0V86H233V0Z" fill="white"></path> </mask> <g mask="url(#mask1_54_76)"> <mask id="mask2_54_76" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-21" width="233" height="86"> <path d="M233 -21H0V65H233V-21Z" fill="white"></path> </mask> <g mask="url(#mask2_54_76)"> <mask id="mask3_54_76" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-21" width="233" height="86"> <path d="M233 -21H0V65H233V-21Z" fill="white"></path> </mask> <g mask="url(#mask3_54_76)"> <path d="M233 -21H0V65H233V-21Z" fill="url(#pattern0_54_76)"></path> </g> </g> </g> </g> </g> <defs> <pattern id="pattern0_54_76" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_54_76" transform="scale(0.00214592 0.00581395)"></use> </pattern> <clipPath id="clip0_54_76"> <rect width="233" height="86" fill="white"></rect> </clipPath> </defs> </svg>`,
              }}
            />
          }
          title="log4js-node-appenders"
        />
        <ProjectCard
          logo={
            <div
              dangerouslySetInnerHTML={{
                __html: `<svg id="54:94" layer-name="Frame" width="233" height="86" viewBox="0 0 233 86" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="project-logo" style="margin: 0; padding: 0; box-sizing: border-box; width: 156px; height: 81px; object-fit: contain; margin-bottom: 30px"> <g clip-path="url(#clip0_54_94)"> <mask id="mask0_54_94" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="233" height="86"> <path d="M233 0H0V86H233V0Z" fill="white"></path> </mask> <g mask="url(#mask0_54_94)"> <mask id="mask1_54_94" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="233" height="86"> <path d="M233 0H0V86H233V0Z" fill="white"></path> </mask> <g mask="url(#mask1_54_94)"> <mask id="mask2_54_94" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-21" width="233" height="86"> <path d="M233 -21H0V65H233V-21Z" fill="white"></path> </mask> <g mask="url(#mask2_54_94)"> <mask id="mask3_54_94" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="-21" width="233" height="86"> <path d="M233 -21H0V65H233V-21Z" fill="white"></path> </mask> <g mask="url(#mask3_54_94)"> <path d="M233 -21H0V65H233V-21Z" fill="url(#pattern0_54_94)"></path> </g> </g> </g> </g> </g> <defs> <pattern id="pattern0_54_94" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_54_94" transform="scale(0.00214592 0.00581395)"></use> </pattern> <clipPath id="clip0_54_94"> <rect width="233" height="86" fill="white"></rect> </clipPath> </defs> </svg>`,
              }}
            />
          }
          title="aws-lambda-suppressor"
        />
      </div>
      <button className="box-border border border-[color:var(--text-white)] text-[color:var(--text-black)] text-[23px] cursor-pointer bg-[color:var(--bg-white)] m-0 px-[30px] py-2.5 rounded-[3px] border-solid hover:bg-transparent hover:text-[color:var(--text-white)]">
        Projects
      </button>
    </section>
  );
}
