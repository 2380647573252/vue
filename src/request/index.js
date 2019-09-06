import axios from "axios";
var instance=axios.create({
	baseURL:"http://127.0.0.1:8080",
	timeout:5000
})
export default function request(config){
	return instance(config)
}