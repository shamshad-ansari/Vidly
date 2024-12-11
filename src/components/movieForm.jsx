import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "./common/form";
import Joi from "joi-browser";
// import { getMovie, saveMovie } from "../services/fakeMovieService";
// import { getGenres } from "../services/fakeGenreService";

//useParams() is a react-router-dom hook that is used to get params
//useNavigate() hook is used to navigate to different page. {history is not available in router-v6}
class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    //adding error state for validation purposes
    genres: [],
    errors: {},
  };

  //JOI Stuff
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .required()
      .min(0)
      .max(10)
      .label("Daily Rental Rate"),
  };

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form className="w-50" onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("rate", "Rate")}
        </form>
        <button
          className="btn btn-primary"
          onClick={() => useNavigate("/movies")}
        >
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
// const MovieForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>Movie Form {id}</h1>
//       <button className="btn btn-primary" onClick={() => navigate("/movies")}>
//         Save
//       </button>
//     </div>
//   );
// };

// export default MovieForm;
