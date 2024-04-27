import Link from 'next/link';
import { MousePointerClick, CalendarDays } from 'lucide-react';
import Separator from '@/components/Separator';

const Projects = [
    {
        "id": 1,
        "name": "'Recueil de besoin'",
        "href": "/projects/recueil-de-besoin",
        "description": "It was a project that involved gathering the needs of a fictional professionnal person, and creating a small website containing a few pages tailored to those needs. To do so, I had to contact the student that played the professionnal to make sure that he liked what I was doing. I also gave him my ideas to make the website even better.",
        "tags" : ["University", "HTML & CSS", "JavaScript"],
        "date": "January 2024"
    },
    {
        "id": 2,
        "name": "Algorithms comparison",
        "href": "/projects/algorithms-comparison",
        "description": "Firstly, this project was about creating an algorithm to find the shortest route between multiple cities with their longitude and latitude. Then, it was about creating two other algorithms that calculated it differently, and compare them to find which one is the fastest.",
        "tags" : ["University", "Python"],
        "date": "December 2023"
    },
    {
        "id": 3,
        "name": "Tic-Tac-Toe",
        "href": "/projects/tic-tac-toe",
        "description": "When I was learning the basics of JavaScript, I challenged myself by trying to create a tic-tac-toe game.",
        "tags" : ["Made in 2.5 hours", "HTML & CSS", "JavaScript"],
        "date": "January 2024"
    },
];

const SelectedProjects = () => {
    return (
        <div className="md:px-24 px-8 mt-32">
            <h3 className="inline relative font-bold tracking-tight text-foreground text-4xl dark:text-highlight selected-projects">
                Selected projects
            </h3>
            <Separator />
            <div className="
                grid place-items-start mt-12
                xl:grid-cols-2 xl:grid-rows-2 lg:gap-14
                grid-cols-1 grid-rows-3 gap-8
            ">
                {Projects.map((project) => {
                    return (
                        <Link
                            key={project.id}
                            href={project.href}
                        >
                            <div className="w-full h-full mb-1 p-6 rounded-md dark:bg-muted/15 border-2 border-muted shadow-md hover:scale-105 animateCardsSize">
                                <p className='text-foreground text-3xl'>
                                    {project.name}
                                </p>
                                <p className='flex items-center mt-4'>
                                        <CalendarDays className="size-5"/>
                                        <span className="ms-2">{project.date}</span>
                                </p>
                                <p className='text-md text-muted-foreground mt-4'>
                                    {project.description}
                                </p>
                                <div className='flex mt-4 flex-wrap'>
                                    {project.tags.map((tag) => {
                                        return (
                                            <p key={project.href} className='me-4 bg-accent px-3 py-1 rounded-xl md:mb-0 mb-2'>
                                                {tag}
                                            </p>
                                        );
                                    })}
                                </div>    
                                <div className='mt-4 flex justify-end text-violet-600'>
                                    <p className=" flex items-center justify-center py-1 px-2 rounded-lg">
                                        <MousePointerClick />
                                        <span className='ms-2 font-semibold'>
                                            LEARN MORE
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default SelectedProjects;