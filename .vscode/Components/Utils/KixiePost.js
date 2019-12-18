/** @format */

export default function KixiePost(data) {
  axios({
    method: "POST",
    url: "https://af12ae6b-d335-47fe-987e-99bb4c1e36ae.mock.pstmn.io",
    cache: false,
    data: {}
  }).then(console.log("yeet", data));
}
