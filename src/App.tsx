import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { getBackground } from './components/utils/AppUtils';

import { ContentWrapper } from './AppStyled';
import { AppStyled } from './AppStyled';
import { NavigationComponent } from './NavigationComponent';
import { GreetingComponent } from './components/greeting/GreetingComponent';
import { CounterComponent } from './components/counter/CounterComponent';
import { ToDoFormComponent } from './components/todo/ToDoFormComponent';
import { ColorPickerComponent } from './components/colorPicker/ColorPickerComponent';
import { ToggleComponent } from './components/toggle/ToggleComponent';
import { TemperatureConverterComponent } from './components/converter/TemperatureConverterComponent';
import { RegistrationFormComponent } from './components/registrationForm/RegistrationFormComponent';
import { CountdownTimerComponent } from './components/timer/CountdownTimerComponent';
import { RQGComponent } from './components/randomQuote/RQGComponent';
import { CharaclterLimit } from './components/characterLimi/characterLimit';

const App: React.FC = () => {
  const [hue, setHue] = useState(340);

  const firstPerson: string = '@username';

  const location = useLocation();



  useEffect(() => {
    const targetHue = getBackground(location);
    const interval = 500 / Math.abs(targetHue - hue);
    let currentHue = hue;

    const timer = setInterval(() => {
      if (currentHue < targetHue) {
        currentHue++;
      } else if (currentHue > targetHue) {
        currentHue--;
      } else {
        clearInterval(timer);
      }
      setHue(currentHue);
    }, interval);

    return () => clearInterval(timer);
  }, [location]);

  return (
    <AppStyled $background={hue}>
      <NavigationComponent />
      <ContentWrapper>
        <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path='*' Component={null}></Route>
          <Route path='/greetings' Component={() => <GreetingComponent name={firstPerson} />} />
          <Route path='/counter' Component={CounterComponent} />
          <Route path='/todo' Component={ToDoFormComponent} />
          <Route path='/color-picker' Component={ColorPickerComponent} />
          <Route path='/toggle' Component={ToggleComponent} />
          <Route path='/registration' Component={RegistrationFormComponent} />
          <Route path='/temp-converter' Component={TemperatureConverterComponent} />
          <Route path='/count-down' Component={CountdownTimerComponent} />
          <Route path='/quotes' Component={RQGComponent} />
          <Route path='/limited-input' Component={CharaclterLimit} />
        </Routes>
        </AnimatePresence>
      </ContentWrapper>
    </AppStyled>
  );
};



export default App;
