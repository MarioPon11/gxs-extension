import { Button } from '@adobe/react-spectrum';

const Main = () => {
  return (
    <div className="w-full h-full flex flex-col gap-2 justify-center items-center">
      <h1 className='text-xl font-bold'>Welcome to Bolt CEP!</h1>
      <Button variant='accent' onPress={() => alert('Hello World')} UNSAFE_className='font-sans font-normal pb-1'>Hello From React</Button>
    </div>
  );
};
export default Main;