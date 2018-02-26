import React, { Component } from 'react';
import './App.css';

import { Box, Caption, Home, Hook, Navigation, NavModal, Paragraph, Quote, Subtitle, Text, Value } from './elements';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: 'Home', to: '/index', component: Home },
        { name: 'About', to: '/about', component: Home, exact: true }
      ]
    }
  }

  render() {
    const { items } = this.state;

    return (
      <article id='app'>
        <Navigation type='top' items={items}/>
        <NavModal type='left' push={true}/>
        <Text></Text>
      </article>
    );
  }
}

export default App;


/*
<Box tag='section'>
  <Text type='h2' weight='bold'>Weights</Text>
  <Text weight='bold' content='Bold'/>
  <Text weight='300'  content='300'/>
  <Text weight='500'  content='500'/>
  <Text weight='700'  content='700'/>
  <Text weight='900'  content='900'/>
</Box>

<Box tag='section'>
  <Text type='h2' weight='bold'>Decorations</Text>
  <Text decor='overline'     content='Overline'/>
  <Text decor='underline'    content='Underline'/>
  <Text decor='line-through' content='Line-through'/>
</Box>

<Box tag='section'>
  <Text type='h2' weight='bold'>Headings</Text>
  <Text type='h1' content='Heading 1'/>
  <Text type='h2' content='Heading 2'/>
  <Text type='h3' content='Heading 3'/>
  <Text type='h4' content='Heading 4'/>
  <Text type='h5' content='Heading 5'/>
  <Text type='h6' content='Heading 6'/>
</Box>

<Box tag='section'>
  <Text type='h2' weight='bold'>Fonts</Text>
  <Text family='monospace'        content='monospace'></Text>
  <Text family='cursive'          content='cursive'></Text>
  <Text family='serif'            content='serif'></Text>
  <Text family='sans-serif'       content='sans-serif'></Text>
  <Text family='Times New Roman'  content='Times New Roman'></Text>
</Box>

<Box>
  <Caption>Caption</Caption>
  <Hook>Hook</Hook>
  <Value>Value</Value>
  <Subtitle content='Subtitle Text'/>
  <Quote content='Quote Text'/>
  <Paragraph n={100} content='Paragraph Text.\nLorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'/>
</Box>
*/
