import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    loading: false,
    error: null,
    searchTerm: "",
    pastTerm: ""
  };

  /* searchTerm이 공백이 아닌 것을 체크 하고, 그 다음에 searchByTerm을 실행하게 함 */
  handleSubmit = event => {
    if (event) event.preventDefault(); //Submit시 새로고침 방지
    const { searchTerm } = this.state;
    if (searchTerm !== "") this.searchByTerm();
  };

  updateTerm = event => {
    const {
      target: { value }
    } = event;
    this.setState({ searchTerm: value });
  };

  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ pastTerm: this.state.searchTerm });
    this.setState({ loading: true }); //타아핑 후 검색 했을 경우, 로딩 => true
    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
    } catch {
      this.setState({
        error: "Can't find results."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const {
      movieResults,
      tvResults,
      loading,
      error,
      searchTerm,
      pastTerm
    } = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
        searchTerm={searchTerm}
        pastTerm={pastTerm}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
