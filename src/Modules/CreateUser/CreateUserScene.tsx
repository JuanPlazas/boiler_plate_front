import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Component
import CreateUser from '.';
// Actions
import { set_spinner_data } from '../../Reducers/App/AppActions';
import { create_user } from '../../Reducers/CreateUser/CreateUserActions';



const mapStateToProps = (state: IRootState) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
  set_spinner_data,
  create_user
}, dispatch);


//#region TS Interfaces and Types
interface IOwnProps {
}

type TMapStateToProps = ReturnType<typeof mapStateToProps>;
type TMapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

export type CreateUserProps = IOwnProps & TMapStateToProps & TMapDispatchToProps;
//#endregion TS Interfaces and Types

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
