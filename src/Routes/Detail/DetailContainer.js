import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "api";
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const numberId = Number(id);
    if (isNaN(numberId)) {
      //id가 숫자가 아니면, 홈으로 이동
      return push("/");
    }
    let result = null;
    try {
      if (isMovie) {
        // const request = await moviesApi.movieDetail(numberId);
        // result = request.data;
        ({ data: result } = await moviesApi.movieDetail(numberId));
      } else {
        ({ data: result } = await tvApi.showDetail(numberId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }
  render() {
    const { result, error, loading } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}
