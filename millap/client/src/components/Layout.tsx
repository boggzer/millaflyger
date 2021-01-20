import React, { lazy, Suspense, useContext } from 'react';
import slugify from 'slugify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from './pages/Start';
import About from './pages/About';
import { ProjectsContext } from '../contexts/projectsContext';
import { ProjectDataType } from '../utils/global';
const Project = lazy(() => import('./presentational/Project'));
import Navigation from './presentational/Navigation';
const Overview = lazy(() => import('./pages/portfolio/Overview'));
import ErrorBoundary from '../utils/ErrorBoundary';
import Container from './presentational/Container';
import Spinner from './presentational/Spinner';
import { CSSTransition } from 'react-transition-group';
import { CSSProperties } from 'react';

const Layout = (): React.ReactElement => {
  //const { projects } = useContext(ProjectsContext);

  const data: ProjectDataType[] = [
    {
      id: 'd00b258e-493e-4904-aace-c81485d08af8',
      description: null,
      title: 'Ett främmande motiv',
      images: [
        {
          order: 1,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fett-frammande-motiv_1_full_300x212.jpg?alt=media&token=f85698c1-574c-4162-9a29-82bef5385c22@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fett-frammande-motiv_1_full_600x424.jpg?alt=media&token=f0b5a284-325a-4921-8852-11d66b26bc73@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fett-frammande-motiv_1_full_900x636.jpg?alt=media&token=e1e7fa49-063e-48d7-a211-3a0eec48b626@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fett-frammande-motiv_1_full_1200x849.jpg?alt=media&token=f378a98a-1de3-4a0d-a660-ea6fb8cc8ddb@1200x849',
            },
          ],
        },
      ],
    },
    {
      id: '7ebc1d0b-6739-4772-9957-cb6bcc478b8b',
      description: null,
      title: 'Max',
      images: [
        {
          order: 1,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fmax_full_300x212.jpg?alt=media&token=534436be-4f10-4a5e-9a10-451c6241f6c7@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fmax_full_600x424.jpg?alt=media&token=0967621e-0fb1-4ce7-b8f5-bb64c6ff9222@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fmax_full_900x636.jpg?alt=media&token=ccd41f0f-4410-47c8-936e-78c30bb7e4b3@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fmax_full_1200x849.jpg?alt=media&token=bb985bc5-e6e2-427a-93ba-73d3506dad42@1200x849',
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
          order: 1,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_1_full_300x212.jpg?alt=media&token=359bb7f9-e469-430c-9c3d-cea00ae99d47@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_1_full_600x424.jpg?alt=media&token=df2f22c3-09b9-4f68-921e-2d6f65e04bcd@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_1_full_900x636.jpg?alt=media&token=92a7923a-ed38-4c18-b7dd-94ff3a696ad7@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_1_full_1200x849.jpg?alt=media&token=ca082844-601e-49cd-90aa-79688b111678@1200x849',
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_2_full_300x212.jpg?alt=media&token=98a2125f-ac4d-41d7-b12c-4c2a40564556@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_2_full_600x424.jpg?alt=media&token=ac74a162-1744-40b7-a0ab-296e14fcd4e1@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_2_full_900x636.jpg?alt=media&token=8ce5bc61-ff78-47c6-9af4-344076f0223b@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_2_full_1200x849.jpg?alt=media&token=3ce29b6e-ca60-43af-afe1-e4de87eb963a@1200x849',
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_3_full_300x212.jpg?alt=media&token=a73d6d82-122a-4b27-bf45-6ce803fa04c0@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_3_full_600x424.jpg?alt=media&token=1739ab8d-0d52-4c1c-9e7a-41837fb10f92@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_3_full_900x636.jpg?alt=media&token=2b80ad05-6735-42da-bb97-01c9a39a76ab@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fhjartat-i-halsgropen_3_full_1200x849.jpg?alt=media&token=496bdf71-7ba0-4f84-ae3d-5093fe608e49@1200x849',
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
          order: 1,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fkognition_full_300x217.jpg?alt=media&token=7599fc01-d7d1-4d8c-b894-46cc92449c4d@300x217',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fkognition_full_600x435.jpg?alt=media&token=a06fa0b0-2682-4ac0-8dcc-ecaefab3a7b1@600x435',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fkognition_full_900x652.jpg?alt=media&token=65f42b65-0a65-4ddc-a60c-985508f42835@900x652',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fkognition_full_1200x869.jpg?alt=media&token=d44c4758-c6e3-4458-948e-43347fbcb68a@1200x869',
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
          order: 1,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_1_full_300x189.jpg?alt=media&token=2814e334-5c5a-4232-bfef-d1d10b5b6188@300x189',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_1_full_600x378.jpg?alt=media&token=c2b69d65-b589-4b1b-a2e7-225f51be9dfd@600x378',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_1_full_900x567.jpg?alt=media&token=9b7d080f-2062-4acf-bf46-8cf1aeb12159@900x567',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_1_full_1200x757.jpg?alt=media&token=7eac31dd-e3c7-43ce-9e77-f2bda5805dc5@1200x757',
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_2_full_300x189.jpg?alt=media&token=edccf8c9-b489-4ac8-ac1d-7aa41a6eb477@300x189',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_2_full_600x378.jpg?alt=media&token=69480036-2dfc-4ff7-9b05-6688c1b2ad84@600x378',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_2_full_900x567.jpg?alt=media&token=ab16eda5-be5a-4e69-8dfb-47384618cf7a@900x567',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fsyster_2_full_1200x757.jpg?alt=media&token=b18992d3-3124-4584-9488-1cd4c7956230@1200x757',
            },
          ],
        },
      ],
    },
    {
      id: '4ace0142-bbff-40ef-9fe2-20969b9a2b5e',
      description: null,
      title: 'Nattmara',
      images: [
        {
          order: 1,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_1_full_300x212.jpg?alt=media&token=11a7b289-be57-4a47-afdd-58fe00fe06c4@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_1_full_600x424.jpg?alt=media&token=e5418673-a028-4f79-8e95-aa1723d9d3ae@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_1_full_900x636.jpg?alt=media&token=56ab64da-0f22-4591-8ca6-7ff78ccc78c0@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_1_full_1200x849.jpg?alt=media&token=64f1fe85-ceae-4460-90fc-5ab77e85d7f1@1200x849',
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_2_full_300x212.jpg?alt=media&token=8d920efc-b314-42da-939f-fe13e6d49156@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_2_full_600x424.jpg?alt=media&token=cd654e28-ca0f-4a49-811b-bd46b6136d3d@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_2_full_900x636.jpg?alt=media&token=598f941d-305d-42d2-8e83-5fff3bebc807@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_2_full_1200x849.jpg?alt=media&token=edfef7b7-5ac1-470c-8423-d7f535a9f972@1200x849',
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_3_full_300x212.jpg?alt=media&token=bd528bfa-cbb8-45b0-a4c8-a33a4890e105@300x212',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_3_full_600x424.jpg?alt=media&token=c4cc9008-465c-4755-83dd-11c0b76ebd33@600x424',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_3_full_900x636.jpg?alt=media&token=1b78718c-0e64-4553-9f4d-60dd5e3afd20@900x636',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Fnattmara_3_full_1200x849.jpg?alt=media&token=d864554d-d5ba-4aca-b589-dd52fe54362f@1200x849',
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
          order: 1,
          caption: null,
          source: [
            {
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Faska_full_300x381.jpg?alt=media&token=9989f236-95b4-49ad-9aca-ded9e9edb084@300x381',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Faska_full_600x761.jpg?alt=media&token=dd2166fd-6e5a-469d-ad5f-75b4a8c1e3c3@600x761',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Faska_full_900x1142.jpg?alt=media&token=e3e7d564-86af-4acb-ad95-af46ae27f52e@900x1142',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/full%2Faska_full_1200x1522.jpg?alt=media&token=2e2b0d02-7336-4c37-8a20-d7f39091220a@1200x1522',
            },
          ],
        },
      ],
    },
  ];

  /*
  const fetched = data.reduce((acc: any, { images }, ind: number) => {
    const d = data;
    const h = images.map((v: any, ing: any) => {
      const newD: any = d[ind].images[ing]['sizes'];
      data[ind].images[ing]['sizes'] = [];
      return keys(images[ing]?.source[0]).reduce(
        (acct: any, v: any, i: any) => {
          d[ind].images[ing]['sizes'] = [];
          const size = { [v]: getImageSize(d[ind].images[ing].source[0]?.[v] }
          getImageSize(d[ind].images[ing].source[0]?.[v]);
          const dd = getImageSize(d[ind].images[ing].source[0]?.[v] || '');
          newD.push({ [v]: dd });
          console.log(data, newD, d);
          acct = data;
          return { ...acct, ...data };
        },
        {},
      );
    });
    console.log('h', h);
    return {
      ...acc,
      h,
    };
  }, {});
*/
  /*
    data.map(({ images, ...rest }, index: number) => {
      images.map((v: any, i: number, arr: any[]) => {
        keys(data[index]?.images[i]?.source[0]).map((k) => {
          // data[index].images[i]['sizes'][0][k] = {
          //   ...getImageSize(data[index]?.images[i]?.source[0]?.[k]),
          // };
          console.log(v);
        });
        console.log();
      });
    });
    */
  // console.log(fetched, 'hello');

  const Test = () => {
    const parent: CSSProperties = {
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%',
    };
    const child: CSSProperties = {
      minHeight: '20rem',
      height: '50vmin',
      flexGrow: 0,
    };

    const img: CSSProperties = {
      maxHeight: '100%',
      minWidth: '100%',
      objectFit: 'cover',
      verticalAlign: 'bottom',
    };

    return (
      <div className='test-parent' style={{ ...parent }}>
        <div className='test-child' style={{ ...child }}>
          <img
            style={{ ...img }}
            src='https://images.unsplash.com/photo-1610624279929-1009009110ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          />
        </div>
        <div className='test-child' style={{ ...child }}>
          <img
            style={{ ...img }}
            src='https://images.unsplash.com/photo-1610041151382-6eda2c7ea535?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80'
          />
        </div>
        <div className='test-child' style={{ ...child }}>
          <img
            style={{ ...img }}
            src='https://images.unsplash.com/photo-1609959877958-27b4093764e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=613&q=80'
          />
        </div>
      </div>
    );
  };

  const relPaths = data.map((p: ProjectDataType, i: number) => ({
    path: `/${slugify(p?.title, { lower: true })}`,
    key: document.location.href,
    name: p?.title,
    Component: Project,
    props: { content: data[i] },
  }));

  const routes = [
    {
      path: '/test',
      name: 'Test',
      Component: Test,
    },
    {
      path: '/',
      name: 'Start',
      Component: Start,
      props: { projects: data },
    },
    {
      path: '/about',
      name: 'About',
      Component: About,
    },
    {
      path: '/all',
      name: 'Projects',
      Component: Overview,
      props: {
        data,
      },
    },
    ...relPaths,
  ];

  const WithRef = ({ show, children, ...props }: any) => {
    const nodeRef = React.useRef(null);
    return (
      <CSSTransition
        in={show}
        nodeRef={nodeRef}
        timeout={500}
        classNames='page'
        unmountOnExit
        {...props}
      >
        <Container
          {...props}
          style={{ width: '100vw', height: '100%' }}
          ref={nodeRef}
        >
          {children}
        </Container>
      </CSSTransition>
    );
  };

  return (
    <ErrorBoundary>
      <Router>
        <Navigation projects={data} />
        <Suspense fallback={<Spinner />}>
          <Container classes='content'>
            {routes.map(({ path, Component, props }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <WithRef show={match != null}>
                    <Component {...(props as any)} />
                  </WithRef>
                )}
              </Route>
            ))}
            {/* <Switch>
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
          </Switch> */}
          </Container>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
};

export default Layout;
