import React from 'react';
import ErrorBoundary from 'react-native-error-boundary';
import {SheetProvider} from 'react-native-actions-sheet';

import Navigation from '@src/navigation';
import ErrorFallbackComponent from '@components/ErrorFallbackComponent';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import '@components/ActionSheets';

const App = () => {
  const errorHandler = (error: Error, stackTrace: string) => {
    console.log(error);
  };

  return (
    <SafeAreaProvider>
      <ErrorBoundary
        FallbackComponent={ErrorFallbackComponent}
        onError={errorHandler}>
        <SheetProvider>
          <Navigation />
        </SheetProvider>
      </ErrorBoundary>
    </SafeAreaProvider>
  );
};

export default App;
