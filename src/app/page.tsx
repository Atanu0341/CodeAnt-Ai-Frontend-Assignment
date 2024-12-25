import Image from "next/image";
import { Card } from "@/components/ui/card"; 
import SignInRight from "@/components/signInRight";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center relative">
        {/* Background Watermark */}
        <Image
          src="/watermark.svg"
          alt="Watermark AI Logo"
          width={600}
          height={600}
          className="absolute bottom-0 left-0 h-48 xl:h-52 w-auto"
          priority
        />

        {/* Centered Content */}
        <div className="space-y-8">
          {/* Header Card */}
          <Card className="p-6 bg-white/95 border border-white backdrop-blur-lg shadow-[0px_4px_8px_rgba(0,0,0,0.3)] rounded-3xl">
            <div className="flex items-center gap-3 text-[#081735]">
              <Image
                src="/logo.svg"
                alt="CodeAnt AI Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <h2 className="text-xl font-semibold">
                AI to Detect & Autofix Bad Code
              </h2>
            </div>

            {/* Divider Line */}
            <div className="w-[calc(100%+48px)] border-t border-[#D5D7DA] -mx-6 mt-4" />

            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-[#081735]">30+</div>
                <div className="text-sm text-[#171717]">Language Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#081735]">10K+</div>
                <div className="text-sm text-[#171717]">Developers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#081735]">100K+</div>
                <div className="text-sm text-[#171717]">Hours Saved</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Issues Fixed Card */}
        <Card className="py-4 px-7 border border-white absolute transform translate-x-[41%] translate-y-[90%] w-[248px] xl:w-[248px] 2xl:w-[248px]  bg-white/95 backdrop-blur-lg shadow-[0px_4px_8px_rgba(0,0,0,0.3)] rounded-3xl">
          <div className="flex items-center justify-between">
            <div>
              <Image
                src="/cardLogo.svg"
                alt="Card Logo"
                width={32}
                height={32}
                className="h-14 w-auto"
              />
            </div>
            <div className="text-right">
              <div className="flex items-center text-[#0049C6]">
                <Image
                  src="/upperArrow.svg"
                  alt="Upward Arrow"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-lg font-bold">14%</span>
              </div>
              <div className="text-sm text-[#171717]">This week</div>
            </div>
          </div>
          <div className="mt-4">
            <div className="text-sm text-[#171717] font-bold">Issues Fixed</div>
            <div className="text-4xl font-bold text-[#081735]">500K+</div>
          </div>
        </Card>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <SignInRight />
      </div>
    </div>
  );
}