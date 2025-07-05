import ThemeButton from './ThemeButton';
import LocaleSwitcher from '../locale/LocaleSwitcher';

export default function BottomBar() {
  return (
    <div className="z-50 fixed right-12 bottom-12 flex items-center justify-center border-primary border-2 rounded-md p-2 gap-4 bg-background">
      <LocaleSwitcher />
      <div className='bg-muted-foreground h-8 w-[2px]'></div>
      <ThemeButton />
    </div>
  );
}