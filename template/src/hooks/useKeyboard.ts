import {useEffect, useState} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState<any>(0);
  const [keyboardShow, setKeyboardShow] = useState<any>(false);

  function onKeyboardDidShow(e: KeyboardEvent) {
    setKeyboardHeight(e.endCoordinates.height);
    setKeyboardShow(true);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
    setKeyboardShow(false);
  }

  useEffect(() => {
    //get keyboard height
    const showSubscription = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardDidShow,
    );
    const hideSubscription = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardDidHide,
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  return [keyboardHeight, keyboardShow];
};

export {useKeyboard};
