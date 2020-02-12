import React, { createContext, Component } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {language: "french"}
  }

  setLanguage = (e) => {
    this.setState({ language: e.target.value})
  }

  render() {
    return (
      <LanguageContext.Provider value={{...this.state, setLanguage: this.setLanguage}}>
        {this.props.children}
      </LanguageContext.Provider>
    )
  }
}

export const withLanguageContext = Component => props => (
  <LanguageContext.Consumer>
    {value => <Component LanguageContext={value} {...props} />}
  </LanguageContext.Consumer>
)