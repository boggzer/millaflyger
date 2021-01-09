import React from 'react';
import { ProjectDataType } from '../../../utils/types';
import Grid from '../../presentational/Grid';

interface ProjectProps {
  content: ProjectDataType;
}

const Overview = ({ content }: ProjectProps) => {
  return <Grid {...content} />;
};
