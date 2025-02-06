import React from "react";
import NoteApp from "./components/NoteApp";
import { ThemeProvider } from "./contexts/ThemeContext";

interface AppState {
  theme: string;
  toggleTheme: () => void;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState((prevState) => {
          const newTheme = prevState.theme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
          return {
            theme: newTheme
          };
        });
      }
    };
  }

  componentDidMount(): void {
    const savedTheme = localStorage.getItem('theme') || 'light';
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
      <ThemeProvider value={this.state}>
        <div>
          <NoteApp />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;