import axios from "axios";

const baseUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";

export function postMessage(MessageObject) {
  return axios.post(`${baseUrl}`, { tweet: MessageObject });
  
}

export function getMessage() {
  return axios.get(`${baseUrl}`);
}
