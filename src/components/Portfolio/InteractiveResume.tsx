"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  Briefcase,
  GraduationCap,
  Code,
  User,
  Folder,
} from "lucide-react";
import * as LucideIcons from "lucide-react";
import { track } from '@vercel/analytics';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  resumeData,
  type Experience,
  type Skill,
  type Education,
} from "@/lib/resumeData";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const InteractiveResume = () => {
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [selectedJob, setSelectedJob] = useState<Experience | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<Education | null>(
    null,
  );
  const [activeTab, setActiveTab] = useState<string>("technical");
  const [isAutoplayPaused, setIsAutoplayPaused] = useState<boolean>(false);
  const autoplayTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const skillModalTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleScroll = useCallback(() => {
    const currentScrollTop =
      window.scrollY || document.documentElement.scrollTop;
    setShowScrollButton(currentScrollTop > 300);
    setIsScrollingUp(currentScrollTop < lastScrollTop);
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  }, [lastScrollTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const tabs = ["technical", "management", "business"];
    const autoplay = () => {
      if (!isAutoplayPaused) {
        setActiveTab((prevTab) => {
          const currentIndex = tabs.indexOf(prevTab);
          return tabs[(currentIndex + 1) % tabs.length] ?? prevTab;
        });
      }
      autoplayTimeoutRef.current = setTimeout(autoplay, 5000);
    };

    if (!isAutoplayPaused) {
      autoplayTimeoutRef.current = setTimeout(autoplay, 5000);
    }

    return () => {
      if (autoplayTimeoutRef.current !== null)
        clearTimeout(autoplayTimeoutRef.current);
      if (skillModalTimeoutRef.current)
        clearTimeout(skillModalTimeoutRef.current);
    };
  }, [isAutoplayPaused]);

  const resumeAutoplay = useCallback(() => {
    setIsAutoplayPaused(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const renderExperience = useMemo(
    () => (
      <div className="space-y-8">
        {resumeData.experience.map((job, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row"
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-full sm:w-1/4 pr-4 text-left sm:text-right mb-2 sm:mb-0">
              <p className="text-sm text-gray-400">
                {job.period}
              </p>
            </div>
            <div className="relative w-full sm:w-3/4">
              <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500"></div>
                <Card
                  className="transform cursor-pointer border-gray-800 bg-gray-900 transition-all duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-800"
                  onClick={() => {
                    setSelectedJob(job);
                    track('Modal Opened', { modal: 'Job Details', jobTitle: job.title });
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-white">{job.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {job.company}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">
                      {job.shortDescription}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    [],
  );

  const renderEducation = useMemo(
    () => (
      <div className="space-y-8">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            className="flex"
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-1/4 pr-4 text-right">
              <p className="sticky top-24 text-sm text-gray-400">{edu.year}</p>
            </div>
            <div className="relative w-3/4">
              <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
              <div className="relative pl-6">
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-blue-500"></div>
                <Card
                  className="transform cursor-pointer border-gray-800 bg-gray-900 transition-all duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-800"
                  onClick={() => {
                    setSelectedEducation(edu);
                    track('Modal Opened', { modal: 'Education Details', degree: edu.degree });
                  }}
                >
                  <CardHeader>
                    <CardTitle className="text-white">{edu.degree}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {edu.school}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-300">{edu.fieldOfStudy}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
    [],
  );

  const renderSkills = useMemo(
    () => (
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-900">
          {["technical", "management", "business"].map((tab) => (
            <TabsTrigger
              key={tab}
              value={tab}
              className={`${activeTab === tab ? "bg-blue-500 text-white" : "bg-gray-800 text-gray-300"} transition-all duration-300`}
              onClick={() => {
                setActiveTab(tab);
                setIsAutoplayPaused(true);
                if (autoplayTimeoutRef.current !== null) {
                  clearTimeout(autoplayTimeoutRef.current);
                }
                autoplayTimeoutRef.current = setTimeout(() => {
                  resumeAutoplay();
                }, 10000);
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>
        {(
          Object.keys(resumeData.skills) as Array<
            keyof typeof resumeData.skills
          >
        ).map((category) => (
          <TabsContent key={category} value={category} className="mt-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {resumeData.skills[category].map((skill, index) => {
                const IconComponent = (LucideIcons[skill.icon as keyof typeof LucideIcons] || LucideIcons.Code) as React.ElementType;
                return (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      className="flex h-24 transform cursor-pointer items-center justify-center border-gray-800 bg-gray-900 p-2 transition-all duration-300 hover:scale-105 hover:from-gray-700 hover:to-gray-800"
                      onClick={() => {
                        setSelectedSkill(skill);
                        track('Modal Opened', { modal: 'Skill Details', skillName: skill.name });
                      }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        <IconComponent className="h-8 w-8 flex-shrink-0 text-blue-400" aria-hidden="true" />
                        <p
                          className="w-full break-words text-center text-sm text-white"
                          style={{ fontSize: "clamp(0.7rem, 2vw, 0.875rem)" }}
                        >
                          {skill.name}
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    ),
    [activeTab, resumeAutoplay],
  );

  const renderProjects = useMemo(
    () => (
      <div className="space-y-4">
        {resumeData.projects.map((project, index) => (
          <motion.div
            key={index}
            {...fadeInUp}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="border-gray-800 bg-gray-900 text-center">
              <CardHeader>
                <CardTitle className="text-white">{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <p className="mb-4 text-sm text-gray-300">
                  {project.description}
                </p>
                <Button
                  variant="outline"
                  className="min-h-[44px] px-6 py-2 text-blue-400 hover:text-blue-300 hover:bg-gray-800"
                  onClick={() => track('Button Pressed', { button: 'View Project', projectName: project.name })}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full h-full"
                  >
                    View Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    ),
    [],
  );

  return (
    <div className="mx-auto max-w-4xl space-y-12 bg-black p-4 sm:p-6 text-gray-100">
      <motion.nav
        className="sticky top-0 z-10 mb-8 flex flex-wrap justify-center space-x-2 sm:space-x-4 rounded-b-lg bg-gray-900 p-2 sm:p-4 shadow-md"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {[
          "Summary",
          "Experience",
          "Education",
          "Skills",
          "Projects",
          "About",
        ].map((section) => (
          <Button
            key={section}
            variant="ghost"
            className="text-gray-300 transition-all duration-300 hover:bg-gray-800 hover:text-white"
            onClick={() => {
              document
                .getElementById(section.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {section}
          </Button>
        ))}
      </motion.nav>

      <motion.section id="summary" {...fadeInUp}>
        <h2 className="mb-4 flex items-center text-2xl font-bold text-white">
          <User className="mr-2" />
          Summary
        </h2>
        <Card className="border-gray-800 bg-gray-900">
          <CardContent className="pt-6">
            <p className="text-gray-300">{resumeData.summary}</p>
          </CardContent>
        </Card>
      </motion.section>

      <motion.section id="experience" {...fadeInUp}>
        <h2 className="mb-4 flex items-center text-2xl font-bold text-white">
          <Briefcase className="mr-2" />
          Work Experience
        </h2>
        {renderExperience}
      </motion.section>

      <motion.section id="education" {...fadeInUp}>
        <h2 className="mb-4 flex items-center text-2xl font-bold text-white">
          <GraduationCap className="mr-2" />
          Education
        </h2>
        {renderEducation}
      </motion.section>

      <motion.section id="skills" {...fadeInUp}>
        <h2 className="mb-4 flex items-center text-2xl font-bold text-white">
          <Code className="mr-2" />
          Skills
        </h2>
        {renderSkills}
      </motion.section>

      <motion.section id="projects" {...fadeInUp}>
        <h2 className="mb-4 flex items-center text-2xl font-bold text-white">
          <Folder className="mr-2" />
          Projects
        </h2>
        {renderProjects}
      </motion.section>

      <motion.section id="about" {...fadeInUp}>
        <h2 className="mb-4 flex items-center text-2xl font-bold text-white">
          <User className="mr-2" />
          About Me
        </h2>
        <Card className="border-gray-800 bg-gray-900">
          <CardContent className="pt-6">
            <p className="mb-4 text-gray-300">{resumeData.about.description}</p>
            <h3 className="mb-2 text-xl font-semibold text-white">Hobbies</h3>
            <ul className="list-disc pl-5 text-gray-300">
              {resumeData.about.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.section>

      <AnimatePresence>
        {showScrollButton && isScrollingUp && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20, scale: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 transform"
          >
            <Button
              className="transform rounded-full bg-blue-500 p-3 text-gray-100 transition-all duration-300 hover:scale-110 hover:bg-blue-600"
              onClick={scrollToTop}
            >
              <ChevronUp className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <Dialog
        open={!!selectedJob}
        onOpenChange={(open) => {
          setSelectedJob(null);
          if (open && selectedJob) {
            track('Modal Opened', { modal: 'Job Details', jobTitle: selectedJob.title });
          }
        }}
      >
        <DialogContent className="max-w-3xl border-gray-800 bg-gray-900 text-white max-h-[90vh] flex flex-col overflow-hidden">
          <DialogHeader className="flex-shrink-0">
            <DialogTitle className="text-2xl font-bold text-white">
              {selectedJob?.title}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-300">
              {selectedJob?.company}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-grow overflow-y-auto">
            <div className="mt-4 space-y-6 pr-4">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Responsibilities
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-gray-300">
                  {selectedJob?.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
              <Separator className="bg-gray-800" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  What I Learned
                </h3>
                <p className="text-gray-300">{selectedJob?.learned}</p>
              </div>
              <Separator className="bg-gray-800" />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-white">
                  Memorable Story
                </h3>
                <p className="text-gray-300">{selectedJob?.story}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!selectedSkill}
        onOpenChange={(open) => {
          setSelectedSkill(null);
          setIsAutoplayPaused(open);
          if (open && selectedSkill) {
            track('Modal Opened', { modal: 'Skill Details', skillName: selectedSkill.name });
          }
          if (!open) {
            if (skillModalTimeoutRef.current)
              clearTimeout(skillModalTimeoutRef.current);
            skillModalTimeoutRef.current = setTimeout(() => {
              resumeAutoplay();
            }, 5000);
          }
        }}
      >
        <DialogContent className="border-gray-800 bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {selectedSkill?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">Details</h3>
              <p className="text-gray-300">{selectedSkill?.details}</p>
            </div>
            <Separator className="bg-gray-800" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Real-World Applications
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                {selectedSkill?.applications.map((application, index) => (
                  <li key={index}>{application}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={!!selectedEducation}
        onOpenChange={(open) => {
          setSelectedEducation(null);
          if (open && selectedEducation) {
            track('Modal Opened', { modal: 'Education Details', degree: selectedEducation.degree });
          }
        }}
      >
        <DialogContent className="max-w-3xl border-gray-800 bg-gray-900 text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {selectedEducation?.degree}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-300">
              {selectedEducation?.school}
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 space-y-6">
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Field of Study
              </h3>
              <p className="text-gray-300">{selectedEducation?.fieldOfStudy}</p>
            </div>
            <Separator className="bg-gray-800" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Achievements
              </h3>
              <ul className="list-disc space-y-2 pl-5 text-gray-300">
                {selectedEducation?.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
            <Separator className="bg-gray-800" />
            <div>
              <h3 className="mb-2 text-xl font-semibold text-white">
                Notable Courses
              </h3>
              <p className="text-gray-300">
                {selectedEducation?.notableCourses}
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InteractiveResume;
