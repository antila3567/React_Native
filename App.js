import React, { Component } from 'react';
import { Header, ImageCard, Layout } from './src/components/ui';
import { View, ScrollView, StyleSheet } from 'react-native';


const url = 'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json'

export default class App extends Component {
  state = {
    title: 'Popular films',
    data: []
  }


  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (e) {
      throw e
    }
  }

  render() {
    const { title, data } = this.state
    return (
      <ScrollView>
        <View>
          <Header title={title} />
          <Layout>
            {
              data.map(item => (
                <ImageCard data={item} key={item.id} />
              ))
            }
          </Layout>
        </View>
      </ScrollView>
    );
  }
}


// https://s3.eu-central-1.wasabisys.com/ghashtag/RNForKids/00-Init/data.json 
