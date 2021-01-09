/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from 'react';
import { API } from 'aws-amplify';
import { ProjectDataType } from '../utils/types';

type ProjectsContextType = {
  projects?: ProjectDataType[];
};

type GraphqlDataType = {
  data: ProjectDataType[];
};

export const ProjectsContext = createContext<ProjectsContextType>({});

const ProjectsProvider = (props: any): JSX.Element => {
  const [projects, setProjects] = useState<ProjectDataType[]>();
  /*
  useEffect(() => {
    const getProjects = async () => {
      const data: GraphqlDataType = await API.get('projectapi', '/project', '');
      setProjects(data?.data);
    };
    getProjects();
  }, []);
  console.log(projects);*/
  return (
    <ProjectsContext.Provider value={{ projects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
