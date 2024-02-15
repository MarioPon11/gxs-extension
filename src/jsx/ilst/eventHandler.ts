function sendCEPMessage(msgData: string | string, evName: string) {
    const xLib = new ExternalObject("lib:\PlugPlugExternalObject");
    if (xLib) {
        const eventObj = new CSXSEvent();
        eventObj.type = evName;
        eventObj.data = msgData;
        eventObj.dispatch();
        return true;
    }
    throw new Error("Something went wrong sending data from the scrip to the extension.");
}

sendCEPMessage("Hello from script", "com.gxs.logger.log_json");