import { connect } from 'react-redux';
import Interface from '../interface';
const mapStateToProps=(state)=>{
    return{
        isFetching:state.isFetching,
        items:state.items
    }
}
let VisibleInterface=connect(mapStateToProps)(Interface)
export default VisibleInterface;