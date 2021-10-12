import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View } from "react-native"
import gs from '../styles/global'
import { DefaultText } from '../components/components'
import ProjectSelection from "../components/projectSelection"

export default function Home({ navigation }) {

  const [projectSelectionOpen, setProjectSelectionOpen] = useState(false)


  const startProject = (projectIndex) => {
    console.log(projectIndex)
  }


  return (
    <View style={gs.container}>
      <Button title="Go" onPress={() => setProjectSelectionOpen(true)} />
      {
        projectSelectionOpen && <ProjectSelection {...{navigation, setProjectSelectionOpen, startProject}} />
      }
    </View>
  );
}
