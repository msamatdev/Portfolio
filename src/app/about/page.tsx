import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import Separator from '@/components/Separator'
import Pictures from '@/components/about/Pictures';

const Skills = [
    {
        name: "Python",
        icon: "python",
        level: "Average • Learnt mostly at university",
        id: 1
    },
    {
        name: "Java",
        icon: "java",
        level: "Average • Learning it at university",
        id: 2
    },
    {
        name: "Next.js",
        icon: "nextjs",
        level: "Good at Frontend • Learnt by myself",
        id: 3
    },
    {
        name: "JavaScript, Typescript",
        icon: "javascript",
        level: "Correct • Learnt mostly by myself",
        id: 4
    },
    {
        name: "HTML 5",
        icon: "html",
        level: "Good • Learnt by myself",
        id: 5
    },
    {
        name: "CSS, Tailwind",
        icon: "tailwind",
        level: "Good • Learnt on my own",
        id: 6
    },
    {
        name: "PostgreSQL",
        icon: "postgresql",
        level: "Beginner • Learnt at university",
        id: 7
    },
    {
        name: "C",
        icon: "c",
        level: "Beginner • Learning it at school",
        id: 8
    },
    {
        name: "Git",
        icon: "git",
        level: "Beginner • Learnt by myself",
        id: 9
    },
]

export const metadata: Metadata = {
    title: "About",
}

export default function About() {
    return (
        <MaxWidthWrapper>
            <div className="md:mt-48 mt-28 px-12">
                <h1 className='text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl'>
                    About me
                </h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 place-items-center mt-12 lg:mt-24 lg:px-40'>
                    <div>

                    </div>
                    <div className='text-lg'>
                        <p>
                            I am Mathis SAMAT, an 18 year old student in France. 
                            I like science, so I specialized in Mathematics, 
                            Chemistry and Physics in secondary school.
                        </p>
                        <p className='mt-4'>
                            Throughout the years, I have discovered a lot about computers,
                            and the more I dived into them, the more I was curious about them.
                            After trying 3D Modeling, server hosting, image editing, writing my
                            first lines of code, ... I was hooked, so I decided to study IT.
                        </p>
                        <p className='mt-4'>
                            Now, I would love to join an IT company, to gain
                            experience, and improve my skills.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mx-6 md:mx-0 mt-32">
                <h3 className="inline relative font-bold tracking-tight text-foreground text-4xl dark:text-highlight selected-projects">
                    My main tools
                </h3>
                <Separator />
                <div className='grid place-items-center mt-16 mx-6 gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {Skills.map((skill) => (
                        <div 
                        className='dark:bg-muted/15 border-2 border-muted shadow-md rounded-md w-full h-full p-6 flex flex-col items-center justify-center'
                        key={skill.id}
                        >
                            <Image
                                alt={`Logo of ${skill.name}`}
                                src={`/images/toolsIcons/${skill.icon}.svg`}
                                width={42}
                                height={42}
                            />
                            <p className="mt-3 text-lg font-bold tracking-wide text-foreground">
                                {skill.name}
                            </p>
                            <p className='mt-3 text-muted-foreground'>
                                {skill.level}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-44 px-12 mb-12">
                <h1 className='text-center text-4xl font-bold tracking-tight text-foreground sm:text-5xl'>
                    Outside university
                </h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 place-items-center mt-12 lg:mt-24 lg:px-30 gap-12'>
                <div className='text-lg'>
                        <p>
                            Besides my interest in coding, I have multiple passions that
                            I enjoy when I am not at university or coding at home.
                        </p>
                        <p className='mt-4'>
                            Firstly, I am a car enthusiast. I am currently getting my
                            license, and I genuinely enjoy sim racing. As a matter of fact, 
                            I participated in a {" "}
                            <Link 
                            href="https://youtu.be/MTAOKLT-zNA?t=10"
                            className="decoration-dashed underline underline-offset-4 decoration-1"
                            target='_blank'
                            >
                                time attack competition 
                            </Link>
                            {" "} back in 2023 whose creator is a youtuber with almost 800 000
                            subscribers. When I uploaded my score, I stayed for multiple days
                            on the podium, and I ended up in 12th place at the end. I am still proud 
                            of it, since, because of school, I didn&apos;t have a lot of time to practice 
                            unlike the others, so I couldn&apos;t do a lot of tries to improve my time.
                        </p>
                        <p className='mt-4'>
                            In addition, I do like hiking in beautiful places, which helps me to stay
                            balanced and full of energy, bringing productivity and fresh perspective 
                            to my work. Here, you can scroll to see some of the best pictures I took
                            when hiking in my opinion.
                        </p>
                    </div>
                    <Pictures />
                </div>
            </div>
        </MaxWidthWrapper>
    );
}