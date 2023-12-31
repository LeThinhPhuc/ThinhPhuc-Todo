import axios from "axios";
// import http from "http";
const baseUrl = process.env.REACT_APP_BASE_URL;
const taskService = {
    getAll: (task) => axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Headers": "*",
          Accept: "application/x-www-form-urlencoded, text/plain",
        },
      }).get(`/v1/task/${task.email}/${task.page}`),
      

    getById: (id, task)=> axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            Accept: "application/x-www-form-urlencoded, text/plain",
            "Cache-Control": "no-cache", // Thêm tiêu đề Cache-Control: no-cache
            Pragma: "no-cache" // Thêm tiêu đề Pragma: no-cache
        }
    }).get(`/v1/task/${id}/${task.email}`),

    postTask: (task)=> axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            Accept: "application/x-www-form-urlencoded, text/plain",
        }
    }).post(`/v1/task/${task.page}`, task),

    UpdateById: (id,user) => axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            Accept: "application/x-www-form-urlencoded, text/plain",
            "Cache-Control": "no-cache", // Thêm tiêu đề Cache-Control: no-cache
            Pragma: "no-cache" // Thêm tiêu đề Pragma: no-cache
        }
    }).put(`/v1/task/${id}/${user.page}`,user),

    DeleteById: (id, user) => axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "*",
            Accept: "application/x-www-form-urlencoded, text/plain",
        }
    }).delete(`/v1/task/${id}/${user.email}/${user.page}`),

}

export default taskService;