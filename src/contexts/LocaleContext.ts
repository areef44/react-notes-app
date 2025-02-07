import React from "react";

interface LocaleContextType {
  localeContext: string;
  toggleLocale: () => void;
}

const LocaleContext = React.createContext<LocaleContextType>(null!);

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

export default LocaleContext;