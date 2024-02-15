import React from 'react';
import CSInterface from '../lib/cep/csinterface';
import { CSEvent } from '../lib/cep/csinterface';


const Main = () => {
  const [event, setEvent] = React.useState<string>('');

  const csInterface = new CSInterface();

  React.useEffect(() => {
    const handleEvent = (event: CSEvent) => {
      console.log(event);
      setEvent(event.data);
    };

    csInterface.addEventListener('com.gxs.logger.log_json', handleEvent);

    return () => csInterface.removeEventListener('com.gxs.logger.log_json', handleEvent, null);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-2 justify-start items-start p-2">
      {
        event && <h1 className='text-sm font-mono'>{event}</h1>
      }
    </div>
  );
};
export default Main;