import React, { useContext, useMemo, lazy, Suspense } from 'react';
import slugify from 'slugify';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import Start from './pages/Start';
import About from './pages/About';
import ImageGrid from './presentational/ImageGrid';
/// <reference path="../utils/global.d.ts" />
/// <reference path="../utils/declarations.d.ts" />
import { ProjectsContext } from '../contexts/projectsContext';
import { ProjectDataType } from '../utils/global';
const Project = lazy(() => import('./presentational/Project'));
import Navigation from './presentational/Navigation';
const Overview = lazy(() => import('./pages/portfolio/Overview'));
import ErrorBoundary from '../utils/ErrorBoundary';
import Container from './presentational/Container';
import '../index.scss';
import { keys, map } from 'lodash';
import Spinner from './presentational/Spinner';
import { CSSTransition } from 'react-transition-group';

const Layout = (): React.ReactElement => {
  // const { projects } = useContext(ProjectsContext);

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
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_xs.jpg?alt=media&token=10306413-1a82-4cff-bf7c-9b96128dc31b@150x214',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_s.jpg?alt=media&token=51c0312a-46c0-4dbd-8fda-87ab7f5af15d@300x429',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_m.jpg?alt=media&token=595db5b5-bf14-40ce-b10a-94793e1be371@640x915',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_l.jpg?alt=media&token=df59bed2-0fdd-4685-8d0d-be9a166af6b2@1200x1716',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_1_xl.jpg?alt=media&token=6e9af9d4-203f-43a1-9e31-e29eacc585c4@2000x2860',
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_xs.jpg?alt=media&token=20fb3dac-bbac-4534-9ec9-7e90e8e0077d@150x214',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_s.jpg?alt=media&token=9343bb6e-5d37-44b3-89f0-9c12dba65e98@300x428',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_m.jpg?alt=media&token=3355d3bd-c99b-42aa-9af8-46fcecf3be7c@640x914',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_l.jpg?alt=media&token=990ec6fc-b101-48f0-928f-dfd387e45a310@1200x1713',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/frammande-motiv_2_xl.jpg?alt=media&token=f54e862e-ad05-47fa-8347-1a5a94acc32f@2000x2855',
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
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_xs.jpg?alt=media&token=ab01fd23-89a1-4e36-8a3f-95555328f5a8@150x200',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_s.jpg?alt=media&token=4b5d16dc-eaab-40d7-8058-64d92d60ec96@300x400',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_m.jpg?alt=media&token=85f581fa-717c-4307-a407-10a6a50254d3@640x853',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_l.jpg?alt=media&token=19555e81-7e6b-4e8f-b2fa-c814a9042001@1200x1600',
              XL: null,
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_2_xs.jpg?alt=media&token=ac867c5f-23ab-4b37-ba87-8dddeff34b68@150x230',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_2_s.jpg?alt=media&token=1df359f9-ccc0-41f6-87ff-9e082f376a8c@300x460',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_2_m.jpg?alt=media&token=450800b8-3618-47e1-86ba-750872ce693a@640x981',
              L: null,
              XL: null,
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_3_xs.jpg?alt=media&token=125372a1-a2d0-4c8c-b146-1b48ba470086@150x230',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_3_s.jpg?alt=media&token=83269c22-b44e-4faf-b76c-56ac21302e68@300x460',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_3_m.jpg?alt=media&token=74167b99-2c91-44f9-9c84-30cd0f752ae7@640x981',
              L: null,
              XL: null,
            },
          ],
        },
        {
          order: 4,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_xs.jpg?alt=media&token=4d406b9a-d673-42fd-8750-4aca5c14db30@150x212',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_s.jpg?alt=media&token=cbe49211-bc2c-4c01-b16f-04e946775412@300x423',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_m.jpg?alt=media&token=1a816149-98ed-4c8c-b30f-ae46cdc16120@640x903',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_l.jpg?alt=media&token=0905411d-6474-44b5-9d1a-93d217492579@1200x1694',
              XL: null,
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
              XS: null,
              S: null,
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_1_1_m.jpg?alt=media&token=968c33cd-42f5-485f-97b1-2922205ad885@640x860',
              L: null,
              XL: null,
            },
          ],
        },
        {
          order: 1,
          caption: null,
          source: [
            {
              XS: null,
              S: null,
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_1_2_m.jpg?alt=media&token=3e853474-e5f8-4759-b113-315484014f91@640x864',
              L: null,
              XL: null,
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_xs.jpg?alt=media&token=d115e1f6-6e28-4b9c-a21e-dfb2a04e827a@150x123',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_s.jpg?alt=media&token=7721bc04-44f9-4061-b8e9-0485221a31a3@300x246',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_m.jpg?alt=media&token=4909a53a-c0b1-4187-9c41-fb67833a48e5@640x524',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_2_l.jpg?alt=media&token=f4944073-48e0-4aa2-aab9-d40db7f0c504@1200x982',
              XL: null,
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_xs.jpg?alt=media&token=5abf325a-6813-4c1e-8426-da34963fbd08@150x202',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_s.jpg?alt=media&token=c875d67f-3ef1-425c-82f3-964e51004f4e@300x403',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_m.jpg?alt=media&token=d19d71de-d483-4229-954e-9a67491ba154@640x860',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_1_l.jpg?alt=media&token=efa12395-14d0-4d32-b001-ff2ec843675b@1200x1613',
              XL: null,
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_xs.jpg?alt=media&token=fb3a6a99-2703-4810-8235-ca8552da97c4@150x203',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_s.jpg?alt=media&token=55b88de5-a5eb-4a42-adf0-ee6bd2d3b280@300x405',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_m.jpg?alt=media&token=6f6786a3-4f67-4758-8ef7-9b8e0ee86b62@640x864',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_l.jpg?alt=media&token=ac217220-90e0-4157-ba80-6ea8f8ae8817@1200x1620',
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
          order: 1,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_xs.jpg?alt=media&token=7249f74f-3735-4b47-9ebc-344ea20d8d9e@150x238',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_s.jpg?alt=media&token=25a0325c-34cf-4e8a-a720-12207c6b8e0f@300x477',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_m.jpg?alt=media&token=5f75e903-7713-4821-844c-a5f1ddf98cb5@640x1017',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_1_l.jpg?alt=media&token=7a017a85-7c25-4e5a-9092-e58e1f23ea2d@1200x1907',
              XL: null,
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_xs.jpg?alt=media&token=e4e16885-9c10-4045-b756-aa074b5b3a99@150x238',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_s.jpg?alt=media&token=e41f9218-9312-464c-995b-863ef535c4f7@300x477',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_m.jpg?alt=media&token=9031712b-52e4-464b-bf33-b953d50b2b10@640x1017',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_l.jpg?alt=media&token=1bbc1097-0ce6-4229-8589-99efbe5b8181@1200x1907',
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
          order: 1,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_xs.jpg?alt=media&token=b9ca4801-5281-4d05-9c95-48b15d390a5a@150x206',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_s.jpg?alt=media&token=f2966d89-a39c-4a90-9d9a-ba9ed372edc3@300x412',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_m.jpg?alt=media&token=ac4534e2-774b-4414-a887-e342befa1716@640x880',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_1_l.jpg?alt=media&token=8d5c68e2-2db0-4e67-8eaa-ba144a9895cc@1200x1650',
              XL: null,
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_xs.jpg?alt=media&token=6cb9203b-10ed-487f-a3d8-49b45c6563a0@150x208',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_s.jpg?alt=media&token=c0b4cc62-9c41-4b79-bdc7-6e3daefa8cd3@300x415',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_m.jpg?alt=media&token=b2932260-356e-4a30-a730-72cdf7b3c867@640x885',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_2_l.jpg?alt=media&token=fdb41aa5-7aa9-40fe-b39c-b2ae7561a7c9@1200x1660',
              XL: null,
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_xs.jpg?alt=media&token=f3025bda-70b7-4008-8ce1-99d34f8670b1@150x207',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_s.jpg?alt=media&token=c1454b07-466a-4e04-9aff-fbc7845d4cf3@300x415',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_m.jpg?alt=media&token=f9e2a198-0b9d-4230-9ff0-5184ec6a4812@640x885',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_3_l.jpg?alt=media&token=81d1af6b-906f-4a60-8ceb-5847608b3add@1200x1659',
              XL: null,
            },
          ],
        },
        {
          order: 4,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_xs.jpg?alt=media&token=b46105fd-c9b3-4843-92f3-384ac54af642@150x207',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_s.jpg?alt=media&token=cf9b77b8-dd2b-4c57-ab01-c4e5d336b5d1@300x413',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_m.jpg?alt=media&token=3c4053e3-d314-40e5-8a98-024b874dd234@640x882',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_4_l.jpg?alt=media&token=7b4123cc-642f-4c62-87da-8753451effde@1200x1653',
              XL: null,
            },
          ],
        },
        {
          order: 5,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_xs.jpg?alt=media&token=a12ecdbd-beed-4f56-95f1-83bd9d871b74@150x191',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_s.jpg?alt=media&token=6049aea5-80ab-45ac-888e-cbe287ad4a22@300x383',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_m.jpg?alt=media&token=d27484f0-0496-4bef-a603-44892865187d@640x817',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_l.jpg?alt=media&token=4689e7f5-9cf2-489b-b60b-77f4e2a34342@1200x1531',
              XL: null,
            },
          ],
        },
        {
          order: 6,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_xs.jpg?alt=media&token=1a65ac97-f1a2-45b0-b752-a2c1c31de31e@150x192',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_s.jpg?alt=media&token=b33b40c5-2f35-4d2e-89b9-28da106d29dc@300x383',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_m.jpg?alt=media&token=e43aaf62-7fcd-4573-9fdd-808d94a00c6f@640x817',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_l.jpg?alt=media&token=899c2912-b26a-4a06-9fee-01d4fbb81265@1200x1532',
              XL: null,
            },
          ],
        },
        {
          order: 7,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_xs.jpg?alt=media&token=57cc6bf0-b9b0-4c5c-b827-e75b8a768813@150x192',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_s.jpg?alt=media&token=5d9d0a20-e73e-4a5b-9c8c-03581bb59ba4@300x383',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_m.jpg?alt=media&token=ccccd30f-4e8b-457a-a571-6252be433fbb@640x817',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_l.jpg?alt=media&token=b392eeea-1634-4fdf-927d-7d81cfa23510@1200x1531',
              XL: null,
            },
          ],
        },
        {
          order: 8,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_xs.jpg?alt=media&token=952c7aa4-8721-461c-b457-b3749b7d878e@150x192',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_s.jpg?alt=media&token=e32ff504-940b-48f1-bcca-0e57a3bc7064@300x383',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_m.jpg?alt=media&token=575f4ad5-3464-4439-9041-fa6cf008e22f@640x817',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_l.jpg?alt=media&token=e96cd173-1ea8-4cd1-9fa5-03c9f87ac69f1200x1531',
              XL: null,
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
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_xs.jpg?alt=media&token=ce26090c-2224-44bf-8672-7a468bba366e@150x100',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_s.jpg?alt=media&token=595de949-58b4-449d-9f78-46239bcb0763@300x200',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_m.jpg?alt=media&token=2b98c8a5-62e8-4094-8a4f-180c575a3a9f@640x426',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_l.jpg?alt=media&token=0a0244a9-9187-427a-878d-0364edfdd4a4@1200x798',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_xl.jpg?alt=media&token=ed3a4538-f7e2-4218-be6d-283c2d9c5ec4@2000x1330',
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_xs.jpg?alt=media&token=372b7721-c85a-41f3-afc0-ceb58d662475@150x100',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_s.jpg?alt=media&token=79dac824-3d3a-4e6a-93a2-f0e95f999c0f@300x199',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_m.jpg?alt=media&token=92593674-7564-43a7-9234-cbb7ed74266a@640x425',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_l.jpg?alt=media&token=99561c11-a84f-4eed-b37c-ffd8df5eba37@1200x797',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_xl.jpg?alt=media&token=87df7d4b-0e76-4256-b2f9-387f8b895a75@2000x1329',
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_xs.jpg?alt=media&token=6371e396-0768-4d90-90c6-f8e0c16a2c59@150x100',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_s.jpg?alt=media&token=b1b16cf4-fc30-44e6-8f1b-fe169c169833@300x200',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_m.jpg?alt=media&token=176e3136-6fdf-4c27-80da-604f265c58a7@640x426',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_l.jpg?alt=media&token=42b60db3-24eb-4d1d-89fb-d9f6f0c8746b@1200x798',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_xl.jpg?alt=media&token=3e9e83e9-31b1-4f10-b34e-7c64718d8483@2000x1330',
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
          order: null,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_xs.jpg?alt=media&token=7230c624-3332-4101-b21e-02fb7e9836d5@150x190',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_s.jpg?alt=media&token=1c25ace1-5f2d-4e65-a1b2-0a35d7f054b3@300x381',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_m.jpg?alt=media&token=bfe6b687-3b0e-4923-b9de-bbc3a62bc257@640x812',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_l.jpg?alt=media&token=76a2fadc-142c-4c3e-9ac0-7068cb07011a@1200x1522',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/aska_1_xl.jpg?alt=media&token=1b0104c5-48b3-413e-ac7b-da787d3e991f@2000x2537',
            },
          ],
        },
      ],
    },
  ];

  const getImageSize = (src: string) => {
    const dimensions = src.split('@').pop()?.split('x');
    return (
      dimensions && {
        width: parseInt(dimensions[0]),
        height: parseInt(dimensions[1]),
      }
    );
  };
  const str = getImageSize(
    'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/kognition_2_m.jpg?alt=media&token=9031712b-52e4-464b-bf33-b953d50b2b10@640x1017',
  );
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
  const relPaths = data.map((p: ProjectDataType, i: number) => ({
    path: `/${slugify(p?.title, { lower: true })}`,
    key: document.location.href,
    name: p?.title,
    Component: Project,
    props: { content: data[i] },
  }));

  const routes = [
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
          style={{ width: '100%', height: '100%' }}
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
