import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import PageWrapper from '../pageWrapper/container';

class EmptyPage extends React.Component<any, any> {
  render() {
    const props = this.props;
    return (
      <PageWrapper>
        <Link to='/'>base</Link>
      </PageWrapper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return ('')
}

const mapDispatchToProps = (dispatch) => {
  return ('')
}
export default connect(mapStateToProps, mapDispatchToProps)(EmptyPage)