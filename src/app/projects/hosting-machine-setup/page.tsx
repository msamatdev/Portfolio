import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/projects/Title";
import Repertory from '@/components/projects/Breadcrumb';
import Banner from '@/components/projects/Banner';
import SubTitle from '@/components/projects/Subtitle';
import Content from "@/components/projects/Content";
import SubContent from "@/components/projects/SubContent";
import ProjectImage from '@/components/projects/ProjectImage';

export default function Hosting() {
    return (
        <MaxWidthWrapper>
            <div className="mt-24 md:mt-36 md:px-20 flex flex-col items-center justify-center">
                <Repertory PageName="Setting up a hosting machine"/>
                <Banner alt="Photo of a server" fileName="server.jpg"/>
                <Title text="Setting up a hosting machine"/>
                <Content>
                    <SubTitle title="Context" id="context"/>
                    <SubContent>
                        <p>
                            My friends and I wanted to play video games together, but renting a server was expensive, 
                            and we could not change the game the server hosted: we would need to rent a different server
                            every time we wanted to play another game together. One of them came up with an idea:
                            he had a spare laptop that is powerful enough to run multiple servers at the same time,
                            and I had the knowledge to host game servers on it. So, we agreed that he would provide the laptop, 
                            and that I would be the one configuring the machine and the servers. 
                        </p>
                    </SubContent>
                    <SubTitle title="Making a bootable USB drive" id="usb" />
                    <SubContent>
                        <p>
                            Firstly, I had to pick an operating system. I chose Linux over Windows because 
                            I had enough experience to make servers on it, and Linux is more lightweight than Windows
                            so our game servers could have more resources allocated. For instance, Windows uses more than
                            4GB of RAM on idle whereas a lightweight distribution of Linux uses less than 2GB.
                        </p>
                        <p className="mt-4">
                            I decided to install Ubuntu: I had already used it, and I knew that there was an option
                            during its installation to only install the necessary packages to make it as lightweight as
                            possible. I hesitated a bit between Ubuntu 22 and Ubuntu server, but Ubuntu server does not 
                            have a user interface, and I didn't know if I would be able to do everything with no user interface.
                            Therefore, I picked Ubuntu 22.
                        </p>
                        <p className="mt-4">
                            To install Linux on the laptop, I had to make a bootable USB drive. In order to do it,
                            I installed Rufus on my computer. It is a tool specifically made for creating bootable USB drives.
                            I downloaded the optical disk image (iso) of the latest version of Ubuntu 22.04 LTS, and I used Rufus
                            to create the Linux Bootable USB drive easily.
                        </p>
                        <ProjectImage 
                        alt="Rufus screenshot"
                        fileName="rufus.jpg"
                        />
                    </SubContent>
                    <SubTitle title="Setting up the machine" id="settingup"/>
                    <SubContent>
                        <p>
                            I plugged the USB key in the laptop and I chose it as the first boot option in the BIOS. Then, I followed 
                            the installation process. After installing Linux, I was worried about the security of the machine since 
                            it would read all the requests coming from specific ports. That is why I started to make the machine safer. 
                            I created a new user withoutthe root privileges, I installed a firewall and fail2ban, and I made sure SSH 
                            was disabled (I would use a remote desktop application to log on the computer when I would need to).
                        </p>
                    </SubContent>
                    <SubTitle title="Hosting game servers" id="hosting"/>
                    <SubContent>
                        <p>
                            All that remained was to host the servers. Over the course of two years, I created and took care of a diverse 
                            range of servers across various video games: Minecraft, Space Engineers, ARK, Garry's Mod, BeamMP, Unturned, 
                            and many more. Although I did not talk about it in more details, I had to do port-forwarding for every server,
                            otherwise we could not access it remotely.
                        </p>
                        <p className="mt-4">
                            To this day, the machine is still hosting several servers. Although I don't have a lot of time to play with my 
                            friends anymore, I still make new servers for them sometimes when I can, and I make sure that the ones that are 
                            running are always up to date.
                        </p>
                    </SubContent>
                    <SubTitle title="Conclusion" id="conclusion"/>
                    <SubContent>
                        <p>
                            My friends and I were facing a problem: we could not play several video games together because renting servers 
                            would cost us money. We made a brainstorming and we found a solution: to host our own servers. Being skilled 
                            enough to do that, I have been the one setting up the machine and creating and managing the servers. It allowed 
                            me to gain knowledge about Linux, the way a network works, how to secure a machine, and how to host servers in general.
                        </p>
                    </SubContent>
                </Content>
            </div>
        </MaxWidthWrapper>
    )
}