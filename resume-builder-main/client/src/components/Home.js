import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData, setData } from "../redux/actionCreators";

import "./stylesheets/home.scss";

const Home = (props) => {
  const history = useHistory();

  //const [title, setTitle] = React.useState('');

  React.useEffect(() => {
    if (props.token) {
      props.fetchData(props.token, function () {
        //history.push("/builder")
      });
    }
  }, []); //eslint-disable-line

  // const handleChange = (event) => {
  //     setTitle(event.target.value);
  //     props.setData(event.target.value, function () {
  //         history.push("/builder")
  //     })
  // };

  const handleClick = () => {
    props.setData(-1, function () {
      history.push("/builder");
    });
  };

  const publicURL = process.env.PUBLIC_URL;

  return (
    <div className="page-wrapper">
      <div className="main container-fluid">
        <section className="top row d-flex">
          <div className="col-sm left">
            <div className=" heading-content align-middle">
              <span className="main-heading">Build your resume today</span>
              <br></br>
            </div>
            <br></br>
            <div>
              <button className="btn btn-primary btn-lg" onClick={handleClick}>
                BUILD MY RESUME
              </button>
            </div>
          </div>

          <div className="col-sm right ">
            <img src={publicURL + "/assets/resume.png"} alt=" resume" />
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.resume.token,
    data: state.resume.data,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchData: (props, callback) => {
    dispatch(fetchData(props, callback));
  },
  setData: (props, callback) => {
    dispatch(setData(props, callback));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
