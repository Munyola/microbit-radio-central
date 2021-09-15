radio.onReceivedString(function (receivedString) {
    let str = receivedString;
    serial.writeLine(str);
    basic.showString(str);
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let str = serial.readString();
	radio.sendString(str);
    basic.showString(str);
})
serial.redirectToUSB()
radio.setGroup(1)