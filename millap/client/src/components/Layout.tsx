import React, { useContext, useMemo } from 'react';
import slugify from 'slugify';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './pages/Start';
import About from './pages/About';
import ImageGrid from './presentational/ImageGrid';
/// <reference path="../utils/global.d.ts" />
/// <reference path="../utils/declarations.d.ts" />
import { ProjectsContext } from '../contexts/projectsContext';
import { ProjectDataType } from '../utils/global';
import Project from './presentational/Project';
import Navigation from './presentational/Navigation';
import Overview from './pages/portfolio/Overview';
import ErrorBoundary from '../utils/ErrorBoundary';
import Container from './presentational/Container';
import Glitch from './effects/Glitch';

const Layout = (): React.ReactElement => {
  // const { projects } = useContext(ProjectsContext);

  const data: ProjectDataType[] = useMemo(
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
        id: '4a56bbe4-8f01-44e8-b2a5-ba47216e4c4e',
        description: null,
        title: 'Hjärtat i halsgropen',
        images: [
          {
            caption: null,
            source: [
              {
                XS: null,
                S: null,
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_1_1_m.jpg?alt=media&token=968c33cd-42f5-485f-97b1-2922205ad885',
                L: null,
                XL: null,
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS: null,
                S: null,
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_1_2_m.jpg?alt=media&token=3e853474-e5f8-4759-b113-315484014f91',
                L: null,
                XL: null,
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_xs.jpg?alt=media&token=d115e1f6-6e28-4b9c-a21e-dfb2a04e827a',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_s.jpg?alt=media&token=7721bc04-44f9-4061-b8e9-0485221a31a3',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_m.jpg?alt=media&token=4909a53a-c0b1-4187-9c41-fb67833a48e5',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_l.jpg?alt=media&token=f4944073-48e0-4aa2-aab9-d40db7f0c504',
                XL: null,
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_xs.jpg?alt=media&token=5abf325a-6813-4c1e-8426-da34963fbd08',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_s.jpg?alt=media&token=c875d67f-3ef1-425c-82f3-964e51004f4e',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_m.jpg?alt=media&token=d19d71de-d483-4229-954e-9a67491ba154',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_l.jpg?alt=media&token=efa12395-14d0-4d32-b001-ff2ec843675b',
                XL: null,
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
        id: '91f558bb-643a-4b06-9a0b-19a442b8bc98',
        description: null,
        title: 'Syster',
        images: [
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_xs.jpg?alt=media&token=b9ca4801-5281-4d05-9c95-48b15d390a5a',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_s.jpg?alt=media&token=f2966d89-a39c-4a90-9d9a-ba9ed372edc3',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_m.jpg?alt=media&token=ac4534e2-774b-4414-a887-e342befa1716',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_l.jpg?alt=media&token=8d5c68e2-2db0-4e67-8eaa-ba144a9895cc',
                XL: null,
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_xs.jpg?alt=media&token=6cb9203b-10ed-487f-a3d8-49b45c6563a0',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_s.jpg?alt=media&token=c0b4cc62-9c41-4b79-bdc7-6e3daefa8cd3',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_m.jpg?alt=media&token=b2932260-356e-4a30-a730-72cdf7b3c867',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_l.jpg?alt=media&token=fdb41aa5-7aa9-40fe-b39c-b2ae7561a7c9',
                XL: null,
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_xs.jpg?alt=media&token=f3025bda-70b7-4008-8ce1-99d34f8670b1',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_s.jpg?alt=media&token=c1454b07-466a-4e04-9aff-fbc7845d4cf3',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_m.jpg?alt=media&token=f9e2a198-0b9d-4230-9ff0-5184ec6a4812',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_l.jpg?alt=media&token=81d1af6b-906f-4a60-8ceb-5847608b3add',
                XL: null,
              },
            ],
          },
          {
            caption: null,
            source: [
              {
                XS:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_xs.jpg?alt=media&token=b46105fd-c9b3-4843-92f3-384ac54af642',
                S:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_s.jpg?alt=media&token=cf9b77b8-dd2b-4c57-ab01-c4e5d336b5d1',
                M:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_m.jpg?alt=media&token=3c4053e3-d314-40e5-8a98-024b874dd234',
                L:
                  'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_l.jpg?alt=media&token=7b4123cc-642f-4c62-87da-8753451effde',
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
    <ErrorBoundary>
      <Router>
        <Navigation projects={data} />
        <Container style={{ width: '100%', height: '100%' }}>
          <Switch>
            <Route exact path='/' render={() => <Start projects={data} />} />
            <Route path='/about' render={() => <About />} />
            <Route
              path='/all'
              render={() => (
                <Overview data={data}>
                  {data.map((p, i) => (
                    <ImageGrid key={p.title} {...data[i]} />
                  ))}
                </Overview>
              )}
            />
            {data.map((p: ProjectDataType, i: number) => (
              <Route
                key={document.location.href}
                path={`/${slugify(p?.title, { lower: true })}`}
                render={() => <Project content={data[i]} />}
              />
            ))}
          </Switch>
        </Container>
      </Router>
    </ErrorBoundary>
  );
};

export default Layout;
