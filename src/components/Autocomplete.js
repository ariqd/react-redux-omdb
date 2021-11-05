import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { connect } from "react-redux"
import { fetchMoviesSuggestions } from "../redux/actions/searchActions"

const AutoComplete = ({
  suggestions,
  fetchMoviesSuggestions,
  searchMovie,
  ...props
}) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [input, setInput] = useState("")
  const [keyPressed, setKeyPressed] = useState(false)

  React.useEffect(() => {
    searchMovie(input)
    fetchMoviesSuggestions(input)
  }, [input])

  const onChange = (e) => {
    // const userInput = e.target.value

    // Filter our suggestions that don't contain the user's input
    // const unLinked = suggestions.filter(
    //   (suggestion) =>
    //     suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    // )

    setInput(e.target.value)
    setFilteredSuggestions(suggestions)
    setActiveSuggestionIndex(0)
    setShowSuggestions(true)

    searchMovie(e.target.value)
  }

  const onClick = (e) => {
    setFilteredSuggestions([])
    setInput(e.target.innerText)
    setActiveSuggestionIndex(0)
    setShowSuggestions(false)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActiveSuggestionIndex(0)
      setShowSuggestions(false)
      if (keyPressed) {
        setInput(filteredSuggestions[activeSuggestionIndex - 1])
      }
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return
      }
      setKeyPressed(true)
      setActiveSuggestionIndex(activeSuggestionIndex - 1)
    } else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return
      }
      setKeyPressed(true)
      setActiveSuggestionIndex(activeSuggestionIndex + 1)
    } else {
      setKeyPressed(false)
    }
  }

  const SuggestionsList = () => {
    return suggestions.length ? (
      <ul className="suggestions">
        {suggestions.map((suggestion, index) => {
          let className
          if (index + 1 === activeSuggestionIndex) {
            className = "suggestion-active"
          }
          return (
            <li className={className} key={suggestion} onClick={onClick}>
              {suggestion}
            </li>
          )
        })}
      </ul>
    ) : (
      <span className="no-suggestions">
        <em>No Movie or Series suggestions...</em>
      </span>
    )
  }

  return (
    <>
      <Form.Control
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        {...props}
      />
      {showSuggestions && input.length > 3 && <SuggestionsList />}
    </>
  )
}
export default connect(null, { fetchMoviesSuggestions })(AutoComplete)
