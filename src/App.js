import React from 'react';

class App extends React.Component {
  state = {
    isLoading : true,
    movies: [],
  };
  componentDidMount() {
    // 영화 데이터 로딩!
    setTimeout(() => {
        this.setState({ isLoading: false });
    }, 5000);
  }  
  render() {
    const { isLoading } = this.state;
    // We are ready 부분에 영화 데이터를 출력
    return <div> {isLoading ? 'Loading...' : 'We are ready'} </div>;
  }    
}

export default App;