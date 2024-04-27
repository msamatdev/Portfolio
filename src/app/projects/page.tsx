'use client';

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useState } from "react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { ArrowDownUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import SelectedProjects from "@/components/home/SelectedProjects";


const sortList = [
    {
        "text": "HTML CSS JavaScript",
        "action": "html",
    },
    {
        "text": "3D Modeling",
        "action": "3d",
    },
    {
        "text": "PostgreSQL",
        "action": "psql",
    },
    {
        "text": "Python",
        "action": "py",
    },
    {
        "text": "Hosting",
        "action": "host",
    },
    {
        "text": "Next.js",
        "action": "next",
    },
    {
        "text": "Java",
        "action": "java",
    },
    {
        "text": "C",
        "action": "c",
    },
]

const projectsList = [
    {
        id: 1,
        link: "hosting-machine-setup",
        category: "host",
        title: "Hosting machine setup",
        text: "I turned a friend's spare laptop into a fully fonctionnal 24/7 game hosting server, accessible by remote access, on Ubuntu with port forwarding.",
        tags: [
            {
                id: "1.1",
                text: "Linux"
            },
            {
                id: "1.2",
                text: "Hosting"
            },
            {
                id: "1.3",
                text: ""
            },
        ]
    },
    {
        id: 2,
        link: "portfolio",
        category: "next",
        title: "Portfolio creation",
        text: "To learn my first framework, Next.js, and find an apprenticeship program, I made a modern portfolio website that contains some of my recent projects",
        tags: [
            {
                id: "2.1",
                text: "Next.js"
            },
            {
                id: "2.2",
                text: "Frontend"
            },
            {
                id: "2.3",
                text: "Backend"
            },
        ]
    },
    {
        id: 3,
        link: "route-planner",
        category: "py",
        title: "Route planner",
        text: "For a task in university, I have programmed 3 route planners and I compared them to find which is the fastest.",
        tags: [
            {
                id: "3.1",
                text: "Python"
            },
            {
                id: "3.2",
                text: "Algorithms"
            },
            {
                id: "3.3",
                text: "University"
            },
        ]
    },
    {
        id: 4,
        link: "tic-tac-toe",
        category: "html",
        title: "Tic-tac-toe",
        text: "Someday, when I didn't have an internet connection, I coded a tic-tac-toe in less than 3 hours to fight boredom.",
        tags: [
            {
                id: "4.1",
                text: "Web"
            },
            {
                id: "4.2",
                text: "JavaScript"
            },
            {
                id: "3.3",
                text: "Game"
            },
        ]
    },
    {
        id: 5,
        link: "gun-modeling",
        category: "3d",
        title: "Creation of a gun model",
        text: "I tried 3D Modeling by creating my own model. I modeled a gun, a kar 98k with correct dimensions, in order to add it into a video game.",
        tags: [
            {
                id: "5.1",
                text: "3D"
            },
            {
                id: "5.2",
                text: "Texturing"
            },
            {
                id: "5.3",
                text: "Blender"
            },
        ]
    },
    {
        id: 6,
        link: "gathering-needs",
        category: "html",
        title: "Gathering needs",
        text: "During a project at my university, I have been asked to create a website for another student. He would play a role, and I would need to gather his needs.",
        tags: [
            {
                id: "6.1",
                text: "Web"
            },
            {
                id: "5.2",
                text: "JavaScript"
            },
            {
                id: "5.3",
                text: "University"
            },
        ]
    },
];

export default function Projects() {
    const [selectedProj, setSelectedProj] = useState('default');
    const selectProject = (projectType: string) => {
        setSelectedProj(projectType);
    }

    return (
        <MaxWidthWrapper>
            <div className="md:mt-48 mt-28 md:px-24 px-8">
                <div className="flex justify-between items-center">
                    <p className="font-bold tracking-tight text-primary-foreground text-4xl">Some of my Projects</p>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <span className="text-[22px]">Sort</span>
                                <ArrowDownUp className="ms-2 size-[20px]"/>
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem
                                    key="default"
                                    onClick={() => selectProject('default')}
                                >
                                    Show everything
                                </MenubarItem>
                                <MenubarSeparator />
                                {sortList.map((category) => (
                                    <MenubarItem
                                        key={category.text}
                                        onClick={() => selectProject(category.action)}
                                    >
                                        {category.text}
                                    </MenubarItem>
                                ))}
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </div>

                <div className="mt-28 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {projectsList.map((project) => (
                    <Link
                    className={clsx("flex-col justify-between items-start p-4 bg-transparent border-2 border-muted rounded-lg h-52", {
                        "flex": selectedProj === project.category || selectedProj === 'default',
                        "hidden": selectedProj !== project.category && selectedProj !== 'default',
                      })}
                    key={project.id}
                    href={`/projects/${project.link}`}
                    >
                        <div className="flex justify-center items-center">
                            <Image
                                alt={`Logo of the category ${project.category}`}
                                src={`/images/${project.category}.svg`}
                                width={34}
                                height={34}
                                className="p-1 bg-teal-600 rounded-xl"
                            />
                            <p className="ms-2 font-bold text-primary-foreground text-xl">
                                {project.title}
                            </p>
                        </div>
                        <p className="">{project.text}</p>
                        <div className="flex flex-wrap gap-2 text-muted-foreground">
                            <p>Tags:</p>
                            {project.tags.map((tag) => (
                                <p key={tag.id}>{tag.text}</p>
                            ))}
                        </div>
                    </Link>
                ))}
                </div>
            </div>
        </MaxWidthWrapper>
    );
}