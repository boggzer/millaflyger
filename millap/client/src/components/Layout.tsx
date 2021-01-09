import React, { useContext, useMemo } from 'react';
import slugify from 'slugify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './pages/Start';
import About from './pages/About';
import Grid from './presentational/Grid';
import Container from './presentational/Container';
import { ProjectsContext } from '../contexts/projectsContext';
import { ProjectDataType } from '../utils/types';
import Project from './presentational/Project';
import Navigation from './presentational/Navigation';

const Layout = (): React.ReactElement => {
  // const { projects } = useContext(ProjectsContext);

  const data = useMemo(
    () => [
      {
        id: 'd00b258e-493e-4904-aace-c81485d08af8',
        description: null,
        title: 'Ett främmande motiv',
        images: [
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_xs.jpg?alt=media&token=10306413-1a82-4cff-bf7c-9b96128dc31b',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_s.jpg?alt=media&token=51c0312a-46c0-4dbd-8fda-87ab7f5af15d',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_m.jpg?alt=media&token=595db5b5-bf14-40ce-b10a-94793e1be371',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_l.jpg?alt=media&token=df59bed2-0fdd-4685-8d0d-be9a166af6b2',
                XL:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_xl.jpg?alt=media&token=6e9af9d4-203f-43a1-9e31-e29eacc585c4',
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_xs.jpg?alt=media&token=20fb3dac-bbac-4534-9ec9-7e90e8e0077d',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_s.jpg?alt=media&token=9343bb6e-5d37-44b3-89f0-9c12dba65e98',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_m.jpg?alt=media&token=3355d3bd-c99b-42aa-9af8-46fcecf3be7c',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_l.jpg?alt=media&token=990ec6fc-b101-48f0-928f-dfd387e45a310',
                XL:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_xl.jpg?alt=media&token=f54e862e-ad05-47fa-8347-1a5a94acc32f',
              },
            ],
          },
        ],
      },
      {
        id: '8a559782-0315-47a6-800e-6f9069f8c670',
        description: null,
        title: 'Kognition',
        images: [
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_xs.jpg?alt=media&token=7249f74f-3735-4b47-9ebc-344ea20d8d9e',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_s.jpg?alt=media&token=25a0325c-34cf-4e8a-a720-12207c6b8e0f',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_m.jpg?alt=media&token=5f75e903-7713-4821-844c-a5f1ddf98cb5',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_l.jpg?alt=media&token=7a017a85-7c25-4e5a-9092-e58e1f23ea2d',
                XL: null,
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_xs.jpg?alt=media&token=e4e16885-9c10-4045-b756-aa074b5b3a99',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_s.jpg?alt=media&token=e41f9218-9312-464c-995b-863ef535c4f7',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_m.jpg?alt=media&token=9031712b-52e4-464b-bf33-b953d50b2b10',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_l.jpg?alt=media&token=1bbc1097-0ce6-4229-8589-99efbe5b8181',
                XL: null,
              },
            ],
          },
        ],
      },
      {
        id: 'f313c57f-a2f9-479d-aebf-6311f1154e81',
        description: null,
        title: 'Aska',
        images: [
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_xs.jpg?alt=media&token=7230c624-3332-4101-b21e-02fb7e9836d5',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_s.jpg?alt=media&token=1c25ace1-5f2d-4e65-a1b2-0a35d7f054b3',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_m.jpg?alt=media&token=bfe6b687-3b0e-4923-b9de-bbc3a62bc257',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_l.jpg?alt=media&token=76a2fadc-142c-4c3e-9ac0-7068cb07011a',
                XL:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_xl.jpg?alt=media&token=1b0104c5-48b3-413e-ac7b-da787d3e991f',
              },
            ],
          },
        ],
      },
    ],
    [],
  );

  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Start />} />
        <Route path='/about' render={() => <About />} />
        <Route
          path='/all'
          render={() => (
            <>
              <Navigation />
              {data.map((p, i) => (
                <Grid key={p.title} {...data[i]} />
              ))}
            </>
          )}
        />
        {data.map((p: ProjectDataType, i: number) => (
          <Route
            key={`route-${slugify(p?.title)}`}
            path={`/${slugify(p?.title, { lower: true })}`}
            render={() => (
              <>
                <Navigation />
                <Project content={data[i]} />
              </>
            )}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Layout;
