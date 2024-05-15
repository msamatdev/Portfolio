import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/projects/Title";
import Repertory from '@/components/projects/Breadcrumb';
import Banner from '@/components/projects/Banner';
import SubTitle from '@/components/projects/Subtitle';
import Content from "@/components/projects/Content";
import SubContent from "@/components/projects/SubContent";
import ProjectImage from '@/components/projects/ProjectImage';
import Container from "@/components/projects/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Creation of this portfolio",
}

export default function Portfolio() {
    return (
        <MaxWidthWrapper>
            <Container>
                <Repertory PageName="Creation of this portfolio"/>
                <Title text="Creation of this portfolio"/>
                <Content>
                    <SubTitle title="Context" id="context"/>
                    <SubContent>
                        <p>
                            I wanted to have a place to show my projects and my personality. 
                            So, I started my biggest project yet: an online portfolio made 
                            from scratch.
                        </p>
                        <p className="my-4">
                            After working on it for more than two months, I am honestly happy 
                            to see how it turned out. I am proud that I managed to create an
                            entire modern website using a framework, and on my own.
                            I also hope that it will help me find an apprenticeship, since it 
                            shows what I am capable of in web development.    
                        </p>
                        <p>
                            During this article, you will learn how I did it,
                            which decisions I made, and what were the main 
                            difficulties I encountered. I will also talk about what
                            I learnt after all this time working on my website.
                        </p>     
                    </SubContent>
                    <SubTitle title="The beginning of the project" id="frameworks" />
                    <SubContent>
                        <p>
                            To create my own website, I needed to decide which tools I would pick.
                            Should I go with the regular stack consisting of HTML, CSS and JavaScript
                            to create a static website? Should I use a framework? If so, which one?
                        </p>
                        <p className="my-4">
                            Since I already developed some static websites, I wanted to try something
                            different. Moreover, a framework comes with many advantages: it allows you to 
                            dynamically generate pages, create reusable components, have clean links that do
                            not end in .html, etc. So, I decided that I would learn a framework... but which one ?
                        </p>
                        <p>
                            After doing some research, I found Next.js. I chose it because I find it very appealing.
                            Indeed, its app router and the fact that we can do frontend and backend makes it a solid
                            framework. Moreover, it is a react framework, which is a framework that is used by
                            many huge companies. Consequently, learning Next.js means learning some parts of react as well,
                            which is a strong advantage too.
                        </p>
                    </SubContent>
                    <SubTitle title="Starting from nothing" id="starting"/>
                    <SubContent>
                        <p>
                            After following the tutorial of Next on its website, I made some tests.
                            Then, I created the project with <code>npx create-next-app@latest</code>.
                            At this time, it was only containing the files related to the framework. There
                            was nothing, except a blank page.
                        </p>
                        <p className="mt-4">
                            I planified the realization of the project, by writing in a text file every
                            step. I tried my best to have a clear vision of the result before writing any line
                            of code. Thanks to that, I have always been organized when working on it: I knew
                            what to do, and in which order.
                        </p>
                    </SubContent>
                    <SubTitle title="Creating the landing page" id="landing"/>
                    <SubContent>
                        <p>
                            Everything was planified and set-up, I was finally ready to write
                            the code. I started by making the home page. I was slow though: I was discovering 
                            Tailwind CSS and TypeScript, so it took me some time to get used to it.
                        </p>
                        <p className="my-4">
                            At the same time, I started to work on the navigation bar. It was truly difficult
                            for me because I needed to make some complex actions like changing the color
                            of the name of the page in the navigation bar when you are on it. I also had
                            to hide and show the menu with a button when you are accessing the website 
                            on a mobile phone.
                        </p>
                        <p>
                            When I was working on the menu of the bar for mobile users, I encountered a strange problem: 
                            for some reason, I couldn't animate the height of the navigation bar. The animation simply did not work and 
                            the menu just popped when you pressed the button. I learnt after some time that it was caused by 
                            Tailwind, and that you need to use a specific height instead of the automatic height because it won't work
                            otherwise.
                        </p>
                    </SubContent>
                    <SubTitle title="Making the other pages" id="progressing"/>
                    <SubContent>
                        <p>
                            Coding the other pages has made me learn a lot too. I have created components
                            that takes arguments, I have used some React tools like the hooks and the map
                            function, and I even learnt some backend by creating an api that works with the 
                            form in the 'contact' page and that sends me a message.
                        </p>
                    </SubContent>
                    <SubTitle title="Conclusion" id="conclusion" />
                    <SubContent>
                        <p>
                            Overall, it has been a nice experience for me to work on this website. I learnt a lot
                            by trying my first framework, discovering Tailwind CSS, and  making my first working form. 
                            I also discovered how a DNS works by purchasing my domain name and affecting the subdomain 
                            'portfolio' to this site. I encountered a lot of problems but I solved them one by one while 
                            staying motivated. It took me more than two months but now my biggest project to this date is functional.
                        </p>
                    </SubContent>
                </Content>
            </Container>
        </MaxWidthWrapper>
    )
}