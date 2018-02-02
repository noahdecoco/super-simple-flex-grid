import React, { PureComponent } from 'react';
import { Container, Row, Column } from './FlexGrid';

class App extends PureComponent {
  render() {
    return (
      <div>
        <Container>
          {/* Header */}
          <Row>
            <Column>
              <h3>
                Super Simple FlexGrid by{' '}
                <a href="https://twitter.com/noahdecoco">@noahdecoco</a>
              </h3>
              <p>
                A simple flex-grid system built using StyledComponents for React
              </p>
            </Column>
          </Row>

          {/* Auto sizing columns */}
          <Container>
            <Row>
              <Column>
                <div className={'content'}>
                  <h3>
                    All columns take up equal space unless explicitly set.
                  </h3>
                </div>
              </Column>
            </Row>
            <Row>
              <Column>
                <div className={'content'}>
                  <h1>Hahaha</h1>
                </div>
              </Column>
              <Column>
                <div className={'content'}>
                  <h1>Hehehe</h1>
                </div>
              </Column>
            </Row>

            <Row>
              <Column>
                <div className={'content'}>
                  <h1>Hihihi</h1>
                </div>
              </Column>
              <Column>
                <div className={'content'}>
                  <h1>Hohoho</h1>
                </div>
              </Column>
              <Column>
                <div className={'content'}>
                  <h1>Huhuhu</h1>
                </div>
              </Column>
            </Row>
          </Container>

          <Row>
            <Column>
              <p>
                Columns take up full height of the row by default. You can align
                them by passing flexAlign prop.
              </p>
            </Column>
          </Row>

          <Container>
            <Row className={'row'}>
              <Column className={'column'}>
                <div className={'content'}>Lorem ipsum</div>
              </Column>
              <Column className={'column'}>
                <div className={'content'}>
                  Lorem ipsum <br /> dolor sit amet
                </div>
              </Column>
              <Column className={'column'}>
                <div className={'content'}>
                  Lorem ipsum <br /> dolor sit amet, <br /> consectetur
                  adipiscing elit.
                </div>
              </Column>
              <Column className={'column'} flexAlign={'center'}>
                <div className={'content'}>flexAlign: center</div>
              </Column>
              <Column className={'column'} flexAlign={'flex-end'}>
                <div className={'content'}>flexAlign: end</div>
              </Column>
              <Column className={'column'} flexAlign={'stretch'}>
                <div className={'content'}>flexAlign: stretch</div>
              </Column>
            </Row>
          </Container>

          <Row>
            <Column>
              <p>
                If you explicitly set the column width, the system is based on a
                12 column grid. It will wrap the other columns accordingly. To
                set the width of a column, pass it a flex prop.
              </p>
            </Column>
          </Row>

          <Container className={'me'}>
            <Row className={'row'}>
              <Column className={'column'} flex={6}>
                <div className={'content'}>flex: 6</div>
              </Column>
              <Column className={'column'} flex={4}>
                <div className={'content'}>flex: 4</div>
              </Column>
              <Column className={'column'} flex={2}>
                <div className={'content'}>flex: 2</div>
              </Column>
              <Column className={'column'}>
                <div className={'content'}>no flex set</div>
              </Column>
              <Column className={'column'}>
                <div className={'content'}>so these colums</div>
              </Column>
              <Column className={'column'}>
                <div className={'content'}>auto fill the rest</div>
              </Column>
            </Row>
          </Container>

          <Row>
            <Column>
              <p>
                You can also push them around, the rest will follow. This isn't
                advised though as there can be weird consequences.
              </p>
            </Column>
          </Row>

          <Container>
            <Row className={'row'}>
              <Column className={'column'} flex={2}>
                <div className={'content'}>flex: 2</div>
              </Column>
              <Column className={'column'} flex={5} push={3}>
                <div className={'content'}>flex: 5, push: 3</div>
              </Column>
              <Column className={'column'} flex={8}>
                <div className={'content'}>flex: 8</div>
              </Column>
            </Row>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;
