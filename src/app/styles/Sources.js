import headingStyles from './HighlightStyle';
import * as colors from './Colors';

export default {
  atomWrapper: {
    position: 'relative',
    clear: 'both'
  },

  wrapper: {
    padding: '30px'
  },

  heading: {
    ...headingStyles
  },

  panel: {
    paddingTop: '50px',
    marginBottom: '50px',
    borderTop: `1px solid ${colors.GRAY_DARKER}`,
    position: 'relative',
    clear: 'both',
    display: 'table',
    width: '100%',
    first: {
      paddingTop: 0,
      borderTop: 0,
      marginBottom: 0
    },
    source: {
      paddingBottom: '80px'
    }
  },

  pre: {
    width: '100%',
    display: 'table',
    tableLayout: 'fixed',
    position: 'relative'
  },

  clear: {
    display: 'block',
    after: {
      clear: 'both'
    }
  }
};
