import Search from './search'
import { selectAllBenches } from '../../reducers/selectors';
import { fetchBenches } from '../../actions/bench_actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    benches: selectAllBenches(state)
})

const mapDispatchToProps = (dispatch) => ({
    fetchBenches: () => dispatch(fetchBenches())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
