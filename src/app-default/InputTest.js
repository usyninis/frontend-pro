import React from 'react';

export default React.createClass({
  render() {
    //console.log(Route);
    return (
      <div>
        InputTest<br/>
				{this.props.test}
      </div>
    );
  }
});
