import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Component
import Home from '.';

// Actions

const mapStateToProps = (state: IRootState) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatchType) => bindActionCreators({
}, dispatch);


//#region TS Interfaces and Types
interface IOwnProps {
}

type TMapStateToProps = ReturnType<typeof mapStateToProps>;
type TMapDispatchToProps = ReturnType<typeof mapDispatchToProps>;

export type HomeProps = IOwnProps & TMapStateToProps & TMapDispatchToProps;
//#endregion TS Interfaces and Types

export default connect(mapStateToProps, mapDispatchToProps)(Home);
