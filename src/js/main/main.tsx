import React from 'react';
import CSInterface from '../lib/cep/csinterface';
import { CSEvent } from '../lib/cep/csinterface';


const Main = () => {
  const [event, setEvent] = React.useState<string>('');

  const csInterface = new CSInterface();

  function setFlyoutMenu() {
    const menuString = `<Menu>
		<MenuItem Id="menuItemId1" Label="Settings" Enabled="true"/>
		<MenuItem Id="menuItemId2" Label="Help" Enabled="true"/>
	</Menu>`;
    csInterface.setPanelFlyoutMenu(menuString);
    csInterface.addEventListener(("com.gxs.logger.events.flyoutMenuClicked"), function (event: CSEvent) {

      const data = JSON.parse(event.data);
      console.log(data);
      if (data.menuId === "menuItemId1") {
        console.log("Settings clicked");
      } else if (data.menuId === "menuItemId2") {
        console.log("Help clicked");
      }

    });
  }

  React.useEffect(() => {
    setFlyoutMenu()

    const handleEvent = (event: CSEvent) => {
      console.log(event);
      setEvent(event.data);
    };

    csInterface.addEventListener('com.gxs.logger.log_json', handleEvent);

    return () => csInterface.removeEventListener('com.gxs.logger.log_json', handleEvent, null);
  }, []);

  // TODO: Flyout menu 
  // TODO: Add a button to reload the extension in the flyout menu

  return (
    <div className="w-full h-full flex flex-col gap-2 justify-start items-start p-2">
      {
        event && <h1 className='text-sm font-mono'>{event}</h1>
      }
    </div>
  );
};
export default Main;