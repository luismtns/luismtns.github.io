import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import "./index.scss";
import ProjectContainer from "@containers/project/index";

const ProjectView = (props) => {
  const { projectSlug } = useParams();
  return <ProjectContainer slug={projectSlug} />;
};

ProjectView.propTypes = {};

ProjectView.defaultProps = {};

export default ProjectView;
