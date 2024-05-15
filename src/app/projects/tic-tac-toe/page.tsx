import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/projects/Title";
import Repertory from '@/components/projects/Breadcrumb';
import SubTitle from '@/components/projects/Subtitle';
import Content from "@/components/projects/Content";
import SubContent from "@/components/projects/SubContent";
import ProjectImage from '@/components/projects/ProjectImage';
import Container from "@/components/projects/Container";
import { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Tic-tac-toe",
}

export default function Portfolio() {
    return (
        <MaxWidthWrapper>
            <Container>
                <Repertory PageName="Tic-tac-toe"/>
                <Title text="Tic-tac-toe"/>
                <Content>
                    <SubTitle title="Context" id="context"/>
                    <SubContent>
                        <p>
                            I just moved in another house, and I didn't have an internet connexion yet.
                            Since I was learning JavaScript at school and by myself, I thought
                            that coding a tic-tac-toe could be a fun challenge to pass time.
                        </p>
                    </SubContent>
                    <SubTitle title="The design" id="design" />
                    <SubContent>
                        <p>
                            To create the interface of the tic-tac-toe, I used a table.
                            I created three rows and three columns, and with CSS I made 
                            thicker borders. I have also added a span under the table
                            to be able to show that a player won or that the game ended.
                            
                        </p>
                        <p className="my-4">
                            Finally, I centered the table and the span using a div tag and some CSS, and 
                            I have added a gradient in the background to make it look better.
                            Now, the most interesting part remained: the code behind it to make 
                            it work.
                        </p>
                    </SubContent>
                    <SubTitle title="Allowing players to claim cases" id="js-part1"/>
                    <SubContent>
                        <p>
                            To allow players to claim cases, I have coded a function that checks if 
                            the case is empty. If it is, it claims the case and switch to the next player.
                            It also modifies the span to notify that it is now the other player's turn.
                        </p>
                        <p className="mt-4">
                            I have added a simple feature as well: if the case is already claimed, it shows
                            the case in red when you hover it with your mouse whereas it shows it in green
                            if it is empty.
                        </p>
                    </SubContent>
                    <SubTitle title="Checking the state of the game" id="js-part2"/>
                    <SubContent>
                        <p>
                            I have also added a function to check after each turn whether a player 
                            has won or not. It checks for every possibility if all the cases are claimed
                            by the same player. If no one has won, it checks if all the cases are full.
                            If someone has won or the cases are all claimed, it modifies a value to block 
                            the players from doing any action.
                        </p>
                    </SubContent>
                    <SubTitle title="Resetting the game" id="progressing"/>
                    <SubContent>
                        <p>
                            Once the game is over, a function is called:
                            it shows which player has won for 3 seconds and it resets
                            the game by changing to false the value that blocks the players
                            and by emptying all the cases.
                        </p>
                    </SubContent>
                    <SubTitle title="Conclusion" id="conclusion" />
                    <SubContent>
                        <p>
                            It has been a fun experience to code this tic-tac-toe when I 
                            was beginning JavaScript. I know that the code can be improved,
                            but it is still playable and it has been made in two and half hours
                            when I didn't have a lot of knowledge of JS.
                        </p>
                        <div className="mt-6 w-full self-start flex justify-between">
                            <p>
                                You can see the source code {" "}
                                <Link 
                                href="https://github.com/msamatdev/tic-tac-toe"
                                className="underline decoration-dashed underline-offset-4 decoration-1"
                                >
                                    here
                                </Link>.
                            </p>
                            <p>
                                You can play the game {" "}
                                <Link
                                href="/static/tic-tac-toe/page.html"
                                className="underline decoration-dashed underline-offset-4 decoration-1"
                                >
                                    here
                                </Link>.
                            </p>
                        </div>
                    </SubContent>
                </Content>
            </Container>
        </MaxWidthWrapper>
    )
}