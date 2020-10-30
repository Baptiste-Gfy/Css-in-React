import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  width: 30vw;
  height: 30vh;
  border: solid #c4c4c4 5px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;

.en-tete {
  width: 100%;
  height: 70%;
  border: solid #c4c4c4 1px;
  display: flex;
}

.affiche {
  width: 30%;
  height: 100%;
  margin: 0 2rem 0 0;
}

.description {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}

.description > h1 {
  margin: 0;
}

.description > p {
  margin: 0;
}

.ratting{
  height: 30%;
  display: flex;
  flex-direction: raw;
  justify-content: space-around;
  align-items: center;
}
`

class Card extends React.Component {
  render() {
    return (
      <Section className="card">
        <header className="en-tete">
          <img className="affiche" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS2HcDpvtFUOzOINEWM70EpmKMUzms1v_IjRA&usqp=CAU" alt="Coco of Disney" />
          <div className="description">
            <h1>Coco</h1>
            <p>A Disney Film animation</p>
            <p>( 2017 )</p>
          </div>
        </header>
        <main className="ratting">
          <p>Rate this film</p>
            <div className="notation">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
          </main>
        </Section>
    )
  }
}

export default Card;