# Milla Flyger
A web portfolio for a Gothenburg based photographer and a dear friend, Milla Flyger. The website is available at <https://www.millaflyger.com/>.
Made with a complete AWS Amplify backend.

#### Frontend features
- React and CRA bootstrap
- Smooth responsive layout
- Dynamic and interactive elements
- SEO-friendly images
- Lightbox
- Custom graphics
- SCSS stylesheets
- Type checking with Typescript

#### Backend features
- CI workflow and hosting with Amplify (AWS)
- Database with DynamoDB (AWS)
- REST API with AppSync and API Gateway using Lambda (AWS)
- SSL and domain with Route 53 (AWS)
- Firebase Storage for images

### How to run
1. Fork/download project
2. Open in your favorite IDE
3. Run `npm run dev` and the project will open in your browser
4. (Optional) If using your own image data, make sure it follows the [type definition](#projectmodel)
5. (Optional) If integrating your own AWS Amplify backend, make sure to check out the [docs](https://docs.amplify.aws/cli/teams/shared#sharing-projects-within-the-team)
6. (Optional) If integrating your own API, put your API call in `projectsContext.tsx`. Make sure the return object follows the [ProjectDataType](#api), or else the project may fail to run

## API
/GET returns an array of all projects in ProjectModelTable in the database (type equals to `ProjectDataType[]` in frontend).

#### ProjectModel
| **key**       | **required** | **type**       | **description**                                                |
| ------------- | ------------ | -------------- | -------------------------------------------------------------- |
| `title`       | optional     | string         | Title of the project/image collection                          |
| `description` | optional     | string         | Description of the project/image collection                    |
| `images`      | required     | `[ImageModel]` | Array of images which equals to `ProjectImageType` in frontend |

#### ImageModel
| **key**       | **required** | **type**         | **description**                                                |
| ------------- | ------------ | ---------------- | -------------------------------------------------------------- |
| `alt`         | required     | string           | Used for the `alt` attribute                                   |
| `caption`     | optional     | string           | Text to display beneath the image                              |
| `order`       | optional     | number           | Order in the image collection                                  |
| `source`      | required     | `[SourceType][]` | Array of image in different sizes, used for `srcset` attribute |

#### SourceType
Specified dimensions at end of each link with `@{width}x{height}` e.g. example.com/xyz@300x500 (for grid calculation and performance enhancement)
| **key**       | **required** | **type**       | **description**                                                |
| ------------- | ------------ | -------------- | -------------------------------------------------------------- |
| `XS`          | optional     | string         | Width = 150px                                                  |
| `S`           | optional     | string         | Width = 300px                                                  |
| `M`           | optional     | string         | Width = 600px                                                  |
| `L`           | optional     | string         | Width = 900px                                                  |
| `XL`          | optional     | string         | Width = 1200px                                                 |
