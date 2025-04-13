import Link from "next/link";
import { Shield, Check, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const Line = ({ className = "" }) => (
  <div
    className={cn(
      "h-px w-full via-zinc-400 from-[1%] from-zinc-200 to-zinc-600 absolute -z-0 dark:via-zinc-700 dark:from-zinc-900 dark:to-zinc-500",
      className,
    )}
  />
);
export default function HeroSection() {
  return (
    <div className="bg-transparent text-white flex flex-col">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 border border-zinc-800"></div>
      </div>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-16">
        <div className="flex gap-4 justify-center w-full items-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 1024 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="1024" height="256" fill="black" />
            <rect x="96" y="79" width="34.6988" height="97.5904" fill="white" />
            <rect
              x="203.133"
              y="79"
              width="36.8675"
              height="97.5904"
              fill="white"
            />
            <rect
              x="238.916"
              y="79"
              width="31.4458"
              height="69.6144"
              transform="rotate(90 238.916 79)"
              fill="white"
            />
            <rect
              x="240"
              y="145.145"
              width="31.4458"
              height="70.6988"
              transform="rotate(90 240 145.145)"
              fill="white"
            />
            <rect
              x="169.301"
              y="110.446"
              width="34.6988"
              height="38.6024"
              transform="rotate(90 169.301 110.446)"
              fill="white"
            />
            <path
              d="M281.832 162V93.84H305.256C313.32 93.84 319.368 95.312 323.4 98.256C327.432 101.2 329.448 105.84 329.448 112.176C329.448 116.016 328.36 119.248 326.184 121.872C324.072 124.432 321.128 126.064 317.352 126.768C322.024 127.408 325.672 129.232 328.296 132.24C330.984 135.184 332.328 138.864 332.328 143.28C332.328 149.488 330.312 154.16 326.28 157.296C322.248 160.432 316.52 162 309.096 162H281.832ZM290.088 123.312H305.256C310.248 123.312 314.088 122.384 316.776 120.528C319.464 118.608 320.808 115.952 320.808 112.56C320.808 105.456 315.624 101.904 305.256 101.904H290.088V123.312ZM290.088 153.936H309.096C313.768 153.936 317.352 152.976 319.848 151.056C322.408 149.136 323.688 146.384 323.688 142.8C323.688 139.216 322.408 136.432 319.848 134.448C317.352 132.4 313.768 131.376 309.096 131.376H290.088V153.936ZM345.301 162V93.84H388.117V101.904H353.557V123.888H386.965V131.76H353.557V153.936H388.885V162H345.301ZM416.681 162V101.904H395.465V93.84H446.153V101.904H424.937V162H416.681ZM470.587 162V101.904H449.371V93.84H500.059V101.904H478.843V162H470.587ZM507.113 162V93.84H549.929V101.904H515.369V123.888H548.777V131.76H515.369V153.936H550.697V162H507.113ZM564.02 162V93.84H589.844C597.012 93.84 602.676 95.696 606.836 99.408C610.996 103.12 613.076 108.144 613.076 114.48C613.076 117.104 612.532 119.504 611.444 121.68C610.356 123.792 608.948 125.584 607.22 127.056C605.492 128.528 603.604 129.552 601.556 130.128C604.564 130.64 606.932 131.856 608.66 133.776C610.452 135.696 611.508 138.416 611.828 141.936L613.748 162H605.396L603.667 142.8C603.412 139.984 602.388 137.904 600.596 136.56C598.868 135.216 596.02 134.544 592.052 134.544H572.276V162H564.02ZM572.276 126.48H590.9C595.06 126.48 598.356 125.424 600.788 123.312C603.22 121.2 604.436 118.192 604.436 114.288C604.436 110.32 603.188 107.28 600.692 105.168C598.196 102.992 594.58 101.904 589.844 101.904H572.276V126.48ZM623.912 137.808V130.224H655.688V137.808H623.912ZM661.826 162L686.402 93.84H697.538L722.114 162H713.09L706.274 142.608H677.666L670.85 162H661.826ZM680.45 134.544H703.49L691.97 101.04L680.45 134.544ZM755.651 163.536C750.403 163.536 745.827 162.512 741.923 160.464C738.083 158.416 735.107 155.504 732.995 151.728C730.947 147.888 729.923 143.376 729.923 138.192V93.744H738.179V138.192C738.179 143.696 739.683 147.952 742.691 150.96C745.763 153.968 750.083 155.472 755.651 155.472C761.155 155.472 765.411 153.968 768.419 150.96C771.491 147.952 773.027 143.696 773.027 138.192V93.744H781.283V138.192C781.283 143.376 780.227 147.888 778.115 151.728C776.067 155.504 773.123 158.416 769.283 160.464C765.443 162.512 760.899 163.536 755.651 163.536ZM811.087 162V101.904H789.871V93.84H840.559V101.904H819.343V162H811.087ZM847.613 162V93.84H855.869V123.696H890.141V93.84H898.397V162H890.141V131.76H855.869V162H847.613ZM911.443 162V151.152H922.291V162H911.443Z"
              fill="white"
            />
          </svg>
          <hr className="h-[20px] w-px bg-black dark:bg-zinc-500/40" />
          <div className="flex -space-x-3 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="50"
              fill="none"
              viewBox="0 0 160 160"
            >
              <rect
                width="9.631"
                height="40.852"
                fill="currentColor"
                rx="4.816"
                transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"
              />
              <rect
                width="9.631"
                height="40.852"
                fill="currentColor"
                rx="4.816"
                transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"
              />
              <rect
                width="9.631"
                height="40.852"
                fill="currentColor"
                rx="4.816"
                transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"
              />
              <rect
                width="9.631"
                height="40.852"
                fill="currentColor"
                rx="4.816"
                transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"
              />
            </svg>
            <p>Drizzle</p>
          </div>
          <hr className="h-[20px] w-px bg-black dark:bg-zinc-500/40" />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            width="60"
            height="60"
            viewBox="0 0 394 79"
          >
            <path d="M261.919 0.0330722H330.547V12.7H303.323V79.339H289.71V12.7H261.919V0.0330722Z"></path>
            <path d="M149.052 0.0330722V12.7H94.0421V33.0772H138.281V45.7441H94.0421V66.6721H149.052V79.339H80.43V12.7H80.4243V0.0330722H149.052Z"></path>
            <path d="M183.32 0.0661486H165.506L229.312 79.3721H247.178L215.271 39.7464L247.127 0.126654L229.312 0.154184L206.352 28.6697L183.32 0.0661486Z"></path>
            <path d="M201.6 56.7148L192.679 45.6229L165.455 79.4326H183.32L201.6 56.7148Z"></path>
            <path
              clipRule="evenodd"
              d="M80.907 79.339L17.0151 0H0V79.3059H13.6121V16.9516L63.8067 79.339H80.907Z"
              fillRule="evenodd"
            ></path>
            <path d="M333.607 78.8546C332.61 78.8546 331.762 78.5093 331.052 77.8186C330.342 77.1279 329.991 76.2917 330 75.3011C329.991 74.3377 330.342 73.5106 331.052 72.8199C331.762 72.1292 332.61 71.7838 333.607 71.7838C334.566 71.7838 335.405 72.1292 336.115 72.8199C336.835 73.5106 337.194 74.3377 337.204 75.3011C337.194 75.9554 337.028 76.5552 336.696 77.0914C336.355 77.6368 335.922 78.064 335.377 78.373C334.842 78.6911 334.252 78.8546 333.607 78.8546Z"></path>
            <path d="M356.84 45.4453H362.872V68.6846C362.863 70.8204 362.401 72.6472 361.498 74.1832C360.585 75.7191 359.321 76.8914 357.698 77.7185C356.084 78.5364 354.193 78.9546 352.044 78.9546C350.079 78.9546 348.318 78.6001 346.75 77.9094C345.182 77.2187 343.937 76.1826 343.024 74.8193C342.101 73.456 341.649 71.7565 341.649 69.7207H347.691C347.7 70.6114 347.903 71.3838 348.29 72.0291C348.677 72.6744 349.212 73.1651 349.895 73.5105C350.586 73.8559 351.38 74.0286 352.274 74.0286C353.243 74.0286 354.073 73.8286 354.746 73.4196C355.419 73.0197 355.936 72.4199 356.296 71.6201C356.646 70.8295 356.831 69.8479 356.84 68.6846V45.4453Z"></path>
            <path d="M387.691 54.5338C387.544 53.1251 386.898 52.0254 385.773 51.2438C384.638 50.4531 383.172 50.0623 381.373 50.0623C380.11 50.0623 379.022 50.2532 378.118 50.6258C377.214 51.0075 376.513 51.5164 376.033 52.1617C375.554 52.807 375.314 53.5432 375.295 54.3703C375.295 55.061 375.461 55.6608 375.784 56.1607C376.107 56.6696 376.54 57.0968 377.103 57.4422C377.656 57.7966 378.274 58.0874 378.948 58.3237C379.63 58.56 380.313 58.76 380.995 58.9236L384.14 59.6961C385.404 59.9869 386.631 60.3778 387.802 60.8776C388.973 61.3684 390.034 61.9955 390.965 62.7498C391.897 63.5042 392.635 64.413 393.179 65.4764C393.723 66.5397 394 67.7848 394 69.2208C394 71.1566 393.502 72.8562 392.496 74.3285C391.491 75.7917 390.043 76.9369 388.143 77.764C386.252 78.582 383.965 79 381.272 79C378.671 79 376.402 78.6002 374.493 77.8004C372.575 77.0097 371.08 75.8463 370.001 74.3194C368.922 72.7926 368.341 70.9294 368.258 68.7391H374.235C374.318 69.8842 374.687 70.8386 375.314 71.6111C375.95 72.3745 376.78 72.938 377.795 73.3197C378.819 73.6923 379.962 73.8832 381.226 73.8832C382.545 73.8832 383.707 73.6832 384.712 73.2924C385.708 72.9016 386.492 72.3564 387.055 71.6475C387.627 70.9476 387.913 70.1206 387.922 69.1754C387.913 68.312 387.654 67.5939 387.156 67.0304C386.649 66.467 385.948 65.9944 385.053 65.6127C384.15 65.231 383.098 64.8856 381.899 64.5857L378.081 63.6223C375.323 62.9225 373.137 61.8592 371.541 60.4323C369.937 59.0054 369.143 57.115 369.143 54.7429C369.143 52.798 369.678 51.0894 370.758 49.6261C371.827 48.1629 373.294 47.0268 375.148 46.2179C377.011 45.4 379.114 45 381.456 45C383.836 45 385.92 45.4 387.719 46.2179C389.517 47.0268 390.929 48.1538 391.952 49.5897C392.976 51.0257 393.511 52.6707 393.539 54.5338H387.691Z"></path>
          </svg>
        </div>
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
          <div className="relative -mt-10 px-14 py-14">
            <Line className="left-0 top-2 bg-zinc-700/30 sm:top-4 md:top-6" />
            <Line className="bottom-2 bg-zinc-700/30  sm:bottom-4 md:bottom-6 left-0" />

            <Line className="w-px bg-zinc-700/30  right-2 sm:right-4 md:right-6 h-full inset-y-0" />
            <Line className="w-px bg-zinc-700/30  left-2 sm:left-4 md:left-6 h-full inset-y-0" />
            <h1 className="text-4xl dark:from-zinc-400/10 dark:via-white/90 dark:to-white/20  bg-gradient-to-tr  from-black/70 via-black to-black/60 bg-clip-text text-transparent tracking-tighter md:text-5xl lg:text-6xl font-bold text-center mb-6">
              Next.js + Better Auth +<br />
              Drizzle Starter Kit
            </h1>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 tracking-tight text-center max-w-2xl mb-10">
            Better-Auth is a complete authentication solution for your Next.js
            projects, powered by Drizzle and styled with Shadcn UI components.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <Link href={"https://github.com/Kinfe123/better-auth-nextjs"}>
              <Button className="rounded-md cursor-pointer tracking-tight group bg-zinc-100 text-black hover:bg-zinc-200 h-12 text-base">
                <Github className="mr-2 h-5 w-5" />
                Get the repo{" "}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button
                variant="outline"
                className="w-fit rounded-md dark:text-white text-black border-zinc-200/20 hover:bg-transparent dark:border-zinc-800 cursor-pointer dark:hover:bg-zinc-900 h-12 text-base"
              >
                Try Demo
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 w-full">
            {[
              {
                title: "Authentication",
                description: "Email, OAuth, Magic Links",
              },
              {
                title: "Database Ready",
                description: "Drizzle ORM integration",
              },
              {
                title: "UI Components",
                description: "Shadcn UI styled components",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="border rounded-md border-zinc-200 dark:border-zinc-800 bg-zinc-900/10 dark:bg-zinc-900/20 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg text-black dark:text-white font-medium mb-2">
                  {feature.title}
                </h3>
                <p className="text-zinc-700 dark:text-zinc-400 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
