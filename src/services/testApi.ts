import { GatewayService, } from '@/api/gatewayService'

interface TestApiMethod {
    postLogin: Function
    getSendMsg: Function
    getTopFiveCompny: Function
}

// @ts-ignore
const TestApi: TestApiMethod = new GatewayService('channelLogic');

export default TestApi;