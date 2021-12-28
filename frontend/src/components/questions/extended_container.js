import { connect } from 'react-redux';
import Extended from './extended';
import { fetchQuestion } from '../../actions/question_actions';


const mapSTP = ({questions}) => ({

});

const mapDTP = dispatch => ({
    fetchQuestion: id => dispatch(fetchQuestion(id)) //proved to be unnecessary since passing question via prop threading item-->extended
});

export default connect(mapSTP, mapDTP)(Extended);

