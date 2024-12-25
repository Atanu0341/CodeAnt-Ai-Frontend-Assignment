import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { authButtons } from "@/lib/authButtons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignInRight = () => {
  return (
    <div className="bg-[#FAFAFA] min-h-screen w-full flex flex-col items-center justify-center">
      <div className="border border-[#D5D7DA] bg-white rounded-2xl p-6 w-11/12 md:w-3/5">
        <div className="flex items-center justify-center gap-2 space-y-4">
          <Image
            src="/logo.svg"
            alt="CodeAnt AI Logo"
            width={20}
            height={20}
            className="h-8 w-auto"
          />
          <h1 className="text-xl text-[#181D27] font-light">CodeAnt AI</h1>
        </div>
        <h1 className="text-center mt-4 font-semibold text-[#181D27]">Welcome to CodeAnt AI</h1>

        {/* Deployment Type Selector */}
        <Tabs defaultValue="saas" className="w-full mt-8 relative">
          <TabsList className="flex w-full rounded-lg border bg-[#FAFAFA] border-[#D5D7DA]">
            {/* SAAS Tab */}
            <TabsTrigger
              value="saas"
              className="flex-1 font-bold text-center text-[#414651] data-[state=active]:bg-[#1570EF] data-[state=active]:text-white rounded-lg transition-colors duration-200"
            >
              SAAS
            </TabsTrigger>

            {/* Self-Hosted Tab */}
            <TabsTrigger
              value="self-hosted"
              className="flex-1 font-bold text-center text-[#414651] data-[state=active]:bg-[#1570EF] data-[state=active]:text-white rounded-lg transition-colors duration-200"
            >
              Self Hosted
            </TabsTrigger>
          </TabsList>

          {/* Divider Line */}
          <div className="w-[calc(100%+48px)] border-t border-[#D5D7DA] -mx-6 mt-4" />

          {/* Tab Content */}
          <TabsContent value="saas" className="mt-4 space-y-4 md:space-y-3 flex justify-center flex-col">
            {authButtons
              .filter((button) => button.category === "saas")
              .map((button) => (
                <Link href="/dashboard" key={button.id} >
                  <Button
                    key={button.id}
                    variant="outline"
                    className="w-full justify-center font-bold"
                  >
                    <Image
                      src={button.iconPath}
                      alt={button.label}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {button.label}
                  </Button>
                </Link>
              ))}
          </TabsContent>

          {/* Self-Hosted Content */}
          <TabsContent value="self-hosted" className="mt-4 space-y-4 md:space-y-3 flex justify-center flex-col">
            {authButtons
              .filter((button) => button.category === "self-hosted")
              .map((button) => (
                <Link href="/dashboard" key={button.id} >
                  <Button
                    key={button.id}
                    variant="outline"
                    className="w-full justify-center font-bold"
                  >
                    <Image
                      src={button.iconPath}
                      alt={button.label}
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    {button.label}
                  </Button>
                </Link>
              ))}
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-black mt-8 md:mt-6">
        By signing up you agree to the{" "}
        <Link href="/privacy-policy" className="text-black font-bold hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  )
}

export default SignInRight