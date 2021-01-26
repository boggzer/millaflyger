/* eslint-disable no-console */
import React, { useState, useEffect, createContext } from 'react';
import { API } from 'aws-amplify';
import { ProjectDataType, ProjectsType } from '../utils/global';

type ProjectsContextType = {
  projects?: ProjectsType;
};

type GraphqlDataType = {
  data: ProjectsType;
};

export const ProjectsContext = createContext<ProjectsContextType>({});

const ProjectsProvider = (props: any): JSX.Element => {
  const [projects, setProjects] = useState<ProjectsType>();

  useEffect(() => {
    const getProjects = async () => {
      const data: GraphqlDataType = await API.get('projectapi', '/project', '');
      setProjects({ ...data?.data });
    };
    getProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {props.children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
