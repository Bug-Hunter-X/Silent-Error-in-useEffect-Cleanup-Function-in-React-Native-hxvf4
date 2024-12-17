import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';

const MyComponent = () => {
  const [mounted, setMounted] = useState(true);
  useEffect(() => {
    let isMounted = true;
    setMounted(true);
    const cleanup = () => {
      if (isMounted) {
        // Perform cleanup actions
      }      
    };
    return () => {
      isMounted = false;
      cleanup();
    };
  }, []);
  return (
    <View>
      <Text>Component is mounted: {mounted ? 'true' : 'false'}</Text>
    </View>
  );
};
export default MyComponent;