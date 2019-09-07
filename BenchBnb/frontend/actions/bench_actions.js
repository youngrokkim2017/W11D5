import * as APIUtil from '../util/bench_api_util';

export const receiveBenches = benches => {
    type: RECEIVE_BENCHES,
    benches
}

export const fetchBenches = () => {
    APIUtil.fetchBenches()
    .then(receiveBenches => dispatch(receiveBenches(receiveBenches)))
}

//test
// window.dispatch = store.dispatch;
// window.getState = store.dispatch;
// window.fetchBenches = fetchBenches;