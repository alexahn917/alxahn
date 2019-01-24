import React from 'react';
import { Button, Card } from 'antd';

const Name = () => {
  return (
    <h2 style={{color: '#0050b3'}}>
      Alex SangHyeon Ahn
    </h2>
  )
}

const Profession = () => {
  return (
    <h3>
      Software Engineer
    </h3>
  )
}

const Email = () => {
  return (
    <h4>
      <b>Email</b>: alexahn917@gmail.com
    </h4>
  )
}

const Mobile = () => {
  return (
    <h4>
      <b>Mobile</b>: +1 650 709 7191
    </h4>
  )
}

const Footer = () => {
  return (
    <div style={{ marginTop: 24, textAlign: 'right'}}>
      <Button type="circle" icon="facebook" href={"https://facebook.com/alxahn"}/>
      <Button type="circle" icon="instagram" href={"https://instagram.com/alxahn"}/>
    </div>
  )
}

class MainCard extends React.Component {
  render() {
      return (
        <Card style={{ width: 600, height: 250, marginTop: 16, fontFamily: 'Dosis' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div style={{ margin: 24, textAlign: 'left'}}>
            <Name/>
            <Profession/>
            <Email/>
            <Mobile/>
          </div>
          <div>
            <Footer/>
          </div>
        </div>
        </Card>
    )
  }
}

export default MainCard;
