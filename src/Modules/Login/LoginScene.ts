import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component
import Login from '.';

// Actions
import {
  initLogin,
} from '../../Reducers/Login/LoginActions';

const mapStateToProps = (state: IRootState) => {
  return {
    login: state.login,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
  initLogin,
}, dispatch);


//#region TS Interfaces and Types
interface IOwnProps {
}

type TMapStateToProps = ReturnType<typeof mapStateToProps>;
type TMapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

export type LoginProps = IOwnProps & TMapStateToProps & TMapDispatchToProps;
//#endregion TS Interfaces and Types

export default connect(mapStateToProps, mapDispatchToProps)(Login);
