'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Github } from 'lucide-react'
import { motion, useAnimation, useInView } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const BackgroundBeams = React.memo(() => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
    "M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827",
    "M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819",
    "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
    "M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803",
  ];

  return (
    <div className={cn(
      "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center"
    )}>
      <svg
        className="z-0 h-full w-full pointer-events-none absolute"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827M-331 -245C-331 -245 -263 160 201 287C665 414 733 819 733 819M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-317 -261C-317 -261 -249 144 215 271C679 398 747 803 747 803M-310 -269C-310 -269 -242 136 222 263C686 390 754 795 754 795M-303 -277C-303 -277 -235 128 229 255C693 382 761 787 761 787M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-289 -293C-289 -293 -221 112 243 239C707 366 775 771 775 771M-282 -301C-282 -301 -214 104 250 231C714 358 782 763 782 763M-275 -309C-275 -309 -207 96 257 223C721 350 789 755 789 755M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-261 -325C-261 -325 -193 80 271 207C735 334 803 739 803 739M-254 -333C-254 -333 -186 72 278 199C742 326 810 731 810 731M-247 -341C-247 -341 -179 64 285 191C749 318 817 723 817 723"
          stroke="url(#paint0_radial_242_278)"
          strokeOpacity="0.05"
          strokeWidth="0.5"
        ></path>

        {paths.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          ></motion.path>
        ))}
        <defs>
          {paths.map((path, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", `${93 + Math.random() * 8}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                delay: Math.random() * 10,
              }}
            >
              <stop stopColor="#18CCFC" stopOpacity="0"></stop>
              <stop stopColor="#18CCFC"></stop>
              <stop offset="32.5%" stopColor="#6344F5"></stop>
              <stop offset="100%" stopColor="#AE48FF" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}

          <radialGradient
            id="paint0_radial_242_278"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
          >
            <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
            <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
});

BackgroundBeams.displayName = "BackgroundBeams";

const ButtonAnimation = {
  tap: { scale: 0.95 },
  hover: { scale: 1.05 }
}

const FadeInAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const Section = ({ children, className }) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={FadeInAnimation}
      className={className}
    >
      {children}
    </motion.section>
  )
}

export default function Component() {
  return (
    <div className="min-h-screen  text-white overflow-hidden relative">
      <BackgroundBeams />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Section className="py-12 md:py-24 lg:py-32 xl:py-48 text-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
                  File Tree Generator
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-300 md:text-xl">
                  Streamline Your Project Structure Visualization
                </p>
              </div>
              <div className="flex space-x-4">
                <motion.div whileHover={ButtonAnimation.hover} whileTap={ButtonAnimation.tap}>
                  <Link href="https://apps.apple.com/us/app/file-tree-generator" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                      Download on Mac App Store
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={ButtonAnimation.hover} whileTap={ButtonAnimation.tap}>
                  <Link href="https://github.com/yourusername/file-tree-generator" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="py-12 md:py-24 lg:py-32 text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              Empower Your Development Workflow
            </h2>
            <p className="mt-4 text-neutral-300 md:text-xl max-w-2xl mx-auto">
              File Tree Generator is a robust macOS application tailored for developers, engineers, and technical writers. It revolutionizes the way you create, manage, and visualize directory structures, enhancing your project documentation and code organization.
            </p>
          </div>
        </Section>

        <Section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              Advanced Features
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-neutral-800">
                <AccordionTrigger className="text-white hover:text-neutral-300">Markdown/TXT Generation</AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  Effortlessly generate Markdown or plain text representations of your directory structures. Perfect for creating comprehensive documentation, README files, or sharing project layouts with your team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-neutral-800">
                <AccordionTrigger className="text-white hover:text-neutral-300">Customizable Exclusion Patterns</AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  Fine-tune your file tree output with advanced exclusion patterns. Utilize regex support to focus on the most crucial parts of your project structure, ignoring irrelevant files or directories.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-neutral-800">
                <AccordionTrigger className="text-white hover:text-neutral-300">Syntax Highlighting</AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  Enhance readability with built-in syntax highlighting for various programming languages. Quickly identify file types and improve the overall clarity of your project structure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>

        <Section className="py-12 md:py-24 lg:py-32 bg-white/5 rounded-xl">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              Contribute to Open Source
            </h2>
            <p className="text-xl text-neutral-300 mb-8">
              Join our community of developers and help shape the future of File Tree Generator!
            </p>
            <motion.div whileHover={ButtonAnimation.hover} whileTap={ButtonAnimation.tap}>
              <Link href="https://github.com/yourusername/file-tree-generator" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200">
                  <Github className="mr-2 h-5 w-5" />
                  Contribute on GitHub
                </Button>
              </Link>
            </motion.div>
          </div>
        </Section>

        <Section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
              Developer Support
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-neutral-800">
                <AccordionTrigger className="text-white hover:text-neutral-300">Advanced Exclusion Patterns</AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  Leverage the power of regular expressions for precise file exclusions. Our documentation provides examples and best practices for creating efficient exclusion patterns tailored to your project needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-neutral-800">
                <AccordionTrigger className="text-white hover:text-neutral-300">API Integration</AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  Integrate File Tree Generator into your CI/CD pipeline or development tools. Our API documentation provides detailed information on how to programmatically generate file trees and incorporate them into your workflow.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Section>
      </main>
    </div>
  )
}
