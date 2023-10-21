import LinkButton from './LinkButton';
const NavMenu = () => {
  return (
    <div className='flex flex-row items-stretch gap-4 border-b-2 border-b-purple-600 mb-5'>
      <LinkButton path='/' text='Home' />
      <LinkButton path='/contactInfo' text='Contact Information' />
      <LinkButton path='/jobHistory' text='Job history' />
    </div>
  );
}

export default NavMenu;
