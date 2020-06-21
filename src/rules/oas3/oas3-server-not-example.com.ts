import { Oas3Rule } from '../../visitors';

export const ServerNotExample: Oas3Rule = () => {
  return {
    Server(server, { report, location }) {
      if (['example.com', 'localhost'].indexOf(server.url) !== -1) {
        report({
          message: 'Server URL should not point at example.com.',
          location: location.append(['url']),
        });
      }
    },
  };
};