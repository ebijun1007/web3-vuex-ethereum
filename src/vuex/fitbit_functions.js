import axios from "axios"
const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMkQ5NDgiLCJzdWIiOiI2WDU1OTgiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc29jIHJzZXQgcmFjdCBybG9jIHJ3ZWkgcmhyIHJwcm8gcm51dCByc2xlIiwiZXhwIjoxNTcxNDU0NDM5LCJpYXQiOjE1Mzk5MTg0Mzl9.Stco_c0WtmLW1dyDG7C5Bukrz5Mbl--ts2tweRSoPPk"

export function getInfo() {
  return new Promise((resolve, reject) => {
    axios.request({
      baseURL: 'https://api.fitbit.com/1',
      url: '/user/-/activities/date/' + getNowYMD() + '.json',
      method: 'get',
      headers: {
        'Authorization': `Bearer ${ACCESS_TOKEN}`
      }
    }).then((res) => {
      console.log(res)
      resolve(res)
    });
  })
}

export function getNowYMD() {
  var dt = new Date();
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  var result = y + "-" + m + "-" + d;
  return result;
}
