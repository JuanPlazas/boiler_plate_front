import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Component
import Layout from '.';
// Actions
import { set_spinner_data } from '../../Reducers/App/AppActions'

const mapStateToProps = (state: IRootState) => {
  return {
    app: state.app,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
  set_spinner_data,
}, dispatch);


//#region TS Interfaces and Types
interface IOwnProps {
}

type TMapStateToProps = ReturnType<typeof mapStateToProps>;
type TMapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

export type LayoutProps = IOwnProps & TMapStateToProps & TMapDispatchToProps;
//#endregion TS Interfaces and Types

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
