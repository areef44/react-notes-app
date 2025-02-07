import React from "react";
import NoteApp from "./components/NoteApp";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";

interface AppState {
  theme: string;
  localeContext: string;
  toggleTheme: () => void;
  toggleLocale: () => void;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: 'light',
      localeContext: localStorage.getItem("locale") ?? "id",
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      },
      toggleLocale: () => {
        this.setState((prevState) => {
          const newLocale = prevState.localeContext === 'id' ? 'en' : 'id';
          localStorage.setItem('locale',newLocale);
          return{
            localeContext: newLocale
          }
        })
      }
    };
  }

  componentDidMount(): void {
    const savedTheme = localStorage.getItem('theme') ?? 'light';
    this.setState({ theme: savedTheme }, () => {
      document.documentElement.setAttribute('data-theme', savedTheme);
    });
  }

  componentDidUpdate(_prevProps: {}, prevState: AppState): void {
    if (prevState.theme !== this.state.theme) {
      document.documentElement.setAttribute('data-theme', this.state.theme);
    }
  }

  render() {
    return (
      <LocaleProvider value={this.state}>
        <ThemeProvider value={this.state}>
          <div>
            <NoteApp />
          </div>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default App;