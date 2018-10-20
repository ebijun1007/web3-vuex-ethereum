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
      var achievements = {
        activeminutes: {
          id: "activeminutes",
          index: "0",
          value: 10,
          goal: res.data.goals.activeMinutes,
          summary: res.data.summary.fairlyActiveMinutes,
          isAchieved: isAchieved(res.data.goals.activeMinutes, res.data.summary.fairlyActiveMinutes),
          isPushed: false
        },
        caloriesOut: {
          id: "caloriesOut",
          index: "1",
          value: 10,
          goal: res.data.goals.caloriesOut,
          summary: res.data.summary.caloriesOut,
          isAchieved: isAchieved(res.data.goals.caloriesOut, res.data.summary.caloriesOut),
          isPushed: false
        },
        distance: {
          id: "distance",
          index: "2",
          value: 10,
          goal: res.data.goals.distance,
          summary: res.data.summary.distances[0].distance,
          isAchieved: isAchieved(res.data.goals.distance, res.data.summary.distances[0].distance),
          isPushed: false
        },
        floors: {
          id: "floors",
          index: "3",
          value: 20,
          goal: res.data.goals.floors,
          summary: res.data.summary.floors,
          isAchieved: isAchieved(res.data.goals.floors, res.data.summary.floors),
          isPushed: false
        },
        steps: {
          id: "steps",
          index: "4",
          value: 10,
          goal: res.data.goals.steps,
          summary: res.data.summary.steps,
          isAchieved: isAchieved(res.data.goals.steps, res.data.summary.steps),
          isPushed: false
        }
      }
      resolve(achievements)
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

function isAchieved(goal, summary) {
  if (summary >= goal)
    return true
  else
    return false
}
