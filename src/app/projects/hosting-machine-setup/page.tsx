import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Title from "@/components/projects/Title";
import Repertory from '@/components/projects/Breadcrumb';
import Banner from '@/components/projects/Banner';
import Text from '@/components/projects/Text';

export default function Hosting() {
    return (
        <MaxWidthWrapper>
            <div className="mt-28 md:mt-36 md:px-20">
                <Repertory PageName="Setting up a hosting machine"/>
                <Banner alt="Photo of a server" fileName="server.jpg"/>
                <Title text="Setting up a hosting machine"/>
                <div className="flex flex-col items-center justify-center">
                    <Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempus iaculis urna id volutpat lacus laoreet. Volutpat consequat mauris nunc congue nisi vitae. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Placerat orci nulla pellentesque dignissim enim sit. Leo vel fringilla est ullamcorper eget. A arcu cursus vitae congue mauris. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Convallis tellus id interdum velit laoreet id. Odio morbi quis commodo odio aenean sed. Dui nunc mattis enim ut. Quis auctor elit sed vulputate mi sit amet mauris. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Sit amet nisl purus in mollis. Amet mattis vulputate enim nulla aliquet. Tortor dignissim convallis aenean et tortor. Ornare lectus sit amet est placerat in egestas erat. Nec ullamcorper sit amet risus nullam. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus.</p>
                    </Text>
                </div>
                
            </div>
        </MaxWidthWrapper>
    )
}