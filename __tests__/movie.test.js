import React from "react"
import { render, screen } from "@testing-library/react"
import Movie from "../src/components/movie"

describe("Movie", () => {
  it("renders movie component", () => {
    const movie = {
      Title: "Inception",
      Year: "2010",
      Poster: "https://example.com/poster.jpg"
    }
    render(<Movie movie={movie} />)
    expect(screen.getByText("Inception")).toBeInTheDocument()
    expect(screen.getByText("2010")).toBeInTheDocument()
    expect(screen.getByAltText("Inception")).toBeInTheDocument()
  });
});
