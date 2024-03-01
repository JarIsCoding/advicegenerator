import Advice from "../Interfaces/interface";

const AdviceApi = async () => {
    const promise = await fetch('https://api.adviceslip.com/advice');
    const data: Advice = await promise.json();
    return data;
}

export default AdviceApi;