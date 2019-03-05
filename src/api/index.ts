import ProjectService from './project-service';

// Give arg to provider to start endpoint with specific path for example = abc.com/api/person
export const projectService = new ProjectService('project');
