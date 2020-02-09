import { CaretDown } from 'grommet-icons';

const powerTheme = {
  global: {
    colors: {
      brand: '#2196f3'
    },
    elevation: {
      light: {
        xsmall: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        small: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        medium: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
        large: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        xlarge: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
      }
    },
    font: {
      family: "'Roboto', Arial, sans-serif",
      size: '14px'
    },
    input: {
      weight: 500
    }
  },
  button: {
    border: {
      radius: '7px',
      color: '#2196f3'
    },
    color: { dark: 'accent-1', light: 'dark-2' },
    primary: {
      color: 'black'
    },
    padding: {
      vertical: '12px',
      horizontal: '24px'
    },
    extend: props => {
      let extraStyles = '';
      if (props.primary) {
        extraStyles = `
            text-transform: uppercase;
          `;
      }
      return `
          color: white;
          font-size: 12px;
          font-weight: bold;
  
          ${extraStyles}
        `;
    }
  },
  formField: {
    border: {
      position: 'outer',
      side: 'all'
    },
    label: {
      weight: 600,
      size: 'small',
      color: 'dark-4'
    }
  },
  heading: {
    font: {
      family: "'Roboto', Arial, sans-serif"
    }
  },
  select: {
    icons: {
      down: CaretDown,
      color: 'dark-5'
    }
  }
};

export default powerTheme;
