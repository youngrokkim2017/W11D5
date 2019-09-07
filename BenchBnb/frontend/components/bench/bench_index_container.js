import { connect } from 'react-redux';
import BenchIndex from "./bench_index";
import { fetchBenches } from '../../util/bench_api_util';
import { selectAllBenches } from '../../reducers/selectors';

const mapStateToProps = state => {
    //???
    benches: selectAllBenches(state)
}

const mapDispatchToProps = fetchBenches => {
    fetchBenches: () => dispatch(fetchBenches())
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BenchIndex);
