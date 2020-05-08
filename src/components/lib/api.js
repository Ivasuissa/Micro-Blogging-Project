import axios from "axios";

const baseUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet";

export function postMessage(MessageObject) {
  // return axios.post(`${baseUrl}`, { tweet: MessageObject });
  axios({
    method: "post",
    url: baseUrl,
    data: { tweet: MessageObject }
  })
    .then(response => {
      console.log("success");
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

export function getMessage() {
  return axios.get(`${baseUrl}`);
}
