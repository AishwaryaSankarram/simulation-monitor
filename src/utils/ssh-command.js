import axios from 'axios';

export async function callCommandForExecution(sysCommand) {

  console.log("CALL COMMAND FOR EXECUTION CALLED");

  let payload = [{remotePath:"/tmp/", remoteIp:"192.168.1.5", remotePass:"P@ssc0de", remoteUser:"murali", command:sysCommand}];

  let response = await axios({
      method: 'post',
      url: "http://192.168.1.5:8090/granular/executeCommands",
      data: payload,
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      },
  });

  setTimeout(() => window.socket.emit("subscribe", "192.168.1.5"), 5000);

  return response;
}
