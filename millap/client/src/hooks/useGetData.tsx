import React, { SetStateAction } from 'react';
import client from '../client';
import { ProjectType } from '../types';

const getData = (
  setData: React.Dispatch<SetStateAction<ProjectType[]>>,
  setLoading: React.Dispatch<SetStateAction<boolean>>,
) => {
  const query = `*[_type == 'project']{
    ...,
    images[]{
      ...,
      imageRow[]{
        alt,
        "file": file.asset->{
          url,
          metadata {
            dimensions
          }
        }
      }
    }
  }`;
  client
    .fetch(query)
    .then((data) => {
      setData(Array.isArray(data) ? data : []);
    })
    .catch(
      (error) =>
        // eslint-disable-next-line no-console
        process.env.NODE_ENV !== 'production' && console.warn({ error }),
    )
    .finally(() => {
      setLoading(false);
    });
};

const useGetData = (): { data: ProjectType[]; loading: boolean } => {
  const [data, setData] = React.useState<ProjectType[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getData(setData, setLoading);
  }, []);

  return { data, loading };
};

export default useGetData;
