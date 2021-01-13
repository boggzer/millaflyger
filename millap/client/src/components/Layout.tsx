import React, { useContext, useMemo } from 'react';
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
import Project from './presentational/Project';
import Navigation from './presentational/Navigation';
import Overview from './pages/portfolio/Overview';
import ErrorBoundary from '../utils/ErrorBoundary';
import Container from './presentational/Container';
import '../index.scss';
import Glitch from './effects/Glitch';
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
          order: 2,
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_xs.jpg?alt=media&token=ab01fd23-89a1-4e36-8a3f-95555328f5a8',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_s.jpg?alt=media&token=4b5d16dc-eaab-40d7-8058-64d92d60ec96',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_m.jpg?alt=media&token=85f581fa-717c-4307-a407-10a6a50254d3',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_1_l.jpg?alt=media&token=19555e81-7e6b-4e8f-b2fa-c814a9042001',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_2_xs.jpg?alt=media&token=ac867c5f-23ab-4b37-ba87-8dddeff34b68',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_2_s.jpg?alt=media&token=1df359f9-ccc0-41f6-87ff-9e082f376a8c',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_2_m.jpg?alt=media&token=450800b8-3618-47e1-86ba-750872ce693a',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_3_xs.jpg?alt=media&token=125372a1-a2d0-4c8c-b146-1b48ba470086',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_3_s.jpg?alt=media&token=83269c22-b44e-4faf-b76c-56ac21302e68',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_3_m.jpg?alt=media&token=74167b99-2c91-44f9-9c84-30cd0f752ae7',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_xs.jpg?alt=media&token=4d406b9a-d673-42fd-8750-4aca5c14db30',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_s.jpg?alt=media&token=cbe49211-bc2c-4c01-b16f-04e946775412',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_m.jpg?alt=media&token=1a816149-98ed-4c8c-b30f-ae46cdc16120',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/max_4_l.jpg?alt=media&token=0905411d-6474-44b5-9d1a-93d217492579',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_1_1_m.jpg?alt=media&token=968c33cd-42f5-485f-97b1-2922205ad885',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_1_2_m.jpg?alt=media&token=3e853474-e5f8-4759-b113-315484014f91',
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
          order: 3,
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
        {
          order: 3,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_xs.jpg?alt=media&token=fb3a6a99-2703-4810-8235-ca8552da97c4',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_s.jpg?alt=media&token=55b88de5-a5eb-4a42-adf0-ee6bd2d3b280',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_m.jpg?alt=media&token=6f6786a3-4f67-4758-8ef7-9b8e0ee86b62',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/hjartat-i-halsgropen_3_2_l.jpg?alt=media&token=ac217220-90e0-4157-ba80-6ea8f8ae8817',
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
          order: 2,
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
          order: 1,
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
          order: 2,
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
          order: 3,
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
          order: 4,
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
        {
          order: 5,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_xs.jpg?alt=media&token=a12ecdbd-beed-4f56-95f1-83bd9d871b74',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_s.jpg?alt=media&token=6049aea5-80ab-45ac-888e-cbe287ad4a22',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_m.jpg?alt=media&token=d27484f0-0496-4bef-a603-44892865187d',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_5_l.jpg?alt=media&token=4689e7f5-9cf2-489b-b60b-77f4e2a34342',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_xs.jpg?alt=media&token=1a65ac97-f1a2-45b0-b752-a2c1c31de31e',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_s.jpg?alt=media&token=b33b40c5-2f35-4d2e-89b9-28da106d29dc',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_m.jpg?alt=media&token=e43aaf62-7fcd-4573-9fdd-808d94a00c6f',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_6_l.jpg?alt=media&token=899c2912-b26a-4a06-9fee-01d4fbb81265',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_xs.jpg?alt=media&token=57cc6bf0-b9b0-4c5c-b827-e75b8a768813',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_s.jpg?alt=media&token=5d9d0a20-e73e-4a5b-9c8c-03581bb59ba4',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_m.jpg?alt=media&token=ccccd30f-4e8b-457a-a571-6252be433fbb',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_7_l.jpg?alt=media&token=b392eeea-1634-4fdf-927d-7d81cfa23510',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_xs.jpg?alt=media&token=952c7aa4-8721-461c-b457-b3749b7d878e',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_s.jpg?alt=media&token=e32ff504-940b-48f1-bcca-0e57a3bc7064',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_m.jpg?alt=media&token=575f4ad5-3464-4439-9041-fa6cf008e22f',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/syster_8_l.jpg?alt=media&token=e96cd173-1ea8-4cd1-9fa5-03c9f87ac69f',
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
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_xs.jpg?alt=media&token=ce26090c-2224-44bf-8672-7a468bba366e',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_s.jpg?alt=media&token=595de949-58b4-449d-9f78-46239bcb0763',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_m.jpg?alt=media&token=2b98c8a5-62e8-4094-8a4f-180c575a3a9f',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_l.jpg?alt=media&token=0a0244a9-9187-427a-878d-0364edfdd4a4',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_1_xl.jpg?alt=media&token=ed3a4538-f7e2-4218-be6d-283c2d9c5ec4',
            },
          ],
        },
        {
          order: 2,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_xs.jpg?alt=media&token=372b7721-c85a-41f3-afc0-ceb58d662475',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_s.jpg?alt=media&token=79dac824-3d3a-4e6a-93a2-f0e95f999c0f',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_m.jpg?alt=media&token=92593674-7564-43a7-9234-cbb7ed74266a',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_l.jpg?alt=media&token=99561c11-a84f-4eed-b37c-ffd8df5eba37',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_2_xl.jpg?alt=media&token=87df7d4b-0e76-4256-b2f9-387f8b895a75',
            },
          ],
        },
        {
          order: 3,
          caption: null,
          source: [
            {
              XS:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_xs.jpg?alt=media&token=6371e396-0768-4d90-90c6-f8e0c16a2c59',
              S:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_s.jpg?alt=media&token=b1b16cf4-fc30-44e6-8f1b-fe169c169833',
              M:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_m.jpg?alt=media&token=176e3136-6fdf-4c27-80da-604f265c58a7',
              L:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_l.jpg?alt=media&token=42b60db3-24eb-4d1d-89fb-d9f6f0c8746b',
              XL:
                'https://firebasestorage.googleapis.com/v0/b/milla-portfolio.appspot.com/o/nattmara_3_xl.jpg?alt=media&token=3e9e83e9-31b1-4f10-b34e-7c64718d8483',
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
  ];

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
    // ...relPaths,
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
        <Container style={{ width: '100%', height: '100%' }} ref={nodeRef}>
          {children}
        </Container>
      </CSSTransition>
    );
  };

  return (
    <ErrorBoundary>
      <Router>
        <Navigation projects={data} />
        <Container>
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
      </Router>
    </ErrorBoundary>
  );
};

export default Layout;
