import axios from "axios";

const instance = axios.create({
	baseURL: "https://my-burger-project-255d3.firebaseio.com/"
});

export default instance;
