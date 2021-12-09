import { connect } from 'react-redux'; 
import Answering from './answering';

const mapSTP = state => ({
    questions: state.questions.all
})

const mapDTP = dispatch => ({
    //need a function to exit from answering page --
    //users can exit by pressing on background and the close x on the top right 
    //hits we can just make the answering pages a modal? -- and close modal 
    //modal types can correspond to different kinds of modals popping up 
    //exit: () => dispatch(exit()) 

})

export default connect(mapSTP, mapDTP)(Answering); 