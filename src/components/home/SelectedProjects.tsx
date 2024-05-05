import Link from 'next/link';
import { MousePointerClick, CalendarDays } from 'lucide-react';
import Separator from '@/components/Separator';

const Projects = [
    {
        "id": 1,
        "name": "Algorithms comparison",
        "href": "/projects/algorithms-comparison",
        "description": "Firstly, this project was about creating an algorithm to find the shortest route between multiple cities with their longitude and latitude. Then, it was about creating two other algorithms that calculated it differently, and compare them to find which one is the fastest.",
        "tags" : [
            {id: "1.1", text: "University"},
            {id: "1.2", text: "Python"},
        ],
        "date": "December 2023"
    },
    {
        "id": 2,
        "name": "Hosting machine setup",
        "href": "/projects/hosting-machine-setup",
        "description": "My friends and I wanted to play together but renting servers would be inefficient and cost expensive. So, I turned a friend's spare laptop into a machine that could host multiple game servers simultaneously.",
        "tags" : [
            {id: "2.1", text: "Linux"}, 
            {id: "2.2", text: "Hosting"},
            {id: "2.3", text: "Games"}
        ],
        "date": "January 2024"
    },
    {
        "id": 3,
        "name": "Tic-Tac-Toe",
        "href": "/projects/tic-tac-toe",
        "description": "When I was learning the basics of JavaScript, I challenged myself by trying to create a tic-tac-toe game.",
        "tags" : [
            {id: "3.1", text: "Made in 2.5 hours"},
            {id: "3.2", text: "HTML & CSS"},
            {id: "3.3", text: "JavaScript"}
        ],
        "date": "January 2024"
    },
];

const SelectedProjects = () => {
    return (
        <div className="md:px-24 px-8 mt-32">
            <h3 className="inline relative font-bold tracking-tight text-foreground text-4xl">
                Selected projects
            </h3>
            <Separator />
            <div className="
                my-12 grid grid-cols-1 lg:grid-cols-2 grid-flow-rows gap-10
            ">
                {Projects.map((project) => {
                    return (
                        <Link
                            key={project.id}
                            href={project.href}
                        >
                            <div className="p-6 rounded-md dark:bg-muted/10 border-2 border-muted shadow-md hover:scale-105 animateCardsSize">
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
                                            <p key={tag.id} className='me-4 bg-accent px-3 py-1 rounded-xl md:mb-0 mb-2'>
                                                {tag.text}
                                            </p>
                                        );
                                    })}
                                </div>    
                                <div className='mt-6 flex justify-end text-violet-600'>
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